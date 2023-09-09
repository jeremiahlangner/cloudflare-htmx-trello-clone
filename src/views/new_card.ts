import { IconEdit } from "./mixins";
import lists from "../data/list";

function NewCard(params: any) {
  const { list, card } = params;

  return new Response(
    `
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
      hx-get="/cards/edit/${list.id}/${card.id} 
      hx-target="#card-${card.id} 
      hx-swap="outerHTML"
    >
      ${IconEdit}
    </button>
  </div>
  ${card.label}
</div>
    `,
    {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    }
  );
}

export default NewCard;
