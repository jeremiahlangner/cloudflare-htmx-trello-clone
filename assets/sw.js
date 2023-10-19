var et=Object.freeze,st=Object.defineProperty;var it=(t,e)=>()=>(t&&(e=t(t=0)),e);var Mt=(t,e)=>{for(var s in e)st(t,s,{get:e[s],enumerable:!0})};var J=(t,e)=>et(st(t,"raw",{value:et(e||t.slice())}));function zt(t,e){return(e?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(t)}function ot(t,e=!1){let s=[],r=0;for(;r<t.length;){let o=t[r],a=function(n){if(!e)throw new TypeError(n);s.push({type:"INVALID_CHAR",index:r,value:t[r++]})};if(o==="*"){s.push({type:"ASTERISK",index:r,value:t[r++]});continue}if(o==="+"||o==="?"){s.push({type:"OTHER_MODIFIER",index:r,value:t[r++]});continue}if(o==="\\"){s.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});continue}if(o==="{"){s.push({type:"OPEN",index:r,value:t[r++]});continue}if(o==="}"){s.push({type:"CLOSE",index:r,value:t[r++]});continue}if(o===":"){let n="",i=r+1;for(;i<t.length;){let l=t.substr(i,1);if(i===r+1&&Dt.test(l)||i!==r+1&&Jt.test(l)){n+=t[i++];continue}break}if(!n){a(`Missing parameter name at ${r}`);continue}s.push({type:"NAME",index:r,value:n}),r=i;continue}if(o==="("){let n=1,i="",l=r+1,d=!1;if(t[l]==="?"){a(`Pattern cannot start with "?" at ${l}`);continue}for(;l<t.length;){if(!zt(t[l],!1)){a(`Invalid character '${t[l]}' at ${l}.`),d=!0;break}if(t[l]==="\\"){i+=t[l++]+t[l++];continue}if(t[l]===")"){if(n--,n===0){l++;break}}else if(t[l]==="("&&(n++,t[l+1]!=="?")){a(`Capturing groups are not allowed at ${l}`),d=!0;break}i+=t[l++]}if(d)continue;if(n){a(`Unbalanced pattern at ${r}`);continue}if(!i){a(`Missing pattern at ${r}`);continue}s.push({type:"REGEX",index:r,value:i}),r=l;continue}s.push({type:"CHAR",index:r,value:t[r++]})}return s.push({type:"END",index:r,value:""}),s}function lt(t,e={}){let s=ot(t);e.delimiter??="/#?",e.prefixes??="./";let r=`[^${y(e.delimiter)}]+?`,o=[],a=0,n=0,i="",l=new Set,d=p=>{if(n<s.length&&s[n].type===p)return s[n++].value},h=()=>d("OTHER_MODIFIER")??d("ASTERISK"),u=p=>{let m=d(p);if(m!==void 0)return m;let{type:x,index:I}=s[n];throw new TypeError(`Unexpected ${x} at ${I}, expected ${p}`)},g=()=>{let p="",m;for(;m=d("CHAR")??d("ESCAPED_CHAR");)p+=m;return p},v=p=>p,b=e.encodePart||v,$="",A=p=>{$+=p},D=()=>{$.length&&(o.push(new _(3,"","",b($),"",3)),$="")},k=(p,m,x,I,S)=>{let L=3;switch(S){case"?":L=1;break;case"*":L=0;break;case"+":L=2;break}if(!m&&!x&&L===3){A(p);return}if(D(),!m&&!x){if(!p)return;o.push(new _(3,"","",b(p),"",L));return}let w;x?x==="*"?w=X:w=x:w=r;let H=2;w===r?(H=1,w=""):w===X&&(H=0,w="");let T;if(m?T=m:x&&(T=a++),l.has(T))throw new TypeError(`Duplicate name '${T}'.`);l.add(T),o.push(new _(H,T,b(p),w,b(I),L))};for(;n<s.length;){let p=d("CHAR"),m=d("NAME"),x=d("REGEX");if(!m&&!x&&(x=d("ASTERISK")),m||x){let S=p??"";e.prefixes.indexOf(S)===-1&&(A(S),S=""),D();let L=h();k(S,m,x,"",L);continue}let I=p??d("ESCAPED_CHAR");if(I){A(I);continue}if(d("OPEN")){let S=g(),L=d("NAME"),w=d("REGEX");!L&&!w&&(w=d("ASTERISK"));let H=g();u("CLOSE");let T=h();k(S,L,w,H,T);continue}D(),u("END")}return o}function y(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function nt(t){return t&&t.ignoreCase?"ui":"u"}function Ft(t,e,s){return dt(lt(t,s),e,s)}function N(t){switch(t){case 0:return"*";case 1:return"?";case 2:return"+";case 3:return""}}function dt(t,e,s={}){s.delimiter??="/#?",s.prefixes??="./",s.sensitive??=!1,s.strict??=!1,s.end??=!0,s.start??=!0,s.endsWith="";let r=s.start?"^":"";for(let i of t){if(i.type===3){i.modifier===3?r+=y(i.value):r+=`(?:${y(i.value)})${N(i.modifier)}`;continue}e&&e.push(i.name);let l=`[^${y(s.delimiter)}]+?`,d=i.value;if(i.type===1?d=l:i.type===0&&(d=X),!i.prefix.length&&!i.suffix.length){i.modifier===3||i.modifier===1?r+=`(${d})${N(i.modifier)}`:r+=`((?:${d})${N(i.modifier)})`;continue}if(i.modifier===3||i.modifier===1){r+=`(?:${y(i.prefix)}(${d})${y(i.suffix)})`,r+=N(i.modifier);continue}r+=`(?:${y(i.prefix)}`,r+=`((?:${d})(?:`,r+=y(i.suffix),r+=y(i.prefix),r+=`(?:${d}))*)${y(i.suffix)})`,i.modifier===0&&(r+="?")}let o=`[${y(s.endsWith)}]|$`,a=`[${y(s.delimiter)}]`;if(s.end)return s.strict||(r+=`${a}?`),s.endsWith.length?r+=`(?=${o})`:r+="$",new RegExp(r,nt(s));s.strict||(r+=`(?:${a}(?=${o}))?`);let n=!1;if(t.length){let i=t[t.length-1];i.type===3&&i.modifier===3&&(n=s.delimiter.indexOf(i)>-1)}return n||(r+=`(?=${a}|${o})`),new RegExp(r,nt(s))}function Bt(t,e){return t.length?t[0]==="/"?!0:!e||t.length<2?!1:(t[0]=="\\"||t[0]=="{")&&t[1]=="/":!1}function ct(t,e){return t.startsWith(e)?t.substring(e.length,t.length):t}function Vt(t,e){return t.endsWith(e)?t.substr(0,t.length-e.length):t}function ht(t){return!t||t.length<2?!1:t[0]==="["||(t[0]==="\\"||t[0]==="{")&&t[1]==="["}function ut(t){if(!t)return!0;for(let e of pt)if(t.test(e))return!0;return!1}function Gt(t,e){if(t=ct(t,"#"),e||t==="")return t;let s=new URL("https://example.com");return s.hash=t,s.hash?s.hash.substring(1,s.hash.length):""}function Xt(t,e){if(t=ct(t,"?"),e||t==="")return t;let s=new URL("https://example.com");return s.search=t,s.search?s.search.substring(1,s.search.length):""}function Kt(t,e){return e||t===""?t:ht(t)?gt(t):mt(t)}function Zt(t,e){if(e||t==="")return t;let s=new URL("https://example.com");return s.password=t,s.password}function Qt(t,e){if(e||t==="")return t;let s=new URL("https://example.com");return s.username=t,s.username}function Yt(t,e,s){if(s||t==="")return t;if(e&&!pt.includes(e))return new URL(`${e}:${t}`).pathname;let r=t[0]=="/";return t=new URL(r?t:"/-"+t,"https://example.com").pathname,r||(t=t.substring(2,t.length)),t}function te(t,e,s){return ft(e)===t&&(t=""),s||t===""?t:bt(t)}function ee(t,e){return t=Vt(t,":"),e||t===""?t:K(t)}function ft(t){switch(t){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function K(t){if(t==="")return t;if(/^[-+.A-Za-z0-9]*$/.test(t))return t.toLowerCase();throw new TypeError(`Invalid protocol '${t}'.`)}function se(t){if(t==="")return t;let e=new URL("https://example.com");return e.username=t,e.username}function ie(t){if(t==="")return t;let e=new URL("https://example.com");return e.password=t,e.password}function mt(t){if(t==="")return t;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(t))throw new TypeError(`Invalid hostname '${t}'`);let e=new URL("https://example.com");return e.hostname=t,e.hostname}function gt(t){if(t==="")return t;if(/[^0-9a-fA-F[\]:]/g.test(t))throw new TypeError(`Invalid IPv6 hostname '${t}'`);return t.toLowerCase()}function bt(t){if(t===""||/^[0-9]*$/.test(t)&&parseInt(t)<=65535)return t;throw new TypeError(`Invalid port '${t}'.`)}function re(t){if(t==="")return t;let e=new URL("https://example.com");return e.pathname=t[0]!=="/"?"/-"+t:t,t[0]!=="/"?e.pathname.substring(2,e.pathname.length):e.pathname}function ne(t){return t===""?t:new URL(`data:${t}`).pathname}function ae(t){if(t==="")return t;let e=new URL("https://example.com");return e.search=t,e.search.substring(1,e.search.length)}function oe(t){if(t==="")return t;let e=new URL("https://example.com");return e.hash=t,e.hash.substring(1,e.hash.length)}function at(t,e){if(typeof t!="string")throw new TypeError("parameter 1 is not of type 'string'.");let s=new URL(t,e);return{protocol:s.protocol.substring(0,s.protocol.length-1),username:s.username,password:s.password,hostname:s.hostname,port:s.port,pathname:s.pathname,search:s.search!==""?s.search.substring(1,s.search.length):void 0,hash:s.hash!==""?s.hash.substring(1,s.hash.length):void 0}}function C(t,e){return e?j(t):t}function U(t,e,s){let r;if(typeof e.baseURL=="string")try{r=new URL(e.baseURL),t.protocol=C(r.protocol.substring(0,r.protocol.length-1),s),t.username=C(r.username,s),t.password=C(r.password,s),t.hostname=C(r.hostname,s),t.port=C(r.port,s),t.pathname=C(r.pathname,s),t.search=C(r.search.substring(1,r.search.length),s),t.hash=C(r.hash.substring(1,r.hash.length),s)}catch{throw new TypeError(`invalid baseURL '${e.baseURL}'.`)}if(typeof e.protocol=="string"&&(t.protocol=ee(e.protocol,s)),typeof e.username=="string"&&(t.username=Qt(e.username,s)),typeof e.password=="string"&&(t.password=Zt(e.password,s)),typeof e.hostname=="string"&&(t.hostname=Kt(e.hostname,s)),typeof e.port=="string"&&(t.port=te(e.port,t.protocol,s)),typeof e.pathname=="string"){if(t.pathname=e.pathname,r&&!Bt(t.pathname,s)){let o=r.pathname.lastIndexOf("/");o>=0&&(t.pathname=C(r.pathname.substring(0,o+1),s)+t.pathname)}t.pathname=Yt(t.pathname,t.protocol,s)}return typeof e.search=="string"&&(t.search=Xt(e.search,s)),typeof e.hash=="string"&&(t.hash=Gt(e.hash,s)),t}function j(t){return t.replace(/([+*?:{}()\\])/g,"\\$1")}function de(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function ce(t,e){e.delimiter??="/#?",e.prefixes??="./",e.sensitive??=!1,e.strict??=!1,e.end??=!0,e.start??=!0,e.endsWith="";let s=".*",r=`[^${de(e.delimiter)}]+?`,o=/[$_\u200C\u200D\p{ID_Continue}]/u,a="";for(let n=0;n<t.length;++n){let i=t[n];if(i.type===3){if(i.modifier===3){a+=j(i.value);continue}a+=`{${j(i.value)}}${N(i.modifier)}`;continue}let l=i.hasCustomName(),d=!!i.suffix.length||!!i.prefix.length&&(i.prefix.length!==1||!e.prefixes.includes(i.prefix)),h=n>0?t[n-1]:null,u=n<t.length-1?t[n+1]:null;if(!d&&l&&i.type===1&&i.modifier===3&&u&&!u.prefix.length&&!u.suffix.length)if(u.type===3){let g=u.value.length>0?u.value[0]:"";d=o.test(g)}else d=!u.hasCustomName();if(!d&&!i.prefix.length&&h&&h.type===3){let g=h.value[h.value.length-1];d=e.prefixes.includes(g)}d&&(a+="{"),a+=j(i.prefix),l&&(a+=`:${i.name}`),i.type===2?a+=`(${i.value})`:i.type===1?l||(a+=`(${r})`):i.type===0&&(!l&&(!h||h.type===3||h.modifier!==3||d||i.prefix!=="")?a+="*":a+=`(${s})`),i.type===1&&l&&i.suffix.length&&o.test(i.suffix[0])&&(a+="\\"),a+=j(i.suffix),d&&(a+="}"),i.modifier!==3&&(a+=N(i.modifier))}return a}var _,Dt,Jt,X,R,qt,Wt,pt,le,G,E,Z,xt=it(()=>{_=class{type=3;name="";prefix="";value="";suffix="";modifier=3;constructor(t,e,s,r,o,a){this.type=t,this.name=e,this.prefix=s,this.value=r,this.suffix=o,this.modifier=a}hasCustomName(){return this.name!==""&&typeof this.name!="number"}},Dt=/[$_\p{ID_Start}]/u,Jt=/[$_\u200C\u200D\p{ID_Continue}]/u,X=".*";R={delimiter:"",prefixes:"",sensitive:!0,strict:!0},qt={delimiter:".",prefixes:"",sensitive:!0,strict:!0},Wt={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};pt=["ftp","file","http","https","ws","wss"];le=class{#n;#i=[];#e={};#t=0;#r=1;#p=0;#l=0;#u=0;#f=0;#m=!1;constructor(t){this.#n=t}get result(){return this.#e}parse(){for(this.#i=ot(this.#n,!0);this.#t<this.#i.length;this.#t+=this.#r){if(this.#r=1,this.#i[this.#t].type==="END"){if(this.#l===0){this.#w(),this.#d()?this.#s(9,1):this.#c()?(this.#s(8,1),this.#e.hash=""):(this.#s(7,0),this.#e.search="",this.#e.hash="");continue}else if(this.#l===2){this.#h(5);continue}this.#s(10,0);break}if(this.#u>0)if(this.#S())this.#u-=1;else continue;if(this.#C()){this.#u+=1;continue}switch(this.#l){case 0:this.#y()&&(this.#e.username="",this.#e.password="",this.#e.hostname="",this.#e.port="",this.#e.pathname="",this.#e.search="",this.#e.hash="",this.#h(1));break;case 1:if(this.#y()){this.#R();let t=7,e=1;this.#m&&(this.#e.pathname="/"),this.#L()?(t=2,e=3):this.#m&&(t=2),this.#s(t,e)}break;case 2:this.#b()?this.#h(3):(this.#x()||this.#c()||this.#d())&&this.#h(5);break;case 3:this.#$()?this.#s(4,1):this.#b()&&this.#s(5,1);break;case 4:this.#b()&&this.#s(5,1);break;case 5:this.#T()?this.#f+=1:this.#E()&&(this.#f-=1),this.#k()&&!this.#f?this.#s(6,1):this.#x()?this.#s(7,0):this.#c()?this.#s(8,1):this.#d()&&this.#s(9,1);break;case 6:this.#x()?this.#s(7,0):this.#c()?this.#s(8,1):this.#d()&&this.#s(9,1);break;case 7:this.#c()?this.#s(8,1):this.#d()&&this.#s(9,1);break;case 8:this.#d()&&this.#s(9,1);break;case 9:break;case 10:break}}}#s(t,e){switch(this.#l){case 0:break;case 1:this.#e.protocol=this.#o();break;case 2:break;case 3:this.#e.username=this.#o();break;case 4:this.#e.password=this.#o();break;case 5:this.#e.hostname=this.#o();break;case 6:this.#e.port=this.#o();break;case 7:this.#e.pathname=this.#o();break;case 8:this.#e.search=this.#o();break;case 9:this.#e.hash=this.#o();break;case 10:break}this.#v(t,e)}#v(t,e){this.#l=t,this.#p=this.#t+e,this.#t+=e,this.#r=0}#w(){this.#t=this.#p,this.#r=0}#h(t){this.#w(),this.#l=t}#g(t){return t<0&&(t=this.#i.length-t),t<this.#i.length?this.#i[t]:this.#i[this.#i.length-1]}#a(t,e){let s=this.#g(t);return s.value===e&&(s.type==="CHAR"||s.type==="ESCAPED_CHAR"||s.type==="INVALID_CHAR")}#y(){return this.#a(this.#t,":")}#L(){return this.#a(this.#t+1,"/")&&this.#a(this.#t+2,"/")}#b(){return this.#a(this.#t,"@")}#$(){return this.#a(this.#t,":")}#k(){return this.#a(this.#t,":")}#x(){return this.#a(this.#t,"/")}#c(){if(this.#a(this.#t,"?"))return!0;if(this.#i[this.#t].value!=="?")return!1;let t=this.#g(this.#t-1);return t.type!=="NAME"&&t.type!=="REGEX"&&t.type!=="CLOSE"&&t.type!=="ASTERISK"}#d(){return this.#a(this.#t,"#")}#C(){return this.#i[this.#t].type=="OPEN"}#S(){return this.#i[this.#t].type=="CLOSE"}#T(){return this.#a(this.#t,"[")}#E(){return this.#a(this.#t,"]")}#o(){let t=this.#i[this.#t],e=this.#g(this.#p).index;return this.#n.substring(e,t.index)}#R(){let t={};Object.assign(t,R),t.encodePart=K;let e=Ft(this.#o(),void 0,t);this.#m=ut(e)}},G=["protocol","username","password","hostname","port","pathname","search","hash"],E="*";Z=class{#n;#i={};#e={};#t={};#r={};constructor(t={},e,s){try{let r;if(typeof e=="string"?r=e:s=e,typeof t=="string"){let i=new le(t);if(i.parse(),t=i.result,r===void 0&&typeof t.protocol!="string")throw new TypeError("A base URL must be provided for a relative constructor string.");t.baseURL=r}else{if(!t||typeof t!="object")throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(r)throw new TypeError("parameter 1 is not of type 'string'.")}typeof s>"u"&&(s={ignoreCase:!1});let o={ignoreCase:s.ignoreCase===!0},a={pathname:E,protocol:E,username:E,password:E,hostname:E,port:E,search:E,hash:E};this.#n=U(a,t,!0),ft(this.#n.protocol)===this.#n.port&&(this.#n.port="");let n;for(n of G){if(!(n in this.#n))continue;let i={},l=this.#n[n];switch(this.#e[n]=[],n){case"protocol":Object.assign(i,R),i.encodePart=K;break;case"username":Object.assign(i,R),i.encodePart=se;break;case"password":Object.assign(i,R),i.encodePart=ie;break;case"hostname":Object.assign(i,qt),ht(l)?i.encodePart=gt:i.encodePart=mt;break;case"port":Object.assign(i,R),i.encodePart=bt;break;case"pathname":ut(this.#i.protocol)?(Object.assign(i,Wt,o),i.encodePart=re):(Object.assign(i,R,o),i.encodePart=ne);break;case"search":Object.assign(i,R,o),i.encodePart=ae;break;case"hash":Object.assign(i,R,o),i.encodePart=oe;break}try{this.#r[n]=lt(l,i),this.#i[n]=dt(this.#r[n],this.#e[n],i),this.#t[n]=ce(this.#r[n],i)}catch{throw new TypeError(`invalid ${n} pattern '${this.#n[n]}'.`)}}}catch(r){throw new TypeError(`Failed to construct 'URLPattern': ${r.message}`)}}test(t={},e){let s={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return!1;try{typeof t=="object"?s=U(s,t,!1):s=U(s,at(t,e),!1)}catch{return!1}let r;for(r of G)if(!this.#i[r].exec(s[r]))return!1;return!0}exec(t={},e){let s={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return;try{typeof t=="object"?s=U(s,t,!1):s=U(s,at(t,e),!1)}catch{return null}let r={};e?r.inputs=[t,e]:r.inputs=[t];let o;for(o of G){let a=this.#i[o].exec(s[o]);if(!a)return null;let n={};for(let[i,l]of this.#e[o].entries())if(typeof l=="string"||typeof l=="number"){let d=a[i+1];n[l]=d}r[o]={input:s[o]??"",groups:n}}return r}static compareComponent(t,e,s){let r=(i,l)=>{for(let d of["type","modifier","prefix","value","suffix"]){if(i[d]<l[d])return-1;if(i[d]!==l[d])return 1}return 0},o=new _(3,"","","","",3),a=new _(0,"","","","",3),n=(i,l)=>{let d=0;for(;d<Math.min(i.length,l.length);++d){let h=r(i[d],l[d]);if(h)return h}return i.length===l.length?0:r(i[d]??o,l[d]??o)};return!e.#t[t]&&!s.#t[t]?0:e.#t[t]&&!s.#t[t]?n(e.#r[t],[a]):!e.#t[t]&&s.#t[t]?n([a],s.#r[t]):n(e.#r[t],s.#r[t])}get protocol(){return this.#t.protocol}get username(){return this.#t.username}get password(){return this.#t.password}get hostname(){return this.#t.hostname}get port(){return this.#t.port}get pathname(){return this.#t.pathname}get search(){return this.#t.search}get hash(){return this.#t.hash}}});var wt={};Mt(wt,{URLPattern:()=>Z});var yt=it(()=>{xt();globalThis.URLPattern||(globalThis.URLPattern=Z)});var V=class{name="";store=Promise.resolve();constructor(e,s){if(s)return s;this.name=e,this.store=new Promise((r,o)=>{let a=indexedDB.open(this.name,1);a.onerror=()=>o(a.error),a.onupgradeneeded=()=>a.result.createObjectStore(this.name),a.onsuccess=()=>r(a.result)})}async get(e){let s=await this.store;return new Promise((r,o)=>{let a=s.transaction(this.name,"readonly"),n=a.objectStore(this.name).get(e);a.oncomplete=()=>r(n.result),a.onerror=()=>o(a.error)})}async put(e,s){let r=await this.store;return new Promise((o,a)=>{let n=r.transaction(this.name,"readwrite"),i=n.objectStore(this.name).put(s,e);n.oncomplete=()=>o(i),n.onerror=()=>a(n.error)})}async delete(e){let s=await this.store;return new Promise((r,o)=>{let a=s.transaction(this.name,"readwrite"),n=a.objectStore(this.name).delete(e);a.oncomplete=()=>r(n),a.onerror=()=>o(a.error)})}},rt=V;var vt=class{routes=[];constructor(t=[]){globalThis.URLPattern?this.setup(t):Promise.resolve().then(()=>(yt(),wt)).then(()=>this.setup(t))}setup(t){for(let e of t)this.register(...e)}register(t,e,s="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:s,handler:e})}handle(t){let{request:e}=t;for(let s of this.routes){if(s.method!==e.method)continue;let r=s.path.exec({pathname:new URL(e.url).pathname});if(r)return s.handler({...t,route:r})}return new Response("Not found",{status:404})}};function c(t,...e){return String.raw({raw:t},...e)}function Q(t){let e="";do e=Math.random().toString(16).substring(2,15);while(t[e]);return e}async function f(t){return new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}})}var z=c`
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
`,O=c`
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
`,F=c`
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
`,Lt=c`
  <svg
    fill="#ffffff"
    height="12"
    width="12"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 383.748 383.748"
    xml:space="preserve"
  >
    <g>
      <path
        d="M62.772,95.042C90.904,54.899,137.496,30,187.343,30c83.743,0,151.874,68.13,151.874,151.874h30
		C369.217,81.588,287.629,0,187.343,0c-35.038,0-69.061,9.989-98.391,28.888C70.368,40.862,54.245,56.032,41.221,73.593
		L2.081,34.641v113.365h113.91L62.772,95.042z"
      />
      <path
        d="M381.667,235.742h-113.91l53.219,52.965c-28.132,40.142-74.724,65.042-124.571,65.042
		c-83.744,0-151.874-68.13-151.874-151.874h-30c0,100.286,81.588,181.874,181.874,181.874c35.038,0,69.062-9.989,98.391-28.888
		c18.584-11.975,34.707-27.145,47.731-44.706l39.139,38.952V235.742z"
      />
    </g>
  </svg>
`;var $t={styles:`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.disclaimer{font-size:1rem;padding-left:2rem}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.15);color:#fff;border-bottom:1px solid rgba(0,0,0,.12);font-size:40px;font-weight:200;padding:5px 0 5px 20px}.header-buttons{display:flex;margin-right:16px;margin-left:auto}.header-buttons .edit-button{margin:0 0 0 8px}.board{display:-webkit-flex;display:flex;overflow-x:auto;flex-wrap:nowrap;place-content:flex-start}@media all and (max-width: 860px){.board{flex-wrap:wrap}}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{position:relative;cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};var pe=$t.styles,kt;function ue(t){return c(kt||(kt=J([`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
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
  `])),pe,t.template)}var Ct=ue;function fe(t){let{list:e}=t;return c`
    <button
      class="toggle-add-card"
      id="btn-add-card-${e.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-${e.id}"
    >
      ${z}
      <span> Add another card</span>
    </button>
  `}var q=fe;function me(t){let{list:e}=t;return c`
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
          ${O}
        </div>
      </div>
    </div>
  `}var St=me;var ge=c`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    ${z} Add another list
    <div></div>
  </div>
`,W=ge;function be(t){let{list:e,card:s}=t;return c`
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
          hx-get="/cards/edit/${e.id}/${s.id}"
          hx-target="#card-${s.id}"
          hx-swap="outerHTML"
        >
          ${F}
        </button>
      </div>
      ${s.label}
    </div>
  `}var M=be;function xe(t){let e=c``;for(let s of t.cards)e+=c`${M({list:t,card:s})}`;return e}function we(t){let{lists:e}=t,s=c``;for(let r of e)s+=c`
      <div class="list" draggable="true" id="lists-list-${r.id}">
        <div
          class="list-title"
          _="on mouseenter toggle .hidden on #list-edit-${r.id} until mouseleave"
        >
          ${r.name}
          <div class="card-icons hidden" id="list-edit-${r.id}">
            <button
              type="button"
              class="edit-button-cancel"
              tabindex="0"
              hx-delete="/lists/${r.id}"
              hx-target="#board"
              hx-swap="innerHTML"
            >
              ${O}
            </button>

            <button
              class="card-icon"
              type="button"
              hx-get="/cards/edit/${r.id}}"
              hx-target="#list-${r.id}"
              hx-swap="outerHTML"
            >
              ${F}
            </button>
          </div>
        </div>

        <div class="list-cards sortable" id="list-${r.id}">
          ${xe(r)}
        </div>
        ${q({list:r})} ${St({list:r})}
      </div>
    `;return s+=c` <div class="add-list">${W}</div> `,s}var P=we;var Tt;function ye(t){return f(Ct({template:c(Tt||(Tt=J([`
        <div class="app">
          <div class="header">
            htmx Trello Clone
            <span class="disclaimer">
              Anyone can modify, change, add, or edit cards. All data resets
              every 15 minutes.
            </span>
            <div class="header-buttons">
              <button
                class="edit-button"
                type="button"
                style="background-color: #0d6efd;"
                hx-get="/db/lists"
                hx-target="#board"
                hx-swap="innerHTML"
              >
                `,` Sync
              </button>
              <button
                class="edit-button"
                type="button"
                style="background-color: rgb(90, 172, 68);"
                hx-post="/db/lists"
                hx-swap="none"
              >
                Save
              </button>
            </div>
          </div>

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
        <script>
          const interval = setInterval(() => fetch("./ping"), 20000);
        <\/script>
      `])),Lt,P(t))}))}var Y=ye;function ve(){return f(c`
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
            ${O}
          </button>
        </div>
      </form>
    </div>
  `)}var Et=ve;function Le(t){let{list:e,card:s}=t;return c`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/${e.id}/${s.id}"
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
            Update
          </button>
          <button
            class="edit-button"
            type="button"
            tabindex="0"
            style="background-color: rgb(234, 37, 37);"
            hx-delete="/cards/${e.id}/${s.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/${e.id}/${s.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            ${O}
          </div>
        </div>
      </form>
    </div>
  `}var Rt=Le;async function tt(t){let{env:e}=t;return{lists:JSON.parse(await e.TrelloLists.get("lists"))}}async function Ot(t){let{route:e,env:s}=t,{list_id:r}=e.pathname.groups,o=JSON.parse(await s.TrelloLists.get("lists"));return o=o.filter(a=>a.id!==r),await s.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function Pt(t){let{request:e,env:s,route:r}=t,{list_id:o,id:a}=r.pathname.groups,n=new URLSearchParams(await e.text()),i=Object.fromEntries(n),{label:l}=i,d=JSON.parse(await s.TrelloLists.get("lists")),h=d.find(g=>g.id===o),u=h.cards.find(g=>g.id===a);return u.label=l,await s.TrelloLists.put("lists",JSON.stringify(d)),{list:h,card:u}}async function At(t){let{env:e,route:s}=t,{list_id:r,id:o}=s.pathname.groups,n=JSON.parse(await e.TrelloLists.get("lists")).find(l=>l.id===r),i=n.cards.find(l=>l.id===o);return{list:n,card:i}}async function It(t){let{env:e,route:s}=t,{list_id:r,id:o}=s.pathname.groups,a=JSON.parse(await e.TrelloLists.get("lists")),n=a.find(i=>i.id===r);n.cards=n.cards.filter(i=>i.id!==o),await e.TrelloLists.put("lists",JSON.stringify(a))}async function Nt(t){let{request:e,env:s}=t,r=new URLSearchParams(await e.text()),o=Object.fromEntries(r),{name:a}=o,n=JSON.parse(await s.TrelloLists.get("lists"));return n.push({name:a,id:Q({}),cards:[]}),await s.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function Ht(t){let{request:e,route:s,env:r}=t,o=JSON.parse(await r.TrelloLists.get("lists")),{list_id:a}=s.pathname.groups,n=new URLSearchParams(await e.text()),l=Object.fromEntries(n)["label-"+a],d=o.find(u=>u.id===a),h={label:l,id:Q({}),list:a};return d.cards.push(h),await r.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function Ut(t){let{env:e,route:s}=t,r=s.pathname.groups.id;return{list:JSON.parse(await e.TrelloLists.get("lists")).find(n=>n.id===r)}}async function jt(t){let{env:e,route:s}=t,{list_id:r,id:o}=s.pathname.groups,n=JSON.parse(await e.TrelloLists.get("lists")).find(l=>l.id===r),i=n.cards.find(l=>l.id===o);return{list:n,card:i}}async function _t(t){let{request:e,env:s}=t,r=new URLSearchParams(await e.text()),o=Object.fromEntries(r),{from:a,to:n,movedCard:i,index:l,prevIndex:d}=o,[,h]=a.split("-"),[,u]=n.split("-"),g=i.replace("card-",""),v=JSON.parse(await s.TrelloLists.get("lists"));try{if(a==="board"&&n==="board"){let b=v[d];v=v.filter($=>$.id!==b.id),v.splice(l,0,b),await s.TrelloLists.put("lists",JSON.stringify(v))}else{let b=JSON.parse(JSON.stringify(v)),$=b.find(k=>k.id===h),A=$.cards.find(k=>k.id==g);A.list=u,$.cards=$.cards.filter(k=>k.id!=g),b.find(k=>k.id==u).cards.splice(Number(l),0,A),v=b,await s.TrelloLists.put("lists",JSON.stringify(v))}}catch(b){console.error(b)}return{lists:v}}self.addEventListener("install",t=>{self.skipWaiting()});self.addEventListener("activate",t=>{});var B;self.addEventListener("fetch",t=>(console.log("request to service worker"),["https://unpkg.com/hyperscript.org","https://unpkg.com/htmx.org","https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"].includes(t.request.url)?fetch(t.request):t.respondWith((async()=>{B||(B=new rt("trelloClone",B));let s=t.request,r={TrelloLists:B},o=void 0,a;try{a=JSON.parse(await r.TrelloLists.get("lists"))}catch{}if(!a){let i=await fetch("/db/lists").then(l=>l.json());await r.TrelloLists.put("lists",JSON.stringify(i))}return t.request.url==self.registration.scope?Y(await tt({request:s,env:r,ctx:o})):new vt([["/",async i=>Y(await tt(i))],["/lists",async i=>f(P(await Nt(i))),"POST"],["/lists/add",Et],["/lists/cancel",()=>f(W)],["/lists/:list_id",async i=>f(P(await Ot(i))),"DELETE"],["/cards/move",async i=>f(P(await _t(i))),"POST"],["/cards/new/:list_id",async i=>f(P(await Ht(i))),"POST"],["/cards/cancel/:id",async i=>f(q(await Ut(i)))],["/cards/edit/:list_id/:id",async i=>f(Rt(await jt(i)))],["/cards/:list_id/:id",async i=>f(M(await Pt(i))),"PUT"],["/cards/:list_id/:id",async i=>(await It(i),f("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async i=>f(M(await At(i)))],["/db/:key",async i=>{let l=i.route.pathname.groups.key,d=await fetch(`/db/${l}`).then(h=>h.json());if(await r.TrelloLists.put(l,JSON.stringify(d)),l==="lists")return f(P({lists:d}))}],["/db/:key",async i=>{let l=i.route.pathname.groups.key,d=await r.TrelloLists.get(l);return await fetch(`/db/${l}`,{headers:{"content-type":"application/json"},body:d,method:"POST"}),f("")},"POST"],["/ping",async()=>new Response("pong",{headers:{"content-type":"text/plain; charset=utf-8"}})]]).handle({request:s,env:r,ctx:o})})())));
