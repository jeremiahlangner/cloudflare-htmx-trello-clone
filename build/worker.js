var A=Object.freeze,K=Object.defineProperty;var L=(t,e)=>A(K(t,"raw",{value:A(e||t.slice())}));var H=class{routes;constructor(t=[]){this.routes=[];for(let e of t)this.register(...e)}register(t,e,i="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:i,handler:e})}handle(t){let{request:e}=t;for(let i of this.routes){if(i.method!==e.method)continue;let s=i.path.exec({pathname:new URL(e.url).pathname});if(s)return i.handler({...t,route:s})}return new Response("Not found",{status:404})}};var O={styles:`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{background:rgba(0,0,0,.15);color:#fff;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.12);text-align:center;font-size:40px;font-weight:200}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};function a(t,...e){return String.raw({raw:t},...e)}function S(t){let e="";do e=Math.random().toString(16).substring(2,15);while(t[e]);return e}async function d(t){return new Response(Y(t),{headers:{"content-type":"text/html;charset=UTF-8"}})}function Y(t){return t=t.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g," ").trim(),t}var N;function E(t){return a(N||(N=L([`
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

          // \u2026

          registerServiceWorker();
        <\/script>
      </head>
      <body>
        `,`
      </body>
    </html>
  `])),O.styles,t.template)}var k=a`
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
`,I=a`
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
`;function Z(t){let{list:e}=t;return a`
    <button
      class="toggle-add-card"
      id="btn-add-card-${e.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${e.id}"
    >
      ${k}
      <span> Add another card</span>
    </button>
  `}var C=Z;function tt(t){let{list:e}=t;return a`
    <div class="edit-card hidden" id="add-card-${e.id}">
      <div class="card">
        <textarea
          class="edit-card-textarea"
          name="label-${e.id}"
          placeholder="Enter a title for this card..."
          style="height: 34px;"
          maxlength="300"
          autofocus="true"
        ></textarea>
        <input type="hidden" name="listId" value="${e.id}" />
      </div>
      <div class="edit-buttons">
        <button
          class="edit-button"
          type="button"
          tabindex="0"
          style="background-color: rgb(90, 172, 68);"
          hx-post="/cards/new/${e.id}"
          hx-target="#board"
          hx-swap="innerHTML"
          hx-params="label-${e.id}"
        >
          Add card
        </button>
        <div
          class="edit-button-cancel"
          tabindex="0"
          _="on click toggle .hidden on #add-card-${e.id} toggle .hidden on #btn-add-card-${e.id}"
        >
          ${v}
        </div>
      </div>
    </div>
  `}var J=tt;var et=a`
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
`,T=et;function it(t){let{list:e,card:i}=t;return a`
    <div
      class="card"
      id="card-${i.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-${i.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-${i.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/${e.id}/${i.id}"
          hx-target="#card-${i.id}"
          hx-swap="outerHTML"
        >
          ${I}
        </button>
      </div>
      ${i.label}
    </div>
  `}var y=it;function rt(t){let e=a``;for(let i of t.cards)e+=a`${y({list:t,card:i})}`;return e}function st(t){let{lists:e}=t,i=a``;for(let s of e)i+=a`
      <div class="list" draggable="true" id="lists-list-${s.id}">
        <div class="list-title">${s.name}</div>

        <div class="list-cards sortable" id="list-${s.id}">
          ${rt(s)}
        </div>
        ${C({list:s})} ${J({list:s})}
      </div>
    `;return i+=a` <div class="add-list">${T}</div> `,i}var f=st;var P;function at(t){return d(E({template:a(P||(P=L([`
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
            console.log(content);

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
      `])),f(t))}))}var M=at;function nt(){return d(a`
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
  `)}var R=nt;function ot(t){let{list:e,card:i}=t;return a`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${e.id}/${i.id}"
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
${i.label}</textarea
          >
          <input type="hidden" name="listId" value="${e.id}" />
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
            hx-delete="/cards/${e.id}/${i.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${e.id}/${i.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${v}
          </div>
        </div>
      </form>
    </div>
  `}var _=ot;async function z(t){await t.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function j(t){let{env:e}=t;return{lists:JSON.parse(await e.TrelloLists.get("lists"))}}async function U(t){let{route:e,env:i}=t,{list_id:s}=e.pathname.groups,r=JSON.parse(await i.TrelloLists.get("lists"));return r=r.filter(o=>o.id!==s),await i.TrelloLists.put("lists",JSON.stringify(r)),{lists:r}}async function B(t){let{request:e,env:i,route:s}=t,{list_id:r,id:o}=s.pathname.groups,n=new URLSearchParams(await e.text()),c=Object.fromEntries(n),{label:l}=c,h=JSON.parse(await i.TrelloLists.get("lists")),b=h.find(x=>x.id===r),g=b.cards.find(x=>x.id===o);return g.label=l,await i.TrelloLists.put("lists",JSON.stringify(h)),{list:b,card:g}}async function D(t){let{env:e,route:i}=t,{list_id:s,id:r}=i.pathname.groups,n=JSON.parse(await e.TrelloLists.get("lists")).find(l=>l.id===s),c=n.cards.find(l=>l.id===r);return{list:n,card:c}}async function q(t){let{env:e,route:i}=t,{list_id:s,id:r}=i.pathname.groups,o=JSON.parse(await e.TrelloLists.get("lists")),n=o.find(c=>c.id===s);n.cards=n.cards.filter(c=>c.id!==r),await e.TrelloLists.put("lists",JSON.stringify(o))}async function F(t){let{request:e,env:i}=t,s=new URLSearchParams(await e.text()),r=Object.fromEntries(s),{name:o}=r,n=JSON.parse(await i.TrelloLists.get("lists"));return n.push({name:o,id:S({}),cards:[]}),await i.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function V(t){let{request:e,route:i,env:s}=t,r=JSON.parse(await s.TrelloLists.get("lists")),{list_id:o}=i.pathname.groups,n=new URLSearchParams(await e.text()),l=Object.fromEntries(n)["label-"+o],h=r.find(g=>g.id===o),b={label:l,id:S({}),list:o};return h.cards.push(b),await s.TrelloLists.put("lists",JSON.stringify(r)),{lists:r}}async function W(t){let{env:e,route:i}=t,s=i.pathname.groups.id;return{list:JSON.parse(await e.TrelloLists.get("lists")).find(n=>n.id===s)}}async function X(t){let{env:e,route:i}=t,{list_id:s,id:r}=i.pathname.groups,n=JSON.parse(await e.TrelloLists.get("lists")).find(l=>l.id===s),c=n.cards.find(l=>l.id===r);return{list:n,card:c}}async function G(t){let{request:e,env:i}=t,s=new URLSearchParams(await e.text()),r=Object.fromEntries(s),{from:o,to:n,movedCard:c,index:l,prevIndex:h}=r,[,b]=o.split("-"),[,g]=n.split("-"),x=c.replace("card-",""),p=JSON.parse(await i.TrelloLists.get("lists"));try{if(o==="board"&&n==="board"){let u=p[h];p=p.filter(w=>w.id!==u.id),p.splice(l,0,u),await i.TrelloLists.put("lists",JSON.stringify(p))}else{let u=JSON.parse(JSON.stringify(p)),w=u.find(m=>m.id===b),$=w.cards.find(m=>m.id==x);$.list=g,w.cards=w.cards.filter(m=>m.id!=x),u.find(m=>m.id==g).cards.splice(Number(l),0,$),p=u,await i.TrelloLists.put("lists",JSON.stringify(p))}}catch(u){console.error(u)}return{lists:p}}var ae={async fetch(t,e,i){return new H([["/",async r=>M(await j(r))],["/lists",async r=>d(f(await F(r))),"POST"],["/lists/add",R],["/lists/cancel",()=>d(T)],["/lists/:list_id",async r=>d(f(await U(r))),"DELETE"],["/cards/move",async r=>d(f(await G(r))),"POST"],["/cards/new/:list_id",async r=>d(f(await V(r))),"POST"],["/cards/cancel/:id",async r=>d(C(await W(r)))],["/cards/edit/:list_id/:id",async r=>d(_(await X(r)))],["/cards/:list_id/:id",async r=>d(y(await B(r))),"PUT"],["/cards/:list_id/:id",async r=>(await q(r),d("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async r=>d(y(await D(r)))]]).handle({request:t,env:e,ctx:i})},async scheduled(t,e,i){return z({event:t,env:e,ctx:i})}};export{ae as default};
