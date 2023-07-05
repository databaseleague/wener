"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76232],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62815:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const m={tags:["Protocol"]},f="\u90ae\u4ef6\u534f\u8bae",d={unversionedId:"service/email/email-protocol",id:"service/email/email-protocol",title:"\u90ae\u4ef6\u534f\u8bae",description:"- SMTP - Simple Mail Transfer Protocol",source:"@site/../notes/service/email/email-protocol.md",sourceDirName:"service/email",slug:"/service/email/protocol",permalink:"/notes/service/email/protocol",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/email/email-protocol.md",tags:[{label:"Protocol",permalink:"/notes/tags/protocol"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{tags:["Protocol"]},sidebar:"docs",previous:{title:"EMail Awesome",permalink:"/notes/service/email/awesome"},next:{title:"Apache James",permalink:"/notes/service/email/james"}},y={},b=[],v={toc:b};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),u),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"\u90ae\u4ef6\u534f\u8bae"}),"\u90ae\u4ef6\u534f\u8bae"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SMTP - Simple Mail Transfer Protocol",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53d1\u4fe1"),(0,n.kt)("li",{parentName:"ul"},"\u7aef\u53e3 25 SSL 465"))),(0,n.kt)("li",{parentName:"ul"},"IMAP - Internet Message Access Protocol",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0e POP3 \u7c7b\u4f3c"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u5c06\u90ae\u4ef6\u4fdd\u7559\u5728\u670d\u52a1\u5668\u4e0a"),(0,n.kt)("li",{parentName:"ul"},"\u6bd4 POP \u4f7f\u7528\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\u548c CPU \u8d44\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u7aef\u53e3 143 SSL 993"))),(0,n.kt)("li",{parentName:"ul"},"POP - Post Office Protocol",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6536\u4fe1"),(0,n.kt)("li",{parentName:"ul"},"\u534f\u8bae\u63d0\u4f9b\u7684\u529f\u80fd\u76f8\u5bf9\u7b80\u5355,\u53ea\u662f\u7b80\u5355\u7684\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6240\u6709\u90ae\u4ef6\u5e76\u5220\u9664."),(0,n.kt)("li",{parentName:"ul"},"\u7aef\u53e3 110 SSL 995"))),(0,n.kt)("li",{parentName:"ul"},"LMTP"),(0,n.kt)("li",{parentName:"ul"},"ManageSieve"),(0,n.kt)("li",{parentName:"ul"},"JMAP"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc3501"}),"rfc3501"))))}O.isMDXComponent=!0}}]);