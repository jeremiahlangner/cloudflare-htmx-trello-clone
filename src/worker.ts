import { Router, Handler } from "simple-worker-router";
import Index from "./views/index";
import AddList from "./views/add_list";
import Board from "./views/board";
import NewCard from "./views/new_card";
import NewList from "./views/new_list";
import ToggleAddCard from "./views/toggle_add_card";
import { HTMLResponse } from "./util";

interface Environment {}

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", Index],
      ["/", Board, "POST"],
      ["/cards/move", (params) => HTMLResponse(Board(params)), "POST"], // TODO: finish move response
      ["/cards/new/:list_id", NewCard, "POST"],
      ["/cards/cancel/:id", ToggleAddCard],
      ["/lists/add", AddList],
      ["/lists/cancel", HTMLResponse(NewList) as any as Handler] /*
      ["/", Board, "POST"],
      ["/add/:id", AddCard],
      ["/edit/:list_id/:id", EditCard],
      ["/:list_id/:id", Card, "PUT"],
      ["/cancel/:id", ToggleAddCard],
      ["/cancel-edit/:list_id/:id", Card ],
      ["/:list_id/:id", List, "DELETE"],
      ["/cards/new/:list_id", NewCard, "POST"], */,
    ]);
    return router.handle({ request, env, ctx });
  },
};
