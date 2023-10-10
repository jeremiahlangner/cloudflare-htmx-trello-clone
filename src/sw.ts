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
} from "./handlers";

export type {};
declare const self: ServiceWorkerGlobalScope;

self.addEventListener("install", (event) => {});

self.addEventListener("activate", (event) => {});

let DB: Database | undefined;

self.addEventListener("fetch", (event) => {
  // add whitelist for caching purposes
  const whiteList = [
    "https://unpkg.com/hyperscript.org",
    "https://unpkg.com/htmx.org",
    "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js",
  ];

  if (whiteList.includes(event.request.url)) {
    return fetch(event.request);
  }

  return event.respondWith(
    (async () => {
      if (!DB) DB = new Database("trelloClone", DB);

      const request = event.request;
      const env = { TrelloLists: DB };
      const ctx = this as unknown as ExecutionContext;

      let dbCheck;
      try {
        dbCheck = JSON.parse(await env.TrelloLists!.get("lists"));
      } catch {}
      if (!dbCheck) {
        const lists = await fetch("/db/lists").then((res) => res.json());
        await env.TrelloLists!.put("lists", JSON.stringify(lists));
      }

      console.log(event.request);

      const router = new Router([
        ["/", async (args) => Index(await getLists(args))],
        [
          "/lists",
          async (args) => HTMLResponse(Board(await addList(args))),
          "POST",
        ],
        ["/lists/add", AddList],
        ["/lists/cancel", () => HTMLResponse(NewList)],
        [
          "/lists/:list_id",
          async (args) => {
            return HTMLResponse(Board(await deleteList(args)));
          },
          "DELETE",
        ],
        [
          "/cards/move",
          async (args) => HTMLResponse(Board(await move(args))),
          "POST",
        ],
        [
          "/cards/new/:list_id",
          async (args) => HTMLResponse(Board(await newCard(args))),
          "POST",
        ],
        [
          "/cards/cancel/:id",
          async (args) => HTMLResponse(ToggleAddCard(await cancelCard(args))),
        ],
        [
          "/cards/edit/:list_id/:id",
          async (args) => HTMLResponse(EditCard(await editCard(args))),
        ],
        [
          "/cards/:list_id/:id",
          async (args) => HTMLResponse(Card(await putCard(args))),
          "PUT",
        ],
        [
          "/cards/:list_id/:id",
          async (args) => {
            await deleteCard(args);
            return HTMLResponse("");
          },
          "DELETE",
        ],
        [
          "/cards/cancel-edit/:list_id/:id",
          async (args) => HTMLResponse(Card(await cancelEdit(args))),
        ],
        [
          "/db/:key",
          async (args) => {
            const key = args.route.pathname.groups.key;
            const data = await fetch(`/db/${key}`).then((res) => res.json());
            await env.TrelloLists!.put(key, JSON.stringify(data));
            if (key === "lists") {
              return HTMLResponse(Board({ lists: data }));
            }
          },
        ],
        [
          "/db/:key",
          async (args) => {
            const key = args.route.pathname.groups.key;
            const data = await env.TrelloLists!.get(key);
            await fetch(`/db/${key}`, {
              headers: { "content-type": "application/json" },
              body: data,
              method: "POST",
            });
            return HTMLResponse("");
          },
          "POST",
        ],
      ]);
      return router.handle({ request, env, ctx });
    })(),
  );
});
