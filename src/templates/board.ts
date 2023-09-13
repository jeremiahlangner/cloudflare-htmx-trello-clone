import { IconEdit } from "./mixins";
import ToggleAddCard from "./toggle_add_card";
import AddCard from "./add_card";
import NewList from "./new_list";
import { html } from "../util";
import { List } from "../types";

function cards(list: List): string {
  let template = html``;
  for (const card of list.cards) {
    template += html`
<div 
  class="card" 
  id="card-${card.id}" 
  tabindex="0" 
  aria-roledescription="Draggable item. Press space bar to lif" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${card.id} until mouseleave"
  >
  <div class="card-icons hidden" id="card-edit-${card.id}">
    <button class="card-icon" 
      type="button" 
      hx-get="/cards/edit/${list.id}/${card.id}" 
      hx-target"#card-${card.id}" 
      hx-swap="outerHTML"
    >
      ${IconEdit}
    </button>
  </div>
  ${card.label}
</div>
  `;
  }

  return template;
}

function Board(args: { lists: List[] }): string {
  const { lists } = args;

  let template = html``;
  for (const list of lists) {
    template += html`
      <div class="list" draggable="true">
        <div class="list-title">
          ${list.name}
          <div class="list-cards sortable" id="list-${list.id}">
            ${cards(list)}
          </div>
        </div>
        ${ToggleAddCard({ list })} ${AddCard({ list })}
      </div>
    `;
  }

  template += html` <div class="add-list">${NewList}</div> `;

  return template;
}

export default Board;
