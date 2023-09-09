import { IconClose } from "./mixins";
function AddCard(params) {
    const { list } = params;
    return `
<div class="edit-card hidden" id="add-card-${list.id}">
  <div class="card">
    <textarea 
      class="edit-card-textarea"
      name="label-${list.id}"
      placeholder="Enter a title for this card..." 
      style="height: 34px;" 
      maxlength="300" 
      autofocus="true"
    >
    <input type="hidden" name="listId" value="id">
  </div>
  <div class="edit-buttons">
    <button class="edit-button" type="button" 
      tabindex="0"
      style="background-color: rgb(90, 172, 68);"
      hx-post="/cards/new/${list.id}"
      hx-target="#list-${list.id}"
      hx-swap="beforeend"
      hx-params="label-${list.id}"
      _="on htmx:afterOnLoad toggle .hidden on #add-card-${list.id} toggle .hidden on #btn-add-card-${list.id}"
    >
      Add card
    </button>
    <div class="edit-button-cancel" tabindex="0" 
      _="on click toggle .hidden on #add-card-${list.id} toggle .hidden on #btn-add-card-${list.id}">
      ${IconClose}
    </div>
  </div>
</div>
  `;
}
export default AddCard;
