import ToggleAddCard from "./toggle_add_card";
import AddCard from "./add_card";
import NewList from "./new_list";
import Card from "./card";
import { html } from "../util";
import { List } from "../types";

function cards(list: List): string {
  let template = html``;
  for (const card of list.cards) {
    template += html`${Card({ list, card })}`;
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
