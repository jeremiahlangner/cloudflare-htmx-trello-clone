import { PageBoilerplate } from "./mixins";
import { HTMLResponse } from "../util";
import Board from "./board";

async function index(params: any): Promise<Response> {
  const { request, env } = params;
  const lists = await env.TrelloLists.get("lists");
  const test = await env.TrelloLists.list();
  console.log(test);
  console.log("lists", lists);
  const board = await Board(params);
  return HTMLResponse(
    PageBoilerplate({
      template: `
    <div class="app">
      <div class="header">
        htmx Trello Clone
      </div>

      <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
        <input id="fromList" type="hidden" name="from">
        <input id="toList" type="hidden" name="to">
        <input id="movedCard" type="hidden" name="movedCard">
        <div 
          id="board" 
          class="board sortable" 
          _="on end put event.from.id into #fromList.value put event.to.id into #toList.value put event.item.id into #movedCard.value then send cardmoved">
          ${board}
        </div>
      </form>
    </div>
    <script src="https://unpkg.com/htmx.org"></script>
    <script src="https://unpkg.com/hyperscript.org"></script>
    <script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"></script>
    <script>
      htmx.onLoad(function(content) {
        let sortables = content.querySelectorAll(".sortable");
        for(const sortable of sortables) {
          new Sortable(sortable, {
            animation: 150,
            group: 'shared'
          });
        }
      });
    </script>
    `,
    })
  );
}

export default index;
