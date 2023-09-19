var O=Object.freeze,Y=Object.defineProperty;var L=(e,t)=>O(Y(e,"raw",{value:O(t||e.slice())}));var $=class{name="";store=Promise.resolve();constructor(t,n){if(console.log("setting up"),n)return n;this.name=t,this.store=new Promise((i,a)=>{let s=indexedDB.open(this.name,1);s.onerror=()=>a(s.error),s.onupgradeneeded=()=>s.result.createObjectStore(this.name),s.onsuccess=()=>i(s.result)})}async get(t){let n=await this.store;return new Promise((i,a)=>{let s=n.transaction(this.name,"readonly"),o=s.objectStore(this.name).get(t);s.oncomplete=()=>i(o.result),s.onerror=()=>a(s.error)})}async put(t,n){let i=await this.store;return new Promise((a,s)=>{let o=i.transaction(this.name,"readwrite"),r=o.objectStore(this.name).put(n,t);o.oncomplete=()=>a(r),o.onerror=()=>s(o.error)})}async delete(t){let n=await this.store;return new Promise((i,a)=>{let s=n.transaction(this.name,"readwrite"),o=s.objectStore(this.name).delete(t);s.oncomplete=()=>i(o),s.onerror=()=>a(s.error)})}},N=$;var P=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,n="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:n,handler:t})}handle(e){let{request:t}=e;for(let n of this.routes){if(n.method!==t.method)continue;let i=n.path.exec({pathname:new URL(t.url).pathname});if(i)return n.handler({...e,route:i})}return new Response("Not found",{status:404})}};var E={styles:`body {
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
`};function d(e,...t){return String.raw({raw:e},...t)}function A(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function c(e){return new Response(e,{headers:{"content-type":"text/html;charset=UTF-8"}})}var j;function J(e){return d(j||(j=L([`
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
  `])),E.styles,e.template)}var k=d`
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
`,v=d`
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
`,I=d`
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
`;function tt(e){let{list:t}=e;return d`
    <button
      class="toggle-add-card"
      id="btn-add-card-${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
    >
      ${k}
      <span> Add another card</span>
    </button>
  `}var C=tt;function et(e){let{list:t}=e;return d`
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
  `}var R=et;var nt=d`
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
`,S=nt;function it(e){let{list:t,card:n}=e;return d`
    <div
      class="card"
      id="card-${n.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-${n.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-${n.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/${t.id}/${n.id}"
          hx-target="#card-${n.id}"
          hx-swap="outerHTML"
        >
          ${I}
        </button>
      </div>
      ${n.label}
    </div>
  `}var y=it;function st(e){let t=d``;for(let n of e.cards)t+=d`${y({list:e,card:n})}`;return t}function rt(e){let{lists:t}=e,n=d``;for(let i of t)n+=d`
      <div class="list" draggable="true" id="lists-list-${i.id}">
        <div class="list-title">${i.name}</div>

        <div class="list-cards sortable" id="list-${i.id}">
          ${st(i)}
        </div>
        ${C({list:i})} ${R({list:i})}
      </div>
    `;return n+=d` <div class="add-list">${S}</div> `,n}var f=rt;var M;function at(e){return c(J({template:d(M||(M=L([`
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
      `])),f(e))}))}var _=at;function ot(){return c(d`
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
  `)}var z=ot;function dt(e){let{list:t,card:n}=e;return d`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${t.id}/${n.id}"
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
${n.label}</textarea
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
            hx-delete="/cards/${t.id}/${n.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${t.id}/${n.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${v}
          </div>
        </div>
      </form>
    </div>
  `}var D=dt;async function U(e){let{env:t}=e;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function q(e){let{route:t,env:n}=e,{list_id:i}=t.pathname.groups,a=JSON.parse(await n.TrelloLists.get("lists"));return a=a.filter(s=>s.id!==i),await n.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function B(e){let{request:t,env:n,route:i}=e,{list_id:a,id:s}=i.pathname.groups,o=new URLSearchParams(await t.text()),r=Object.fromEntries(o),{label:l}=r,h=JSON.parse(await n.TrelloLists.get("lists")),b=h.find(x=>x.id===a),m=b.cards.find(x=>x.id===s);return m.label=l,await n.TrelloLists.put("lists",JSON.stringify(h)),{list:b,card:m}}async function F(e){let{env:t,route:n}=e,{list_id:i,id:a}=n.pathname.groups,o=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===i),r=o.cards.find(l=>l.id===a);return{list:o,card:r}}async function W(e){let{env:t,route:n}=e,{list_id:i,id:a}=n.pathname.groups,s=JSON.parse(await t.TrelloLists.get("lists")),o=s.find(r=>r.id===i);o.cards=o.cards.filter(r=>r.id!==a),await t.TrelloLists.put("lists",JSON.stringify(s))}async function V(e){let{request:t,env:n}=e,i=new URLSearchParams(await t.text()),a=Object.fromEntries(i),{name:s}=a,o=JSON.parse(await n.TrelloLists.get("lists"));return o.push({name:s,id:A({}),cards:[]}),await n.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function G(e){let{request:t,route:n,env:i}=e,a=JSON.parse(await i.TrelloLists.get("lists")),{list_id:s}=n.pathname.groups,o=new URLSearchParams(await t.text()),l=Object.fromEntries(o)["label-"+s],h=a.find(m=>m.id===s),b={label:l,id:A({}),list:s};return h.cards.push(b),await i.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function X(e){let{env:t,route:n}=e,i=n.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(o=>o.id===i)}}async function K(e){let{env:t,route:n}=e,{list_id:i,id:a}=n.pathname.groups,o=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===i),r=o.cards.find(l=>l.id===a);return{list:o,card:r}}async function Q(e){let{request:t,env:n}=e,i=new URLSearchParams(await t.text()),a=Object.fromEntries(i),{from:s,to:o,movedCard:r,index:l,prevIndex:h}=a,[,b]=s.split("-"),[,m]=o.split("-"),x=r.replace("card-",""),p=JSON.parse(await n.TrelloLists.get("lists"));try{if(s==="board"&&o==="board"){let u=p[h];p=p.filter(w=>w.id!==u.id),p.splice(l,0,u),await n.TrelloLists.put("lists",JSON.stringify(p))}else{let u=JSON.parse(JSON.stringify(p)),w=u.find(g=>g.id===b),H=w.cards.find(g=>g.id==x);H.list=m,w.cards=w.cards.filter(g=>g.id!=x),u.find(g=>g.id==m).cards.splice(Number(l),0,H),p=u,await n.TrelloLists.put("lists",JSON.stringify(p))}}catch(u){console.error(u)}return{lists:p}}var T;T||(T=new N("trelloClone",T));self.addEventListener("install",e=>{});self.addEventListener("activate",e=>{});self.addEventListener("fetch",e=>["https://unpkg.com/hyperscript.org","https://unpkg.com/htmx.org","https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"].includes(e.request.url)?fetch(e.request):e.respondWith((async()=>{let n=e.request,i={TrelloLists:T},a=void 0,s;try{s=await i.TrelloLists.get("lists")}catch{}if(!s){let r=await fetch("/db/lists").then(l=>l.json());await i.TrelloLists.put("lists",JSON.stringify(r))}return new P([["/",async r=>_(await U(r))],["/lists",async r=>c(f(await V(r))),"POST"],["/lists/add",z],["/lists/cancel",()=>c(S)],["/lists/:list_id",async r=>c(f(await q(r))),"DELETE"],["/cards/move",async r=>c(f(await Q(r))),"POST"],["/cards/new/:list_id",async r=>c(f(await G(r))),"POST"],["/cards/cancel/:id",async r=>c(C(await X(r)))],["/cards/edit/:list_id/:id",async r=>c(D(await K(r)))],["/cards/:list_id/:id",async r=>c(y(await B(r))),"PUT"],["/cards/:list_id/:id",async r=>(await W(r),c("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async r=>c(y(await F(r)))]]).handle({request:n,env:i,ctx:a})})()));
