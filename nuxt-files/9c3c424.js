(window.webpackJsonp=window.webpackJsonp||[]).push([[67,9,11,17,39,44],{406:function(e,t,l){var o=l(18),n="["+l(407)+"]",r=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),d=function(e){return function(t){var l=String(o(t));return 1&e&&(l=l.replace(r,"")),2&e&&(l=l.replace(c,"")),l}};e.exports={start:d(1),end:d(2),trim:d(3)}},407:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},409:function(e,t,l){"use strict";var o=l(10),n=l(4),r=l(82),c=l(14),d=l(12),v=l(36),f=l(163),_=l(61),h=l(5),m=l(63),y=l(62).f,w=l(26).f,x=l(13).f,C=l(406).trim,S="Number",T=n.Number,k=T.prototype,E=v(m(k))==S,A=function(e){var t,l,o,n,r,c,d,code,v=_(e,!1);if("string"==typeof v&&v.length>2)if(43===(t=(v=C(v)).charCodeAt(0))||45===t){if(88===(l=v.charCodeAt(2))||120===l)return NaN}else if(48===t){switch(v.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+v}for(c=(r=v.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>n)return NaN;return parseInt(r,o)}return+v};if(r(S,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var N,O=function(e){var t=arguments.length<1?0:e,l=this;return l instanceof O&&(E?h((function(){k.valueOf.call(l)})):v(l)!=S)?f(new T(A(t)),l,O):A(t)},I=o?y(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;I.length>D;D++)d(T,N=I[D])&&!d(O,N)&&x(O,N,w(T,N));O.prototype=k,k.constructor=O,c(n,S,O)}},410:function(e,t,l){"use strict";l.r(t);l(40),l(409),l(22),l(39),l(64),l(114),l(37),l(38),l(164),l(48),l(162),l(83),l(49);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(e){return["height","width"].includes(e)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var e=this,t=[];return Object.keys(this.cachedStyles).forEach((function(l){t.push("".concat(e.convertToCssProperty(l)," ").concat(e.duration,"ms ").concat(e.easing))})),t.join(", ")}},methods:{enter:function(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),setTimeout(t,this.duration)},afterEnter:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},leave:function(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),setTimeout(t,this.duration)},afterLeave:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},detectAndCacheDimensions:function(e){if(!this.cachedStyles){var t=e.style.visibility,l=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=l}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(e){return"height"===this.dimension?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:"width"===this.dimension?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition:function(e){e.style.transition=this.transition},unsetTransition:function(e){e.style.transition=""},hideOverflow:function(e){e.style.overflow="hidden"},unsetOverflow:function(e){e.style.overflow=""},setClosedDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]="0"}))},setOpenedDimensions:function(e){var t=this;Object.keys(this.cachedStyles).forEach((function(l){e.style[l]=t.cachedStyles[l]}))},unsetDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]=""}))},forceRepaint:function(e){getComputedStyle(e)[this.dimension]},getCssValue:function(e,style){return getComputedStyle(e,null).getPropertyValue(style)},convertToCssProperty:function(style){var e=style.match(/([A-Z])/g);if(!e)return style;for(var i=0,t=e.length;i<t;i++)style=style.replace(new RegExp(e[i]),"-"+e[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},n=l(6),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:e.name},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},411:function(e,t,l){l(412)},412:function(e,t,l){"use strict";var o=l(2),n=l(18),r=l(84),c=l(85),d=l(165),v=l(3),f=l(23),_=v("replace"),h=RegExp.prototype,m=Math.max,y=function(e,t,l){return l>e.length?-1:""===t?l:e.indexOf(t,l)};o({target:"String",proto:!0},{replaceAll:function(e,t){var l,o,v,w,x,C,S,T,k=n(this),E=0,A=0,N="";if(null!=e){if((l=r(e))&&!~String(n("flags"in h?e.flags:c.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=e[_]))return o.call(e,k,t);if(f&&l)return String(k).replace(e,t)}for(v=String(k),w=String(e),(x="function"==typeof t)||(t=String(t)),C=w.length,S=m(1,C),E=y(v,w,0);-1!==E;)T=x?String(t(w,E,v)):d(w,v,E,[],void 0,t),N+=v.slice(A,E)+T,A=E+C,E=y(v,w,E+S);return A<v.length&&(N+=v.slice(A)),N}})},413:function(e,t,l){"use strict";var o=l(2),n=l(406).trim;o({target:"String",proto:!0,forced:l(414)("trim")},{trim:function(){return n(this)}})},414:function(e,t,l){var o=l(5),n=l(407);e.exports=function(e){return o((function(){return!!n[e]()||"​᠎"!="​᠎"[e]()||n[e].name!==e}))}},415:function(e,t,l){"use strict";l.r(t);l(411),l(413),l(114);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function e(t,l){for(var o,n=new Array(1+l++).join("  "),r=new Array(l-1).join("  "),i=0;i<t.children.length;i++)o=document.createTextNode("\n"+n),t.insertBefore(o,t.children[i]),e(t.children[i],l),t.lastElementChild==t.children[i]&&(o=document.createTextNode("\n"+r),t.appendChild(o));return t}var t,div;void 0!==this.$refs.component&&(this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",e(div,0).innerHTML))}},mounted:function(){this.setSrc()}},n=l(6),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"py-2"},[l("div",{staticClass:"pt-4 text-xs opacity-60"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),e.nocode?e._e():l("div",{staticClass:"mt-2 text-xs tabs"},[l("div",{staticClass:"tab tab-lifted",class:{"tab-active":!e.showcode},on:{click:function(t){e.showcode=!1}}},[e._v("Preview")]),e._v(" "),l("div",{staticClass:"tab tab-lifted",class:{"tab-active":e.showcode},on:{click:function(t){e.showcode=!0}}},[e._v("HTML")]),e._v(" "),l("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),e._v(" "),l("div",[l("collapse-transition",[!e.nocode&&e.showcode?l("div",{staticClass:"pt-2"},[l("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}]},[l("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html",staticStyle:{display:"block","overflow-x":"auto",padding:"0.5em",color:"#abb2bf",background:"#282c34"}})])]):e._e()]),e._v(" "),l("collapse-transition",[e.showcode?e._e():l("div",{staticClass:"pt-2"},[l("div",{ref:"component",class:e.classes},[e._t("default")],2)])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CollapseTransition:l(410).default})},416:function(e,t,l){"use strict";l.r(t);var o={props:["data"]},n=l(6),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._m(0),e._v(" "),e._m(1),e._v(" "),l("div",{staticClass:"mt-6 overflow-x-auto"},[l("table",{staticClass:"table w-full table-compact"},[l("thead",[l("tr",[l("th",[e._v("Class name")]),e._v(" "),!1!==e.data.showType?l("th",[e._v("Type")]):e._e(),e._v(" "),!0===e.data.showColors?l("th"):e._e(),e._v(" "),l("th")])]),e._v(" "),l("tbody",[e._l(e.data.components,(function(t,o){return l("tr",[l("th",{staticClass:"font-normal"},[l("span",{staticClass:"font-mono lowercase"},[e._v(e._s(t.class))])]),e._v(" "),!1!==e.data.showType?l("td",[l("span",{staticClass:"w-20 badge badge-sm badge-success"},[e._v("Component")])]):e._e(),e._v(" "),!0===e.data.showColors?l("td",[l("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:t.color})]):e._e(),e._v(" "),l("td",[e._v(e._s(t.desc))])])})),e._v(" "),e._l(e.data.utilities,(function(t,o){return l("tr",[l("th",{staticClass:"font-normal"},[l("span",{staticClass:"font-mono lowercase"},[e._v(e._s(t.class))])]),e._v(" "),!1!==e.data.showType?l("td",[l("span",{staticClass:"w-20 badge badge-sm badge-info"},[e._v("Utility")])]):e._e(),e._v(" "),!0===e.data.showColors?l("td",[l("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:t.color})]):e._e(),e._v(" "),l("td",[e._v(e._s(t.desc))])])})),e._v(" "),e._l(e.data.responsive,(function(t,o){return l("tr",[l("th",{staticClass:"font-normal"},[l("span",{staticClass:"font-mono lowercase"},[e._v(e._s(t.class))])]),e._v(" "),!1!==e.data.showType?l("td",[l("span",{staticClass:"w-20 badge badge-sm badge-info"},[e._v("Responsive")])]):e._e(),e._v(" "),!0===e.data.showColors?l("td",[l("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:t.color})]):e._e(),e._v(" "),l("td",[e._v(e._s(t.desc))])])}))],2)])]),e._v(" "),!1!==e.data.showTitle?l("div",{staticClass:"divider"}):e._e(),e._v(" "),!1!==e.data.showTitle?l("div",{staticClass:"mt-6 text-xl font-bold"},[e._v("Examples")]):e._e()])}),[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"hidden mt-2 mb-10 text-center xl:block"},[l("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"728px",height:"90px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"1141251424"}}),e._v(" "),l("script",[e._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mt-2 mb-10 text-center xl:hidden"},[l("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"300px",height:"100px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"6427020085"}}),e._v(" "),l("script",[e._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])}],!1,null,null,null);t.default=component.exports},419:function(e,t,l){"use strict";l.r(t);var o=l(6),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"form-control"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},430:function(e,t,l){"use strict";l.r(t);var o={props:{classes:String}},n=l(6),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("select",{staticClass:"select",class:e.classes},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:l(430).default})},517:function(e,t,l){"use strict";l.r(t);var o={head:function(){return{title:"daisyUI — Tailwind CSS select menu component",meta:[{hid:"description",name:"description",content:"Tailwind CSS select menu component - Tailwind CSS select option examples"}]}}},n=l(6),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("ClassTable",{attrs:{data:{components:[{class:"form-control",desc:"Container element"},{class:"label",desc:"For helper text"},{class:"select",desc:"For <select> element"}],utilities:[{class:"select-bordered",desc:"Adds border to select"},{class:"select-ghost",desc:"Adds ghost style to checkbox"},{class:"select-primary",desc:"Adds `primary` color to select"},{class:"select-secondary",desc:"Adds `secondary` color to select"},{class:"select-accent",desc:"Adds `accent` color to select"},{class:"select-info",desc:"Adds `info` color to select"},{class:"select-success",desc:"Adds `success` color to select"},{class:"select-warning",desc:"Adds `warning` color to select"},{class:"select-error",desc:"Adds `error` color to select"}],responsive:[{class:"select-lg",desc:"Large size for select"},{class:"select-md",desc:"Medium (default) size for select"},{class:"select-sm",desc:"Small size for select"},{class:"select-xs",desc:"Extra small size for select"}]}}}),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select"}},[l("Select",{attrs:{classes:"select-bordered w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select primary"}},[l("Select",{attrs:{classes:"select-bordered select-primary w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select secondary"}},[l("Select",{attrs:{classes:"select-bordered select-secondary w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select accent"}},[l("Select",{attrs:{classes:"select-bordered select-accent w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select info"}},[l("Select",{attrs:{classes:"select-bordered select-info w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select success"}},[l("Select",{attrs:{classes:"select-bordered select-success w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select warning"}},[l("Select",{attrs:{classes:"select-bordered select-warning w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select error"}},[l("Select",{attrs:{classes:"select-bordered select-error w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select with labels"}},[l("FormControl",{staticClass:"w-full max-w-xs"},[l("label",{staticClass:"label"},[l("span",{staticClass:"label-text"},[e._v("Choose your superpower")]),e._v(" "),l("a",{staticClass:"label-text-alt",attrs:{href:"#"}},[e._v("\n          Pick wisely\n        ")])]),e._v(" "),l("Select",{attrs:{classes:"select-bordered w-full"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])]),e._v(" "),l("label",{staticClass:"label"},[l("a",{staticClass:"label-text-alt",attrs:{href:"#"}},[e._v("Cant pick?")]),e._v(" "),l("a",{staticClass:"label-text-alt",attrs:{href:"#"}},[e._v("Need hint?")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select sizes"}},[l("Select",{attrs:{classes:"select-bordered select-lg w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Large")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])]),e._v(" "),l("Select",{attrs:{classes:"select-bordered w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Normal")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])]),e._v(" "),l("Select",{attrs:{classes:"select-bordered select-sm w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Small")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])]),e._v(" "),l("Select",{attrs:{classes:"select-bordered select-xs w-full max-w-xs"}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Tiny")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1),e._v(" "),l("Wrapper",{attrs:{classes:"flex flex-col space-y-2",title:"select disabled"}},[l("Select",{attrs:{classes:"select-bordered w-full max-w-xs",disabled:""}},[l("option",{attrs:{disabled:"",selected:""}},[e._v("Choose your superpower")]),e._v(" "),l("option",[e._v("telekinesis")]),e._v(" "),l("option",[e._v("time travel")]),e._v(" "),l("option",[e._v("invisibility")])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ClassTable:l(416).default,Select:l(430).default,Wrapper:l(415).default,FormControl:l(419).default})}}]);