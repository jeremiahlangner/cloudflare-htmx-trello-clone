import { IconEdit } from "./mixins";
import { hash } from "../util";
function NewCard(params) {
    const { request, route } = params;
    const list_id = route.pathname.groups.list_id;
    const label = request.body["label-" + list_id];
    // TODO: retrieve list from cloudflare storage. (KV or D1)?
    const list = {
        id: list_id,
        cards: [],
    };
    // TODO: hashes = list of ids in list
    const card = {
        label,
        id: hash({}),
        list: list_id,
    };
    list.cards.push(card);
    return new Response(`
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
    `, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
}
export default NewCard;
