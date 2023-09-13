var T=Object.freeze,X=Object.defineProperty;var A=(e,t)=>T(X(e,"raw",{value:T(t||e.slice())}));var H=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,i="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:i,handler:t})}handle(e){let{request:t}=e;for(let i of this.routes){if(i.method!==t.method)continue;let s=i.path.exec({pathname:new URL(t.url).pathname});if(s)return i.handler({...e,route:s})}return new Response("Not found",{status:404})}};var S={styles:`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{background:rgba(0,0,0,.15);color:#fff;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.12);text-align:center;font-size:40px;font-weight:200}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};function a(e,...t){return String.raw({raw:e},...t)}function C(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function n(e){return new Response(e,{headers:{"content-type":"text/html;charset=UTF-8"}})}function O(e){return a`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTMX Trello Clone</title>
        <style>
          ${S.styles}
        </style>
      </head>
      <body>
        ${e.template}
      </body>
    </html>
  `}var v=a`
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
`,h=a`
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
`,b=a`
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
`;function K(e){let{list:t}=e;return a`
    <button
      class="toggle-add-card"
      id="btn-add-card-${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
    >
      ${v}
      <span> Add another card</span>
    </button>
  `}var w=K;function Q(e){let{list:t}=e;return a`
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
          hx-target="#list-${t.id}"
          hx-swap="beforeend"
          hx-params="label-${t.id}"
          _="on htmx:afterOnLoad toggle .hidden on #add-card-${t.id} toggle .hidden on #btn-add-card-${t.id}"
        >
          Add card
        </button>
        <div
          class="edit-button-cancel"
          tabindex="0"
          _="on click toggle .hidden on #add-card-${t.id} toggle .hidden on #btn-add-card-${t.id}"
        >
          ${h}
        </div>
      </div>
    </div>
  `}var y=Q;var W=a`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
  >
    ${v} Add another list
    <div></div>
  </div>
