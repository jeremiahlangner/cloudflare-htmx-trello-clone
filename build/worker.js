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

// src/views/styles.ts
function Styles() {
  return `
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

code {
    font-family: source-code-pro,Menlo,Monaco,Consolas,"Courier New",monospace
}

.app {
    background: #3465a4;
    height: 100vh
}

.header {
    background: rgba(0,0,0,.15);
    color: #fff;
    padding: 5px 0;
    border-bottom: 1px solid rgba(0,0,0,.12);
    text-align: center;
    font-size: 40px;
    font-weight: 200
}

.board {
    height: 92%;
    display: -webkit-flex;
    display: flex;
    overflow-x: auto
}

.add-list {
    width: 272px;
    margin: 10px;
    -webkit-flex-shrink: 0;
    flex-shrink: 0
}

.add-list-button {
    background-color: rgba(0,0,0,.12);
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    min-height: 32px;
    padding: 5px 8px;
    transition: background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content
}

.add-list-button:hover {
    background-color: rgba(0,0,0,.24)
}


.list {
    background: #dfe3e6;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 272px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin: 10px 0 10px 10px;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.12)
}

.list-title {
    cursor: pointer;
    padding: 10px;
    overflow-wrap: break-word
}

.toggle-add-card {
    cursor: pointer;
    padding: 10px;
    color: #333;
    border-radius: 0 0 4px 4px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    border: none;
    width: 100%;
}

.toggle-add-card:hover {
    background-color: rgba(9,45,66,.13);
    color: #17394d;
    text-decoration: underline
}


.card {
    position: relative;
    cursor: grab;
    background: #fff;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.12);
    box-shadow: 0 1px 0 rgba(9,45,66,.25);
    font-size: 15px;
    overflow-wrap: break-word;
    min-height: 18px
}

.card:hover {
    background: #f5f6f7
}

.card-icons {
    position: absolute;
    top: 5px;
    right: 5px;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: flex-end;
    justify-content: flex-end
}

.card-icon,.card-icons {
    display: -webkit-flex;
    display: flex
}

.card-icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    border-radius: 5px;
    margin: 1px;
    color: rgba(0,0,0,.5);
    background: #f5f6f7;
    opacity: .9;
    border: none;
}

.card-icon:hover {
    opacity: 1;
    background: #dcdcdc
}

.edit-card .card {
    min-height: 50px;
    padding-left: 8px;
    padding-right: 15px
}

.edit-card .card:hover {
    background: #fff
}

.edit-card-textarea {
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    font-size: 15px
}

.edit-buttons {
    display: -webkit-flex;
    display: flex
}

.edit-button {
    cursor: pointer;
    box-shadow: 0 1px 0 0 #3f6f21;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 5px 10px;
    padding: 6px 12px;
    border-radius: 5px;
    border: none;
    color: #fff;
    outline: none
}

.edit-button:hover {
    opacity: .7
}

.edit-button-cancel {
    cursor: pointer;
    margin-bottom: 10px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    font-size: 20px;
    opacity: .5;
    outline: none;
    padding:0;
    border: none;
}

.edit-button-cancel:hover {
    opacity: 1
}

.list-title-edit {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}


.list-title-textarea {
    margin: 6px 0 5px 6px;
    border-radius: 3px;
    border: none;
    resize: none;
    outline: none;
    font-size: 15px;
    padding: 5px
}

.list-title-textarea:focus {
    box-shadow: inset 0 0 0 2px #0079bf
}

.add-list-editor {
    background: #dfe3e6;
    border-radius: 5px;
    padding: 2px
}



.hidden {
  display: none;
}
  `;
}
var styles_default = Styles;

// src/views/mixins.ts
function PageBoilerplate(params) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTMX Trello Clone</title>
    <style>
      ${styles_default()}
    </style>
  </head>
  <body>
    ${params.template}
  </body>
</html>
  `;
}

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
  const template = PageBoilerplate({
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