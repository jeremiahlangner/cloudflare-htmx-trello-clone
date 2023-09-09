import { Router } from "simple-worker-router";
import Index from "./views/index";
import Board from "./views/board";
import lists from "./data/list";

// import AddList from "./views/add_list";
// import NewList from "./views/new_list";

interface Environment {}

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", Index],
      ["/", Board, "POST"],
      /*  ["/add", AddList],
      ["cancel", NewList],
      ["/add/:id", AddCard],
      ["/edit/:list_id/:id", EditCard],
      ["/:list_id/:id", Card, "PUT"],
      ["/cancel/:id", ToggleAddCard],
      ["/cancel-edit/:list_id/:id", Card ],
      ["/:list_id/:id", List, "DELETE"],
      ["/move", Board, "POST"],
      ["/new/:list_id", NewCard, "POST"], */
    ]);
    return router.handle({ request, env, ctx });
  },
};
