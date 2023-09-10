import { IconEdit } from "./mixins";
import ToggleAddCard from "./toggle_add_card";
import AddCard from "./add_card";
import NewList from "./new_list";
import { Card, List } from "../types";

async function Board(params: any): Promise<string> {
  console.log(params);
  const { request, route, env } = params; // will need env for KV store as well
  const listData = await env.TrelloLists.get("lists");
  console.log("listdata", listData);
  const lists = JSON.parse(listData);

  try {
    console.log("request", request.body);
    // if any of the below are not in the request, this should fail; for the move function specifically; should split into separate function.
    const { from, to, movedCard } = JSON.parse(request.body);
    console.log(from, to, movedCard);
    const [, fromId] = from.split("-");
    const [, toId] = to.split("-");
    const cardId = movedCard.replace("card-", "");

    const fromList = lists.find((l: List) => l.id == fromId);
    const card = fromList!.cards.find((c: Card) => c.id == cardId);
    card!.list = toId;
    fromList!.cards = fromList!.cards.filter((c: Card) => c.id != cardId);

    const toList = lists.find((l: List) => l.id == toId);
    toList!.cards.push(card as Card);

    // TODO: update lists in KV.
  } catch (e) {
    console.error(e);
  }

  let template = ``;

  for (const list of lists) {
    template += `
<div class="list" draggable="true">
  <div class="list-title">
    ${list.name}
    <div class="list-cards sortable" id="list-${list.id}">
    `;
    for (const card of list.cards) {
      template += `
<div 
  class="card" 
  id="card-${card.id}" 
  tabindex="0" 
  aria-roledescription="Draggable item. Press space bar to lif" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${card.id} until mouseleave"
  >
  <div class="card-icons hidden" id="card-edit-${card.id}">
    <button class="card-icon" type="button" hx-get="/cards/edit/${list.id}/${card.id}" hx-target"#card-${card.id}" hx-swap="outerHTML">
      ${IconEdit}
    </button>
  </div>
  ${card.label}
</div>
      `;
    }
    template += `
    </div>
  </div>
  ${ToggleAddCard({ list })}
  ${AddCard({ list })}
</div>
    `;
  }

  template += `
<div class="add-list">
  ${NewList}
</div>
  `;

  return template;
}

export default Board;
