var d=class{routes;constructor(t=[]){this.routes=[];for(let e of t)this.register(...e)}register(t,e,o="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:o,handler:e})}handle(t){for(let e of this.routes){if(e.method!==t.method)continue;if(e.path.exec({pathname:new URL(t.url).pathname}))return e.handler(t)}return new Response("Not found",{status:404})}};function h(r){let{request:t,ctx:e,env:o}=r,i=[];for(let c of i){let v=`
<div class="list" draggable="true">
  <div class="list-title" id="${c.name}"></div>
</div>
  `}}var s=h;function m(r){let{request:t,ctx:e,env:o}=r,i=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Serverless Trello in HTMX</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="app">
      <div class="header">
        htmx Trello Clone
      </div>

      <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
        <input id="fromList type="hidden" name="from">
        <input id="toList" type="hidden" name="to">
        <input id="movedCard" type="hidden" name="movedCard">
        <div id="board" class="board sortable">
          ${s({request:t,ctx:e,env:o})}
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
  </body>
</html>
  `;return new Response(i,{})}var a=m;function p(r){return`
<div>

</div>
  `}var n=p;function u(r){return`
<div>

</div>
  `}var l=u;var f=new d([["/",a],["/",s,"POST"],["/add",n],["cancel",l],["/add/:id",AddCard],["/edit/:list_id/:id",EditCard],["/:list_id/:id",Card,"PUT"],["/cancel/:id",ToggleAddCard],["/cancel-edit/:list_id/:id",Card],["/:list_id/:id",List,"DELETE"],["/move",s,"POST"],["/new/:list_id",NewCard,"POST"]]),L=f.handle;export{L as default};
