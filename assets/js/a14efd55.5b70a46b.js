"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33392],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59438:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e};const f={tags:["FAQ"]},m="X11 FAQ",d={unversionedId:"os/linux/desktop/x11/x11-faq",id:"os/linux/desktop/x11/x11-faq",title:"X11 FAQ",description:"DISPLAY",source:"@site/../notes/os/linux/desktop/x11/x11-faq.md",sourceDirName:"os/linux/desktop/x11",slug:"/os/linux/desktop/x11/faq",permalink:"/notes/os/linux/desktop/x11/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/desktop/x11/x11-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669789233,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"X11",permalink:"/notes/os/linux/desktop/x11/"},next:{title:"x11vnc",permalink:"/notes/os/linux/desktop/x11/x11vnc"}},y={},b=[{value:"DISPLAY",id:"display",level:2}],x={toc:b};function O(e){var t,r=e,{components:o}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},x),c),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"x11-faq"}),"X11 FAQ"),(0,n.kt)("h2",s({},{id:"display"}),"DISPLAY"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u683c\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hostname:D.S",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"D - display \u7f16\u53f7"),(0,n.kt)("li",{parentName:"ul"},"S - screen \u7f16\u53f7"),(0,n.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u4e3a TCP 6000+D"))),(0,n.kt)("li",{parentName:"ul"},"host/unix:D.S",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/tmp/.X11-unix/XD"))),(0,n.kt)("li",{parentName:"ul"},":D.S -> host/unix:D.S")))))}O.isMDXComponent=!0}}]);