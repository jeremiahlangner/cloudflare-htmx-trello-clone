import { IconClose } from "./mixins";
import { html, HTMLResponse } from "../util";

function AddList() {
  return HTMLResponse(
    html`
      <div id="add-list" class="add-list-editor">
        <form hx-post="/lists" hx-target="#board">
          <div class="list-title-edit">
            <input
              class="list-title-textarea"
              type="text"
              maxlength="30"
              name="name"
              placeholder="Enter list title..."
              style="width: 245px; height: 17px;"
              autofocus="true"
            />
          </div>
          <div class="edit-buttons">
            <button
              class="edit-button"
              type="submit"
              tabindex="0"
              style="background-color: rgb(90, 172, 68);"
            >
              Add list
            </button>
            <button
              class="edit-button-cancel"
              type="button"
              tabindex="0"
              hx-get="/lists/cancel"
              hx-target="#add-list"
              hx-swap="outerHTML"
            >
              ${IconClose}
            </button>
          </div>
        </form>
      </div>
    `
  );
}

export default AddList;
