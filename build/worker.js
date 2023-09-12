var C=class{routes;constructor(i=[]){this.routes=[];for(let t of i)this.register(...t)}register(i,t,e="GET"){this.routes.push({path:new URLPattern({pathname:i}),method:e,handler:t})}handle(i){let{request:t}=i;for(let e of this.routes){if(e.method!==t.method)continue;let r=e.path.exec({pathname:new URL(t.url).pathname});if(r)return e.handler({...i,route:r})}return new Response("Not found",{status:404})}};var T={styles:`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{background:rgba(0,0,0,.15);color:#fff;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.12);text-align:center;font-size:40px;font-weight:200}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};function A(i){return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTMX Trello Clone</title>
    <style>
      ${T.styles}
    </style>
  </head>
  <body>
    ${i.template}
  </body>
</html>
  `}var x=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
`,f=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
`,h=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
`;function L(i){let t="";do t=Math.random().toString(16).substring(2,15);while(i[t]);return t}async function o(i){return new Response(i,{headers:{"content-type":"text/html;charset=UTF-8"}})}function E(i){let{list:t}=i;return`
<button 
  class="toggle-add-card"
  id="btn-add-card-${t.id}"
  type="button" 
  _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
  >
  ${x}
  <span> Add another card</span>
</button>
`}var v=E;function M(i){let{list:t}=i;return`
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
    <input type="hidden" name="listId" value="id">
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
      _="on click toggle .hidden on #add-card-${t.id} toggle .hidden on #btn-add-card-${t.id}"
    >
      Add card
    </button>
    <div class="edit-button-cancel" tabindex="0" 
      _="on click toggle .hidden on #add-card-${t.id} toggle .hidden on #btn-add-card-${t.id}"
    >
      ${f}
    </div>
  </div>
</div>
  `}var w=M;var _=`
<div id="add-list" class="add-list-button"
  hx-get="/lists/add" 
  hx-swap="outerHTML"
  hx-target="#add-list"
>
${x} Add another list
<div>
`,y=_;function I(i){let{lists:t}=i,e="";for(let r of t){e+=`
<div class="list" draggable="true">
  <div class="list-title">
    ${r.name}
    <div class="list-cards sortable" id="list-${r.id}">
    `;for(let s of r.cards)e+=`
<div 
  class="card" 
  id="card-${s.id}" 
  tabindex="0" 
  aria-roledescription="Draggable item. Press space bar to lif" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${s.id} until mouseleave"
  >
  <div class="card-icons hidden" id="card-edit-${s.id}">
    <button class="card-icon" 
      type="button" 
      hx-get="/cards/edit/${r.id}/${s.id}" 
      hx-target"#card-${s.id}" 
      hx-swap="outerHTML"
    >
      ${h}
    </button>
  </div>
  ${s.label}
</div>
      `;e+=`
    </div>
  </div>
  ${v({list:r})}
  ${w({list:r})}
</div>
    `}return e+=`
<div class="add-list">
  ${y}
</div>
  `,e}var b=I;function R(i){return console.log(JSON.stringify(i)),o(A({template:`
    <div class="app">
      <div class="header">
        htmx Trello Clone
      </div>

      <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
        <input id="fromList" type="hidden" name="from">
        <input id="toList" type="hidden" name="to">
        <input id="movedCard" type="hidden" name="movedCard">
        <div 
          id="board" 
          class="board sortable" 
          _="on end put event.from.id into #fromList.value put event.to.id into #toList.value put event.item.id into #movedCard.value then send cardmoved">
          ${b(i)}
        </div>
      </form>
    </div>
    <script src="https://unpkg.com/htmx.org"><\/script>
    <script src="https://unpkg.com/hyperscript.org"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\/script>
    <!-- <script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"><\/script> -->
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
    `}))}var H=R;function z(){return o(`
<div id="add-list" class="add-list-editor">
  <form
    hx-post="/lists"
    hx-target="#board"
  >
    <div class="list-title-edit">
      <input class="list-title-textarea" 
        type="text" 
        maxlength="30"
        name="name"
        placeholder="Enter list title..." 
        style="width: 245px; height: 17px;" 
        autofocus="true"
      >
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
        ${f}
      </button>
    </div>
  </form>
</div>
  `)}var S=z;function J(i){let{list:t,card:e}=i;return`
<div id="edit-card">
</div>
<div 
  class="card"
  id="card-${e.id}
  tabindex="0"
  aria-roledescription="Draggable item. Press space bar to lift" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${e.id} until mouseleave"
> 
  <div class="card-icons hidden" id="card-edit-${e.id}">
    <button 
      class="card-icon"
      type="button"
      hx-get="/cards/edit/${t.id}/${e.id} 
      hx-target="#card-${e.id} 
      hx-swap="outerHTML"
    >
      ${h}
    </button>
  </div>
  ${e.label}
