function E(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function j(){return Object.create(null)}function y(t){t.forEach(B)}function O(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ht(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function U(t){return Object.keys(t).length===0}function V(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(V(n,e))}function pt(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,u){if(r){const s=q(n,e,i,u);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let N=!1;function X(){N=!0}function Y(){N=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<n.length;c++){const f=n[c];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const c=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=c?r+1:Z(1,r,x=>n[e[x]].claim_order,c))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const u=[],s=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);o>=l;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[l],f)}}function nt(t,n){if(N){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){N&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function $t(){return M(" ")}function Et(){return M("")}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function rt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const l=e(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const l=e(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function I(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Nt(t,n,e){return I(t,n,e,D)}function Tt(t,n,e){return I(t,n,e,G)}function st(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function vt(t){return st(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function At(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);z(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(u,n)}function Mt(t,n){n=""+n,t.data!==n&&(t.data=n)}function St(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Lt(t,n,e){t.classList[e?"add":"remove"](n)}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=G(e.nodeName):this.e=D(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class C extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}function jt(t,n){return new t(n)}let g;function p(t){g=t}function J(){if(!g)throw new Error("Function called outside component initialization");return g}function Ht(t){J().$$.on_mount.push(t)}function Ct(t){J().$$.after_update.push(t)}const h=[],P=[];let m=[];const k=[],K=Promise.resolve();let v=!1;function R(){v||(v=!0,K.then(W))}function Pt(){return R(),K}function A(t){m.push(t)}const T=new Set;let d=0;function W(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const n=h[d];d++,p(n),ct(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];T.has(e)||(T.add(e),e())}m.length=0}while(h.length);for(;k.length;)k.pop()();v=!1,T.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function ot(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function kt(){_={r:0,c:[],p:_}}function Bt(){_.r||y(_.c),_=_.p}function ut(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||A(()=>{const s=t.$$.on_mount.map(B).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):y(s),t.$$.on_mount=[]}),u.forEach(A)}function ft(t,n){const e=t.$$;e.fragment!==null&&(ot(e.after_update),y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,u,s,o=[-1]){const l=g;p(t);const c=t.$$={fragment:null,ctx:[],props:u,update:E,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:j(),dirty:o,skip_bound:!1,root:n.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=e?e(t,n.props||{},(a,x,...S)=>{const L=S.length?S[0]:x;return c.ctx&&r(c.ctx[a],c.ctx[a]=L)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](L),f&&_t(t,a)),x}):[],c.update(),f=!0,y(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){X();const a=rt(n.target);c.fragment&&c.fragment.l(a),a.forEach(w)}else c.fragment&&c.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),Y(),W()}p(l)}class zt{$destroy(){ft(this,1),this.$destroy=E}$on(n,e){if(!O(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{at as A,ft as B,pt as C,nt as D,yt as E,xt as F,gt as G,mt as H,E as I,G as J,Tt as K,Lt as L,bt as M,ht as N,C as O,At as P,zt as S,$t as a,it as b,vt as c,Ot as d,Et as e,Bt as f,ut as g,w as h,Gt as i,Ct as j,D as k,Nt as l,rt as m,wt as n,Ht as o,St as p,M as q,st as r,dt as s,Pt as t,Mt as u,kt as v,P as w,jt as x,qt as y,Dt as z};
