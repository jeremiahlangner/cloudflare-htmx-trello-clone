import { PageBoilerplate } from "./mixins";
import { HTMLResponse, html } from "../util";
import { List } from "../types";
import Board from "./board";

function index(args: { lists: List[] }): Promise<Response> {
  console.log(JSON.stringify(args));
  return HTMLResponse(
    PageBoilerplate({
      template: html`
        <div class="app">
          <div class="header">htmx Trello Clone</div>

          <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
            <input id="fromList" type="hidden" name="from" />
            <input id="toList" type="hidden" name="to" />
            <input id="movedCard" type="hidden" name="movedCard" />
            <div
              id="board"
              class="board sortable"
              _="on end put event.from.id into #fromList.value put event.to.id into #toList.value put event.item.id into #movedCard.value then send cardmoved"
            >
              ${Board(args)}
            </div>
          </form>
        </div>
        <script src="https://unpkg.com/htmx.org"></script>
        <script src="https://unpkg.com/hyperscript.org"></script>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
        <script>
          htmx.onLoad(function (content) {
            let sortables = content.querySelectorAll(".sortable");
            for (const sortable of sortables) {
              new Sortable(sortable, {
                animation: 150,
                group: "shared",
              });
            }
          });
        </script>
      `,
    })
  );
}

export default index;
