import { IconEdit } from './mixins';

const card = {
  id: 'an id',
  label: 'this is a label',
};

function Card(params: any): string {
  const template = `
<div 
  class="card" 
  id="card-${card.id}" 
  tabindex="0" 
  aria-roledescription="Draggable item. Press space bar to lift" 
  draggable="true"
  >   
 <div class="card-icons hidden" id="card-edit-${card.id}">
  <button class="card-icon" type="button" hx-get="/cards/edit/${list.id}/${card.id}" hx-target="#card-${card.id} hx-swap="outerHTML">
    ${IconEdit}  
  </button>
  <div id="${card.label}"></div>
  </div>
</div>
  `;

  return template;
}

export default Card;
/*
   .card(
  id='card-' + card.id
  tabindex='0' 
  aria-roledescription='Draggable item. Press space bar to lift' 
  draggable='true'
  _="on mouseenter toggle .hidden on #card-edit-" + card.id + " until mouseleave"
  ) 
  .card-icons.hidden(id='card-edit-' + card.id)
    button.card-icon(type="button", hx-get="/cards/edit/" + list.id + "/" + card.id, hx-target="#card-" + card.id, hx-swap="outerHTML")
      +icon-edit()
  | #{card.label}
  */
