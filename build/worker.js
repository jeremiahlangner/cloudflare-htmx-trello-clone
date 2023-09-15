var O=Object.freeze,Q=Object.defineProperty;var L=(n,t)=>O(Q(n,"raw",{value:O(t||n.slice())}));var N=class{routes;constructor(n=[]){this.routes=[];for(let t of n)this.register(...t)}register(n,t,e="GET"){this.routes.push({path:new URLPattern({pathname:n}),method:e,handler:t})}handle(n){let{request:t}=n;for(let e of this.routes){if(e.method!==t.method)continue;let r=e.path.exec({pathname:new URL(t.url).pathname});if(r)return e.handler({...n,route:r})}return new Response("Not found",{status:404})}};var A={styles:`body {
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
`};function a(n,...t){return String.raw({raw:n},...t)}function $(n){let t="";do t=Math.random().toString(16).substring(2,15);while(n[t]);return t}async function d(n){return new Response(tt(n),{headers:{"content-type":"text/html;charset=UTF-8"}})}function tt(n){return n=n.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g," ").trim(),n}var H;function E(n){return a(H||(H=L([`
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
  `])),A.styles,n.template)}var k=a`
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
`,v=a`
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
`,J=a`
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
`;function nt(n){let{list:t}=n;return a`
    <button
      class="toggle-add-card"
      id="btn-add-card-${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
    >
      ${k}
      <span> Add another card</span>
    </button>
  `}var S=nt;function et(n){let{list:t}=n;return a`
    <div class="edit-card hidden" id="add-card-${t.id}">
      <div class="card">
        <textarea
          class="edit-card-textarea"
          name="label-${t.id}"
          placeholder="Enter a title for this card..."
          style="height: 34px;"
          maxlength="300"
          autofocus="true"
        ></textarea>
        <input type="hidden" name="listId" value="${t.id}" />
      </div>
      <div class="edit-buttons">
        <button
          class="edit-button"
          type="button"
          tabindex="0"
          style="background-color: rgb(90, 172, 68);"
          hx-post="/cards/new/${t.id}"
          hx-target="#board"
          hx-swap="innerHTML"
          hx-params="label-${t.id}"
        >
          Add card
        </button>
        <div
          class="edit-button-cancel"
          tabindex="0"
          _="on click toggle .hidden on #add-card-${t.id} toggle .hidden on #btn-add-card-${t.id}"
        >
          ${v}
        </div>
      </div>
    </div>
  `}var j=et;var it=a`
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
`,T=it;function rt(n){let{list:t,card:e}=n;return a`
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
          hx-get="/cards/edit/${t.id}/${e.id}"
          hx-target="#card-${e.id}"
          hx-swap="outerHTML"
        >
          ${J}
        </button>
      </div>
      ${e.label}
    </div>
  `}var y=rt;function at(n){let t=a``;for(let e of n.cards)t+=a`${y({list:n,card:e})}`;return t}function st(n){let{lists:t}=n,e=a``;for(let r of t)e+=a`
      <div class="list" draggable="true" id="lists-list-${r.id}">
        <div class="list-title">${r.name}</div>

        <div class="list-cards sortable" id="list-${r.id}">
          ${at(r)}
        </div>
        ${S({list:r})} ${j({list:r})}
      </div>
    `;return e+=a` <div class="add-list">${T}</div> `,e}var h=st;var P;function ot(n){return d(E({template:a(P||(P=L([`
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
      `])),h(n))}))}var _=ot;function dt(){return d(a`
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
  `)}var z=dt;function lt(n){let{list:t,card:e}=n;return a`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${t.id}/${e.id}"
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
          <input type="hidden" name="listId" value="${t.id}" />
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
            hx-delete="/cards/${t.id}/${e.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${t.id}/${e.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${v}
          </div>
        </div>
      </form>
    </div>
  `}var I=lt;var M={sw:`var O=Object.freeze,Z=Object.defineProperty;var L=(e,t)=>O(Z(e,"raw",{value:O(t||e.slice())}));var $=class{name="";store;constructor(t,n){if(n)return n;this.name=t,this.store=new Promise((r,s)=>{let i=indexedDB.open(this.name,1);i.onerror=()=>s(i.error),i.onupgradeneeded=()=>i.result.createObjectStore(t),i.onsuccess=()=>r(i.result)})}async get(t){let n=await this.store;return new Promise((r,s)=>{let i=n.transaction("keyval","readonly"),a=i.objectStore(this.name).get(t);i.oncomplete=()=>r(a.result),i.onerror=()=>s(i.error)})}async put(t,n){let r=await this.store;return new Promise((s,i)=>{let a=r.transaction("keyval","readwrite"),l=a.objectStore(this.name).put(n,t);a.oncomplete=()=>s(l),a.onerror=()=>i(a.error)})}async delete(t){let n=await this.store;return new Promise((r,s)=>{let i=n.transaction("keyval","readonly"),a=i.objectStore(this.name).delete(t);i.oncomplete=()=>r(a),i.onerror=()=>s(i.error)})}},N=$;var E=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,n="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:n,handler:t})}handle(e){let{request:t}=e;for(let n of this.routes){if(n.method!==t.method)continue;let r=n.path.exec({pathname:new URL(t.url).pathname});if(r)return n.handler({...e,route:r})}return new Response("Not found",{status:404})}};var P={styles:\`body {
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
\`};function o(e,...t){return String.raw({raw:e},...t)}function A(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function d(e){return new Response(et(e),{headers:{"content-type":"text/html;charset=UTF-8"}})}function et(e){return e=e.replace(/(\\r\\n|\\n|\\r)/gm,"").replace(/\\s+/g," ").trim(),e}var I;function J(e){return o(I||(I=L([\`
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
  \`])),P.styles,e.template)}var k=o\`
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
\`,j=o\`
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
\`;function nt(e){let{list:t}=e;return o\`
    <button
      class="toggle-add-card"
      id="btn-add-card-\${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-\${t.id}"
    >
      \${k}
      <span> Add another card</span>
    </button>
  \`}var C=nt;function it(e){let{list:t}=e;return o\`
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
  \`}var M=it;var rt=o\`
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
\`,S=rt;function st(e){let{list:t,card:n}=e;return o\`
    <div
      class="card"
      id="card-\${n.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-\${n.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-\${n.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/\${t.id}/\${n.id}"
          hx-target="#card-\${n.id}"
          hx-swap="outerHTML"
        >
          \${j}
        </button>
      </div>
      \${n.label}
    </div>
  \`}var y=st;function at(e){let t=o\`\`;for(let n of e.cards)t+=o\`\${y({list:e,card:n})}\`;return t}function ot(e){let{lists:t}=e,n=o\`\`;for(let r of t)n+=o\`
      <div class="list" draggable="true" id="lists-list-\${r.id}">
        <div class="list-title">\${r.name}</div>

        <div class="list-cards sortable" id="list-\${r.id}">
          \${at(r)}
        </div>
        \${C({list:r})} \${M({list:r})}
      </div>
    \`;return n+=o\` <div class="add-list">\${S}</div> \`,n}var f=ot;var R;function dt(e){return d(J({template:o(R||(R=L([\`
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
      \`])),f(e))}))}var _=dt;function lt(){return d(o\`
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
  \`)}var z=lt;function ct(e){let{list:t,card:n}=e;return o\`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/\${t.id}/\${n.id}"
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
\${n.label}</textarea
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
            hx-delete="/cards/\${t.id}/\${n.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/\${t.id}/\${n.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            \${v}
          </div>
        </div>
      </form>
    </div>
  \`}var U=ct;async function D(e){let{env:t}=e;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function B(e){let{route:t,env:n}=e,{list_id:r}=t.pathname.groups,s=JSON.parse(await n.TrelloLists.get("lists"));return s=s.filter(i=>i.id!==r),await n.TrelloLists.put("lists",JSON.stringify(s)),{lists:s}}async function q(e){let{request:t,env:n,route:r}=e,{list_id:s,id:i}=r.pathname.groups,a=new URLSearchParams(await t.text()),l=Object.fromEntries(a),{label:c}=l,h=JSON.parse(await n.TrelloLists.get("lists")),b=h.find(x=>x.id===s),m=b.cards.find(x=>x.id===i);return m.label=c,await n.TrelloLists.put("lists",JSON.stringify(h)),{list:b,card:m}}async function F(e){let{env:t,route:n}=e,{list_id:r,id:s}=n.pathname.groups,a=JSON.parse(await t.TrelloLists.get("lists")).find(c=>c.id===r),l=a.cards.find(c=>c.id===s);return{list:a,card:l}}async function W(e){let{env:t,route:n}=e,{list_id:r,id:s}=n.pathname.groups,i=JSON.parse(await t.TrelloLists.get("lists")),a=i.find(l=>l.id===r);a.cards=a.cards.filter(l=>l.id!==s),await t.TrelloLists.put("lists",JSON.stringify(i))}async function V(e){let{request:t,env:n}=e,r=new URLSearchParams(await t.text()),s=Object.fromEntries(r),{name:i}=s,a=JSON.parse(await n.TrelloLists.get("lists"));return a.push({name:i,id:A({}),cards:[]}),await n.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function G(e){let{request:t,route:n,env:r}=e,s=JSON.parse(await r.TrelloLists.get("lists")),{list_id:i}=n.pathname.groups,a=new URLSearchParams(await t.text()),c=Object.fromEntries(a)["label-"+i],h=s.find(m=>m.id===i),b={label:c,id:A({}),list:i};return h.cards.push(b),await r.TrelloLists.put("lists",JSON.stringify(s)),{lists:s}}async function X(e){let{env:t,route:n}=e,r=n.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(a=>a.id===r)}}async function K(e){let{env:t,route:n}=e,{list_id:r,id:s}=n.pathname.groups,a=JSON.parse(await t.TrelloLists.get("lists")).find(c=>c.id===r),l=a.cards.find(c=>c.id===s);return{list:a,card:l}}async function Q(e){let{request:t,env:n}=e,r=new URLSearchParams(await t.text()),s=Object.fromEntries(r),{from:i,to:a,movedCard:l,index:c,prevIndex:h}=s,[,b]=i.split("-"),[,m]=a.split("-"),x=l.replace("card-",""),p=JSON.parse(await n.TrelloLists.get("lists"));try{if(i==="board"&&a==="board"){let u=p[h];p=p.filter(w=>w.id!==u.id),p.splice(c,0,u),await n.TrelloLists.put("lists",JSON.stringify(p))}else{let u=JSON.parse(JSON.stringify(p)),w=u.find(g=>g.id===b),H=w.cards.find(g=>g.id==x);H.list=m,w.cards=w.cards.filter(g=>g.id!=x),u.find(g=>g.id==m).cards.splice(Number(c),0,H),p=u,await n.TrelloLists.put("lists",JSON.stringify(p))}}catch(u){console.error(u)}return{lists:p}}var pt="cacheName",Y="0",T;T||(T=new N("trelloClone",T));self.addEventListener("install",e=>{e.waitUntil(caches.open(Y+pt).then(t=>t.addAll(["/"])))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.filter(n=>n.indexOf(Y)!==0).map(n=>caches.delete(n)))))});self.addEventListener("fetch",e=>e.respondWith((async()=>{let t=e.request,n={TrelloList:T},r=void 0;return new E([["/",async i=>_(await D(i))],["/lists",async i=>d(f(await V(i))),"POST"],["/lists/add",z],["/lists/cancel",()=>d(S)],["/lists/:list_id",async i=>d(f(await B(i))),"DELETE"],["/cards/move",async i=>d(f(await Q(i))),"POST"],["/cards/new/:list_id",async i=>d(f(await G(i))),"POST"],["/cards/cancel/:id",async i=>d(C(await X(i)))],["/cards/edit/:list_id/:id",async i=>d(U(await K(i)))],["/cards/:list_id/:id",async i=>d(y(await q(i))),"PUT"],["/cards/:list_id/:id",async i=>(await W(i),d("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async i=>d(y(await F(i)))]]).handle({request:t,env:n,ctx:r})})()));
`};function pt(){return new Response(M.sw,{headers:{"content-type":"text/javascript;charset=UTF-8"}})}var R=pt;async function U(n){let t='[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]';await n.env.TrelloLists.get("lists")!=t&&await n.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function q(n){let{env:t}=n;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function D(n){let{route:t,env:e}=n,{list_id:r}=t.pathname.groups,i=JSON.parse(await e.TrelloLists.get("lists"));return i=i.filter(o=>o.id!==r),await e.TrelloLists.put("lists",JSON.stringify(i)),{lists:i}}async function B(n){let{request:t,env:e,route:r}=n,{list_id:i,id:o}=r.pathname.groups,s=new URLSearchParams(await t.text()),c=Object.fromEntries(s),{label:l}=c,m=JSON.parse(await e.TrelloLists.get("lists")),b=m.find(x=>x.id===i),g=b.cards.find(x=>x.id===o);return g.label=l,await e.TrelloLists.put("lists",JSON.stringify(m)),{list:b,card:g}}async function F(n){let{env:t,route:e}=n,{list_id:r,id:i}=e.pathname.groups,s=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===r),c=s.cards.find(l=>l.id===i);return{list:s,card:c}}async function W(n){let{env:t,route:e}=n,{list_id:r,id:i}=e.pathname.groups,o=JSON.parse(await t.TrelloLists.get("lists")),s=o.find(c=>c.id===r);s.cards=s.cards.filter(c=>c.id!==i),await t.TrelloLists.put("lists",JSON.stringify(o))}async function V(n){let{request:t,env:e}=n,r=new URLSearchParams(await t.text()),i=Object.fromEntries(r),{name:o}=i,s=JSON.parse(await e.TrelloLists.get("lists"));return s.push({name:o,id:$({}),cards:[]}),await e.TrelloLists.put("lists",JSON.stringify(s)),{lists:s}}async function X(n){let{request:t,route:e,env:r}=n,i=JSON.parse(await r.TrelloLists.get("lists")),{list_id:o}=e.pathname.groups,s=new URLSearchParams(await t.text()),l=Object.fromEntries(s)["label-"+o],m=i.find(g=>g.id===o),b={label:l,id:$({}),list:o};return m.cards.push(b),await r.TrelloLists.put("lists",JSON.stringify(i)),{lists:i}}async function G(n){let{env:t,route:e}=n,r=e.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(s=>s.id===r)}}async function Y(n){let{env:t,route:e}=n,{list_id:r,id:i}=e.pathname.groups,s=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===r),c=s.cards.find(l=>l.id===i);return{list:s,card:c}}async function K(n){let{request:t,env:e}=n,r=new URLSearchParams(await t.text()),i=Object.fromEntries(r),{from:o,to:s,movedCard:c,index:l,prevIndex:m}=i,[,b]=o.split("-"),[,g]=s.split("-"),x=c.replace("card-",""),p=JSON.parse(await e.TrelloLists.get("lists"));try{if(o==="board"&&s==="board"){let u=p[m];p=p.filter(w=>w.id!==u.id),p.splice(l,0,u),await e.TrelloLists.put("lists",JSON.stringify(p))}else{let u=JSON.parse(JSON.stringify(p)),w=u.find(f=>f.id===b),C=w.cards.find(f=>f.id==x);C.list=g,w.cards=w.cards.filter(f=>f.id!=x),u.find(f=>f.id==g).cards.splice(Number(l),0,C),p=u,await e.TrelloLists.put("lists",JSON.stringify(p))}}catch(u){console.error(u)}return{lists:p}}var fn={async fetch(n,t,e){return new N([["/",async i=>_(await q(i))],["/sw.js",R],["/lists",async i=>d(h(await V(i))),"POST"],["/lists/add",z],["/lists/cancel",()=>d(T)],["/lists/:list_id",async i=>d(h(await D(i))),"DELETE"],["/cards/move",async i=>d(h(await K(i))),"POST"],["/cards/new/:list_id",async i=>d(h(await X(i))),"POST"],["/cards/cancel/:id",async i=>d(S(await G(i)))],["/cards/edit/:list_id/:id",async i=>d(I(await Y(i)))],["/cards/:list_id/:id",async i=>d(y(await B(i))),"PUT"],["/cards/:list_id/:id",async i=>(await W(i),d("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async i=>d(y(await F(i)))]]).handle({request:n,env:t,ctx:e})},async scheduled(n,t,e){return U({event:n,env:t,ctx:e})}};export{fn as default};
