var M=Object.freeze,z=Object.defineProperty;var F=(t,e)=>()=>(t&&(e=t(t=0)),e);var bt=(t,e)=>{for(var n in e)z(t,n,{get:e[n],enumerable:!0})};var W=(t,e)=>M(z(t,"raw",{value:M(e||t.slice())}));function yt(t,e){return(e?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(t)}function G(t,e=!1){let n=[],s=0;for(;s<t.length;){let l=t[s],d=function(a){if(!e)throw new TypeError(a);n.push({type:"INVALID_CHAR",index:s,value:t[s++]})};if(l==="*"){n.push({type:"ASTERISK",index:s,value:t[s++]});continue}if(l==="+"||l==="?"){n.push({type:"OTHER_MODIFIER",index:s,value:t[s++]});continue}if(l==="\\"){n.push({type:"ESCAPED_CHAR",index:s++,value:t[s++]});continue}if(l==="{"){n.push({type:"OPEN",index:s,value:t[s++]});continue}if(l==="}"){n.push({type:"CLOSE",index:s,value:t[s++]});continue}if(l===":"){let a="",i=s+1;for(;i<t.length;){let o=t.substr(i,1);if(i===s+1&&xt.test(o)||i!==s+1&&wt.test(o)){a+=t[i++];continue}break}if(!a){d(`Missing parameter name at ${s}`);continue}n.push({type:"NAME",index:s,value:a}),s=i;continue}if(l==="("){let a=1,i="",o=s+1,r=!1;if(t[o]==="?"){d(`Pattern cannot start with "?" at ${o}`);continue}for(;o<t.length;){if(!yt(t[o],!1)){d(`Invalid character '${t[o]}' at ${o}.`),r=!0;break}if(t[o]==="\\"){i+=t[o++]+t[o++];continue}if(t[o]===")"){if(a--,a===0){o++;break}}else if(t[o]==="("&&(a++,t[o+1]!=="?")){d(`Capturing groups are not allowed at ${o}`),r=!0;break}i+=t[o++]}if(r)continue;if(a){d(`Unbalanced pattern at ${s}`);continue}if(!i){d(`Missing pattern at ${s}`);continue}n.push({type:"REGEX",index:s,value:i}),s=o;continue}n.push({type:"CHAR",index:s,value:t[s++]})}return n.push({type:"END",index:s,value:""}),n}function K(t,e={}){let n=G(t);e.delimiter??="/#?",e.prefixes??="./";let s=`[^${g(e.delimiter)}]+?`,l=[],d=0,a=0,i="",o=new Set,r=c=>{if(a<n.length&&n[a].type===c)return n[a++].value},p=()=>r("OTHER_MODIFIER")??r("ASTERISK"),b=c=>{let h=r(c);if(h!==void 0)return h;let{type:u,index:$}=n[a];throw new TypeError(`Unexpected ${u} at ${$}, expected ${c}`)},L=()=>{let c="",h;for(;h=r("CHAR")??r("ESCAPED_CHAR");)c+=h;return c},mt=c=>c,C=e.encodePart||mt,N="",A=c=>{N+=c},P=()=>{N.length&&(l.push(new O(3,"","",C(N),"",3)),N="")},J=(c,h,u,$,w)=>{let m=3;switch(w){case"?":m=1;break;case"*":m=0;break;case"+":m=2;break}if(!h&&!u&&m===3){A(c);return}if(P(),!h&&!u){if(!c)return;l.push(new O(3,"","",C(c),"",m));return}let f;u?u==="*"?f=j:f=u:f=s;let S=2;f===s?(S=1,f=""):f===j&&(S=0,f="");let y;if(h?y=h:u&&(y=d++),o.has(y))throw new TypeError(`Duplicate name '${y}'.`);o.add(y),l.push(new O(S,y,C(c),f,C($),m))};for(;a<n.length;){let c=r("CHAR"),h=r("NAME"),u=r("REGEX");if(!h&&!u&&(u=r("ASTERISK")),h||u){let w=c??"";e.prefixes.indexOf(w)===-1&&(A(w),w=""),P();let m=p();J(w,h,u,"",m);continue}let $=c??r("ESCAPED_CHAR");if($){A($);continue}if(r("OPEN")){let w=L(),m=r("NAME"),f=r("REGEX");!m&&!f&&(f=r("ASTERISK"));let S=L();b("CLOSE");let y=p();J(w,m,f,S,y);continue}P(),b("END")}return l}function g(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function q(t){return t&&t.ignoreCase?"ui":"u"}function vt(t,e,n){return B(K(t,n),e,n)}function E(t){switch(t){case 0:return"*";case 1:return"?";case 2:return"+";case 3:return""}}function B(t,e,n={}){n.delimiter??="/#?",n.prefixes??="./",n.sensitive??=!1,n.strict??=!1,n.end??=!0,n.start??=!0,n.endsWith="";let s=n.start?"^":"";for(let i of t){if(i.type===3){i.modifier===3?s+=g(i.value):s+=`(?:${g(i.value)})${E(i.modifier)}`;continue}e&&e.push(i.name);let o=`[^${g(n.delimiter)}]+?`,r=i.value;if(i.type===1?r=o:i.type===0&&(r=j),!i.prefix.length&&!i.suffix.length){i.modifier===3||i.modifier===1?s+=`(${r})${E(i.modifier)}`:s+=`((?:${r})${E(i.modifier)})`;continue}if(i.modifier===3||i.modifier===1){s+=`(?:${g(i.prefix)}(${r})${g(i.suffix)})`,s+=E(i.modifier);continue}s+=`(?:${g(i.prefix)}`,s+=`((?:${r})(?:`,s+=g(i.suffix),s+=g(i.prefix),s+=`(?:${r}))*)${g(i.suffix)})`,i.modifier===0&&(s+="?")}let l=`[${g(n.endsWith)}]|$`,d=`[${g(n.delimiter)}]`;if(n.end)return n.strict||(s+=`${d}?`),n.endsWith.length?s+=`(?=${l})`:s+="$",new RegExp(s,q(n));n.strict||(s+=`(?:${d}(?=${l}))?`);let a=!1;if(t.length){let i=t[t.length-1];i.type===3&&i.modifier===3&&(a=n.delimiter.indexOf(i)>-1)}return a||(s+=`(?=${d}|${l})`),new RegExp(s,q(n))}function $t(t,e){return t.length?t[0]==="/"?!0:!e||t.length<2?!1:(t[0]=="\\"||t[0]=="{")&&t[1]=="/":!1}function V(t,e){return t.startsWith(e)?t.substring(e.length,t.length):t}function Et(t,e){return t.endsWith(e)?t.substr(0,t.length-e.length):t}function Z(t){return!t||t.length<2?!1:t[0]==="["||(t[0]==="\\"||t[0]==="{")&&t[1]==="["}function Y(t){if(!t)return!0;for(let e of Q)if(t.test(e))return!0;return!1}function St(t,e){if(t=V(t,"#"),e||t==="")return t;let n=new URL("https://example.com");return n.hash=t,n.hash?n.hash.substring(1,n.hash.length):""}function Tt(t,e){if(t=V(t,"?"),e||t==="")return t;let n=new URL("https://example.com");return n.search=t,n.search?n.search.substring(1,n.search.length):""}function Rt(t,e){return e||t===""?t:Z(t)?nt(t):et(t)}function Ot(t,e){if(e||t==="")return t;let n=new URL("https://example.com");return n.password=t,n.password}function Ct(t,e){if(e||t==="")return t;let n=new URL("https://example.com");return n.username=t,n.username}function Nt(t,e,n){if(n||t==="")return t;if(e&&!Q.includes(e))return new URL(`${e}:${t}`).pathname;let s=t[0]=="/";return t=new URL(s?t:"/-"+t,"https://example.com").pathname,s||(t=t.substring(2,t.length)),t}function At(t,e,n){return tt(e)===t&&(t=""),n||t===""?t:it(t)}function Pt(t,e){return t=Et(t,":"),e||t===""?t:I(t)}function tt(t){switch(t){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function I(t){if(t==="")return t;if(/^[-+.A-Za-z0-9]*$/.test(t))return t.toLowerCase();throw new TypeError(`Invalid protocol '${t}'.`)}function Ut(t){if(t==="")return t;let e=new URL("https://example.com");return e.username=t,e.username}function jt(t){if(t==="")return t;let e=new URL("https://example.com");return e.password=t,e.password}function et(t){if(t==="")return t;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(t))throw new TypeError(`Invalid hostname '${t}'`);let e=new URL("https://example.com");return e.hostname=t,e.hostname}function nt(t){if(t==="")return t;if(/[^0-9a-fA-F[\]:]/g.test(t))throw new TypeError(`Invalid IPv6 hostname '${t}'`);return t.toLowerCase()}function it(t){if(t===""||/^[0-9]*$/.test(t)&&parseInt(t)<=65535)return t;throw new TypeError(`Invalid port '${t}'.`)}function It(t){if(t==="")return t;let e=new URL("https://example.com");return e.pathname=t[0]!=="/"?"/-"+t:t,t[0]!=="/"?e.pathname.substring(2,e.pathname.length):e.pathname}function Ht(t){return t===""?t:new URL(`data:${t}`).pathname}function _t(t){if(t==="")return t;let e=new URL("https://example.com");return e.search=t,e.search.substring(1,e.search.length)}function Dt(t){if(t==="")return t;let e=new URL("https://example.com");return e.hash=t,e.hash.substring(1,e.hash.length)}function X(t,e){if(typeof t!="string")throw new TypeError("parameter 1 is not of type 'string'.");let n=new URL(t,e);return{protocol:n.protocol.substring(0,n.protocol.length-1),username:n.username,password:n.password,hostname:n.hostname,port:n.port,pathname:n.pathname,search:n.search!==""?n.search.substring(1,n.search.length):void 0,hash:n.hash!==""?n.hash.substring(1,n.hash.length):void 0}}function x(t,e){return e?R(t):t}function T(t,e,n){let s;if(typeof e.baseURL=="string")try{s=new URL(e.baseURL),t.protocol=x(s.protocol.substring(0,s.protocol.length-1),n),t.username=x(s.username,n),t.password=x(s.password,n),t.hostname=x(s.hostname,n),t.port=x(s.port,n),t.pathname=x(s.pathname,n),t.search=x(s.search.substring(1,s.search.length),n),t.hash=x(s.hash.substring(1,s.hash.length),n)}catch{throw new TypeError(`invalid baseURL '${e.baseURL}'.`)}if(typeof e.protocol=="string"&&(t.protocol=Pt(e.protocol,n)),typeof e.username=="string"&&(t.username=Ct(e.username,n)),typeof e.password=="string"&&(t.password=Ot(e.password,n)),typeof e.hostname=="string"&&(t.hostname=Rt(e.hostname,n)),typeof e.port=="string"&&(t.port=At(e.port,t.protocol,n)),typeof e.pathname=="string"){if(t.pathname=e.pathname,s&&!$t(t.pathname,n)){let l=s.pathname.lastIndexOf("/");l>=0&&(t.pathname=x(s.pathname.substring(0,l+1),n)+t.pathname)}t.pathname=Nt(t.pathname,t.protocol,n)}return typeof e.search=="string"&&(t.search=Tt(e.search,n)),typeof e.hash=="string"&&(t.hash=St(e.hash,n)),t}function R(t){return t.replace(/([+*?:{}()\\])/g,"\\$1")}function Mt(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function zt(t,e){e.delimiter??="/#?",e.prefixes??="./",e.sensitive??=!1,e.strict??=!1,e.end??=!0,e.start??=!0,e.endsWith="";let n=".*",s=`[^${Mt(e.delimiter)}]+?`,l=/[$_\u200C\u200D\p{ID_Continue}]/u,d="";for(let a=0;a<t.length;++a){let i=t[a];if(i.type===3){if(i.modifier===3){d+=R(i.value);continue}d+=`{${R(i.value)}}${E(i.modifier)}`;continue}let o=i.hasCustomName(),r=!!i.suffix.length||!!i.prefix.length&&(i.prefix.length!==1||!e.prefixes.includes(i.prefix)),p=a>0?t[a-1]:null,b=a<t.length-1?t[a+1]:null;if(!r&&o&&i.type===1&&i.modifier===3&&b&&!b.prefix.length&&!b.suffix.length)if(b.type===3){let L=b.value.length>0?b.value[0]:"";r=l.test(L)}else r=!b.hasCustomName();if(!r&&!i.prefix.length&&p&&p.type===3){let L=p.value[p.value.length-1];r=e.prefixes.includes(L)}r&&(d+="{"),d+=R(i.prefix),o&&(d+=`:${i.name}`),i.type===2?d+=`(${i.value})`:i.type===1?o||(d+=`(${s})`):i.type===0&&(!o&&(!p||p.type===3||p.modifier!==3||r||i.prefix!=="")?d+="*":d+=`(${n})`),i.type===1&&o&&i.suffix.length&&l.test(i.suffix[0])&&(d+="\\"),d+=R(i.suffix),r&&(d+="}"),i.modifier!==3&&(d+=E(i.modifier))}return d}var O,xt,wt,j,k,kt,Lt,Q,Jt,U,v,H,st=F(()=>{O=class{type=3;name="";prefix="";value="";suffix="";modifier=3;constructor(t,e,n,s,l,d){this.type=t,this.name=e,this.prefix=n,this.value=s,this.suffix=l,this.modifier=d}hasCustomName(){return this.name!==""&&typeof this.name!="number"}},xt=/[$_\p{ID_Start}]/u,wt=/[$_\u200C\u200D\p{ID_Continue}]/u,j=".*";k={delimiter:"",prefixes:"",sensitive:!0,strict:!0},kt={delimiter:".",prefixes:"",sensitive:!0,strict:!0},Lt={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};Q=["ftp","file","http","https","ws","wss"];Jt=class{#r;#i=[];#e={};#t=0;#s=1;#p=0;#l=0;#u=0;#f=0;#g=!1;constructor(t){this.#r=t}get result(){return this.#e}parse(){for(this.#i=G(this.#r,!0);this.#t<this.#i.length;this.#t+=this.#s){if(this.#s=1,this.#i[this.#t].type==="END"){if(this.#l===0){this.#w(),this.#d()?this.#n(9,1):this.#c()?(this.#n(8,1),this.#e.hash=""):(this.#n(7,0),this.#e.search="",this.#e.hash="");continue}else if(this.#l===2){this.#h(5);continue}this.#n(10,0);break}if(this.#u>0)if(this.#S())this.#u-=1;else continue;if(this.#E()){this.#u+=1;continue}switch(this.#l){case 0:this.#y()&&(this.#e.username="",this.#e.password="",this.#e.hostname="",this.#e.port="",this.#e.pathname="",this.#e.search="",this.#e.hash="",this.#h(1));break;case 1:if(this.#y()){this.#O();let t=7,e=1;this.#g&&(this.#e.pathname="/"),this.#k()?(t=2,e=3):this.#g&&(t=2),this.#n(t,e)}break;case 2:this.#b()?this.#h(3):(this.#x()||this.#c()||this.#d())&&this.#h(5);break;case 3:this.#L()?this.#n(4,1):this.#b()&&this.#n(5,1);break;case 4:this.#b()&&this.#n(5,1);break;case 5:this.#T()?this.#f+=1:this.#R()&&(this.#f-=1),this.#$()&&!this.#f?this.#n(6,1):this.#x()?this.#n(7,0):this.#c()?this.#n(8,1):this.#d()&&this.#n(9,1);break;case 6:this.#x()?this.#n(7,0):this.#c()?this.#n(8,1):this.#d()&&this.#n(9,1);break;case 7:this.#c()?this.#n(8,1):this.#d()&&this.#n(9,1);break;case 8:this.#d()&&this.#n(9,1);break;case 9:break;case 10:break}}}#n(t,e){switch(this.#l){case 0:break;case 1:this.#e.protocol=this.#o();break;case 2:break;case 3:this.#e.username=this.#o();break;case 4:this.#e.password=this.#o();break;case 5:this.#e.hostname=this.#o();break;case 6:this.#e.port=this.#o();break;case 7:this.#e.pathname=this.#o();break;case 8:this.#e.search=this.#o();break;case 9:this.#e.hash=this.#o();break;case 10:break}this.#v(t,e)}#v(t,e){this.#l=t,this.#p=this.#t+e,this.#t+=e,this.#s=0}#w(){this.#t=this.#p,this.#s=0}#h(t){this.#w(),this.#l=t}#m(t){return t<0&&(t=this.#i.length-t),t<this.#i.length?this.#i[t]:this.#i[this.#i.length-1]}#a(t,e){let n=this.#m(t);return n.value===e&&(n.type==="CHAR"||n.type==="ESCAPED_CHAR"||n.type==="INVALID_CHAR")}#y(){return this.#a(this.#t,":")}#k(){return this.#a(this.#t+1,"/")&&this.#a(this.#t+2,"/")}#b(){return this.#a(this.#t,"@")}#L(){return this.#a(this.#t,":")}#$(){return this.#a(this.#t,":")}#x(){return this.#a(this.#t,"/")}#c(){if(this.#a(this.#t,"?"))return!0;if(this.#i[this.#t].value!=="?")return!1;let t=this.#m(this.#t-1);return t.type!=="NAME"&&t.type!=="REGEX"&&t.type!=="CLOSE"&&t.type!=="ASTERISK"}#d(){return this.#a(this.#t,"#")}#E(){return this.#i[this.#t].type=="OPEN"}#S(){return this.#i[this.#t].type=="CLOSE"}#T(){return this.#a(this.#t,"[")}#R(){return this.#a(this.#t,"]")}#o(){let t=this.#i[this.#t],e=this.#m(this.#p).index;return this.#r.substring(e,t.index)}#O(){let t={};Object.assign(t,k),t.encodePart=I;let e=vt(this.#o(),void 0,t);this.#g=Y(e)}},U=["protocol","username","password","hostname","port","pathname","search","hash"],v="*";H=class{#r;#i={};#e={};#t={};#s={};constructor(t={},e,n){try{let s;if(typeof e=="string"?s=e:n=e,typeof t=="string"){let i=new Jt(t);if(i.parse(),t=i.result,s===void 0&&typeof t.protocol!="string")throw new TypeError("A base URL must be provided for a relative constructor string.");t.baseURL=s}else{if(!t||typeof t!="object")throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(s)throw new TypeError("parameter 1 is not of type 'string'.")}typeof n>"u"&&(n={ignoreCase:!1});let l={ignoreCase:n.ignoreCase===!0},d={pathname:v,protocol:v,username:v,password:v,hostname:v,port:v,search:v,hash:v};this.#r=T(d,t,!0),tt(this.#r.protocol)===this.#r.port&&(this.#r.port="");let a;for(a of U){if(!(a in this.#r))continue;let i={},o=this.#r[a];switch(this.#e[a]=[],a){case"protocol":Object.assign(i,k),i.encodePart=I;break;case"username":Object.assign(i,k),i.encodePart=Ut;break;case"password":Object.assign(i,k),i.encodePart=jt;break;case"hostname":Object.assign(i,kt),Z(o)?i.encodePart=nt:i.encodePart=et;break;case"port":Object.assign(i,k),i.encodePart=it;break;case"pathname":Y(this.#i.protocol)?(Object.assign(i,Lt,l),i.encodePart=It):(Object.assign(i,k,l),i.encodePart=Ht);break;case"search":Object.assign(i,k,l),i.encodePart=_t;break;case"hash":Object.assign(i,k,l),i.encodePart=Dt;break}try{this.#s[a]=K(o,i),this.#i[a]=B(this.#s[a],this.#e[a],i),this.#t[a]=zt(this.#s[a],i)}catch{throw new TypeError(`invalid ${a} pattern '${this.#r[a]}'.`)}}}catch(s){throw new TypeError(`Failed to construct 'URLPattern': ${s.message}`)}}test(t={},e){let n={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return!1;try{typeof t=="object"?n=T(n,t,!1):n=T(n,X(t,e),!1)}catch{return!1}let s;for(s of U)if(!this.#i[s].exec(n[s]))return!1;return!0}exec(t={},e){let n={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return;try{typeof t=="object"?n=T(n,t,!1):n=T(n,X(t,e),!1)}catch{return null}let s={};e?s.inputs=[t,e]:s.inputs=[t];let l;for(l of U){let d=this.#i[l].exec(n[l]);if(!d)return null;let a={};for(let[i,o]of this.#e[l].entries())if(typeof o=="string"||typeof o=="number"){let r=d[i+1];a[o]=r}s[l]={input:n[l]??"",groups:a}}return s}static compareComponent(t,e,n){let s=(i,o)=>{for(let r of["type","modifier","prefix","value","suffix"]){if(i[r]<o[r])return-1;if(i[r]!==o[r])return 1}return 0},l=new O(3,"","","","",3),d=new O(0,"","","","",3),a=(i,o)=>{let r=0;for(;r<Math.min(i.length,o.length);++r){let p=s(i[r],o[r]);if(p)return p}return i.length===o.length?0:s(i[r]??l,o[r]??l)};return!e.#t[t]&&!n.#t[t]?0:e.#t[t]&&!n.#t[t]?a(e.#s[t],[d]):!e.#t[t]&&n.#t[t]?a([d],n.#s[t]):a(e.#s[t],n.#s[t])}get protocol(){return this.#t.protocol}get username(){return this.#t.username}get password(){return this.#t.password}get hostname(){return this.#t.hostname}get port(){return this.#t.port}get pathname(){return this.#t.pathname}get search(){return this.#t.search}get hash(){return this.#t.hash}}});var rt={};bt(rt,{URLPattern:()=>H});var at=F(()=>{st();globalThis.URLPattern||(globalThis.URLPattern=H)});var ot=class{routes=[];constructor(t=[]){globalThis.URLPattern?this.setup(t):Promise.resolve().then(()=>(at(),rt)).then(()=>this.setup(t))}setup(t){for(let e of t)this.register(...e)}register(t,e,n="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:n,handler:e})}handle(t){let{request:e}=t;for(let n of this.routes){if(n.method!==e.method)continue;let s=n.path.exec({pathname:new URL(e.url).pathname});if(s)return n.handler({...t,route:s})}return new Response("Not found",{status:404})}};function lt(t,...e){return String.raw({raw:t},...e)}async function dt(t){return new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}})}async function _(t){return typeof t!="string"&&(t=JSON.stringify(t)),new Response(t,{headers:{"content-type":"application/json"}})}var ct={styles:`body{background:#3465a4;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.disclaimer{font-size:1rem;padding-left:2rem}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.15);color:#fff;border-bottom:1px solid rgba(0,0,0,.12);font-size:40px;font-weight:200;padding:5px 0 5px 20px}.header-buttons{display:flex;margin-right:16px;margin-left:auto}.header-buttons .edit-button{margin:0 0 0 8px}.board{display:-webkit-flex;display:flex;overflow-x:auto;flex-wrap:nowrap;place-content:flex-start}@media all and (max-width: 860px){.board{flex-wrap:wrap}}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}@media all and (max-width: 640px){.add-list{width:calc(100% - 20px)}}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}@media all and (max-width: 640px){.list{width:calc(100% - 20px)}}.list-title{position:relative;cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};var Wt=ct.styles,ht,qt=lt(ht||(ht=W([`
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
        function reload(state) {
          state.onstatechange = () => {
            if (
              ["installed", "activating", "activated"].indexOf(state.state) > -1
            ) {
              window.location.reload();
            }
          };
        }

        async function registerServiceWorker() {
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
                reload(registration.installing);
              } else if (registration.waiting) {
                console.log("Service worker installed");
                reload(registration.waiting);
              } else if (registration.active) {
                console.log("Service worker active");
                location.reload();
              }
            } catch (error) {
              console.error("Registration failed with" + error);
            }
          }
        }
        registerServiceWorker();
      <\/script>
    </head>
    <body>
      <div
        class="app"
        style="text-align: center; display: flex; justify-content: center; align-items: center; color: white;"
      >
        Loading...
      </div>
    </body>
  </html>
`])),Wt),pt=qt;var ut={sw:`var it=Object.freeze,st=Object.defineProperty;var rt=(t,e)=>()=>(t&&(e=t(t=0)),e);var Mt=(t,e)=>{for(var i in e)st(t,i,{get:e[i],enumerable:!0})};var J=(t,e)=>it(st(t,"raw",{value:it(e||t.slice())}));function zt(t,e){return(e?/^[\\x00-\\xFF]*$/:/^[\\x00-\\x7F]*$/).test(t)}function lt(t,e=!1){let i=[],r=0;for(;r<t.length;){let o=t[r],l=function(n){if(!e)throw new TypeError(n);i.push({type:"INVALID_CHAR",index:r,value:t[r++]})};if(o==="*"){i.push({type:"ASTERISK",index:r,value:t[r++]});continue}if(o==="+"||o==="?"){i.push({type:"OTHER_MODIFIER",index:r,value:t[r++]});continue}if(o==="\\\\"){i.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});continue}if(o==="{"){i.push({type:"OPEN",index:r,value:t[r++]});continue}if(o==="}"){i.push({type:"CLOSE",index:r,value:t[r++]});continue}if(o===":"){let n="",s=r+1;for(;s<t.length;){let a=t.substr(s,1);if(s===r+1&&Dt.test(a)||s!==r+1&&Jt.test(a)){n+=t[s++];continue}break}if(!n){l(\`Missing parameter name at \${r}\`);continue}i.push({type:"NAME",index:r,value:n}),r=s;continue}if(o==="("){let n=1,s="",a=r+1,d=!1;if(t[a]==="?"){l(\`Pattern cannot start with "?" at \${a}\`);continue}for(;a<t.length;){if(!zt(t[a],!1)){l(\`Invalid character '\${t[a]}' at \${a}.\`),d=!0;break}if(t[a]==="\\\\"){s+=t[a++]+t[a++];continue}if(t[a]===")"){if(n--,n===0){a++;break}}else if(t[a]==="("&&(n++,t[a+1]!=="?")){l(\`Capturing groups are not allowed at \${a}\`),d=!0;break}s+=t[a++]}if(d)continue;if(n){l(\`Unbalanced pattern at \${r}\`);continue}if(!s){l(\`Missing pattern at \${r}\`);continue}i.push({type:"REGEX",index:r,value:s}),r=a;continue}i.push({type:"CHAR",index:r,value:t[r++]})}return i.push({type:"END",index:r,value:""}),i}function dt(t,e={}){let i=lt(t);e.delimiter??="/#?",e.prefixes??="./";let r=\`[^\${y(e.delimiter)}]+?\`,o=[],l=0,n=0,s="",a=new Set,d=p=>{if(n<i.length&&i[n].type===p)return i[n++].value},h=()=>d("OTHER_MODIFIER")??d("ASTERISK"),u=p=>{let m=d(p);if(m!==void 0)return m;let{type:x,index:I}=i[n];throw new TypeError(\`Unexpected \${x} at \${I}, expected \${p}\`)},g=()=>{let p="",m;for(;m=d("CHAR")??d("ESCAPED_CHAR");)p+=m;return p},v=p=>p,b=e.encodePart||v,$="",A=p=>{$+=p},D=()=>{$.length&&(o.push(new _(3,"","",b($),"",3)),$="")},k=(p,m,x,I,S)=>{let L=3;switch(S){case"?":L=1;break;case"*":L=0;break;case"+":L=2;break}if(!m&&!x&&L===3){A(p);return}if(D(),!m&&!x){if(!p)return;o.push(new _(3,"","",b(p),"",L));return}let w;x?x==="*"?w=X:w=x:w=r;let H=2;w===r?(H=1,w=""):w===X&&(H=0,w="");let E;if(m?E=m:x&&(E=l++),a.has(E))throw new TypeError(\`Duplicate name '\${E}'.\`);a.add(E),o.push(new _(H,E,b(p),w,b(I),L))};for(;n<i.length;){let p=d("CHAR"),m=d("NAME"),x=d("REGEX");if(!m&&!x&&(x=d("ASTERISK")),m||x){let S=p??"";e.prefixes.indexOf(S)===-1&&(A(S),S=""),D();let L=h();k(S,m,x,"",L);continue}let I=p??d("ESCAPED_CHAR");if(I){A(I);continue}if(d("OPEN")){let S=g(),L=d("NAME"),w=d("REGEX");!L&&!w&&(w=d("ASTERISK"));let H=g();u("CLOSE");let E=h();k(S,L,w,H,E);continue}D(),u("END")}return o}function y(t){return t.replace(/([.+*?^\${}()[\\]|/\\\\])/g,"\\\\$1")}function at(t){return t&&t.ignoreCase?"ui":"u"}function Ft(t,e,i){return ct(dt(t,i),e,i)}function N(t){switch(t){case 0:return"*";case 1:return"?";case 2:return"+";case 3:return""}}function ct(t,e,i={}){i.delimiter??="/#?",i.prefixes??="./",i.sensitive??=!1,i.strict??=!1,i.end??=!0,i.start??=!0,i.endsWith="";let r=i.start?"^":"";for(let s of t){if(s.type===3){s.modifier===3?r+=y(s.value):r+=\`(?:\${y(s.value)})\${N(s.modifier)}\`;continue}e&&e.push(s.name);let a=\`[^\${y(i.delimiter)}]+?\`,d=s.value;if(s.type===1?d=a:s.type===0&&(d=X),!s.prefix.length&&!s.suffix.length){s.modifier===3||s.modifier===1?r+=\`(\${d})\${N(s.modifier)}\`:r+=\`((?:\${d})\${N(s.modifier)})\`;continue}if(s.modifier===3||s.modifier===1){r+=\`(?:\${y(s.prefix)}(\${d})\${y(s.suffix)})\`,r+=N(s.modifier);continue}r+=\`(?:\${y(s.prefix)}\`,r+=\`((?:\${d})(?:\`,r+=y(s.suffix),r+=y(s.prefix),r+=\`(?:\${d}))*)\${y(s.suffix)})\`,s.modifier===0&&(r+="?")}let o=\`[\${y(i.endsWith)}]|$\`,l=\`[\${y(i.delimiter)}]\`;if(i.end)return i.strict||(r+=\`\${l}?\`),i.endsWith.length?r+=\`(?=\${o})\`:r+="$",new RegExp(r,at(i));i.strict||(r+=\`(?:\${l}(?=\${o}))?\`);let n=!1;if(t.length){let s=t[t.length-1];s.type===3&&s.modifier===3&&(n=i.delimiter.indexOf(s)>-1)}return n||(r+=\`(?=\${l}|\${o})\`),new RegExp(r,at(i))}function Bt(t,e){return t.length?t[0]==="/"?!0:!e||t.length<2?!1:(t[0]=="\\\\"||t[0]=="{")&&t[1]=="/":!1}function ht(t,e){return t.startsWith(e)?t.substring(e.length,t.length):t}function Vt(t,e){return t.endsWith(e)?t.substr(0,t.length-e.length):t}function pt(t){return!t||t.length<2?!1:t[0]==="["||(t[0]==="\\\\"||t[0]==="{")&&t[1]==="["}function ft(t){if(!t)return!0;for(let e of ut)if(t.test(e))return!0;return!1}function Gt(t,e){if(t=ht(t,"#"),e||t==="")return t;let i=new URL("https://example.com");return i.hash=t,i.hash?i.hash.substring(1,i.hash.length):""}function Xt(t,e){if(t=ht(t,"?"),e||t==="")return t;let i=new URL("https://example.com");return i.search=t,i.search?i.search.substring(1,i.search.length):""}function Kt(t,e){return e||t===""?t:pt(t)?bt(t):gt(t)}function Zt(t,e){if(e||t==="")return t;let i=new URL("https://example.com");return i.password=t,i.password}function Qt(t,e){if(e||t==="")return t;let i=new URL("https://example.com");return i.username=t,i.username}function Yt(t,e,i){if(i||t==="")return t;if(e&&!ut.includes(e))return new URL(\`\${e}:\${t}\`).pathname;let r=t[0]=="/";return t=new URL(r?t:"/-"+t,"https://example.com").pathname,r||(t=t.substring(2,t.length)),t}function te(t,e,i){return mt(e)===t&&(t=""),i||t===""?t:xt(t)}function ee(t,e){return t=Vt(t,":"),e||t===""?t:K(t)}function mt(t){switch(t){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function K(t){if(t==="")return t;if(/^[-+.A-Za-z0-9]*$/.test(t))return t.toLowerCase();throw new TypeError(\`Invalid protocol '\${t}'.\`)}function ie(t){if(t==="")return t;let e=new URL("https://example.com");return e.username=t,e.username}function se(t){if(t==="")return t;let e=new URL("https://example.com");return e.password=t,e.password}function gt(t){if(t==="")return t;if(/[\\t\\n\\r #%/:<>?@[\\]^\\\\|]/g.test(t))throw new TypeError(\`Invalid hostname '\${t}'\`);let e=new URL("https://example.com");return e.hostname=t,e.hostname}function bt(t){if(t==="")return t;if(/[^0-9a-fA-F[\\]:]/g.test(t))throw new TypeError(\`Invalid IPv6 hostname '\${t}'\`);return t.toLowerCase()}function xt(t){if(t===""||/^[0-9]*$/.test(t)&&parseInt(t)<=65535)return t;throw new TypeError(\`Invalid port '\${t}'.\`)}function re(t){if(t==="")return t;let e=new URL("https://example.com");return e.pathname=t[0]!=="/"?"/-"+t:t,t[0]!=="/"?e.pathname.substring(2,e.pathname.length):e.pathname}function ne(t){return t===""?t:new URL(\`data:\${t}\`).pathname}function ae(t){if(t==="")return t;let e=new URL("https://example.com");return e.search=t,e.search.substring(1,e.search.length)}function oe(t){if(t==="")return t;let e=new URL("https://example.com");return e.hash=t,e.hash.substring(1,e.hash.length)}function ot(t,e){if(typeof t!="string")throw new TypeError("parameter 1 is not of type 'string'.");let i=new URL(t,e);return{protocol:i.protocol.substring(0,i.protocol.length-1),username:i.username,password:i.password,hostname:i.hostname,port:i.port,pathname:i.pathname,search:i.search!==""?i.search.substring(1,i.search.length):void 0,hash:i.hash!==""?i.hash.substring(1,i.hash.length):void 0}}function C(t,e){return e?j(t):t}function U(t,e,i){let r;if(typeof e.baseURL=="string")try{r=new URL(e.baseURL),t.protocol=C(r.protocol.substring(0,r.protocol.length-1),i),t.username=C(r.username,i),t.password=C(r.password,i),t.hostname=C(r.hostname,i),t.port=C(r.port,i),t.pathname=C(r.pathname,i),t.search=C(r.search.substring(1,r.search.length),i),t.hash=C(r.hash.substring(1,r.hash.length),i)}catch{throw new TypeError(\`invalid baseURL '\${e.baseURL}'.\`)}if(typeof e.protocol=="string"&&(t.protocol=ee(e.protocol,i)),typeof e.username=="string"&&(t.username=Qt(e.username,i)),typeof e.password=="string"&&(t.password=Zt(e.password,i)),typeof e.hostname=="string"&&(t.hostname=Kt(e.hostname,i)),typeof e.port=="string"&&(t.port=te(e.port,t.protocol,i)),typeof e.pathname=="string"){if(t.pathname=e.pathname,r&&!Bt(t.pathname,i)){let o=r.pathname.lastIndexOf("/");o>=0&&(t.pathname=C(r.pathname.substring(0,o+1),i)+t.pathname)}t.pathname=Yt(t.pathname,t.protocol,i)}return typeof e.search=="string"&&(t.search=Xt(e.search,i)),typeof e.hash=="string"&&(t.hash=Gt(e.hash,i)),t}function j(t){return t.replace(/([+*?:{}()\\\\])/g,"\\\\$1")}function de(t){return t.replace(/([.+*?^\${}()[\\]|/\\\\])/g,"\\\\$1")}function ce(t,e){e.delimiter??="/#?",e.prefixes??="./",e.sensitive??=!1,e.strict??=!1,e.end??=!0,e.start??=!0,e.endsWith="";let i=".*",r=\`[^\${de(e.delimiter)}]+?\`,o=/[$_\\u200C\\u200D\\p{ID_Continue}]/u,l="";for(let n=0;n<t.length;++n){let s=t[n];if(s.type===3){if(s.modifier===3){l+=j(s.value);continue}l+=\`{\${j(s.value)}}\${N(s.modifier)}\`;continue}let a=s.hasCustomName(),d=!!s.suffix.length||!!s.prefix.length&&(s.prefix.length!==1||!e.prefixes.includes(s.prefix)),h=n>0?t[n-1]:null,u=n<t.length-1?t[n+1]:null;if(!d&&a&&s.type===1&&s.modifier===3&&u&&!u.prefix.length&&!u.suffix.length)if(u.type===3){let g=u.value.length>0?u.value[0]:"";d=o.test(g)}else d=!u.hasCustomName();if(!d&&!s.prefix.length&&h&&h.type===3){let g=h.value[h.value.length-1];d=e.prefixes.includes(g)}d&&(l+="{"),l+=j(s.prefix),a&&(l+=\`:\${s.name}\`),s.type===2?l+=\`(\${s.value})\`:s.type===1?a||(l+=\`(\${r})\`):s.type===0&&(!a&&(!h||h.type===3||h.modifier!==3||d||s.prefix!=="")?l+="*":l+=\`(\${i})\`),s.type===1&&a&&s.suffix.length&&o.test(s.suffix[0])&&(l+="\\\\"),l+=j(s.suffix),d&&(l+="}"),s.modifier!==3&&(l+=N(s.modifier))}return l}var _,Dt,Jt,X,O,qt,Wt,ut,le,G,R,Z,wt=rt(()=>{_=class{type=3;name="";prefix="";value="";suffix="";modifier=3;constructor(t,e,i,r,o,l){this.type=t,this.name=e,this.prefix=i,this.value=r,this.suffix=o,this.modifier=l}hasCustomName(){return this.name!==""&&typeof this.name!="number"}},Dt=/[$_\\p{ID_Start}]/u,Jt=/[$_\\u200C\\u200D\\p{ID_Continue}]/u,X=".*";O={delimiter:"",prefixes:"",sensitive:!0,strict:!0},qt={delimiter:".",prefixes:"",sensitive:!0,strict:!0},Wt={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};ut=["ftp","file","http","https","ws","wss"];le=class{#n;#s=[];#e={};#t=0;#r=1;#p=0;#l=0;#u=0;#f=0;#m=!1;constructor(t){this.#n=t}get result(){return this.#e}parse(){for(this.#s=lt(this.#n,!0);this.#t<this.#s.length;this.#t+=this.#r){if(this.#r=1,this.#s[this.#t].type==="END"){if(this.#l===0){this.#w(),this.#d()?this.#i(9,1):this.#c()?(this.#i(8,1),this.#e.hash=""):(this.#i(7,0),this.#e.search="",this.#e.hash="");continue}else if(this.#l===2){this.#h(5);continue}this.#i(10,0);break}if(this.#u>0)if(this.#T())this.#u-=1;else continue;if(this.#C()){this.#u+=1;continue}switch(this.#l){case 0:this.#y()&&(this.#e.username="",this.#e.password="",this.#e.hostname="",this.#e.port="",this.#e.pathname="",this.#e.search="",this.#e.hash="",this.#h(1));break;case 1:if(this.#y()){this.#R();let t=7,e=1;this.#m&&(this.#e.pathname="/"),this.#L()?(t=2,e=3):this.#m&&(t=2),this.#i(t,e)}break;case 2:this.#b()?this.#h(3):(this.#x()||this.#c()||this.#d())&&this.#h(5);break;case 3:this.#$()?this.#i(4,1):this.#b()&&this.#i(5,1);break;case 4:this.#b()&&this.#i(5,1);break;case 5:this.#S()?this.#f+=1:this.#E()&&(this.#f-=1),this.#k()&&!this.#f?this.#i(6,1):this.#x()?this.#i(7,0):this.#c()?this.#i(8,1):this.#d()&&this.#i(9,1);break;case 6:this.#x()?this.#i(7,0):this.#c()?this.#i(8,1):this.#d()&&this.#i(9,1);break;case 7:this.#c()?this.#i(8,1):this.#d()&&this.#i(9,1);break;case 8:this.#d()&&this.#i(9,1);break;case 9:break;case 10:break}}}#i(t,e){switch(this.#l){case 0:break;case 1:this.#e.protocol=this.#o();break;case 2:break;case 3:this.#e.username=this.#o();break;case 4:this.#e.password=this.#o();break;case 5:this.#e.hostname=this.#o();break;case 6:this.#e.port=this.#o();break;case 7:this.#e.pathname=this.#o();break;case 8:this.#e.search=this.#o();break;case 9:this.#e.hash=this.#o();break;case 10:break}this.#v(t,e)}#v(t,e){this.#l=t,this.#p=this.#t+e,this.#t+=e,this.#r=0}#w(){this.#t=this.#p,this.#r=0}#h(t){this.#w(),this.#l=t}#g(t){return t<0&&(t=this.#s.length-t),t<this.#s.length?this.#s[t]:this.#s[this.#s.length-1]}#a(t,e){let i=this.#g(t);return i.value===e&&(i.type==="CHAR"||i.type==="ESCAPED_CHAR"||i.type==="INVALID_CHAR")}#y(){return this.#a(this.#t,":")}#L(){return this.#a(this.#t+1,"/")&&this.#a(this.#t+2,"/")}#b(){return this.#a(this.#t,"@")}#$(){return this.#a(this.#t,":")}#k(){return this.#a(this.#t,":")}#x(){return this.#a(this.#t,"/")}#c(){if(this.#a(this.#t,"?"))return!0;if(this.#s[this.#t].value!=="?")return!1;let t=this.#g(this.#t-1);return t.type!=="NAME"&&t.type!=="REGEX"&&t.type!=="CLOSE"&&t.type!=="ASTERISK"}#d(){return this.#a(this.#t,"#")}#C(){return this.#s[this.#t].type=="OPEN"}#T(){return this.#s[this.#t].type=="CLOSE"}#S(){return this.#a(this.#t,"[")}#E(){return this.#a(this.#t,"]")}#o(){let t=this.#s[this.#t],e=this.#g(this.#p).index;return this.#n.substring(e,t.index)}#R(){let t={};Object.assign(t,O),t.encodePart=K;let e=Ft(this.#o(),void 0,t);this.#m=ft(e)}},G=["protocol","username","password","hostname","port","pathname","search","hash"],R="*";Z=class{#n;#s={};#e={};#t={};#r={};constructor(t={},e,i){try{let r;if(typeof e=="string"?r=e:i=e,typeof t=="string"){let s=new le(t);if(s.parse(),t=s.result,r===void 0&&typeof t.protocol!="string")throw new TypeError("A base URL must be provided for a relative constructor string.");t.baseURL=r}else{if(!t||typeof t!="object")throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(r)throw new TypeError("parameter 1 is not of type 'string'.")}typeof i>"u"&&(i={ignoreCase:!1});let o={ignoreCase:i.ignoreCase===!0},l={pathname:R,protocol:R,username:R,password:R,hostname:R,port:R,search:R,hash:R};this.#n=U(l,t,!0),mt(this.#n.protocol)===this.#n.port&&(this.#n.port="");let n;for(n of G){if(!(n in this.#n))continue;let s={},a=this.#n[n];switch(this.#e[n]=[],n){case"protocol":Object.assign(s,O),s.encodePart=K;break;case"username":Object.assign(s,O),s.encodePart=ie;break;case"password":Object.assign(s,O),s.encodePart=se;break;case"hostname":Object.assign(s,qt),pt(a)?s.encodePart=bt:s.encodePart=gt;break;case"port":Object.assign(s,O),s.encodePart=xt;break;case"pathname":ft(this.#s.protocol)?(Object.assign(s,Wt,o),s.encodePart=re):(Object.assign(s,O,o),s.encodePart=ne);break;case"search":Object.assign(s,O,o),s.encodePart=ae;break;case"hash":Object.assign(s,O,o),s.encodePart=oe;break}try{this.#r[n]=dt(a,s),this.#s[n]=ct(this.#r[n],this.#e[n],s),this.#t[n]=ce(this.#r[n],s)}catch{throw new TypeError(\`invalid \${n} pattern '\${this.#n[n]}'.\`)}}}catch(r){throw new TypeError(\`Failed to construct 'URLPattern': \${r.message}\`)}}test(t={},e){let i={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return!1;try{typeof t=="object"?i=U(i,t,!1):i=U(i,ot(t,e),!1)}catch{return!1}let r;for(r of G)if(!this.#s[r].exec(i[r]))return!1;return!0}exec(t={},e){let i={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return;try{typeof t=="object"?i=U(i,t,!1):i=U(i,ot(t,e),!1)}catch{return null}let r={};e?r.inputs=[t,e]:r.inputs=[t];let o;for(o of G){let l=this.#s[o].exec(i[o]);if(!l)return null;let n={};for(let[s,a]of this.#e[o].entries())if(typeof a=="string"||typeof a=="number"){let d=l[s+1];n[a]=d}r[o]={input:i[o]??"",groups:n}}return r}static compareComponent(t,e,i){let r=(s,a)=>{for(let d of["type","modifier","prefix","value","suffix"]){if(s[d]<a[d])return-1;if(s[d]!==a[d])return 1}return 0},o=new _(3,"","","","",3),l=new _(0,"","","","",3),n=(s,a)=>{let d=0;for(;d<Math.min(s.length,a.length);++d){let h=r(s[d],a[d]);if(h)return h}return s.length===a.length?0:r(s[d]??o,a[d]??o)};return!e.#t[t]&&!i.#t[t]?0:e.#t[t]&&!i.#t[t]?n(e.#r[t],[l]):!e.#t[t]&&i.#t[t]?n([l],i.#r[t]):n(e.#r[t],i.#r[t])}get protocol(){return this.#t.protocol}get username(){return this.#t.username}get password(){return this.#t.password}get hostname(){return this.#t.hostname}get port(){return this.#t.port}get pathname(){return this.#t.pathname}get search(){return this.#t.search}get hash(){return this.#t.hash}}});var yt={};Mt(yt,{URLPattern:()=>Z});var vt=rt(()=>{wt();globalThis.URLPattern||(globalThis.URLPattern=Z)});var V=class{name="";store=Promise.resolve();constructor(e,i){if(i)return i;this.name=e,this.store=new Promise((r,o)=>{let l=indexedDB.open(this.name,1);l.onerror=()=>o(l.error),l.onupgradeneeded=()=>l.result.createObjectStore(this.name),l.onsuccess=()=>r(l.result)})}async get(e){return this.handleTransaction("get",e)}async put(e,i){return this.handleTransaction("put",e,i)}async delete(e){return this.handleTransaction("delete",e)}async handleTransaction(e,i,r){let o=await this.store;return new Promise((l,n)=>{let s=o.transaction(this.name,e==="get"?"readonly":"readwrite"),a=e==="put"?[r,i]:[i],d=s.objectStore(this.name)[e](...a);s.oncomplete=()=>l(d.result),s.onerror=()=>n(s.error)})}},nt=V;var Lt=class{routes=[];constructor(t=[]){globalThis.URLPattern?this.setup(t):Promise.resolve().then(()=>(vt(),yt)).then(()=>this.setup(t))}setup(t){for(let e of t)this.register(...e)}register(t,e,i="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:i,handler:e})}handle(t){let{request:e}=t;for(let i of this.routes){if(i.method!==e.method)continue;let r=i.path.exec({pathname:new URL(e.url).pathname});if(r)return i.handler({...t,route:r})}return new Response("Not found",{status:404})}};function c(t,...e){return String.raw({raw:t},...e)}function Q(t){let e="";do e=Math.random().toString(16).substring(2,15);while(t[e]);return e}async function f(t){return new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}})}var z=c\`
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
\`,P=c\`
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
\`,F=c\`
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
\`,$t=c\`
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
\`;var kt={styles:\`body{background:#3465a4;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.disclaimer{font-size:1rem;padding-left:2rem}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.15);color:#fff;border-bottom:1px solid rgba(0,0,0,.12);font-size:40px;font-weight:200;padding:5px 0 5px 20px}.header-buttons{display:flex;margin-right:16px;margin-left:auto}.header-buttons .edit-button{margin:0 0 0 8px}.board{display:-webkit-flex;display:flex;overflow-x:auto;flex-wrap:nowrap;place-content:flex-start}@media all and (max-width: 860px){.board{flex-wrap:wrap}}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}@media all and (max-width: 640px){.add-list{width:calc(100% - 20px)}}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}@media all and (max-width: 640px){.list{width:calc(100% - 20px)}}.list-title{position:relative;cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
\`};var pe=kt.styles,Ct;function ue(t){return c(Ct||(Ct=J([\`
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
          \`,\`
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
        <\\/script>
      </head>
      <body>
        \`,\`
      </body>
    </html>
  \`])),pe,t.template)}var Tt=ue;function fe(t){let{list:e}=t;return c\`
    <button
      class="toggle-add-card"
      id="btn-add-card-\${e.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-\${e.id}"
    >
      \${z}
      <span> Add another card</span>
    </button>
  \`}var q=fe;function me(t){let{list:e}=t;return c\`
    <div class="edit-card hidden" id="add-card-\${e.id}">
      <div class="card">
        <textarea
          class="edit-card-textarea"
          name="label-\${e.id}"
          placeholder="Enter a title for this card..."
          style="height: 34px;"
          maxlength="300"
          autofocus="true"
        ></textarea>
        <input type="hidden" name="listId" value="\${e.id}" />
      </div>
      <div class="edit-buttons">
        <button
          class="edit-button"
          type="button"
          tabindex="0"
          style="background-color: rgb(90, 172, 68);"
          hx-post="/cards/new/\${e.id}"
          hx-target="#board"
          hx-swap="innerHTML"
          hx-params="label-\${e.id}"
        >
          Add card
        </button>
        <div
          class="edit-button-cancel"
          tabindex="0"
          _="on click toggle .hidden on #add-card-\${e.id} toggle .hidden on #btn-add-card-\${e.id}"
        >
          \${P}
        </div>
      </div>
    </div>
  \`}var St=me;var ge=c\`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    \${z} Add another list
    <div></div>
  </div>
\`,W=ge;function be(t){let{list:e,card:i}=t;return c\`
    <div
      class="card"
      id="card-\${i.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-\${i.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-\${i.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/\${e.id}/\${i.id}"
          hx-target="#card-\${i.id}"
          hx-swap="outerHTML"
        >
          \${F}
        </button>
      </div>
      \${i.label}
    </div>
  \`}var M=be;function xe(t){let e=c\`\`;for(let i of t.cards)e+=c\`\${M({list:t,card:i})}\`;return e}function we(t){let{lists:e}=t,i=c\`\`;for(let r of e)i+=c\`
      <div class="list" draggable="true" id="lists-list-\${r.id}">
        <div
          class="list-title"
          _="on mouseenter toggle .hidden on #list-edit-\${r.id} until mouseleave"
        >
          \${r.name}
          <div class="card-icons hidden" id="list-edit-\${r.id}">
            <button
              type="button"
              class="edit-button-cancel"
              tabindex="0"
              hx-delete="/lists/\${r.id}"
              hx-target="#board"
              hx-swap="innerHTML"
            >
              \${P}
            </button>

            <button
              class="card-icon"
              type="button"
              hx-get="/list/edit/\${r.id}}"
              hx-target="#list-\${r.id}"
              hx-swap="outerHTML"
            >
              \${F}
            </button>
          </div>
        </div>

        <div class="list-cards sortable" id="list-\${r.id}">
          \${xe(r)}
        </div>
        \${q({list:r})} \${St({list:r})}
      </div>
    \`;return i+=c\` <div class="add-list">\${W}</div> \`,i}var T=we;var Et;function ye(t){return f(Tt({template:c(Et||(Et=J([\`
        <div class="app">
          <div class="header">
            htmx Trello Clone
            <div class="header-buttons">
              <button
                class="edit-button"
                type="button"
                style="background-color: #0d6efd;"
                hx-get="/db/lists"
                hx-target="#board"
                hx-swap="innerHTML"
              >
                \`,\` Sync
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
              \`,\`
            </div>
          </form>
        </div>
        <span class="disclaimer">
          Anyone can modify, change, add, or edit cards. All data resets every
          15 minutes.
        </span>
        <script src="https://unpkg.com/htmx.org"><\\/script>
        <script src="https://unpkg.com/hyperscript.org"><\\/script>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\\/script>
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
        <\\/script>
        <script>
          const interval = setInterval(() => fetch("./ping"), 20000);
        <\\/script>
      \`])),$t,T(t))}))}var Y=ye;function ve(){return f(c\`
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
            \${P}
          </button>
        </div>
      </form>
    </div>
  \`)}var Rt=ve;function Le(t){let{list:e,card:i}=t;return c\`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/\${e.id}/\${i.id}"
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
\${i.label}</textarea
          >
          <input type="hidden" name="listId" value="\${e.id}" />
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
            hx-delete="/cards/\${e.id}/\${i.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/\${e.id}/\${i.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            \${P}
          </div>
        </div>
      </form>
    </div>
  \`}var Ot=Le;async function tt(t){let{env:e}=t;return{lists:JSON.parse(await e.TrelloLists.get("lists"))}}async function et(t){let{route:e,env:i}=t,{list_id:r}=e.pathname.groups,o=JSON.parse(await i.TrelloLists.get("lists"));return o=o.filter(l=>l.id!==r),await i.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function Pt(t){let{request:e,env:i,route:r}=t,{list_id:o,id:l}=r.pathname.groups,n=new URLSearchParams(await e.text()),s=Object.fromEntries(n),{label:a}=s,d=JSON.parse(await i.TrelloLists.get("lists")),h=d.find(g=>g.id===o),u=h.cards.find(g=>g.id===l);return u.label=a,await i.TrelloLists.put("lists",JSON.stringify(d)),{list:h,card:u}}async function At(t){let{env:e,route:i}=t,{list_id:r,id:o}=i.pathname.groups,n=JSON.parse(await e.TrelloLists.get("lists")).find(a=>a.id===r),s=n.cards.find(a=>a.id===o);return{list:n,card:s}}async function It(t){let{env:e,route:i}=t,{list_id:r,id:o}=i.pathname.groups,l=JSON.parse(await e.TrelloLists.get("lists")),n=l.find(s=>s.id===r);n.cards=n.cards.filter(s=>s.id!==o),await e.TrelloLists.put("lists",JSON.stringify(l))}async function Nt(t){let{request:e,env:i}=t,r=new URLSearchParams(await e.text()),o=Object.fromEntries(r),{name:l}=o,n=JSON.parse(await i.TrelloLists.get("lists"));return n.push({name:l,id:Q({}),cards:[]}),await i.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function Ht(t){let{request:e,route:i,env:r}=t,o=JSON.parse(await r.TrelloLists.get("lists")),{list_id:l}=i.pathname.groups,n=new URLSearchParams(await e.text()),a=Object.fromEntries(n)["label-"+l],d=o.find(u=>u.id===l),h={label:a,id:Q({}),list:l};return d.cards.push(h),await r.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function Ut(t){let{env:e,route:i}=t,r=i.pathname.groups.id;return{list:JSON.parse(await e.TrelloLists.get("lists")).find(n=>n.id===r)}}async function jt(t){let{env:e,route:i}=t,{list_id:r,id:o}=i.pathname.groups,n=JSON.parse(await e.TrelloLists.get("lists")).find(a=>a.id===r),s=n.cards.find(a=>a.id===o);return{list:n,card:s}}async function _t(t){let{request:e,env:i}=t,r=new URLSearchParams(await e.text()),o=Object.fromEntries(r),{from:l,to:n,movedCard:s,index:a,prevIndex:d}=o,[,h]=l.split("-"),[,u]=n.split("-"),g=s.replace("card-",""),v=JSON.parse(await i.TrelloLists.get("lists"));try{if(l==="board"&&n==="board"){let b=v[d];v=v.filter($=>$.id!==b.id),v.splice(a,0,b),await i.TrelloLists.put("lists",JSON.stringify(v))}else{let b=JSON.parse(JSON.stringify(v)),$=b.find(k=>k.id===h),A=$.cards.find(k=>k.id==g);A.list=u,$.cards=$.cards.filter(k=>k.id!=g),b.find(k=>k.id==u).cards.splice(Number(a),0,A),v=b,await i.TrelloLists.put("lists",JSON.stringify(v))}}catch(b){console.error(b)}return{lists:v}}self.addEventListener("install",t=>{self.skipWaiting()});self.addEventListener("activate",t=>{});var B;self.addEventListener("fetch",t=>(console.log("request to service worker"),["https://unpkg.com/hyperscript.org","https://unpkg.com/htmx.org","https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"].includes(t.request.url)?fetch(t.request):t.respondWith((async()=>{B||(B=new nt("trelloClone",B));let i=t.request,r={TrelloLists:B},o=void 0,l;try{l=JSON.parse(await r.TrelloLists.get("lists"))}catch{}if(!l){let s=await fetch("/db/lists").then(a=>a.json());await r.TrelloLists.put("lists",JSON.stringify(s))}return t.request.url==self.registration.scope?Y(await tt({request:i,env:r,ctx:o})):new Lt([["/",async s=>Y(await tt(s))],["/lists",async s=>f(T(await Nt(s))),"POST"],["/lists/add",Rt],["/lists/cancel",()=>f(W)],["/lists/:list_id",async s=>f(T(await et(s))),"DELETE"],["/lists/:list_id",async s=>f(T(await et(s))),"POST"],["/cards/move",async s=>f(T(await _t(s))),"POST"],["/cards/new/:list_id",async s=>f(T(await Ht(s))),"POST"],["/cards/cancel/:id",async s=>f(q(await Ut(s)))],["/cards/edit/:list_id/:id",async s=>f(Ot(await jt(s)))],["/cards/:list_id/:id",async s=>f(M(await Pt(s))),"PUT"],["/cards/:list_id/:id",async s=>(await It(s),f("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async s=>f(M(await At(s)))],["/db/:key",async s=>{let a=s.route.pathname.groups.key,d=await fetch(\`/db/\${a}\`).then(h=>h.json());if(await r.TrelloLists.put(a,JSON.stringify(d)),a==="lists")return f(T({lists:d}))}],["/db/:key",async s=>{let a=s.route.pathname.groups.key,d=await r.TrelloLists.get(a);return await fetch(\`/db/\${a}\`,{headers:{"content-type":"application/json"},body:d,method:"POST"}),f("")},"POST"],["/ping",async()=>new Response("pong",{headers:{"content-type":"text/plain; charset=utf-8"}})]]).handle({request:i,env:r,ctx:o})})())));
`};function Gt(){return new Response(ut.sw,{headers:{"content-type":"text/javascript;charset=UTF-8"}})}var ft=Gt;async function gt(t){let e='[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]';await t.env.TrelloLists.get("lists")!=e&&await t.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function D(t){let{route:e,env:n}=t,s=e.pathname.groups.key;return await n.TrelloLists.get(s)}var Kt=new ot([["/",async()=>dt(pt)],["/sw.js",ft],["/db/:key",async t=>_(await D(t))],["/db/:key",async t=>{let e=await t.request.json();return t.env.TrelloLists.put(t.route.pathname.groups.key,JSON.stringify(e)),_(await D(t))},"POST"]]),ye={async fetch(t,e,n){return console.log("request to worker"),Kt.handle({request:t,env:e,ctx:n})},async scheduled(t,e,n){return gt({event:t,env:e,ctx:n})}};export{ye as default};
