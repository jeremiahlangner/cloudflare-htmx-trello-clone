var r=class{routes;constructor(t=[]){this.routes=[];for(let e of t)this.register(...e)}register(t,e,s="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:s,handler:e})}handle(t){for(let e of this.routes){if(e.method!==t.method)continue;if(e.path.exec({pathname:new URL(t.url).pathname}))return e.handler(t)}return new Response("Not found",{status:404})}};function d(n){return`
<div>

</div>
  `}var a=d;function i(n){return`
<div>

</div>
  `}var o=i;var u=new r([["/add",a],["/",o,"POST"],["cancel",o]]),R=u.handle;export{R as default};
