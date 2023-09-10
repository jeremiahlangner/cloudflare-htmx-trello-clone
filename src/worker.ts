import { Router, Handler } from "simple-worker-router";
import Index from "./views/index";
import AddList from "./views/add_list";
import Board from "./views/board";
import NewCard from "./views/new_card";
import AddCard from "./views/add_card";
import EditCard from "./views/edit_card";
import Card from "./views/card";
import NewList from "./views/new_list";
import ToggleAddCard from "./views/toggle_add_card";
import { HTMLResponse } from "./util";

interface Environment {}

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", Index],
      ["/lists", (params) => HTMLResponse(Board(params)), "POST"],
      ["/cards/move", (params) => HTMLResponse(Board(params)), "POST"], // TODO: finish move response
      ["/cards/new/:list_id", NewCard, "POST"],
      ["/cards/cancel/:id", (params) => HTMLResponse(ToggleAddCard(params))],
      ["/lists/add", AddList],
      ["/lists/cancel", () => HTMLResponse(NewList)],
      ["/cards/add/:id", AddCard],
      ["/cards/edit/:list_id/:id", EditCard],
      ["/cards/:list_id/:id", Card, "PUT"],
      ["/cancel/:id", ToggleAddCard],
      ["/cancel-edit/:list_id/:id", Card],
      ["/cards/:list_id/:id", () => HTMLResponse(""), "DELETE"],
      ["/cards/new/:list_id", NewCard, "POST"],
    ]);
    return router.handle({ request, env, ctx });
  },
};
