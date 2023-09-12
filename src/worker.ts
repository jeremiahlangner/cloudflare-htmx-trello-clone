import { Router } from "simple-worker-router";
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

async function putCard(args: HandlerArgs) {
  const { request, env, route } = args;
  const { list_id, id } = (route.pathname as any).groups;
  const params = new URLSearchParams(await request.text());
  const body = Object.fromEntries(params);
  const { label } = body;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === list_id);
  const card = list.find((c: Card) => c.id === id);
  card.label = label;

  await env.TrelloLists.put("lists", lists);

  return { list, card };
}

async function cancelEdit(args: HandlerArgs) {
  const { request, env, route } = args;
  const { list_id, id } = (route.pathname as any).groups;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === list_id);
  const card = list.find((c: Card) => c.id === id);

  return { list, card };
}

async function addCard(args: HandlerArgs) {
  const { env, route } = args;
  const { id } = (route.pathname as any).groups;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === id);
  return { list };
}

async function deleteCard(args: HandlerArgs) {
  const { env, route } = args;
  const { list_id, id } = (route.pathname as any).groups;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === list_id);
  list.cards = lists.cards.filter((c: Card) => c.id !== id);
  await env.TrelloLists.put("lists", lists);
}

async function addList(args: HandlerArgs): Promise<{ lists: List[] }> {
  const { request, env } = args;
  const params = new URLSearchParams(await request.text());
  const body = Object.fromEntries(params);
  const { name } = body;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  lists.push({
    name,
    id: hash({}),
    cards: [],
  });
  await env.TrelloLists.put("lists", JSON.stringify(lists));
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
  list.cards.push(card);

  await env.TrelloLists.put("lists", JSON.stringify(lists));
  return { list, card };
}

async function cancelCard(args: HandlerArgs) {
  const { env, route } = args;
  const id = (route.pathname as any).groups.id;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === id);
  return { list };
}

async function editCard(args: HandlerArgs) {
  const { env, route } = args;
  const { list_id, id } = (route.pathname as any).groups;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === list_id);
  const card = list.cards.find((c: Card) => c.id === id);
  return { list, card };
}

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", async (args) => Index(await getLists(args as HandlerArgs))],
      [
        "/lists",
        async (args) => HTMLResponse(Board(await addList(args as HandlerArgs))),
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
      [
        "/cards/cancel/:id",
        async (args) =>
          HTMLResponse(ToggleAddCard(await cancelCard(args as HandlerArgs))),
      ],
      ["/lists/add", AddList],
      ["/lists/cancel", () => HTMLResponse(NewList)],
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
        async (args) => HTMLResponse(_Card(await putCard(args as HandlerArgs))),
        "PUT",
      ],
      [
        "/cards/cancel-edit/:list_id/:id",
        async (args) =>
          HTMLResponse(_Card(await cancelEdit(args as HandlerArgs))),
      ],
      [
        "/cards/:list_id/:id",
        async (args) => {
          await deleteCard(args as HandlerArgs);
          return HTMLResponse("");
        },
        "DELETE",
      ],
    ]);
    return router.handle({ request, env, ctx });
  },
};
