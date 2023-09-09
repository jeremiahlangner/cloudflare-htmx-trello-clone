import { Handler } from "simple-worker-router";
import { IconEdit } from "./mixins";
import ToggleAddCard from "./toggle_add_card";
import AddCard from "./add_card";
import NewList from "./new_list";
import lists from "../data/list";

function Board(params: { request: Request; ctx: any; env: any }): string {
  const { request, ctx, env } = params;

  /*
    cardsRouter.post('/move', (req, res) => {
  console.log(req.body);
  const { from , to , movedCard } = req.body;
  const [,fromId] = from.split('-');
  const [,toId] = to.split('-');
  const cardId = movedCard.replace('card-','');


  const fromList = lists.find(l => l.id == fromId);
  const card = fromList.cards.find(c => c.id == cardId);
  card.list = toId;
  fromList.cards = fromList.cards.filter(c => c.id != cardId);

  const toList = lists.find(l => l.id == toId);
  toList.cards.push(card);

  const template = pug.compileFile('views/_board.pug');
  const markup = template({ lists } );
  res.send(markup);
});

  */

  // TODO: implement move action.

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

  template += `${NewList}`;

  return template;
}

export default Board as Handler;

/*
.add-list
  include _new-list
*/
