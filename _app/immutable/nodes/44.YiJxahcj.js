import{s as V,z as b,m as z,A as y,a as H,d as C,j as p,h as c,e as h,c as v,g as E,i as g,n as T,t as L,b as D,f as j,k as q,D as I,E as R}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as A,i as W,c as m,b as d,m as u,t as $,a as f,d as _}from"../chunks/index.BimWP6M-.js";import{g as B,a as P}from"../chunks/spread.CgU5AtxT.js";import{M as F}from"../chunks/mdsvex-components.Cl6EI-Bm.js";import{p as G,C as J,a as M,r as S}from"../chunks/ClassTable.BFJAwze9.js";import"../chunks/entry.BTZh6AU_.js";function K(i){let e,n='<div class="camera"></div> <div class="display"><div class="artboard artboard-demo phone-1">Hi.</div></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=v(a,"DIV",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-1bo3b1h"&&(e.innerHTML=n),this.h()},h(){g(e,"class","mockup-phone")},m(a,o){p(a,e,o)},p:T,d(a){a&&c(e)}}}function N(i){let e,n=`<div class="$$mockup-phone">
  <div class="$$camera"></div> 
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>`,a,o,s,r;return{c(){e=h("pre"),a=L(n),this.h()},l(t){e=v(t,"PRE",{slot:!0});var l=D(e);a=j(l,n),l.forEach(c),this.h()},h(){g(e,"slot","html")},m(t,l){p(t,e,l),q(e,a),s||(r=I(o=S.call(null,e,{to:i[0]})),s=!0)},p(t,l){o&&R(o.update)&&l&1&&o.update.call(null,{to:t[0]})},d(t){t&&c(e),s=!1,r()}}}function O(i){let e,n='<div class="camera"></div> <div class="display"><div class="artboard artboard-demo phone-1">Hi.</div></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=v(a,"DIV",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-eqso50"&&(e.innerHTML=n),this.h()},h(){g(e,"class","mockup-phone border-primary")},m(a,o){p(a,e,o)},p:T,d(a){a&&c(e)}}}function Q(i){let e,n=`<div class="$$mockup-phone border-primary">
  <div class="$$camera"></div> 
  <div class="$$display">
    <div class="$$artboard $$artboard-demo $$phone-1">Hi.</div>
  </div>
</div>`,a,o,s,r;return{c(){e=h("pre"),a=L(n),this.h()},l(t){e=v(t,"PRE",{slot:!0});var l=D(e);a=j(l,n),l.forEach(c),this.h()},h(){g(e,"slot","html")},m(t,l){p(t,e,l),q(e,a),s||(r=I(o=S.call(null,e,{to:i[0]})),s=!0)},p(t,l){o&&R(o.update)&&l&1&&o.update.call(null,{to:t[0]})},d(t){t&&c(e),s=!1,r()}}}function U(i){let e,n,a,o,s,r;return e=new J({props:{data:[{type:"component",class:"mockup-phone",desc:"Container element"}]}}),a=new M({props:{title:"iPhone mockup",$$slots:{html:[N],default:[K]},$$scope:{ctx:i}}}),s=new M({props:{title:"With color",$$slots:{html:[Q],default:[O]},$$scope:{ctx:i}}}),{c(){m(e.$$.fragment),n=H(),m(a.$$.fragment),o=H(),m(s.$$.fragment)},l(t){d(e.$$.fragment,t),n=C(t),d(a.$$.fragment,t),o=C(t),d(s.$$.fragment,t)},m(t,l){u(e,t,l),p(t,n,l),u(a,t,l),p(t,o,l),u(s,t,l),r=!0},p(t,l){const x={};l&5&&(x.$$scope={dirty:l,ctx:t}),a.$set(x);const k={};l&5&&(k.$$scope={dirty:l,ctx:t}),s.$set(k)},i(t){r||($(e.$$.fragment,t),$(a.$$.fragment,t),$(s.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),f(a.$$.fragment,t),f(s.$$.fragment,t),r=!1},d(t){t&&(c(n),c(o)),_(e,t),_(a,t),_(s,t)}}}function X(i){let e,n;const a=[i[1],w];let o={$$slots:{default:[U]},$$scope:{ctx:i}};for(let s=0;s<a.length;s+=1)o=b(o,a[s]);return e=new F({props:o}),{c(){m(e.$$.fragment)},l(s){d(e.$$.fragment,s)},m(s,r){u(e,s,r),n=!0},p(s,[r]){const t=r&2?B(a,[r&2&&P(s[1]),r&0&&P(w)]):{};r&5&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){f(e.$$.fragment,s),n=!1},d(s){_(e,s)}}}const w={title:"Phone mockup",desc:"Phone mockup shows a mockup of an iPhone.",published:!0,layout:"components"};function Y(i,e,n){let a;return z(i,G,o=>n(0,a=o)),i.$$set=o=>{n(1,e=b(b({},e),y(o)))},e=y(e),[a,e]}class ne extends A{constructor(e){super(),W(this,e,Y,X,V,{})}}export{ne as component};