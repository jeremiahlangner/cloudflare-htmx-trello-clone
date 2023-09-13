import { Router } from "simple-worker-router";
import Index from "./templates/index";
import AddList from "./templates/add_list";
import Board from "./templates/board";
import NewCard from "./templates/new_card";
import AddCard from "./templates/add_card";
import EditCard from "./templates/edit_card";
import Card from "./templates/card";
import NewList from "./templates/new_list";
import ToggleAddCard from "./templates/toggle_add_card";
import { HTMLResponse } from "./util";
import { Environment, HandlerArgs } from "./types";
import {
  addList,
  newCard,
  putCard,
  deleteCard,
  editCard,
  addCard,
  cancelCard,
  cancelEdit,
  getLists,
  move,
  resetData,
} from "./handlers";

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", async (args) => Index(await getLists(args as HandlerArgs))],
      [
        "/lists",
        async (args) => HTMLResponse(Board(await addList(args as HandlerArgs))),
        "POST",
      ],
      ["/lists/add", AddList],
      ["/lists/cancel", () => HTMLResponse(NewList)],
      [
        "/cards/move",
        async (args) => HTMLResponse(Board(await move(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/new/:list_id",
        async (args) =>
          HTMLResponse(NewCard(await newCard(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/cancel/:id",
        async (args) =>
          HTMLResponse(ToggleAddCard(await cancelCard(args as HandlerArgs))),
      ],
      [
        "/cards/add/:id",
        async (args) =>
          HTMLResponse(AddCard(await addCard(args as HandlerArgs))),
      ],
      [
        "/cards/edit/:list_id/:id",
        async (args) =>
          HTMLResponse(EditCard(await editCard(args as HandlerArgs))),
      ],
      [
        "/cards/:list_id/:id",
        async (args) => HTMLResponse(Card(await putCard(args as HandlerArgs))),
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
    ]);
    return router.handle({ request, env, ctx });
  },
  async scheduled(event: any, env: Environment, ctx: ExecutionContext) {
    return resetData({ event, env, ctx });
  },
};
