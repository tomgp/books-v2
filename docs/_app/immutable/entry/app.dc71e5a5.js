import{S as C,i as q,s as U,a as j,e as h,c as z,b as w,d as p,f as P,g as d,h as g,j as W,o as F,k as G,l as H,m as J,n as S,p as m,q as K,r as M,u as Q,v as y,t as X,w as A,x as E,y as v,z as D,A as R,B as L}from"../chunks/index.2d29414e.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},I={},k=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in I)return;I[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const _=s[l];if(_.href===f&&(!t||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,_)=>{o.addEventListener("load",l),o.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},se={};function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){const u={};if(r&8&&(u.data=t[3]),r&4&&(u.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;p(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&g(n),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){const u={};if(r&8&&(u.data=t[3]),r&8215&&(u.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;p(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&g(n),e&&L(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){const u={};if(r&16&&(u.data=t[4]),r&4&&(u.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){y();const o=e;p(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&g(n),e&&L(e,t)}}}function O(a){let e,n=a[6]&&T(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(g),this.h()},h(){S(e,"id","svelte-announcer"),S(e,"aria-live","assertive"),S(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){w(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=T(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function T(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){w(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,s,f;const t=[x,$],r=[];function u(l,_){return l[1][1]?0:1}e=u(a),n=r[e]=t[e](a);let o=a[5]&&O(a);return{c(){n.c(),i=j(),o&&o.c(),s=h()},l(l){n.l(l),i=z(l),o&&o.l(l),s=h()},m(l,_){r[e].m(l,_),w(l,i,_),o&&o.m(l,_),w(l,s,_),f=!0},p(l,[_]){let b=e;e=u(l),e===b?r[e].p(l,_):(y(),p(r[b],1,1,()=>{r[b]=null}),P(),n=r[e],n?n.p(l,_):(n=r[e]=t[e](l),n.c()),d(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,_):(o=O(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(d(n),f=!0)},o(l){p(n),f=!1},d(l){r[e].d(l),l&&g(i),o&&o.d(l),l&&g(s)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:u=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,_=!1,b=null;F(()=>{const c=i.page.subscribe(()=>{l&&(n(6,_=!0),X().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,l=!0),c});function V(c){A[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function N(c){A[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){A[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,u=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,u,o,l,_,b,i,s,V,N,B]}class re extends C{constructor(e){super(),q(this,e,ne,te,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>k(()=>import("../nodes/0.cd3a97d0.js"),["../nodes/0.cd3a97d0.js","../chunks/index.2d29414e.js","../chunks/singletons.3b949384.js","../assets/0.2d816c76.css"],import.meta.url),()=>k(()=>import("../nodes/1.99a05b72.js"),["../nodes/1.99a05b72.js","../chunks/index.2d29414e.js"],import.meta.url),()=>k(()=>import("../nodes/2.ca77727a.js"),["../nodes/2.ca77727a.js","../chunks/index.2d29414e.js","../chunks/slugger.bb2fe4af.js","../assets/2.35325c26.css"],import.meta.url),()=>k(()=>import("../nodes/3.2b73f400.js"),["../nodes/3.2b73f400.js","../chunks/index.2d29414e.js","../assets/3.8c337e00.css"],import.meta.url),()=>k(()=>import("../nodes/4.66e1c83b.js"),["../nodes/4.66e1c83b.js","../chunks/index.2d29414e.js","../chunks/slugger.bb2fe4af.js"],import.meta.url),()=>k(()=>import("../nodes/5.f8efe545.js"),["../nodes/5.f8efe545.js","../chunks/index.2d29414e.js","../chunks/slugger.bb2fe4af.js","../assets/5.b1c5254a.css"],import.meta.url)],ae=[],le={"/":[-3],"/about":[3],"/author-[authSlug]":[-5],"/book-[bookSlug]":[-6]},fe={handleError:({error:a})=>{console.error(a)}};export{le as dictionary,fe as hooks,se as matchers,oe as nodes,re as root,ae as server_loads};
