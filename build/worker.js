// node_modules/simple-worker-router/build/router.js
var o = class {
  routes;
  constructor(t = []) {
    this.routes = [];
    for (let e of t)
      this.register(...e);
  }
  register(t, e, n = "GET") {
    this.routes.push({ path: new URLPattern({ pathname: t }), method: n, handler: e });
  }
  handle(t) {
    let { request: e } = t;
    for (let n of this.routes) {
      if (n.method !== e.method)
        continue;
      if (n.path.exec({ pathname: new URL(e.url).pathname }))
        return n.handler(t);
    }
    return new Response("Not found", { status: 404 });
  }
};

// src/views/page-bp.ts
function Boilerplate(params) {
  const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTMX Trello Clone</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    ${params.template}
  </body>
</html>
  `;
  return template;
}
var page_bp_default = Boilerplate;

// src/views/board.ts
function Board(params) {
  const { request, ctx, env } = params;
  let template = ``;
  const lists = [{
    name: "testing"
  }, {
    name: "testing 2"
  }, {
    name: "testing 2"
  }];
  for (const list of lists) {
    const listTemplate = `
<div class="list" draggable="true">
  <div class="list-title" id="${list.name}">${list.name}</div>
</div>
  `;
    template += listTemplate;
  }
  return template;
}
var board_default = Board;

// src/views/index.ts
function index(params) {
  const { request, ctx, env } = params;
  const template = page_bp_default({
    template: `
    <div class="app">
      <div class="header">
        htmx Trello Clone
      </div>

      <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
        <input id="fromList" type="hidden" name="from">
        <input id="toList" type="hidden" name="to">
        <input id="movedCard" type="hidden" name="movedCard">
        <div id="board" class="board sortable">
          ${board_default({ request, ctx, env })}
        </div>
      </form>
      
    </div>
    <script src="https://unpkg.com/htmx.org"><\/script>
    <script src="https://unpkg.com/hyperscript.org"><\/script>
    <script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"><\/script>
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
    <\/script>
    `
  });
  return new Response(
    template,
    {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    }
  );
}
var views_default = index;

// src/worker.ts
var worker_default = {
  async fetch(request, env, ctx) {
    const router = new o([
      ["/", views_default],
      ["/", board_default, "POST"]
      /*  ["/add", AddList],
      ["cancel", NewList],
      ["/add/:id", AddCard],
      ["/edit/:list_id/:id", EditCard],
      ["/:list_id/:id", Card, "PUT"],
      ["/cancel/:id", ToggleAddCard],
      ["/cancel-edit/:list_id/:id", Card ],
      ["/:list_id/:id", List, "DELETE"],
      ["/move", Board, "POST"],
      ["/new/:list_id", NewCard, "POST"], */
    ]);
    return router.handle({ request, env, ctx });
  }
};
export {
  worker_default as default
};
