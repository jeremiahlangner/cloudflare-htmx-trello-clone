import { Card, List } from "../types";
import { IconClose } from "./mixins";
import { html } from "../util";

function EditCard(args: { list: List; card: Card }): string {
  const { list, card } = args;

  return html`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${list.id}/${card.id}"
        hx-target="#edit-card"
        hx-swap="outerHTML"
      >
        <div class="card">
          <textarea
            class="edit-card-textarea"
            name="label"
            style="height: 34px;"
            maxlength="300"
            autofocus="true"
          >
${card.label}</textarea
          >
          <input type="hidden" name="listId" value="${list.id}" />
        </div>
        <div class="edit-buttons">
          <button
            class="edit-button"
            type="submit"
            tabindex="0"
            style="background-color: rgb(90, 172, 68);"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Update
          </button>
          <button
            class="edit-button"
            type="button"
            tabindex="0"
            style="background-color: rgb(234, 37, 37);"
            hx-delete="/cards/${list.id}/${card.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${list.id}/${card.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${IconClose}
          </div>
        </div>
      </form>
    </div>
  `;
}

export default EditCard;
