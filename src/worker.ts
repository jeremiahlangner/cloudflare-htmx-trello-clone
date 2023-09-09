import { Router } from "simple-worker-router";
import Index from "./views/index";
import AddList from "./views/add_list";
import NewCard from "./views/new_card";
import Board from "./views/board";

// import NewList from "./views/new_list";

interface Environment {}

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", Index],
      ["/cards/new/:list_id", NewCard, "POST"],
      ["/lists/add", AddList] /*
      ["cancel", NewList],
      ["/", Board, "POST"],
      ["/move", Board, "POST"],
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
