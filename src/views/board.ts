import { IconEdit } from "./mixins";
import ToggleAddCard from "./toggle_add_card";
import AddCard from "./add_card";
import NewList from "./new_list";
import { Card, List } from "../types";

function Board(args: { lists: List[]}): string {
  const { lists } = args;
  console.log('board lists', lists);
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
