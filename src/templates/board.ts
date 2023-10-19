import ToggleAddCard from "./toggle_add_card";
import AddCard from "./add_card";
import NewList from "./new_list";
import Card from "./card";
import { html } from "../util";
import { List } from "../types";
import { IconClose, IconEdit } from "./mixins";

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
      <div class="list" draggable="true" id="lists-list-${list.id}">
        <div
          class="list-title"
          _="on mouseenter toggle .hidden on #list-edit-${list.id} until mouseleave"
        >
          ${list.name}
          <div class="card-icons hidden" id="list-edit-${list.id}">
            <button
              type="button"
              class="edit-button-cancel"
              tabindex="0"
              hx-delete="/lists/${list.id}"
              hx-target="#board"
              hx-swap="innerHTML"
            >
              ${IconClose}
            </button>

            <button
              class="card-icon"
              type="button"
              hx-get="/list/edit/${list.id}}"
              hx-target="#list-${list.id}"
              hx-swap="outerHTML"
            >
              ${IconEdit}
            </button>
          </div>
        </div>

        <div class="list-cards sortable" id="list-${list.id}">
          ${cards(list)}
        </div>
        ${ToggleAddCard({ list })} ${AddCard({ list })}
      </div>
    `;
  }

  template += html` <div class="add-list">${NewList}</div> `;

  return template;
}

export default Board;

/*
  Delete Button
          <button
            type="button"
            class="edit-button-cancel"
            tabindex="0"
            hx-delete="/lists/${list.id}"
            hx-target="#board"
            hx-swap="innerHTML"
          >
            ${IconClose}
          </button>
 */
