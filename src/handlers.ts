import { HandlerArgs, List, Card } from "./types";
import { Environment } from "./types";
import { hash } from "./util";

async function resetData(args: {
  event: any;
  env: Environment;
  ctx: ExecutionContext;
}) {
  await args.env.TrelloLists.put(
    "lists",
    '[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]',
  );
}

async function getLists(args: HandlerArgs): Promise<{ lists: List[] }> {
  const { env } = args;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  return { lists };
}

async function deleteList(args: HandlerArgs): Promise<void> {
  const { route, env } = args;
  const { list_id } = (route.pathname as any).groups;
  let lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  lists = lists.filter((l: List) => l.id !== list_id);
  await env.TrelloLists.put("lists", JSON.stringify(lists));
}

async function putCard(args: HandlerArgs) {
  const { request, env, route } = args;
  const { list_id, id } = (route.pathname as any).groups;
  const params = new URLSearchParams(await request.text());
  const body = Object.fromEntries(params);
  const { label } = body;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === list_id);
  const card = list.cards.find((c: Card) => c.id === id);
  card.label = label;

  await env.TrelloLists.put("lists", JSON.stringify(lists));

  return { list, card };
}

async function cancelEdit(args: HandlerArgs) {
  const { env, route } = args;
  const { list_id, id } = (route.pathname as any).groups;
  const lists = JSON.parse((await env.TrelloLists.get("lists")) as string);
  const list = lists.find((l: List) => l.id === list_id);
  const card = list.cards.find((c: Card) => c.id === id);

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
  list.cards = list.cards.filter((c: Card) => c.id !== id);
  await env.TrelloLists.put("lists", JSON.stringify(lists));
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
  const list = lists.find((l: List) => l.id === list_id);
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

async function move(args: HandlerArgs): Promise<{ lists: List[] }> {
  const { request, env } = args;
  const params = new URLSearchParams(await request.text());
  const body = Object.fromEntries(params);
  const { from, to, movedCard, index, prevIndex } = body;
  const [, fromId] = from.split("-");
  const [, toId] = to.split("-");
  const cardId = movedCard.replace("card-", "");

  let lists = JSON.parse((await env.TrelloLists.get("lists")) as string);

  try {
    if (from === "board" && to === "board") {
      /* 
      const list = lists[Number(prevIndex)];
      let lists2 = JSON.parse(JSON.stringify(lists));
      lists2 = lists2.filter((l: List) => l !== list);
      lists2 = lists2.splice(Number(index), 0, list);
      lists = lists2;
      */
      console.log(JSON.stringify(lists));
    } else {
      const lists2 = JSON.parse(JSON.stringify(lists));
      const fromList = lists2.find((l: List) => l.id === fromId);
      const card = fromList!.cards.find((c: Card) => c.id == cardId);
      card!.list = toId;
      fromList!.cards = fromList!.cards.filter((c: Card) => c.id != cardId);

      const toList = lists2.find((l: List) => l.id == toId);
      toList.cards.splice(Number(index), 0, card);
      lists = lists2;
      await env.TrelloLists.put("lists", JSON.stringify(lists));
    }
  } catch (e) {
    console.error(e);
  }

  return { lists };
}

export {
  addList,
  newCard,
  putCard,
  deleteCard,
  editCard,
  addCard,
  cancelCard,
  cancelEdit,
  getLists,
  deleteList,
  move,
  resetData,
};
