var A=Object.freeze,tt=Object.defineProperty;var L=(t,n)=>A(tt(t,"raw",{value:A(n||t.slice())}));var H=class{routes;constructor(t=[]){this.routes=[];for(let n of t)this.register(...n)}register(t,n,e="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:e,handler:n})}handle(t){let{request:n}=t;for(let e of this.routes){if(e.method!==n.method)continue;let r=e.path.exec({pathname:new URL(n.url).pathname});if(r)return e.handler({...t,route:r})}return new Response("Not found",{status:404})}};var J={styles:`body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family:
    source-code-pro,
    Menlo,
    Monaco,
    Consolas,
    Courier New,
    monospace;
}
.app {
  background: #3465a4;
  height: 100vh;
}
.header {
  background: rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  text-align: center;
  font-size: 40px;
  font-weight: 200;
}
.board {
  height: 92%;
  display: -webkit-flex;
  display: flex;
  overflow-x: auto;
}
.add-list {
  width: 272px;
  margin: 10px;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
.add-list-button {
  background-color: #0000001f;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  min-height: 32px;
  padding: 5px 8px;
  transition:
    background-color 85ms ease-in,
    opacity 40ms ease-in,
    border-color 85ms ease-in;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
.add-list-button:hover {
  background-color: #0000003d;
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
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.list-title {
  cursor: pointer;
  padding: 10px;
  overflow-wrap: break-word;
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
  background-color: #092d4221;
  color: #17394d;
  text-decoration: underline;
}
.card {
  position: relative;
  cursor: grab;
  background: #fff;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px #092d4240;
  font-size: 15px;
  overflow-wrap: break-word;
  min-height: 18px;
}
.card:hover {
  background: #f5f6f7;
}
.card-icons {
  position: absolute;
  top: 5px;
  right: 5px;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
.card-icon,
.card-icons {
  display: -webkit-flex;
  display: flex;
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
  color: #00000080;
  background: #f5f6f7;
  opacity: 0.9;
  border: none;
}
.card-icon:hover {
  opacity: 1;
  background: #dcdcdc;
}
.edit-card .card {
  min-height: 50px;
  padding-left: 8px;
  padding-right: 15px;
}
.edit-card .card:hover {
  background: #fff;
}
.edit-card-textarea {
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  font-size: 15px;
}
.edit-buttons {
  display: -webkit-flex;
  display: flex;
}
.edit-button {
  cursor: pointer;
  box-shadow: 0 1px #3f6f21;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 5px 10px;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  color: #fff;
  outline: none;
}
.edit-button:hover {
  opacity: 0.7;
}
.edit-button-cancel {
  cursor: pointer;
  margin-bottom: 10px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  font-size: 20px;
  opacity: 0.5;
  outline: none;
  padding: 0;
  border: none;
}
.edit-button-cancel:hover {
  opacity: 1;
}
.list-title-edit {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.list-title-textarea {
  margin: 6px 0 5px 6px;
  border-radius: 3px;
  border: none;
  resize: none;
  outline: none;
  font-size: 15px;
  padding: 5px;
}
.list-title-textarea:focus {
  box-shadow: inset 0 0 0 2px #0079bf;
}
.add-list-editor {
  background: #dfe3e6;
  border-radius: 5px;
  padding: 2px;
}
.hidden {
  display: none;
}
`};function s(t,...n){return String.raw({raw:t},...n)}function $(t){let n="";do n=Math.random().toString(16).substring(2,15);while(t[n]);return n}async function d(t){return new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}})}async function C(t){return typeof t!="string"&&(t=JSON.stringify(t)),new Response(t,{headers:{"content-type":"application/json"}})}var E;function j(t){return s(E||(E=L([`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTMX Trello Clone</title>
        <style>
          `,`
        </style>
        <script>
          const registerServiceWorker = async () => {
            if ("serviceWorker" in navigator) {
              try {
                const registration = await navigator.serviceWorker.register(
                  "/sw.js",
                  {
                    scope: "/",
                    type: "module",
                  },
                );
                if (registration.installing) {
                  console.log("Service worker installing");
                } else if (registration.waiting) {
                  console.log("Service worker installed");
                } else if (registration.active) {
                  console.log("Service worker active");
                }
              } catch (error) {
                console.error("Registration failed with" + error);
              }
            }
          };
          registerServiceWorker();
        <\/script>
      </head>
      <body>
        `,`
      </body>
    </html>
  `])),J.styles,t.template)}var k=s`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-plus"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
    />
  </svg>
`,v=s`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-x"
    viewBox="0 0 16 16"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
`,P=s`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-pencil-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
    />
  </svg>
`;function et(t){let{list:n}=t;return s`
    <button
      class="toggle-add-card"
      id="btn-add-card-${n.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${n.id}"
    >
      ${k}
      <span> Add another card</span>
    </button>
  `}var S=et;function it(t){let{list:n}=t;return s`
    <div class="edit-card hidden" id="add-card-${n.id}">
      <div class="card">
        <textarea
          class="edit-card-textarea"
          name="label-${n.id}"
          placeholder="Enter a title for this card..."
          style="height: 34px;"
          maxlength="300"
          autofocus="true"
        ></textarea>
        <input type="hidden" name="listId" value="${n.id}" />
      </div>
      <div class="edit-buttons">
        <button
          class="edit-button"
          type="button"
          tabindex="0"
          style="background-color: rgb(90, 172, 68);"
          hx-post="/cards/new/${n.id}"
          hx-target="#board"
          hx-swap="innerHTML"
          hx-params="label-${n.id}"
        >
          Add card
        </button>
        <div
          class="edit-button-cancel"
          tabindex="0"
          _="on click toggle .hidden on #add-card-${n.id} toggle .hidden on #btn-add-card-${n.id}"
        >
          ${v}
        </div>
      </div>
    </div>
  `}var _=it;var rt=s`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    ${k} Add another list
    <div></div>
  </div>
`,T=rt;function st(t){let{list:n,card:e}=t;return s`
    <div
      class="card"
      id="card-${e.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-${e.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-${e.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/${n.id}/${e.id}"
          hx-target="#card-${e.id}"
          hx-swap="outerHTML"
        >
          ${P}
        </button>
      </div>
      ${e.label}
    </div>
  `}var y=st;function at(t){let n=s``;for(let e of t.cards)n+=s`${y({list:t,card:e})}`;return n}function ot(t){let{lists:n}=t,e=s``;for(let r of n)e+=s`
      <div class="list" draggable="true" id="lists-list-${r.id}">
        <div class="list-title">${r.name}</div>

        <div class="list-cards sortable" id="list-${r.id}">
          ${at(r)}
        </div>
        ${S({list:r})} ${_({list:r})}
      </div>
    `;return e+=s` <div class="add-list">${T}</div> `,e}var f=ot;var R;function dt(t){return d(j({template:s(R||(R=L([`
        <div class="app">
          <div class="header">htmx Trello Clone</div>

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
              `,`
            </div>
          </form>
        </div>
        <script src="https://unpkg.com/htmx.org"><\/script>
        <script src="https://unpkg.com/hyperscript.org"><\/script>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\/script>
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
        <\/script>
      `])),f(t))}))}var z=dt;function lt(){return d(s`
    <div id="add-list" class="add-list-editor">
      <form hx-post="/lists" hx-target="#board">
        <div class="list-title-edit">
          <input
            class="list-title-textarea"
            type="text"
            maxlength="30"
            name="name"
            placeholder="Enter list title..."
            style="width: 245px; height: 17px;"
            autofocus="true"
          />
        </div>
        <div class="edit-buttons">
          <button
            class="edit-button"
            type="submit"
            tabindex="0"
            style="background-color: rgb(90, 172, 68);"
          >
            Add list
          </button>
          <button
            class="edit-button-cancel"
            type="button"
            tabindex="0"
            hx-get="/lists/cancel"
            hx-target="#add-list"
            hx-swap="outerHTML"
          >
            ${v}
          </button>
        </div>
      </form>
    </div>
  `)}var M=lt;function ct(t){let{list:n,card:e}=t;return s`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${n.id}/${e.id}"
        hx-target="#edit-card"
        hx-swap="outerHTML"
      >
        <div class="card">
          <textarea
            class="edit-card-textarea"
            name="label"
            style="height: 34px;"
            maxlength="300"
            autofocus="true"
          >
${e.label}</textarea
          >
          <input type="hidden" name="listId" value="${n.id}" />
        </div>
        <div class="edit-buttons">
          <button
            class="edit-button"
            type="submit"
            tabindex="0"
            style="background-color: rgb(90, 172, 68);"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Save
          </button>
          <button
            class="edit-button"
            type="button"
            tabindex="0"
            style="background-color: rgb(234, 37, 37);"
            hx-delete="/cards/${n.id}/${e.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${n.id}/${e.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${v}
          </div>
        </div>
      </form>
    </div>
  `}var I=ct;var U={sw:`var O=Object.freeze,Y=Object.defineProperty;var L=(n,t)=>O(Y(n,"raw",{value:O(t||n.slice())}));var $=class{name="";store=Promise.resolve();constructor(t,e){if(console.log("setting up"),e)return e;this.name=t,this.store=new Promise((s,a)=>{let r=indexedDB.open(this.name,1);r.onerror=()=>a(r.error),r.onupgradeneeded=()=>r.result.createObjectStore(this.name),r.onsuccess=()=>s(r.result)})}async get(t){let e=await this.store;return new Promise((s,a)=>{let r=e.transaction(this.name,"readonly"),i=r.objectStore(this.name).get(t);r.oncomplete=()=>s(i.result),r.onerror=()=>a(r.error)})}async put(t,e){let s=await this.store;return new Promise((a,r)=>{let i=s.transaction(this.name,"readwrite"),d=i.objectStore(this.name).put(e,t);i.oncomplete=()=>a(d),i.onerror=()=>r(i.error)})}async delete(t){let e=await this.store;return new Promise((s,a)=>{let r=e.transaction(this.name,"readwrite"),i=r.objectStore(this.name).delete(t);r.oncomplete=()=>s(i),r.onerror=()=>a(r.error)})}},N=$;var P=class{routes;constructor(n=[]){this.routes=[];for(let t of n)this.register(...t)}register(n,t,e="GET"){this.routes.push({path:new URLPattern({pathname:n}),method:e,handler:t})}handle(n){let{request:t}=n;for(let e of this.routes){if(e.method!==t.method)continue;let s=e.path.exec({pathname:new URL(t.url).pathname});if(s)return e.handler({...n,route:s})}return new Response("Not found",{status:404})}};var E={styles:\`body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family:
    source-code-pro,
    Menlo,
    Monaco,
    Consolas,
    Courier New,
    monospace;
}
.app {
  background: #3465a4;
  height: 100vh;
}
.header {
  background: rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  text-align: center;
  font-size: 40px;
  font-weight: 200;
}
.board {
  height: 92%;
  display: -webkit-flex;
  display: flex;
  overflow-x: auto;
}
.add-list {
  width: 272px;
  margin: 10px;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
.add-list-button {
  background-color: #0000001f;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  min-height: 32px;
  padding: 5px 8px;
  transition:
    background-color 85ms ease-in,
    opacity 40ms ease-in,
    border-color 85ms ease-in;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
.add-list-button:hover {
  background-color: #0000003d;
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
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.list-title {
  cursor: pointer;
  padding: 10px;
  overflow-wrap: break-word;
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
  background-color: #092d4221;
  color: #17394d;
  text-decoration: underline;
}
.card {
  position: relative;
  cursor: grab;
  background: #fff;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px #092d4240;
  font-size: 15px;
  overflow-wrap: break-word;
  min-height: 18px;
}
.card:hover {
  background: #f5f6f7;
}
.card-icons {
  position: absolute;
  top: 5px;
  right: 5px;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
.card-icon,
.card-icons {
  display: -webkit-flex;
  display: flex;
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
  color: #00000080;
  background: #f5f6f7;
  opacity: 0.9;
  border: none;
}
.card-icon:hover {
  opacity: 1;
  background: #dcdcdc;
}
.edit-card .card {
  min-height: 50px;
  padding-left: 8px;
  padding-right: 15px;
}
.edit-card .card:hover {
  background: #fff;
}
.edit-card-textarea {
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  font-size: 15px;
}
.edit-buttons {
  display: -webkit-flex;
  display: flex;
}
.edit-button {
  cursor: pointer;
  box-shadow: 0 1px #3f6f21;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 5px 10px;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  color: #fff;
  outline: none;
}
.edit-button:hover {
  opacity: 0.7;
}
.edit-button-cancel {
  cursor: pointer;
  margin-bottom: 10px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  font-size: 20px;
  opacity: 0.5;
  outline: none;
  padding: 0;
  border: none;
}
.edit-button-cancel:hover {
  opacity: 1;
}
.list-title-edit {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.list-title-textarea {
  margin: 6px 0 5px 6px;
  border-radius: 3px;
  border: none;
  resize: none;
  outline: none;
  font-size: 15px;
  padding: 5px;
}
.list-title-textarea:focus {
  box-shadow: inset 0 0 0 2px #0079bf;
}
.add-list-editor {
  background: #dfe3e6;
  border-radius: 5px;
  padding: 2px;
}
.hidden {
  display: none;
}
\`};function o(n,...t){return String.raw({raw:n},...t)}function A(n){let t="";do t=Math.random().toString(16).substring(2,15);while(n[t]);return t}async function l(n){return new Response(n,{headers:{"content-type":"text/html;charset=UTF-8"}})}var J;function I(n){return o(J||(J=L([\`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTMX Trello Clone</title>
        <style>
          \`,\`
        </style>
        <script>
          const registerServiceWorker = async () => {
            if ("serviceWorker" in navigator) {
              try {
                const registration = await navigator.serviceWorker.register(
                  "/sw.js",
                  {
                    scope: "/",
                    type: "module",
                  },
                );
                if (registration.installing) {
                  console.log("Service worker installing");
                } else if (registration.waiting) {
                  console.log("Service worker installed");
                } else if (registration.active) {
                  console.log("Service worker active");
                }
              } catch (error) {
                console.error("Registration failed with" + error);
              }
            }
          };
          registerServiceWorker();
        <\\/script>
      </head>
      <body>
        \`,\`
      </body>
    </html>
  \`])),E.styles,n.template)}var k=o\`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-plus"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
    />
  </svg>
\`,v=o\`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-x"
    viewBox="0 0 16 16"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
\`,R=o\`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-pencil-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
    />
  </svg>
\`;function tt(n){let{list:t}=n;return o\`
    <button
      class="toggle-add-card"
      id="btn-add-card-\${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-\${t.id}"
    >
      \${k}
      <span> Add another card</span>
    </button>
  \`}var C=tt;function et(n){let{list:t}=n;return o\`
    <div class="edit-card hidden" id="add-card-\${t.id}">
      <div class="card">
        <textarea
          class="edit-card-textarea"
          name="label-\${t.id}"
          placeholder="Enter a title for this card..."
          style="height: 34px;"
          maxlength="300"
          autofocus="true"
        ></textarea>
        <input type="hidden" name="listId" value="\${t.id}" />
      </div>
      <div class="edit-buttons">
        <button
          class="edit-button"
          type="button"
          tabindex="0"
          style="background-color: rgb(90, 172, 68);"
          hx-post="/cards/new/\${t.id}"
          hx-target="#board"
          hx-swap="innerHTML"
          hx-params="label-\${t.id}"
        >
          Add card
        </button>
        <div
          class="edit-button-cancel"
          tabindex="0"
          _="on click toggle .hidden on #add-card-\${t.id} toggle .hidden on #btn-add-card-\${t.id}"
        >
          \${v}
        </div>
      </div>
    </div>
  \`}var j=et;var nt=o\`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    \${k} Add another list
    <div></div>
  </div>
\`,S=nt;function it(n){let{list:t,card:e}=n;return o\`
    <div
      class="card"
      id="card-\${e.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-\${e.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-\${e.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/\${t.id}/\${e.id}"
          hx-target="#card-\${e.id}"
          hx-swap="outerHTML"
        >
          \${R}
        </button>
      </div>
      \${e.label}
    </div>
  \`}var y=it;function st(n){let t=o\`\`;for(let e of n.cards)t+=o\`\${y({list:n,card:e})}\`;return t}function rt(n){let{lists:t}=n,e=o\`\`;for(let s of t)e+=o\`
      <div class="list" draggable="true" id="lists-list-\${s.id}">
        <div class="list-title">\${s.name}</div>

        <div class="list-cards sortable" id="list-\${s.id}">
          \${st(s)}
        </div>
        \${C({list:s})} \${j({list:s})}
      </div>
    \`;return e+=o\` <div class="add-list">\${S}</div> \`,e}var f=rt;var M;function at(n){return l(I({template:o(M||(M=L([\`
        <div class="app">
          <div class="header">htmx Trello Clone</div>

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
              \`,\`
            </div>
          </form>
        </div>
        <script src="https://unpkg.com/htmx.org"><\\/script>
        <script src="https://unpkg.com/hyperscript.org"><\\/script>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\\/script>
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
        <\\/script>
      \`])),f(n))}))}var _=at;function ot(){return l(o\`
    <div id="add-list" class="add-list-editor">
      <form hx-post="/lists" hx-target="#board">
        <div class="list-title-edit">
          <input
            class="list-title-textarea"
            type="text"
            maxlength="30"
            name="name"
            placeholder="Enter list title..."
            style="width: 245px; height: 17px;"
            autofocus="true"
          />
        </div>
        <div class="edit-buttons">
          <button
            class="edit-button"
            type="submit"
            tabindex="0"
            style="background-color: rgb(90, 172, 68);"
          >
            Add list
          </button>
          <button
            class="edit-button-cancel"
            type="button"
            tabindex="0"
            hx-get="/lists/cancel"
            hx-target="#add-list"
            hx-swap="outerHTML"
          >
            \${v}
          </button>
        </div>
      </form>
    </div>
  \`)}var z=ot;function dt(n){let{list:t,card:e}=n;return o\`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/\${t.id}/\${e.id}"
        hx-target="#edit-card"
        hx-swap="outerHTML"
      >
        <div class="card">
          <textarea
            class="edit-card-textarea"
            name="label"
            style="height: 34px;"
            maxlength="300"
            autofocus="true"
          >
\${e.label}</textarea
          >
          <input type="hidden" name="listId" value="\${t.id}" />
        </div>
        <div class="edit-buttons">
          <button
            class="edit-button"
            type="submit"
            tabindex="0"
            style="background-color: rgb(90, 172, 68);"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Save
          </button>
          <button
            class="edit-button"
            type="button"
            tabindex="0"
            style="background-color: rgb(234, 37, 37);"
            hx-delete="/cards/\${t.id}/\${e.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/\${t.id}/\${e.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            \${v}
          </div>
        </div>
      </form>
    </div>
  \`}var D=dt;async function U(n){let{env:t}=n;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function B(n){let{route:t,env:e}=n,{list_id:s}=t.pathname.groups,a=JSON.parse(await e.TrelloLists.get("lists"));return a=a.filter(r=>r.id!==s),await e.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function q(n){let{request:t,env:e,route:s}=n,{list_id:a,id:r}=s.pathname.groups,i=new URLSearchParams(await t.text()),d=Object.fromEntries(i),{label:c}=d,h=JSON.parse(await e.TrelloLists.get("lists")),b=h.find(x=>x.id===a),m=b.cards.find(x=>x.id===r);return m.label=c,await e.TrelloLists.put("lists",JSON.stringify(h)),{list:b,card:m}}async function F(n){let{env:t,route:e}=n,{list_id:s,id:a}=e.pathname.groups,i=JSON.parse(await t.TrelloLists.get("lists")).find(c=>c.id===s),d=i.cards.find(c=>c.id===a);return{list:i,card:d}}async function W(n){let{env:t,route:e}=n,{list_id:s,id:a}=e.pathname.groups,r=JSON.parse(await t.TrelloLists.get("lists")),i=r.find(d=>d.id===s);i.cards=i.cards.filter(d=>d.id!==a),await t.TrelloLists.put("lists",JSON.stringify(r))}async function V(n){let{request:t,env:e}=n,s=new URLSearchParams(await t.text()),a=Object.fromEntries(s),{name:r}=a,i=JSON.parse(await e.TrelloLists.get("lists"));return i.push({name:r,id:A({}),cards:[]}),await e.TrelloLists.put("lists",JSON.stringify(i)),{lists:i}}async function G(n){let{request:t,route:e,env:s}=n,a=JSON.parse(await s.TrelloLists.get("lists")),{list_id:r}=e.pathname.groups,i=new URLSearchParams(await t.text()),c=Object.fromEntries(i)["label-"+r],h=a.find(m=>m.id===r),b={label:c,id:A({}),list:r};return h.cards.push(b),await s.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function X(n){let{env:t,route:e}=n,s=e.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(i=>i.id===s)}}async function K(n){let{env:t,route:e}=n,{list_id:s,id:a}=e.pathname.groups,i=JSON.parse(await t.TrelloLists.get("lists")).find(c=>c.id===s),d=i.cards.find(c=>c.id===a);return{list:i,card:d}}async function Q(n){let{request:t,env:e}=n,s=new URLSearchParams(await t.text()),a=Object.fromEntries(s),{from:r,to:i,movedCard:d,index:c,prevIndex:h}=a,[,b]=r.split("-"),[,m]=i.split("-"),x=d.replace("card-",""),p=JSON.parse(await e.TrelloLists.get("lists"));try{if(r==="board"&&i==="board"){let u=p[h];p=p.filter(w=>w.id!==u.id),p.splice(c,0,u),await e.TrelloLists.put("lists",JSON.stringify(p))}else{let u=JSON.parse(JSON.stringify(p)),w=u.find(g=>g.id===b),H=w.cards.find(g=>g.id==x);H.list=m,w.cards=w.cards.filter(g=>g.id!=x),u.find(g=>g.id==m).cards.splice(Number(c),0,H),p=u,await e.TrelloLists.put("lists",JSON.stringify(p))}}catch(u){console.error(u)}return{lists:p}}var T;T||(T=new N("trelloClone",T));self.addEventListener("install",n=>{});self.addEventListener("activate",n=>{});self.addEventListener("fetch",n=>n.respondWith((async()=>{let t=n.request,e={TrelloLists:T},s=void 0,a;try{let i=await e.TrelloLists.get("lists")}catch{}if(!a){let i=await fetch("/db/lists").then(d=>d.json());await e.TrelloLists.put("lists",JSON.stringify(i))}return new P([["/",async i=>_(await U(i))],["/lists",async i=>l(f(await V(i))),"POST"],["/lists/add",z],["/lists/cancel",()=>l(S)],["/lists/:list_id",async i=>l(f(await B(i))),"DELETE"],["/cards/move",async i=>l(f(await Q(i))),"POST"],["/cards/new/:list_id",async i=>l(f(await G(i))),"POST"],["/cards/cancel/:id",async i=>l(C(await X(i)))],["/cards/edit/:list_id/:id",async i=>l(D(await K(i)))],["/cards/:list_id/:id",async i=>l(y(await q(i))),"PUT"],["/cards/:list_id/:id",async i=>(await W(i),l("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async i=>l(y(await F(i)))]]).handle({request:t,env:e,ctx:s})})()));
`};function ut(){return new Response(U.sw,{headers:{"content-type":"text/javascript;charset=UTF-8"}})}var q=ut;async function D(t){let n='[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]';await t.env.TrelloLists.get("lists")!=n&&await t.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function B(t){let{env:n}=t;return{lists:JSON.parse(await n.TrelloLists.get("lists"))}}async function F(t){let{route:n,env:e}=t,{list_id:r}=n.pathname.groups,i=JSON.parse(await e.TrelloLists.get("lists"));return i=i.filter(o=>o.id!==r),await e.TrelloLists.put("lists",JSON.stringify(i)),{lists:i}}async function W(t){let{request:n,env:e,route:r}=t,{list_id:i,id:o}=r.pathname.groups,a=new URLSearchParams(await n.text()),c=Object.fromEntries(a),{label:l}=c,m=JSON.parse(await e.TrelloLists.get("lists")),b=m.find(x=>x.id===i),g=b.cards.find(x=>x.id===o);return g.label=l,await e.TrelloLists.put("lists",JSON.stringify(m)),{list:b,card:g}}async function V(t){let{env:n,route:e}=t,{list_id:r,id:i}=e.pathname.groups,a=JSON.parse(await n.TrelloLists.get("lists")).find(l=>l.id===r),c=a.cards.find(l=>l.id===i);return{list:a,card:c}}async function X(t){let{env:n,route:e}=t,{list_id:r,id:i}=e.pathname.groups,o=JSON.parse(await n.TrelloLists.get("lists")),a=o.find(c=>c.id===r);a.cards=a.cards.filter(c=>c.id!==i),await n.TrelloLists.put("lists",JSON.stringify(o))}async function G(t){let{request:n,env:e}=t,r=new URLSearchParams(await n.text()),i=Object.fromEntries(r),{name:o}=i,a=JSON.parse(await e.TrelloLists.get("lists"));return a.push({name:o,id:$({}),cards:[]}),await e.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function K(t){let{request:n,route:e,env:r}=t,i=JSON.parse(await r.TrelloLists.get("lists")),{list_id:o}=e.pathname.groups,a=new URLSearchParams(await n.text()),l=Object.fromEntries(a)["label-"+o],m=i.find(g=>g.id===o),b={label:l,id:$({}),list:o};return m.cards.push(b),await r.TrelloLists.put("lists",JSON.stringify(i)),{lists:i}}async function Q(t){let{env:n,route:e}=t,r=e.pathname.groups.id;return{list:JSON.parse(await n.TrelloLists.get("lists")).find(a=>a.id===r)}}async function Y(t){let{env:n,route:e}=t,{list_id:r,id:i}=e.pathname.groups,a=JSON.parse(await n.TrelloLists.get("lists")).find(l=>l.id===r),c=a.cards.find(l=>l.id===i);return{list:a,card:c}}async function Z(t){let{request:n,env:e}=t,r=new URLSearchParams(await n.text()),i=Object.fromEntries(r),{from:o,to:a,movedCard:c,index:l,prevIndex:m}=i,[,b]=o.split("-"),[,g]=a.split("-"),x=c.replace("card-",""),p=JSON.parse(await e.TrelloLists.get("lists"));try{if(o==="board"&&a==="board"){let u=p[m];p=p.filter(w=>w.id!==u.id),p.splice(l,0,u),await e.TrelloLists.put("lists",JSON.stringify(p))}else{let u=JSON.parse(JSON.stringify(p)),w=u.find(h=>h.id===b),N=w.cards.find(h=>h.id==x);N.list=g,w.cards=w.cards.filter(h=>h.id!=x),u.find(h=>h.id==g).cards.splice(Number(l),0,N),p=u,await e.TrelloLists.put("lists",JSON.stringify(p))}}catch(u){console.error(u)}return{lists:p}}async function O(t){let{route:n,env:e}=t,r=n.pathname.groups.key;return await e.TrelloLists.get(r)}var fn={async fetch(t,n,e){return new H([["/",async i=>z(await B(i))],["/sw.js",q],["/lists",async i=>d(f(await G(i))),"POST"],["/lists/add",M],["/lists/cancel",()=>d(T)],["/lists/:list_id",async i=>d(f(await F(i))),"DELETE"],["/cards/move",async i=>d(f(await Z(i))),"POST"],["/cards/new/:list_id",async i=>d(f(await K(i))),"POST"],["/cards/cancel/:id",async i=>d(S(await Q(i)))],["/cards/edit/:list_id/:id",async i=>d(I(await Y(i)))],["/cards/:list_id/:id",async i=>d(y(await W(i))),"PUT"],["/cards/:list_id/:id",async i=>(await X(i),d("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async i=>d(y(await V(i)))],["/db/:key",async i=>C(await O(i))],["/db/:key",async i=>C(await O(i)),"POST"]]).handle({request:t,env:n,ctx:e})},async scheduled(t,n,e){return D({event:t,env:n,ctx:e})}};export{fn as default};
