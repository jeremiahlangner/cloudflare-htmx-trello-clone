var A=Object.freeze,Z=Object.defineProperty;var L=(n,t)=>A(Z(n,"raw",{value:A(t||n.slice())}));var H=class{routes;constructor(n=[]){this.routes=[];for(let t of n)this.register(...t)}register(n,t,e="GET"){this.routes.push({path:new URLPattern({pathname:n}),method:e,handler:t})}handle(n){let{request:t}=n;for(let e of this.routes){if(e.method!==t.method)continue;let s=e.path.exec({pathname:new URL(t.url).pathname});if(s)return e.handler({...n,route:s})}return new Response("Not found",{status:404})}};var N={styles:`body {
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
`};function r(n,...t){return String.raw({raw:n},...t)}function k(n){let t="";do t=Math.random().toString(16).substring(2,15);while(n[t]);return t}async function o(n){return new Response(nt(n),{headers:{"content-type":"text/html;charset=UTF-8"}})}function nt(n){return n=n.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g," ").trim(),n}var E;function J(n){return r(E||(E=L([`
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
          // registerServiceWorker();
        <\/script>
      </head>
      <body>
        `,`
      </body>
    </html>
  `])),N.styles,n.template)}var S=r`
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
`,v=r`
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
`,P=r`
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
`;function et(n){let{list:t}=n;return r`
    <button
      class="toggle-add-card"
      id="btn-add-card-${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
    >
      ${S}
      <span> Add another card</span>
    </button>
  `}var T=et;function it(n){let{list:t}=n;return r`
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
  `}var _=it;var st=r`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    ${S} Add another list
    <div></div>
  </div>
`,$=st;function rt(n){let{list:t,card:e}=n;return r`
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
          ${P}
        </button>
      </div>
      ${e.label}
    </div>
  `}var y=rt;function at(n){let t=r``;for(let e of n.cards)t+=r`${y({list:n,card:e})}`;return t}function dt(n){let{lists:t}=n,e=r``;for(let s of t)e+=r`
      <div class="list" draggable="true" id="lists-list-${s.id}">
        <div class="list-title">${s.name}</div>

        <div class="list-cards sortable" id="list-${s.id}">
          ${at(s)}
        </div>
        ${T({list:s})} ${_({list:s})}
      </div>
    `;return e+=r` <div class="add-list">${$}</div> `,e}var m=dt;var j;function ot(n){return o(J({template:r(j||(j=L([`
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
      `])),m(n))}))}var R=ot;function lt(){return o(r`
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
  `)}var M=lt;function ct(n){let{list:t,card:e}=n;return r`
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
  `}var I=ct;var U={sw:`var $=class{name="";store=Promise.resolve();constructor(t,s){if(console.log("setting up"),s)return s;this.name=t,this.store=new Promise((i,a)=>{let r=indexedDB.open(this.name,1);r.onerror=()=>a(r.error),r.onupgradeneeded=()=>r.result.createObjectStore(this.name),r.onsuccess=()=>i(r.result)})}async get(t){let s=await this.store;return new Promise((i,a)=>{let r=s.transaction("keyval","readonly"),n=r.objectStore(this.name).get(t);r.oncomplete=()=>i(n.result),r.onerror=()=>a(r.error)})}async put(t,s){let i=await this.store;return new Promise((a,r)=>{let n=i.transaction("keyval","readwrite"),d=n.objectStore(this.name).put(s,t);n.oncomplete=()=>a(d),n.onerror=()=>r(n.error)})}async delete(t){let s=await this.store;return new Promise((i,a)=>{let r=s.transaction("keyval","readonly"),n=r.objectStore(this.name).delete(t);r.oncomplete=()=>i(n),r.onerror=()=>a(r.error)})}},O=$;var N=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,s="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:s,handler:t})}handle(e){let{request:t}=e;for(let s of this.routes){if(s.method!==t.method)continue;let i=s.path.exec({pathname:new URL(t.url).pathname});if(i)return s.handler({...e,route:i})}return new Response("Not found",{status:404})}};function o(e,...t){return String.raw({raw:e},...t)}function A(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function c(e){return new Response(W(e),{headers:{"content-type":"text/html;charset=UTF-8"}})}function W(e){return e=e.replace(/(\\r\\n|\\n|\\r)/gm,"").replace(/\\s+/g," ").trim(),e}var x=o\`
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
\`,b=o\`
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
\`,E=o\`
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
\`;function z(){return c(o\`
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
            \${b}
          </button>
        </div>
      </form>
    </div>
  \`)}var P=z;function V(e){let{list:t}=e;return o\`
    <button
      class="toggle-add-card"
      id="btn-add-card-\${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-\${t.id}"
    >
      \${x}
      <span> Add another card</span>
    </button>
  \`}var C=V;function G(e){let{list:t}=e;return o\`
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
          \${b}
        </div>
      </div>
    </div>
  \`}var k=G;var X=o\`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    \${x} Add another list
    <div></div>
  </div>
\`,T=X;function K(e){let{list:t,card:s}=e;return o\`
    <div
      class="card"
      id="card-\${s.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-\${s.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-\${s.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/\${t.id}/\${s.id}"
          hx-target="#card-\${s.id}"
          hx-swap="outerHTML"
        >
          \${E}
        </button>
      </div>
      \${s.label}
    </div>
  \`}var y=K;function Q(e){let t=o\`\`;for(let s of e.cards)t+=o\`\${y({list:e,card:s})}\`;return t}function Y(e){let{lists:t}=e,s=o\`\`;for(let i of t)s+=o\`
      <div class="list" draggable="true" id="lists-list-\${i.id}">
        <div class="list-title">\${i.name}</div>

        <div class="list-cards sortable" id="list-\${i.id}">
          \${Q(i)}
        </div>
        \${C({list:i})} \${k({list:i})}
      </div>
    \`;return s+=o\` <div class="add-list">\${T}</div> \`,s}var L=Y;function Z(e){let{list:t,card:s}=e;return o\`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/\${t.id}/\${s.id}"
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
\${s.label}</textarea
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
            hx-delete="/cards/\${t.id}/\${s.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/\${t.id}/\${s.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            \${b}
          </div>
        </div>
      </form>
    </div>
  \`}var J=Z;async function _(e){let{route:t,env:s}=e,{list_id:i}=t.pathname.groups,a=JSON.parse(await s.TrelloLists.get("lists"));return a=a.filter(r=>r.id!==i),await s.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function I(e){let{request:t,env:s,route:i}=e,{list_id:a,id:r}=i.pathname.groups,n=new URLSearchParams(await t.text()),d=Object.fromEntries(n),{label:l}=d,h=JSON.parse(await s.TrelloLists.get("lists")),f=h.find(v=>v.id===a),p=f.cards.find(v=>v.id===r);return p.label=l,await s.TrelloLists.put("lists",JSON.stringify(h)),{list:f,card:p}}async function R(e){let{env:t,route:s}=e,{list_id:i,id:a}=s.pathname.groups,n=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===i),d=n.cards.find(l=>l.id===a);return{list:n,card:d}}async function M(e){let{env:t,route:s}=e,{list_id:i,id:a}=s.pathname.groups,r=JSON.parse(await t.TrelloLists.get("lists")),n=r.find(d=>d.id===i);n.cards=n.cards.filter(d=>d.id!==a),await t.TrelloLists.put("lists",JSON.stringify(r))}async function j(e){let{request:t,env:s}=e,i=new URLSearchParams(await t.text()),a=Object.fromEntries(i),{name:r}=a,n=JSON.parse(await s.TrelloLists.get("lists"));return n.push({name:r,id:A({}),cards:[]}),await s.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function D(e){let{request:t,route:s,env:i}=e,a=JSON.parse(await i.TrelloLists.get("lists")),{list_id:r}=s.pathname.groups,n=new URLSearchParams(await t.text()),l=Object.fromEntries(n)["label-"+r],h=a.find(p=>p.id===r),f={label:l,id:A({}),list:r};return h.cards.push(f),await i.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function U(e){let{env:t,route:s}=e,i=s.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(n=>n.id===i)}}async function q(e){let{env:t,route:s}=e,{list_id:i,id:a}=s.pathname.groups,n=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===i),d=n.cards.find(l=>l.id===a);return{list:n,card:d}}async function B(e){let{request:t,env:s}=e,i=new URLSearchParams(await t.text()),a=Object.fromEntries(i),{from:r,to:n,movedCard:d,index:l,prevIndex:h}=a,[,f]=r.split("-"),[,p]=n.split("-"),v=d.replace("card-",""),u=JSON.parse(await s.TrelloLists.get("lists"));try{if(r==="board"&&n==="board"){let m=u[h];u=u.filter(w=>w.id!==m.id),u.splice(l,0,m),await s.TrelloLists.put("lists",JSON.stringify(u))}else{let m=JSON.parse(JSON.stringify(u)),w=m.find(g=>g.id===f),H=w.cards.find(g=>g.id==v);H.list=p,w.cards=w.cards.filter(g=>g.id!=v),m.find(g=>g.id==p).cards.splice(Number(l),0,H),u=m,await s.TrelloLists.put("lists",JSON.stringify(u))}}catch(m){console.error(m)}return{lists:u}}var tt="cacheName",F="0",S;S||(S=new O("trelloClone",S));self.addEventListener("install",e=>{e.waitUntil(caches.open(F+tt).then(t=>t.addAll(["/db/lists"])))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.filter(s=>s.indexOf(F)!==0).map(s=>caches.delete(s)))))});self.addEventListener("fetch",e=>e.respondWith((async()=>{let t=e.request,s={TrelloLists:S},i=void 0;return new N([["/lists",async r=>c(L(await j(r))),"POST"],["/lists/add",P],["/lists/cancel",()=>c(T)],["/lists/:list_id",async r=>c(L(await _(r))),"DELETE"],["/cards/move",async r=>c(L(await B(r))),"POST"],["/cards/new/:list_id",async r=>c(L(await D(r))),"POST"],["/cards/cancel/:id",async r=>c(C(await U(r)))],["/cards/edit/:list_id/:id",async r=>c(J(await q(r)))],["/cards/:list_id/:id",async r=>c(y(await I(r))),"PUT"],["/cards/:list_id/:id",async r=>(await M(r),c("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async r=>c(y(await R(r)))]]).handle({request:t,env:s,ctx:i})})()));
`};function ut(){return new Response(U.sw,{headers:{"content-type":"text/javascript;charset=UTF-8"}})}var z=ut;async function D(n){let t='[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]';await n.env.TrelloLists.get("lists")!=t&&await n.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function q(n){let{env:t}=n;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function B(n){let{route:t,env:e}=n,{list_id:s}=t.pathname.groups,i=JSON.parse(await e.TrelloLists.get("lists"));return i=i.filter(d=>d.id!==s),await e.TrelloLists.put("lists",JSON.stringify(i)),{lists:i}}async function F(n){let{request:t,env:e,route:s}=n,{list_id:i,id:d}=s.pathname.groups,a=new URLSearchParams(await t.text()),c=Object.fromEntries(a),{label:l}=c,f=JSON.parse(await e.TrelloLists.get("lists")),b=f.find(x=>x.id===i),g=b.cards.find(x=>x.id===d);return g.label=l,await e.TrelloLists.put("lists",JSON.stringify(f)),{list:b,card:g}}async function V(n){let{env:t,route:e}=n,{list_id:s,id:i}=e.pathname.groups,a=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),c=a.cards.find(l=>l.id===i);return{list:a,card:c}}async function W(n){let{env:t,route:e}=n,{list_id:s,id:i}=e.pathname.groups,d=JSON.parse(await t.TrelloLists.get("lists")),a=d.find(c=>c.id===s);a.cards=a.cards.filter(c=>c.id!==i),await t.TrelloLists.put("lists",JSON.stringify(d))}async function G(n){let{request:t,env:e}=n,s=new URLSearchParams(await t.text()),i=Object.fromEntries(s),{name:d}=i,a=JSON.parse(await e.TrelloLists.get("lists"));return a.push({name:d,id:k({}),cards:[]}),await e.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function X(n){let{request:t,route:e,env:s}=n,i=JSON.parse(await s.TrelloLists.get("lists")),{list_id:d}=e.pathname.groups,a=new URLSearchParams(await t.text()),l=Object.fromEntries(a)["label-"+d],f=i.find(g=>g.id===d),b={label:l,id:k({}),list:d};return f.cards.push(b),await s.TrelloLists.put("lists",JSON.stringify(i)),{lists:i}}async function K(n){let{env:t,route:e}=n,s=e.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(a=>a.id===s)}}async function Q(n){let{env:t,route:e}=n,{list_id:s,id:i}=e.pathname.groups,a=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),c=a.cards.find(l=>l.id===i);return{list:a,card:c}}async function Y(n){let{request:t,env:e}=n,s=new URLSearchParams(await t.text()),i=Object.fromEntries(s),{from:d,to:a,movedCard:c,index:l,prevIndex:f}=i,[,b]=d.split("-"),[,g]=a.split("-"),x=c.replace("card-",""),p=JSON.parse(await e.TrelloLists.get("lists"));try{if(d==="board"&&a==="board"){let u=p[f];p=p.filter(w=>w.id!==u.id),p.splice(l,0,u),await e.TrelloLists.put("lists",JSON.stringify(p))}else{let u=JSON.parse(JSON.stringify(p)),w=u.find(h=>h.id===b),O=w.cards.find(h=>h.id==x);O.list=g,w.cards=w.cards.filter(h=>h.id!=x),u.find(h=>h.id==g).cards.splice(Number(l),0,O),p=u,await e.TrelloLists.put("lists",JSON.stringify(p))}}catch(u){console.error(u)}return{lists:p}}async function C(n){let{route:t,env:e}=n,s=t.pathname.groups.key;return await e.TrelloLists.get(s)}var mn={async fetch(n,t,e){return new H([["/",async i=>R(await q(i))],["/sw.js",z],["/lists",async i=>o(m(await G(i))),"POST"],["/lists/add",M],["/lists/cancel",()=>o($)],["/lists/:list_id",async i=>o(m(await B(i))),"DELETE"],["/cards/move",async i=>o(m(await Y(i))),"POST"],["/cards/new/:list_id",async i=>o(m(await X(i))),"POST"],["/cards/cancel/:id",async i=>o(T(await K(i)))],["/cards/edit/:list_id/:id",async i=>o(I(await Q(i)))],["/cards/:list_id/:id",async i=>o(y(await F(i))),"PUT"],["/cards/:list_id/:id",async i=>(await W(i),o("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async i=>o(y(await V(i)))],["/db/:key",async i=>new Response(await C(i),{headers:{"content-type":"application/json"}})],["/db/:key",async i=>new Response(await C(i),{headers:{"content-type":"application/json"}}),"POST"]]).handle({request:n,env:t,ctx:e})},async scheduled(n,t,e){return D({event:n,env:t,ctx:e})}};export{mn as default};
