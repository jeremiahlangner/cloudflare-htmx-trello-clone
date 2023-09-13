import { html } from "../util";
import { IconPlus } from "./mixins";

const NewList = html`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
  >
    ${IconPlus} Add another list
    <div></div>
  </div>
`;

export default NewList;