`,L=W;function Y(e){let t=a``;for(let i of e.cards)t+=a`
      <div
        class="card"
        id="card-${i.id}"
        tabindex="0"
        aria-roledescription="Draggable item. Press space bar to lif"
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
            ${b}
          </button>
        </div>
        ${i.label}
      </div>
    `;return t}function Z(e){let{lists:t}=e,i=a``;for(let s of t)i+=a`
      <div class="list" draggable="true">
        <div class="list-title">
          ${s.name}
          <div class="list-cards sortable" id="list-${s.id}">
            ${Y(s)}
          </div>
        </div>
        ${w({list:s})} ${y({list:s})}
      </div>
    `;return i+=a` <div class="add-list">${L}</div> `,i}var x=Z;var E;function tt(e){return n(O({template:a(E||(E=A([`
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
              `,`
            </div>
          </form>
        </div>
        <script src="https://unpkg.com/htmx.org"><\/script>
        <script src="https://unpkg.com/hyperscript.org"><\/script>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\/script>
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
        <\/script>
      `])),x(e))}))}var N=tt;function et(){return n(a`
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
            ${h}
          </button>
        </div>
      </form>
    </div>
  `)}var P=et;function it(e){let{list:t,card:i}=e;return a`
    <div id="edit-card"></div>
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
          hx-get="/cards/edit/${t.id}/${i.id}"
          hx-target="#card-${i.id}"
          hx-swap="outerHTML"
        >
          ${b}
        </button>
      </div>
      ${i.label}
    </div>
  `}var M=it;function rt(e){let{list:t,card:i}=e;return a`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${t.id}/${i.id}"
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
            hx-delete="/cards/${t.id}/${i.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${t.id}/${i.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${h}
          </div>
        </div>
      </form>
    </div>
  `}var _=rt;function st(e){let{list:t,card:i}=e;return a`
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
          hx-get="/cards/edit/${t.id}/${i.id}"
          hx-target="#card-${i.id}"
          hx-swap="outerHTML"
        >
          ${b}
        </button>
      </div>
      ${i.label}
    </div>
  `}var $=st;async function I(e){await e.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function R(e){let{env:t}=e;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function z(e){let{request:t,env:i,route:s}=e,{list_id:r,id:o}=s.pathname.groups,d=new URLSearchParams(await t.text()),c=Object.fromEntries(d),{label:l}=c,u=JSON.parse(await i.TrelloLists.get("lists")),g=u.find(m=>m.id===r),p=g.cards.find(m=>m.id===o);return p.label=l,await i.TrelloLists.put("lists",JSON.stringify(u)),{list:g,card:p}}async function J(e){let{env:t,route:i}=e,{list_id:s,id:r}=i.pathname.groups,d=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),c=d.cards.find(l=>l.id===r);return{list:d,card:c}}async function j(e){let{env:t,route:i}=e,{id:s}=i.pathname.groups;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(d=>d.id===s)}}async function U(e){let{env:t,route:i}=e,{list_id:s,id:r}=i.pathname.groups,o=JSON.parse(await t.TrelloLists.get("lists")),d=o.find(c=>c.id===s);d.cards=d.cards.filter(c=>c.id!==r),await t.TrelloLists.put("lists",JSON.stringify(o))}async function D(e){let{request:t,env:i}=e,s=new URLSearchParams(await t.text()),r=Object.fromEntries(s),{name:o}=r,d=JSON.parse(await i.TrelloLists.get("lists"));return d.push({name:o,id:C({}),cards:[]}),await i.TrelloLists.put("lists",JSON.stringify(d)),{lists:d}}async function B(e){let{request:t,route:i,env:s}=e,r=JSON.parse(await s.TrelloLists.get("lists")),{list_id:o}=i.pathname.groups,d=new URLSearchParams(await t.text()),l=Object.fromEntries(d)["label-"+o],u=r.find(p=>p.id===o),g={label:l,id:C({}),list:o};return u.cards.push(g),await s.TrelloLists.put("lists",JSON.stringify(r)),{list:u,card:g}}async function q(e){let{env:t,route:i}=e,s=i.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(d=>d.id===s)}}async function F(e){let{env:t,route:i}=e,{list_id:s,id:r}=i.pathname.groups,d=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),c=d.cards.find(l=>l.id===r);return{list:d,card:c}}async function V(e){let{request:t,env:i}=e,s=new URLSearchParams(await t.text()),r=Object.fromEntries(s),{from:o,to:d,movedCard:c}=r,[,l]=o.split("-"),[,u]=d.split("-"),g=c.replace("card-",""),p=JSON.parse(await i.TrelloLists.get("lists"));try{let m=p.find(f=>f.id===l),k=m.cards.find(f=>f.id==g);k.list=u,m.cards=m.cards.filter(f=>f.id!=g),p.find(f=>f.id==u).cards.push(k)}catch(m){console.error(m)}return await i.TrelloLists.put("lists",JSON.stringify(p)),{lists:p}}var de={async fetch(e,t,i){return console.log(e.method,e.url),new H([["/",async r=>N(await R(r))],["/lists",async r=>n(x(await D(r))),"POST"],["/lists/add",P],["/lists/cancel",()=>n(L)],["/cards/move",async r=>n(x(await V(r))),"POST"],["/cards/new/:list_id",async r=>n(M(await B(r))),"POST"],["/cards/cancel/:id",async r=>n(w(await q(r)))],["/cards/add/:id",async r=>n(y(await j(r)))],["/cards/edit/:list_id/:id",async r=>n(_(await F(r)))],["/cards/:list_id/:id",async r=>n($(await z(r))),"PUT"],["/cards/:list_id/:id",async r=>(await U(r),n("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async r=>n($(await J(r)))]]).handle({request:e,env:t,ctx:i})},async scheduled(e,t,i){return I({event:e,env:t,ctx:i})}};export{de as default};
