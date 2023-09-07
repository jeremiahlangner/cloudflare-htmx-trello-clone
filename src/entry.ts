import { Router } from "./router";
import Index from "./views/index";
import Board from "./views/board";
import AddList from "./views/add_list";
import NewList from "./views/new_list";

const lists = [
  {
    name: "To Do",
    id: 1,
    cards: [
      {
        id: 1,
        label: "First Card",
        list: 1,
      },
      {
        id: 2,
        label: "Second Card",
        list: 1,
      },
    ],
  },
  {
    name: "Doing",
    id: 2,
    cards: [
      {
        id: 3,
        label: "First Card",
        list: 2,
      },
      {
        id: 4,
        label: "Second Card",
        list: 2,
      },
    ],
  },
];

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

export default router.handle;
