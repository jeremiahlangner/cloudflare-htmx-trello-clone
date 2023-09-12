import { Router, Handler } from "simple-worker-router";
import Index from "./views/index";
import AddList from "./views/add_list";
import Board from "./views/board";
import NewCard from "./views/new_card";
import AddCard from "./views/add_card";
import EditCard from "./views/edit_card";
import _Card from "./views/card";
import NewList from "./views/new_list";
import ToggleAddCard from "./views/toggle_add_card";
import { HTMLResponse } from "./util";
import { Environment, List, HandlerArgs, Card } from "./types";
import { hash } from "./util";

async function moveCard(args: HandlerArgs): Promise<{ lists: List[] }> {
  // TODO: Add ordering.
  const { request, env } = args;
  const params = new URLSearchParams(await request.text());
  const body = Object.fromEntries(params);
  const { from, to, movedCard } = body;
  const [, fromId] = from.split("-");
  const [, toId] = to.split("-");
  const cardId = movedCard.replace("card-", "");

  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);

  try {
    const fromList = lists.find((l: List) => l.id === fromId);
    const card = fromList!.cards.find((c: Card) => c.id == cardId);
    card!.list = toId;
    fromList!.cards = fromList!.cards.filter((c: Card) => c.id != cardId);

    const toList = lists.find((l: List) => l.id == toId);
    toList!.cards.push(card as Card);
  } catch (e) {
    console.error(e);
  }

  await env.TrelloLists.put("lists", JSON.stringify(lists));
  return { lists };
}

async function getLists(args: HandlerArgs): Promise<{ lists: List[] }> {
  const { env } = args;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  return { lists };
}

async function newCard(args: HandlerArgs) {
  const { request, route, env } = args;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const { list_id } = (route.pathname as any).groups;
  const params = new URLSearchParams(await request.text());
  const body = Object.fromEntries(params);
  const label = body["label-" + list_id];
  const list = lists.find((l: List) => l.id == list_id);
  const card = {
    label,
    id: hash({}),
    list: list_id,
  };
  console.log("new card", card);
  list.cards.push(card);

  await env.TrelloLists.put("lists", JSON.stringify(lists));
  return { list, card };
}

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", async (args) => Index(await getLists(args as HandlerArgs))],
      [
        "/lists",
        async (args) =>
          HTMLResponse(Board(await getLists(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/move",
        async (args) =>
          HTMLResponse(Board(await moveCard(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/new/:list_id",
        async (args) =>
          HTMLResponse(NewCard(await newCard(args as HandlerArgs))),
        "POST",
      ],
      ["/cards/cancel/:id", (args) => HTMLResponse(ToggleAddCard(args))],
      ["/lists/add", AddList],
      ["/lists/cancel", () => HTMLResponse(NewList)],
      ["/cards/add/:id", () => HTMLResponse(AddCard({} as any))],
      ["/cards/edit/:list_id/:id", EditCard],
      ["/cards/:list_id/:id", _Card, "PUT"],
      ["/cancel/:id", ToggleAddCard],
      ["/cancel-edit/:list_id/:id", _Card],
      ["/cards/:list_id/:id", () => HTMLResponse(""), "DELETE"],
    ]);
    return router.handle({ request, env, ctx });
  },
};
