import { IconEdit } from "./mixins";
import { hash } from "../util";

import lists from "../data/list";

// TODO: add interfaces to shared types;
interface Environment {}

interface Params {
  request: Request;
  env: Environment;
  ctx: ExecutionContext;
  route: URLPattern; // return type from URLPattern.exec()
}

interface Card {
  id: string;
  label: string;
  list: string | number;
}

function NewCard(params: any) {
  const { request, route } = params;
  const list_id = route.pathname.groups.list_id;

  const label = request.body["label-" + list_id];
  // TODO: retrieve list from cloudflare storage. (KV or D1)?
  const list = {
    id: list_id,
    cards: [],
  };

  // TODO: hashes = list of ids in list
  const card: Card = {
    label,
    id: hash({}),
    list: list_id,
  };
  (list.cards as Card[]).push(card);

  return new Response(
    `
<div id="edit-card">
</div>
<div 
  class="card"
  id="card-${card.id}
  tabindex="0"
  aria-roledescription="Draggable item. Press space bar to lift" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${card.id} until mouseleave"
> 
  <div class="card-icons hidden" id="card-edit-${card.id}">
    <button 
      class="card-icon"
      type="button"
      hx-get="/cards/edit/${list_id}/${card.id} 
      hx-target="#card-${card.id} 
      hx-swap="outerHTML"
    >
      ${IconEdit}
    </button>
  </div>
  ${card.label}
</div>
    `,
    {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    }
  );
}

export default NewCard;
