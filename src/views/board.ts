import { Handler } from "simple-worker-router";
import { IconEdit } from "./mixins";
import lists from "../data/list";

function Board(params: { request: Request; ctx: any; env: any }): string {
  const { request, ctx, env } = params;
  let template = ``;

  for (const list of lists) {
    template += `
<div class="list" draggable="true">
  <div class="list-title" id="${list.name}">
    <div class="list-cards sortable" id="list-${list.id}">
    `;
    for (const card of list.cards) {
      /*  
          _="on mouseenter toggle .hidden on #card-edit-" + card.id + " until mouseleave"
      */
      template += `
<div class="card" id="card-${card.id}" tabindex="0" aria-roledescription="Draggable item. Press space bar to lif" draggable="true">
  <div class="card-icons hidden" id="card-edit-${card.id}">
    <button class="card-icon" type="button" hx-get="/cards/edit/${list.id}/${card.id}" hx-target"#card-${card.id}" hx-swap="outerHTML">
      ${IconEdit}
    </button>
  </div>
</div>
      `;
    }
    template += `
    </div>
  </div>
</div>
    `;
  }

  return template;
}

export default Board as Handler;

/*
    include _toggle-add-card
    include _add-card

.add-list
  include _new-list
*/
