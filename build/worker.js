var f=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,i="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:i,handler:t})}handle(e){let{request:t}=e;for(let i of this.routes){if(i.method!==t.method)continue;let o=i.path.exec({pathname:new URL(t.url).pathname});if(o)return i.handler({...e,route:o})}return new Response("Not found",{status:404})}};var T=`
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
`,x=T;function v(e){return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTMX Trello Clone</title>
    <style>
      ${x}
    </style>
  </head>
  <body>
    ${e.template}
  </body>
</html>
  `}var c=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
`,p=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
`,h=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
`;function R(e){let{list:t}=e;return`
<button 
  class="toggle-add-card"
  id="btn-add-card-${t.id}"
  type="button" 
  _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
  >
  ${c}
  <span> Add another card</span>
</button>
`}var u=R;function S(e){let{list:t}=e;return`
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
      _="on htmx:afterOnLoad toggle .hidden on #add-card-${t.id} toggle .hidden on #btn-add-card-${t.id}"
    >
      Add card
    </button>
    <div class="edit-button-cancel" tabindex="0" 
      _="on click toggle .hidden on #add-card-${t.id} toggle .hidden on #btn-add-card-${t.id}"
    >
      ${p}
    </div>
  </div>
</div>
  `}var w=S;var z=`
<div id="add-list" class="add-list-button"
  hx-get="/lists/add" 
  hx-swap="outerHTML"
  hx-target="#add-list"
>
${c} Add another list
<div>
  `,m=z;var A=[{name:"To Do",id:1,cards:[{id:1,label:"First Card",list:1},{id:2,label:"Second Card",list:1}]},{name:"Doing",id:2,cards:[{id:3,label:"First Card",list:2},{id:4,label:"Second Card",list:2}]}],y=A;async function I(e){let{request:t,route:i}=e,{from:o,to:d,movedCard:g}=await t.json(),[,r]=o.split("-"),[,E]=d.split("-"),q=g.replace("card-",""),U={},s="";for(let a of y){s+=`
<div class="list" draggable="true">
  <div class="list-title">
    ${a.name}
    <div class="list-cards sortable" id="list-${a.id}">
    `;for(let n of a.cards)s+=`
<div 
  class="card" 
  id="card-${n.id}" 
  tabindex="0" 
  aria-roledescription="Draggable item. Press space bar to lif" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${n.id} until mouseleave"
  >
  <div class="card-icons hidden" id="card-edit-${n.id}">
    <button class="card-icon" type="button" hx-get="/cards/edit/${a.id}/${n.id}" hx-target"#card-${n.id}" hx-swap="outerHTML">
      ${h}
    </button>
  </div>
  ${n.label}
</div>
      `;s+=`
    </div>
  </div>
  ${u({list:a})}
  ${w({list:a})}
</div>
    `}return s+=`
<div class="add-list">
  ${m}
</div>
  `,s}var l=I;function P(e){let{request:t,ctx:i,env:o}=e,d=v({template:`
    <div class="app">
      <div class="header">
        htmx Trello Clone
      </div>

      <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
        <input id="fromList" type="hidden" name="from">
        <input id="toList" type="hidden" name="to">
        <input id="movedCard" type="hidden" name="movedCard">
        <div id="board" class="board sortable" _="on end put event.from.id into #fromList.value put event.to.id into #toList.value put event.item.id into #movedCard.value then send cardmoved">

          ${l({request:t,ctx:i,env:o})}
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
    `});return new Response(d,{headers:{"content-type":"text/html;charset=UTF-8"}})}var k=P;function M(e){return new Response(`
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
        type="button",
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
  `,{headers:{"content-type":"text/html;charset=UTF-8"}})}var $=M;function C(e){let t="";for(;e[t];)t=Math.random().toString(16).substring(2,15);return t}var b={headers:{"content-type":"text/html;charset=UTF-8"}};function H(e){let{request:t,route:i}=e,o=i.pathname.groups.list_id,d=t.body["label-"+o],g={id:o,cards:[]},r={label:d,id:C({}),list:o};return g.cards.push(r),new Response(`
<div id="edit-card">
</div>
<div 
  class="card"
  id="card-${r.id}
  tabindex="0"
  aria-roledescription="Draggable item. Press space bar to lift" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${r.id} until mouseleave"
> 
  <div class="card-icons hidden" id="card-edit-${r.id}">
    <button 
      class="card-icon"
      type="button"
      hx-get="/cards/edit/${o}/${r.id} 
      hx-target="#card-${r.id} 
      hx-swap="outerHTML"
    >
      ${h}
    </button>
  </div>
  ${r.label}
</div>
    `,{headers:{"content-type":"text/html;charset=UTF-8"}})}var L=H;var vt={async fetch(e,t,i){return new f([["/",k],["/",l,"POST"],["/cards/move",d=>new Response(l(d),b),"POST"],["/cards/new/:list_id",L,"POST"],["/cards/cancel/:id",u],["/lists/add",$],["/lists/cancel",()=>new Response(m,b)]]).handle({request:e,env:t,ctx:i})}};export{vt as default};
