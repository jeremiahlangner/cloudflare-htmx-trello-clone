var $=class{name="";store=Promise.resolve();constructor(t,s){if(console.log("setting up"),s)return s;this.name=t,this.store=new Promise((i,a)=>{let r=indexedDB.open(this.name,1);r.onerror=()=>a(r.error),r.onupgradeneeded=()=>r.result.createObjectStore(this.name),r.onsuccess=()=>i(r.result)})}async get(t){let s=await this.store;return new Promise((i,a)=>{let r=s.transaction("keyval","readonly"),n=r.objectStore(this.name).get(t);r.oncomplete=()=>i(n.result),r.onerror=()=>a(r.error)})}async put(t,s){let i=await this.store;return new Promise((a,r)=>{let n=i.transaction("keyval","readwrite"),d=n.objectStore(this.name).put(s,t);n.oncomplete=()=>a(d),n.onerror=()=>r(n.error)})}async delete(t){let s=await this.store;return new Promise((i,a)=>{let r=s.transaction("keyval","readonly"),n=r.objectStore(this.name).delete(t);r.oncomplete=()=>i(n),r.onerror=()=>a(r.error)})}},O=$;var N=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,s="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:s,handler:t})}handle(e){let{request:t}=e;for(let s of this.routes){if(s.method!==t.method)continue;let i=s.path.exec({pathname:new URL(t.url).pathname});if(i)return s.handler({...e,route:i})}return new Response("Not found",{status:404})}};function o(e,...t){return String.raw({raw:e},...t)}function A(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function c(e){return new Response(W(e),{headers:{"content-type":"text/html;charset=UTF-8"}})}function W(e){return e=e.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g," ").trim(),e}var x=o`
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
`,b=o`
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
`,E=o`
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
`;function z(){return c(o`
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
            ${b}
          </button>
        </div>
      </form>
    </div>
  `)}var P=z;function V(e){let{list:t}=e;return o`
    <button
      class="toggle-add-card"
      id="btn-add-card-${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${t.id}"
    >
      ${x}
      <span> Add another card</span>
    </button>
  `}var C=V;function G(e){let{list:t}=e;return o`
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
          ${b}
        </div>
      </div>
    </div>
  `}var k=G;var X=o`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    ${x} Add another list
    <div></div>
  </div>
`,T=X;function K(e){let{list:t,card:s}=e;return o`
    <div
      class="card"
      id="card-${s.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-${s.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-${s.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/${t.id}/${s.id}"
          hx-target="#card-${s.id}"
          hx-swap="outerHTML"
        >
          ${E}
        </button>
      </div>
      ${s.label}
    </div>
  `}var y=K;function Q(e){let t=o``;for(let s of e.cards)t+=o`${y({list:e,card:s})}`;return t}function Y(e){let{lists:t}=e,s=o``;for(let i of t)s+=o`
      <div class="list" draggable="true" id="lists-list-${i.id}">
        <div class="list-title">${i.name}</div>

        <div class="list-cards sortable" id="list-${i.id}">
          ${Q(i)}
        </div>
        ${C({list:i})} ${k({list:i})}
      </div>
    `;return s+=o` <div class="add-list">${T}</div> `,s}var L=Y;function Z(e){let{list:t,card:s}=e;return o`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${t.id}/${s.id}"
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
${s.label}</textarea
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
            hx-delete="/cards/${t.id}/${s.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${t.id}/${s.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${b}
          </div>
        </div>
      </form>
    </div>
  `}var J=Z;async function _(e){let{route:t,env:s}=e,{list_id:i}=t.pathname.groups,a=JSON.parse(await s.TrelloLists.get("lists"));return a=a.filter(r=>r.id!==i),await s.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function I(e){let{request:t,env:s,route:i}=e,{list_id:a,id:r}=i.pathname.groups,n=new URLSearchParams(await t.text()),d=Object.fromEntries(n),{label:l}=d,h=JSON.parse(await s.TrelloLists.get("lists")),f=h.find(v=>v.id===a),p=f.cards.find(v=>v.id===r);return p.label=l,await s.TrelloLists.put("lists",JSON.stringify(h)),{list:f,card:p}}async function R(e){let{env:t,route:s}=e,{list_id:i,id:a}=s.pathname.groups,n=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===i),d=n.cards.find(l=>l.id===a);return{list:n,card:d}}async function M(e){let{env:t,route:s}=e,{list_id:i,id:a}=s.pathname.groups,r=JSON.parse(await t.TrelloLists.get("lists")),n=r.find(d=>d.id===i);n.cards=n.cards.filter(d=>d.id!==a),await t.TrelloLists.put("lists",JSON.stringify(r))}async function j(e){let{request:t,env:s}=e,i=new URLSearchParams(await t.text()),a=Object.fromEntries(i),{name:r}=a,n=JSON.parse(await s.TrelloLists.get("lists"));return n.push({name:r,id:A({}),cards:[]}),await s.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function D(e){let{request:t,route:s,env:i}=e,a=JSON.parse(await i.TrelloLists.get("lists")),{list_id:r}=s.pathname.groups,n=new URLSearchParams(await t.text()),l=Object.fromEntries(n)["label-"+r],h=a.find(p=>p.id===r),f={label:l,id:A({}),list:r};return h.cards.push(f),await i.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function U(e){let{env:t,route:s}=e,i=s.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(n=>n.id===i)}}async function q(e){let{env:t,route:s}=e,{list_id:i,id:a}=s.pathname.groups,n=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===i),d=n.cards.find(l=>l.id===a);return{list:n,card:d}}async function B(e){let{request:t,env:s}=e,i=new URLSearchParams(await t.text()),a=Object.fromEntries(i),{from:r,to:n,movedCard:d,index:l,prevIndex:h}=a,[,f]=r.split("-"),[,p]=n.split("-"),v=d.replace("card-",""),u=JSON.parse(await s.TrelloLists.get("lists"));try{if(r==="board"&&n==="board"){let m=u[h];u=u.filter(w=>w.id!==m.id),u.splice(l,0,m),await s.TrelloLists.put("lists",JSON.stringify(u))}else{let m=JSON.parse(JSON.stringify(u)),w=m.find(g=>g.id===f),H=w.cards.find(g=>g.id==v);H.list=p,w.cards=w.cards.filter(g=>g.id!=v),m.find(g=>g.id==p).cards.splice(Number(l),0,H),u=m,await s.TrelloLists.put("lists",JSON.stringify(u))}}catch(m){console.error(m)}return{lists:u}}var tt="cacheName",F="0",S;S||(S=new O("trelloClone",S));self.addEventListener("install",e=>{e.waitUntil(caches.open(F+tt).then(t=>t.addAll(["/db/lists"])))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.filter(s=>s.indexOf(F)!==0).map(s=>caches.delete(s)))))});self.addEventListener("fetch",e=>e.respondWith((async()=>{let t=e.request,s={TrelloLists:S},i=void 0;return new N([["/lists",async r=>c(L(await j(r))),"POST"],["/lists/add",P],["/lists/cancel",()=>c(T)],["/lists/:list_id",async r=>c(L(await _(r))),"DELETE"],["/cards/move",async r=>c(L(await B(r))),"POST"],["/cards/new/:list_id",async r=>c(L(await D(r))),"POST"],["/cards/cancel/:id",async r=>c(C(await U(r)))],["/cards/edit/:list_id/:id",async r=>c(J(await q(r)))],["/cards/:list_id/:id",async r=>c(y(await I(r))),"PUT"],["/cards/:list_id/:id",async r=>(await M(r),c("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async r=>c(y(await R(r)))]]).handle({request:t,env:s,ctx:i})})()));
