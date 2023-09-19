import Database from "./database";
import { Router } from "simple-worker-router";
import Index from "./templates/index";
import AddList from "./templates/add_list";
import Board from "./templates/board";
import EditCard from "./templates/edit_card";
import Card from "./templates/card";
import NewList from "./templates/new_list";
import ToggleAddCard from "./templates/toggle_add_card";
import { HTMLResponse } from "./util";
import { HandlerArgs } from "./types";

import {
  addList,
  newCard,
  putCard,
  deleteCard,
  editCard,
  cancelCard,
  cancelEdit,
  getLists,
  deleteList,
  move,
  resetData,
} from "./handlers";

export type {};
declare const self: ServiceWorkerGlobalScope;

const cacheName = "cacheName";
const version = "0";

self.addEventListener("install", (event) => {});

self.addEventListener("activate", (event) => {});

let DB: Database | undefined;

self.addEventListener("fetch", (event) => {
  const allowedSources = [
    "https://unpkg.com/hyperscript.org",
    "https://unpkg.com/htmx.org",
    "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js",
  ];

  if (allowedSources.includes(event.request.url)) {
    return fetch(event.request);
  }

  return event.respondWith(
    (async () => {
      if (!DB) DB = new Database("trelloClone", DB);

      const request = event.request;
      const env = {
        TrelloLists: DB,
      };
      const ctx = this as unknown as ExecutionContext;

      // await resetData({ env } as any);
      // Populate the service worker db.
      let dbCheck;
      try {
        dbCheck = JSON.parse(await env.TrelloLists!.get("lists"));
      } catch {}
      if (!dbCheck) {
        const lists = await fetch("/db/lists").then((res) => res.json());
        await env.TrelloLists!.put("lists", JSON.stringify(lists));
      }

      const router = new Router([
        ["/", async (args) => Index(await getLists(args as HandlerArgs))],
        [
          "/lists",
          async (args) =>
            HTMLResponse(Board(await addList(args as HandlerArgs))),
          "POST",
        ],
        ["/lists/add", AddList],
        ["/lists/cancel", () => HTMLResponse(NewList)],
        [
          "/lists/:list_id",
          async (args) => {
            return HTMLResponse(Board(await deleteList(args as HandlerArgs)));
          },
          "DELETE",
        ],
        [
          "/cards/move",
          async (args) => HTMLResponse(Board(await move(args as HandlerArgs))),
          "POST",
        ],
        [
          "/cards/new/:list_id",
          async (args) =>
            HTMLResponse(Board(await newCard(args as HandlerArgs))),
          "POST",
        ],
        [
          "/cards/cancel/:id",
          async (args) =>
            HTMLResponse(ToggleAddCard(await cancelCard(args as HandlerArgs))),
        ],
        [
          "/cards/edit/:list_id/:id",
          async (args) =>
            HTMLResponse(EditCard(await editCard(args as HandlerArgs))),
        ],
        [
          "/cards/:list_id/:id",
          async (args) =>
            HTMLResponse(Card(await putCard(args as HandlerArgs))),
          "PUT",
        ],
        [
          "/cards/:list_id/:id",
          async (args) => {
            await deleteCard(args as HandlerArgs);
            return HTMLResponse("");
          },
          "DELETE",
        ],
        [
          "/cards/cancel-edit/:list_id/:id",
          async (args) =>
            HTMLResponse(Card(await cancelEdit(args as HandlerArgs))),
        ],
        [
          "/db/:key",
          async (args: any) => {
            const key = args.route.pathname.groups.key;
            const data = await fetch("/db/" + key).then((res) => res.json());
            await env.TrelloLists!.put(key, JSON.stringify(data));
            if (key === "lists") {
              return HTMLResponse(Board({ lists: data }));
            }
          },
        ],
        [
          "/db/:key",
          async (args: any) => {
            const key = args.route.pathname.groups.key;
            const data = await env.TrelloLists!.get(key);
            await fetch("/db/" + key, {
              headers: { "content-type": "application/json" },
              body: data,
              method: "POST",
            });
            return HTMLResponse("");
          },
          "POST",
        ],
      ]);
      return router.handle({ request, env, ctx }) as Response;
    })(),
  );
});
