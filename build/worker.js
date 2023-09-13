var H=Object.freeze,W=Object.defineProperty;var O=(e,t)=>H(W(e,"raw",{value:H(t||e.slice())}));var N=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,i="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:i,handler:t})}handle(e){let{request:t}=e;for(let i of this.routes){if(i.method!==t.method)continue;let r=i.path.exec({pathname:new URL(t.url).pathname});if(r)return i.handler({...e,route:r})}return new Response("Not found",{status:404})}};var E={styles:`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{background:rgba(0,0,0,.15);color:#fff;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.12);text-align:center;font-size:40px;font-weight:200}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};function a(e,...t){return String.raw({raw:e},...t)}function A(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function o(e){return new Response(e,{headers:{"content-type":"text/html;charset=UTF-8"}})}function I(e){return a`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTMX Trello Clone</title>
        <style>
          ${E.styles}
        </style>
      </head>
      <body>
        ${e.template}
      </body>
    </html>
  `}var y=a`
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
`,p=a`
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
`,L=a`
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
`;function Z(e){let{list:t}=e;return a`
    <button
      class="toggle-add-card"
      id="btn-add-card-${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
    >
      ${y}
      <span> Add another card</span>
    </button>
  `}var C=Z;function tt(e){let{list:t}=e;return a`
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
          ${p}
        </div>
      </div>
    </div>
  `}var $=tt;var et=a`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
  >
    ${y} Add another list
    <div></div>
  </div>
`,k=et;function it(e){let{list:t,card:i}=e;return a`
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
          ${L}
        </button>
      </div>
      ${i.label}
    </div>
  `}var v=it;function st(e){let t=a``;for(let i of e.cards)t+=a`${v({list:e,card:i})}`;return t}function rt(e){let{lists:t}=e,i=a``;for(let r of t)i+=a`
      <div class="list" draggable="true" id="lists-list-${r.id}">
        <div class="list-title">
          <--
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-delete="/lists/${r.id}"
            _="on click remove #lists-list-${r.id}"
          >
            ${p}
          </div>
          --> ${r.name}
          <div class="list-cards sortable" id="list-${r.id}">
            ${st(r)}
          </div>
        </div>
        ${C({list:r})} ${$({list:r})}
      </div>
    `;return i+=a` <div class="add-list">${k}</div> `,i}var w=rt;var P;function at(e){return o(I({template:a(P||(P=O([`
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
              class="board sortable"
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
            let sortables = content.querySelectorAll(".sortable");
            for (const sortable of sortables) {
              new Sortable(sortable, {
                animation: 150,
                group: "shared",
              });
            }
          });
        <\/script>
      `])),w(e))}))}var _=at;function nt(){return o(a`
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
            ${p}
          </button>
        </div>
      </form>
    </div>
  `)}var J=nt;function dt(e){let{list:t,card:i}=e;return a`
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
          ${L}
        </button>
      </div>
      ${i.label}
    </div>
  `}var M=dt;function ot(e){let{list:t,card:i}=e;return a`
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
            ${p}
          </div>
        </div>
      </form>
    </div>
  `}var R=ot;async function z(e){await e.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function j(e){let{env:t}=e;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function U(e){let{route:t,env:i}=e,{list_id:r}=t.pathname.groups,s=JSON.parse(await i.TrelloLists.get("lists"));s=s.filter(d=>d.id!==r),await i.TrelloLists.put("lists",JSON.stringify(s))}async function D(e){let{request:t,env:i,route:r}=e,{list_id:s,id:d}=r.pathname.groups,n=new URLSearchParams(await t.text()),c=Object.fromEntries(n),{label:l}=c,f=JSON.parse(await i.TrelloLists.get("lists")),m=f.find(h=>h.id===s),u=m.cards.find(h=>h.id===d);return u.label=l,await i.TrelloLists.put("lists",JSON.stringify(f)),{list:m,card:u}}async function B(e){let{env:t,route:i}=e,{list_id:r,id:s}=i.pathname.groups,n=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===r),c=n.cards.find(l=>l.id===s);return{list:n,card:c}}async function q(e){let{env:t,route:i}=e,{id:r}=i.pathname.groups;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(n=>n.id===r)}}async function F(e){let{env:t,route:i}=e,{list_id:r,id:s}=i.pathname.groups,d=JSON.parse(await t.TrelloLists.get("lists")),n=d.find(c=>c.id===r);n.cards=n.cards.filter(c=>c.id!==s),await t.TrelloLists.put("lists",JSON.stringify(d))}async function V(e){let{request:t,env:i}=e,r=new URLSearchParams(await t.text()),s=Object.fromEntries(r),{name:d}=s,n=JSON.parse(await i.TrelloLists.get("lists"));return n.push({name:d,id:A({}),cards:[]}),await i.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function X(e){let{request:t,route:i,env:r}=e,s=JSON.parse(await r.TrelloLists.get("lists")),{list_id:d}=i.pathname.groups,n=new URLSearchParams(await t.text()),l=Object.fromEntries(n)["label-"+d],f=s.find(u=>u.id===d),m={label:l,id:A({}),list:d};return f.cards.push(m),await r.TrelloLists.put("lists",JSON.stringify(s)),{list:f,card:m}}async function G(e){let{env:t,route:i}=e,r=i.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(n=>n.id===r)}}async function K(e){let{env:t,route:i}=e,{list_id:r,id:s}=i.pathname.groups,n=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===r),c=n.cards.find(l=>l.id===s);return{list:n,card:c}}async function Q(e){let{request:t,env:i}=e,r=new URLSearchParams(await t.text()),s=Object.fromEntries(r),{from:d,to:n,movedCard:c,index:l,prevIndex:f}=s,[,m]=d.split("-"),[,u]=n.split("-"),h=c.replace("card-",""),b=JSON.parse(await i.TrelloLists.get("lists"));try{if(d==="board"&&n==="board")console.log(JSON.stringify(b));else{let x=JSON.parse(JSON.stringify(b)),T=x.find(g=>g.id===m),S=T.cards.find(g=>g.id==h);S.list=u,T.cards=T.cards.filter(g=>g.id!=h),x.find(g=>g.id==u).cards.splice(Number(l),0,S),b=x,await i.TrelloLists.put("lists",JSON.stringify(b))}}catch(x){console.error(x)}return{lists:b}}var pe={async fetch(e,t,i){return new N([["/",async s=>_(await j(s))],["/lists",async s=>o(w(await V(s))),"POST"],["/lists/add",J],["/lists/cancel",()=>o(k)],["/lists/:list_id",async s=>(await U(s),o("")),"DELETE"],["/cards/move",async s=>o(w(await Q(s))),"POST"],["/cards/new/:list_id",async s=>o(M(await X(s))),"POST"],["/cards/cancel/:id",async s=>o(C(await G(s)))],["/cards/add/:id",async s=>o($(await q(s)))],["/cards/edit/:list_id/:id",async s=>o(R(await K(s)))],["/cards/:list_id/:id",async s=>o(v(await D(s))),"PUT"],["/cards/:list_id/:id",async s=>(await F(s),o("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async s=>o(v(await B(s)))]]).handle({request:e,env:t,ctx:i})},async scheduled(e,t,i){return z({event:e,env:t,ctx:i})}};export{pe as default};
