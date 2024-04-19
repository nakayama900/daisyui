import{s as Lt,z as Je,A as bt,e as n,a as s,H as wt,c as l,g as u,d as o,b as xt,x as Tt,h as i,i as p,j as a,n as Mt}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as St,i as It,c as Ut,b as gt,m as Pt,t as jt,a as Yt,d as zt}from"../chunks/index.BimWP6M-.js";import{g as Jt,a as Ct}from"../chunks/spread.CgU5AtxT.js";import{M as $t}from"../chunks/mdsvex-blog.BALcF31X.js";function qt(X){let r,y='<a aria-hidden="true" tabindex="-1" href="#comparing-daisyui-and-tailwind-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Comparing daisyUI and Tailwind UI',h,m,d="<li>daisyUI is a plugin for Tailwind CSS which adds additional class names and theming to your project.</li> <li>Tailwind UI is a collection of HTML sections created by the Tailwind CSS team.</li>",c,f,$e="Both of these component libraries are built on top of Tailwind CSS and they both provide well-designed components for your web pages.",Z,M,qe=`But which one is better for you?<br/>
Which one should you use?`,ee,v,Be='<a aria-hidden="true" tabindex="-1" href="#core-differences"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Core differences',te,S,We="daisyUI is a plug-in for Tailwind CSS. It’s a set of additional component classes that you can use in your HTML files.",ie,I,Re="For example, to make a button with daisyUI, you write following HTML code:",ae,U,ne,Ht='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>',le,g,Ee="With Tailwind UI, you need to use Tailwind CSS utility classes to make a button:",se,P,oe,kt=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded-md bg-indigo-600 px-3.5 py-2.5 
  text-sm font-semibold text-white shadow-sm 
  hover:bg-indigo-500 focus-visible:outline 
  focus-visible:outline-2 focus-visible:outline-offset-2 
  focus-visible:outline-indigo-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Button
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`,ue,j,Ae="Basically Tailwind UI is a set of HTML templates that you can copy and paste into your project while daisyUI is a plug-in which adds super powers to Tailwind CSS.",re,b,Fe='<a aria-hidden="true" tabindex="-1" href="#pricing-and-costs"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Pricing and costs',de,Y,Ve='Tailwind UI is a <a href="https://tailwindui.com/all-access" rel="nofollow" target="_blank">commercial product</a>. You need to purchase a personal license ($299) or team license ($799) to use it in your projects.',pe,z,De='daisyUI is free and open source. You can use it in your personal and commercial projects. However if you want to support the project, you can <a href="https://opencollective.com/daisyui" rel="nofollow" target="_blank">donate to the project</a> 💚',ce,w,Ge='<a aria-hidden="true" tabindex="-1" href="#customization"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Customization',me,J,Ke="Both daisyUI and Tailwind UI are customizable. You can change the design of components using utility classes.",he,x,Ne='<a aria-hidden="true" tabindex="-1" href="#dark-mode-and-themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Dark mode and themes',fe,$,Oe="Tailwind UI only comes as it is. To add a dark mode or to change the colors, you need to add more utility classes to the components.",ye,q,Qe='daisyUI comes with a built-in dark mode and also 28 other built-in themes. All the themes work out of the box and you don’t need to add any extra classes to your components. You can also <a href="https://daisyui.com/theme-generator/" rel="nofollow" target="_blank">create your own daisyUI theme</a> in seconds.',ve,T,Xe='<a aria-hidden="true" tabindex="-1" href="#html-size"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>HTML size',be,B,Ze=`Generally using Tailwind CSS utility classes makes your HTML files bigger. You need to add a lot of classes to your elements to style them.<br/>
With daisyUI, you write 80% fewer class names and your HTML size will be about 70% smaller.`,we,C,et='<a aria-hidden="true" tabindex="-1" href="#css-size-and-unused-styles"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>CSS size and unused styles',xe,W,tt="Both daisyUI and Tailwind UI use Tailwind CSS under the hood. Tailwind UI uses the same utility classes from Tailwind CSS. daisyUI uses component classes which are added as a plug-in. However, both get compiled by Tailwind CSS and the final CSS file will only include the used classes, free of any unused CSS rules.",Te,_,it='<a aria-hidden="true" tabindex="-1" href="#javascript-and-interactivity"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>JavaScript and interactivity',Ce,R,at="Some components in Tailwind UI are interactive and they need JavaScript to work.",_e,E,nt="daisyUI however, is a dev-dependency. It doesn’t need any JavaScript to work. It’s a pure CSS component library and it works just well even if JavaScript is disabled on the borwser. daisyUI provides some interactive components which are possible with CSS only.",He,A,lt='daisyUI doesn’t include interactive elements that need JS (for example a date picker). However, you can use any JS library with daisyUI. Headless libraries like <a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI</a> or <a href="https://www.radix-ui.com/primitives" rel="nofollow" target="_blank">Radix primitives</a> are recommended. You can also use any other JS plug-in that you like and you can add daisyUI classes or color values to them so they would fit your website design.',ke,H,st='<a aria-hidden="true" tabindex="-1" href="#accessibility"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Accessibility',Le,F,ot=`Both daisyUI and Tailwind UI provide CSS and HTML code that is accessible by default.<br/>
The colors and design of components are chosen in a way that they are accessible for everyone.<br/>
However, accessibility is not binary and it’s not installable. You should always test your website for accessibility issues and fix them according to your customer needs and the way they use your website.`,Me,k,ut='<a aria-hidden="true" tabindex="-1" href="#frameworks-and-libraries"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Frameworks and libraries',Se,V,rt="<li>Taiwlind UI is a set of HTML sections and however the interactive parts are only available for React and Vue (at the time of writing this article).</li> <li>daisyUI is framework agnostic. It’s just CSS and you can use it with any framework or library.</li>",Ie,D,dt="You can use third-party JS plugins or even handle the JS interactivity yourself on both daisyUI and Tailwind UI.",Ue,L,pt='<a aria-hidden="true" tabindex="-1" href="#which-one-should-you-use"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Which one should you use?',ge,G,ct=`daisyUI and Tailwind UI are both great component libraries. They both provide well-designed components for your web pages.<br/>
However, to choose the best one for your project, you need to consider your project requirements and your team’s skills.`,Pe,K,mt="Tailwind UI is better if:",je,N,ht="<li>You’re using React or Vue</li> <li>You’re willing to pay for personal or team license</li> <li>You want to copy paste sections of HTML code into your project</li> <li>You want a single design to use everywhere</li>",Ye,O,ft="daisyUI is better if:",ze,Q,yt="<li>You want a free and open source component library</li> <li>You want to easily change the theme and look of your website</li> <li>You want to use a component library that is customizable and themeable</li> <li>You want to have multiple themes available</li> <li>You’re using any framework or library (or even no JS at all)</li> <li>You want to ship less JS to the browser</li> <li>You want to keep your HTML clean</li>";return{c(){r=n("h2"),r.innerHTML=y,h=s(),m=n("ul"),m.innerHTML=d,c=s(),f=n("p"),f.textContent=$e,Z=s(),M=n("p"),M.innerHTML=qe,ee=s(),v=n("h2"),v.innerHTML=Be,te=s(),S=n("p"),S.textContent=We,ie=s(),I=n("p"),I.textContent=Re,ae=s(),U=n("pre"),ne=new wt(!1),le=s(),g=n("p"),g.textContent=Ee,se=s(),P=n("pre"),oe=new wt(!1),ue=s(),j=n("p"),j.textContent=Ae,re=s(),b=n("h2"),b.innerHTML=Fe,de=s(),Y=n("p"),Y.innerHTML=Ve,pe=s(),z=n("p"),z.innerHTML=De,ce=s(),w=n("h2"),w.innerHTML=Ge,me=s(),J=n("p"),J.textContent=Ke,he=s(),x=n("h2"),x.innerHTML=Ne,fe=s(),$=n("p"),$.textContent=Oe,ye=s(),q=n("p"),q.innerHTML=Qe,ve=s(),T=n("h2"),T.innerHTML=Xe,be=s(),B=n("p"),B.innerHTML=Ze,we=s(),C=n("h2"),C.innerHTML=et,xe=s(),W=n("p"),W.textContent=tt,Te=s(),_=n("h2"),_.innerHTML=it,Ce=s(),R=n("p"),R.textContent=at,_e=s(),E=n("p"),E.textContent=nt,He=s(),A=n("p"),A.innerHTML=lt,ke=s(),H=n("h2"),H.innerHTML=st,Le=s(),F=n("p"),F.innerHTML=ot,Me=s(),k=n("h2"),k.innerHTML=ut,Se=s(),V=n("ul"),V.innerHTML=rt,Ie=s(),D=n("p"),D.textContent=dt,Ue=s(),L=n("h2"),L.innerHTML=pt,ge=s(),G=n("p"),G.innerHTML=ct,Pe=s(),K=n("p"),K.textContent=mt,je=s(),N=n("ul"),N.innerHTML=ht,Ye=s(),O=n("p"),O.textContent=ft,ze=s(),Q=n("ul"),Q.innerHTML=yt,this.h()},l(e){r=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(r)!=="svelte-134ab0w"&&(r.innerHTML=y),h=o(e),m=l(e,"UL",{"data-svelte-h":!0}),u(m)!=="svelte-11mng1b"&&(m.innerHTML=d),c=o(e),f=l(e,"P",{"data-svelte-h":!0}),u(f)!=="svelte-1eb1vl2"&&(f.textContent=$e),Z=o(e),M=l(e,"P",{"data-svelte-h":!0}),u(M)!=="svelte-s63buc"&&(M.innerHTML=qe),ee=o(e),v=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(v)!=="svelte-1ijoww"&&(v.innerHTML=Be),te=o(e),S=l(e,"P",{"data-svelte-h":!0}),u(S)!=="svelte-vcufel"&&(S.textContent=We),ie=o(e),I=l(e,"P",{"data-svelte-h":!0}),u(I)!=="svelte-od7cjo"&&(I.textContent=Re),ae=o(e),U=l(e,"PRE",{class:!0});var t=xt(U);ne=Tt(t,!1),t.forEach(i),le=o(e),g=l(e,"P",{"data-svelte-h":!0}),u(g)!=="svelte-1surzqa"&&(g.textContent=Ee),se=o(e),P=l(e,"PRE",{class:!0});var vt=xt(P);oe=Tt(vt,!1),vt.forEach(i),ue=o(e),j=l(e,"P",{"data-svelte-h":!0}),u(j)!=="svelte-wwduzd"&&(j.textContent=Ae),re=o(e),b=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(b)!=="svelte-177qfmq"&&(b.innerHTML=Fe),de=o(e),Y=l(e,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-1spf9n3"&&(Y.innerHTML=Ve),pe=o(e),z=l(e,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1fusvwh"&&(z.innerHTML=De),ce=o(e),w=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(w)!=="svelte-1at8xya"&&(w.innerHTML=Ge),me=o(e),J=l(e,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1i747px"&&(J.textContent=Ke),he=o(e),x=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(x)!=="svelte-1uteg69"&&(x.innerHTML=Ne),fe=o(e),$=l(e,"P",{"data-svelte-h":!0}),u($)!=="svelte-tci39l"&&($.textContent=Oe),ye=o(e),q=l(e,"P",{"data-svelte-h":!0}),u(q)!=="svelte-1nxyix4"&&(q.innerHTML=Qe),ve=o(e),T=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(T)!=="svelte-16yhmcn"&&(T.innerHTML=Xe),be=o(e),B=l(e,"P",{"data-svelte-h":!0}),u(B)!=="svelte-1tzwm69"&&(B.innerHTML=Ze),we=o(e),C=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(C)!=="svelte-18pokdk"&&(C.innerHTML=et),xe=o(e),W=l(e,"P",{"data-svelte-h":!0}),u(W)!=="svelte-1pkxr7s"&&(W.textContent=tt),Te=o(e),_=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(_)!=="svelte-9wzi6s"&&(_.innerHTML=it),Ce=o(e),R=l(e,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1nu77if"&&(R.textContent=at),_e=o(e),E=l(e,"P",{"data-svelte-h":!0}),u(E)!=="svelte-ya05dy"&&(E.textContent=nt),He=o(e),A=l(e,"P",{"data-svelte-h":!0}),u(A)!=="svelte-190imoq"&&(A.innerHTML=lt),ke=o(e),H=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(H)!=="svelte-1w851ot"&&(H.innerHTML=st),Le=o(e),F=l(e,"P",{"data-svelte-h":!0}),u(F)!=="svelte-1s8bj82"&&(F.innerHTML=ot),Me=o(e),k=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(k)!=="svelte-1cucpdy"&&(k.innerHTML=ut),Se=o(e),V=l(e,"UL",{"data-svelte-h":!0}),u(V)!=="svelte-eak3mg"&&(V.innerHTML=rt),Ie=o(e),D=l(e,"P",{"data-svelte-h":!0}),u(D)!=="svelte-zdkls7"&&(D.textContent=dt),Ue=o(e),L=l(e,"H2",{id:!0,"data-svelte-h":!0}),u(L)!=="svelte-hxnf6c"&&(L.innerHTML=pt),ge=o(e),G=l(e,"P",{"data-svelte-h":!0}),u(G)!=="svelte-12ynduv"&&(G.innerHTML=ct),Pe=o(e),K=l(e,"P",{"data-svelte-h":!0}),u(K)!=="svelte-3tmopj"&&(K.textContent=mt),je=o(e),N=l(e,"UL",{"data-svelte-h":!0}),u(N)!=="svelte-1buq7tw"&&(N.innerHTML=ht),Ye=o(e),O=l(e,"P",{"data-svelte-h":!0}),u(O)!=="svelte-ij686h"&&(O.textContent=ft),ze=o(e),Q=l(e,"UL",{"data-svelte-h":!0}),u(Q)!=="svelte-b0ddwc"&&(Q.innerHTML=yt),this.h()},h(){p(r,"id","comparing-daisyui-and-tailwind-ui"),p(v,"id","core-differences"),ne.a=null,p(U,"class","language-html"),oe.a=null,p(P,"class","language-html"),p(b,"id","pricing-and-costs"),p(w,"id","customization"),p(x,"id","dark-mode-and-themes"),p(T,"id","html-size"),p(C,"id","css-size-and-unused-styles"),p(_,"id","javascript-and-interactivity"),p(H,"id","accessibility"),p(k,"id","frameworks-and-libraries"),p(L,"id","which-one-should-you-use")},m(e,t){a(e,r,t),a(e,h,t),a(e,m,t),a(e,c,t),a(e,f,t),a(e,Z,t),a(e,M,t),a(e,ee,t),a(e,v,t),a(e,te,t),a(e,S,t),a(e,ie,t),a(e,I,t),a(e,ae,t),a(e,U,t),ne.m(Ht,U),a(e,le,t),a(e,g,t),a(e,se,t),a(e,P,t),oe.m(kt,P),a(e,ue,t),a(e,j,t),a(e,re,t),a(e,b,t),a(e,de,t),a(e,Y,t),a(e,pe,t),a(e,z,t),a(e,ce,t),a(e,w,t),a(e,me,t),a(e,J,t),a(e,he,t),a(e,x,t),a(e,fe,t),a(e,$,t),a(e,ye,t),a(e,q,t),a(e,ve,t),a(e,T,t),a(e,be,t),a(e,B,t),a(e,we,t),a(e,C,t),a(e,xe,t),a(e,W,t),a(e,Te,t),a(e,_,t),a(e,Ce,t),a(e,R,t),a(e,_e,t),a(e,E,t),a(e,He,t),a(e,A,t),a(e,ke,t),a(e,H,t),a(e,Le,t),a(e,F,t),a(e,Me,t),a(e,k,t),a(e,Se,t),a(e,V,t),a(e,Ie,t),a(e,D,t),a(e,Ue,t),a(e,L,t),a(e,ge,t),a(e,G,t),a(e,Pe,t),a(e,K,t),a(e,je,t),a(e,N,t),a(e,Ye,t),a(e,O,t),a(e,ze,t),a(e,Q,t)},p:Mt,d(e){e&&(i(r),i(h),i(m),i(c),i(f),i(Z),i(M),i(ee),i(v),i(te),i(S),i(ie),i(I),i(ae),i(U),i(le),i(g),i(se),i(P),i(ue),i(j),i(re),i(b),i(de),i(Y),i(pe),i(z),i(ce),i(w),i(me),i(J),i(he),i(x),i(fe),i($),i(ye),i(q),i(ve),i(T),i(be),i(B),i(we),i(C),i(xe),i(W),i(Te),i(_),i(Ce),i(R),i(_e),i(E),i(He),i(A),i(ke),i(H),i(Le),i(F),i(Me),i(k),i(Se),i(V),i(Ie),i(D),i(Ue),i(L),i(ge),i(G),i(Pe),i(K),i(je),i(N),i(Ye),i(O),i(ze),i(Q))}}}function Bt(X){let r,y;const h=[X[0],_t];let m={$$slots:{default:[qt]},$$scope:{ctx:X}};for(let d=0;d<h.length;d+=1)m=Je(m,h[d]);return r=new $t({props:m}),{c(){Ut(r.$$.fragment)},l(d){gt(r.$$.fragment,d)},m(d,c){Pt(r,d,c),y=!0},p(d,[c]){const f=c&1?Jt(h,[c&1&&Ct(d[0]),c&0&&Ct(_t)]):{};c&2&&(f.$$scope={dirty:c,ctx:d}),r.$set(f)},i(d){y||(jt(r.$$.fragment,d),y=!0)},o(d){Yt(r.$$.fragment,d),y=!1},d(d){zt(r,d)}}}const _t={title:"daisyUI vs. Tailwind UI",desc:"Which one is better? Which one should I use? Comparing Tailwind CSS component libraries daisyUI and Tailwind UI.",published:!0,date:"2023-9-10",author:"Pouya Saadeghi",thumbnail:"/images/blog/daisyui-vs-tailwindui.jpg",tags:["Tailwind CSS","Tailwind UI","Component Library"]};function Wt(X,r,y){return X.$$set=h=>{y(0,r=Je(Je({},r),bt(h)))},r=bt(r),[r]}class Vt extends St{constructor(r){super(),It(this,r,Wt,Bt,Lt,{})}}export{Vt as component};
