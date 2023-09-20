import { IconSync } from "./mixins";
import PageBoilerplate from "./boilerplate";
import { HTMLResponse, html } from "../util";
import { List } from "../types";
import Board from "./board";

function Index(args: { lists: List[] }): Promise<Response> {
  return HTMLResponse(
    PageBoilerplate({
      template: html`
        <div class="app">
          <div class="header">
            htmx Trello Clone
            <div class="header-buttons">
              <button
                class="edit-button"
                type="button"
                style="background-color: #0d6efd;"
                hx-get="/db/lists"
                hx-target="#board"
                hx-swap="innerHTML"
              >
                ${IconSync} Sync
              </button>
              <button
                class="edit-button"
                type="button"
                style="background-color: rgb(90, 172, 68);"
                hx-post="/db/lists"
                hx-swap="none"
              >
                Save
              </button>
            </div>
          </div>

          <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
            <input id="fromList" type="hidden" name="from" />
            <input id="toList" type="hidden" name="to" />
            <input id="movedCard" type="hidden" name="movedCard" />
            <input id="index" type="hidden" name="index" />
            <input id="prevIndex" type="hidden" name="prevIndex" />
            <div
              id="board"
              class="board"
              _="on end put event.from.id into #fromList.value put event.to.id into #toList.value put event.item.id into #movedCard.value put event.newIndex into #index.value put event.oldIndex into #prevIndex.value then send cardmoved"
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
            const foo = new Sortable(board, {
              name: "board",
              animation: 150,
              group: "board",
            });
            const cards = document.querySelectorAll(".sortable");
            for (const card of cards) {
              new Sortable(card, {
                animation: 150,
                group: "card",
              });
            }
          });
        </script>
      `,
    }),
  );
}

export default Index;