</div>
  `}var O=J;function j(i){let{list:t,card:e}=i;return`
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
      > ${e.label} </textarea>
      <input type="hidden" name="listId" value="id">
    </div>
    <div class="edit-buttons">
      <button 
        class="edit-button"
        type="submit" 
        tabindex="0" 
        style="background-color: rgb(90, 172, 68);"
        _="on htmx:afterOnLoad remove #edit-card"
      > Save </button>
      <button class="edit-button"
        type="button" 
        tabindex="0" 
        style="background-color: rgb(234, 37, 37);"
        hx-delete="/cards/${t.id}/${e.id}"
        _="on htmx:afterOnLoad remove #edit-card"
      > Delete </button>
      <div class="edit-button-cancel" 
        tabindex="0" 
        hx-get="/cards/cancel-edit/${t.id}/${e.id}" 
        hx-target="#edit-card"
        hx-swap="outerHTML"
      >
        ${f}
      </div>
    </div>
  </form>
</div>
  `}var N=j;function U(i){let{list:t,card:e}=i;return`
<div 
  class="card" 
  id="card-${e.id}" 
  tabindex="0" 
  aria-roledescription="Draggable item. Press space bar to lift" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${e.id} until mouseleave"
>   
 <div class="card-icons hidden" id="card-edit-${e.id}">
  <button class="card-icon" type="button" hx-get="/cards/edit/${t.id}/${e.id}" hx-target="#card-${e.id} hx-swap="outerHTML">
    ${h}  
  </button>
  <div id="${e.label}"></div>
  </div>
</div>
  `}var $=U;async function q(i){let{request:t,env:e}=i,r=new URLSearchParams(await t.text()),s=Object.fromEntries(r),{from:d,to:a,movedCard:n}=s,[,c]=d.split("-"),[,l]=a.split("-"),g=n.replace("card-",""),p=JSON.parse(await e.TrelloLists.get("lists"));try{let u=p.find(m=>m.id===c),k=u.cards.find(m=>m.id==g);k.list=l,u.cards=u.cards.filter(m=>m.id!=g),p.find(m=>m.id==l).cards.push(k)}catch(u){console.error(u)}return await e.TrelloLists.put("lists",JSON.stringify(p)),{lists:p}}async function B(i){let{env:t}=i;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function D(i){let{request:t,env:e,route:r}=i,{list_id:s,id:d}=r.pathname.groups,a=new URLSearchParams(await t.text()),n=Object.fromEntries(a),{label:c}=n,l=JSON.parse(await e.TrelloLists.get("lists")),g=l.find(u=>u.id===s),p=g.find(u=>u.id===d);return p.label=c,await e.TrelloLists.put("lists",l),{list:g,card:p}}async function F(i){let{request:t,env:e,route:r}=i,{list_id:s,id:d}=r.pathname.groups,n=JSON.parse(await e.TrelloLists.get("lists")).find(l=>l.id===s),c=n.find(l=>l.id===d);return{list:n,card:c}}async function V(i){let{env:t,route:e}=i,{id:r}=e.pathname.groups;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(a=>a.id===r)}}async function X(i){let{env:t,route:e}=i,{list_id:r,id:s}=e.pathname.groups,d=JSON.parse(await t.TrelloLists.get("lists")),a=d.find(n=>n.id===r);a.cards=d.cards.filter(n=>n.id!==s),await t.TrelloLists.put("lists",d)}async function G(i){let{request:t,env:e}=i,r=new URLSearchParams(await t.text()),s=Object.fromEntries(r),{name:d}=s,a=JSON.parse(await e.TrelloLists.get("lists"));return a.push({name:d,id:L({}),cards:[]}),await e.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function Y(i){let{request:t,route:e,env:r}=i,s=JSON.parse(await r.TrelloLists.get("lists")),{list_id:d}=e.pathname.groups,a=new URLSearchParams(await t.text()),c=Object.fromEntries(a)["label-"+d],l=s.find(p=>p.id==d),g={label:c,id:L({}),list:d};return l.cards.push(g),await r.TrelloLists.put("lists",JSON.stringify(s)),{list:l,card:g}}async function K(i){let{env:t,route:e}=i,r=e.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(a=>a.id===r)}}async function Q(i){let{env:t,route:e}=i,{list_id:r,id:s}=e.pathname.groups,a=JSON.parse(await t.TrelloLists.get("lists")).find(c=>c.id===r),n=a.cards.find(c=>c.id===s);return{list:a,card:n}}var Ut={async fetch(i,t,e){return new C([["/",async s=>H(await B(s))],["/lists",async s=>o(b(await G(s))),"POST"],["/cards/move",async s=>o(b(await q(s))),"POST"],["/cards/new/:list_id",async s=>o(O(await Y(s))),"POST"],["/cards/cancel/:id",async s=>o(v(await K(s)))],["/lists/add",S],["/lists/cancel",()=>o(y)],["/cards/add/:id",async s=>o(w(await V(s)))],["/cards/edit/:list_id/:id",async s=>o(N(await Q(s)))],["/cards/:list_id/:id",async s=>o($(await D(s))),"PUT"],["/cards/cancel-edit/:list_id/:id",async s=>o($(await F(s)))],["/cards/:list_id/:id",async s=>(await X(s),o("")),"DELETE"]]).handle({request:i,env:t,ctx:e})}};export{Ut as default};
