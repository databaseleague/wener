"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10334],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,y=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},94565:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return y},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const s={title:"\u5fae\u4fe1\u652f\u4ed8"},m="\u5fae\u4fe1\u652f\u4ed8",y={unversionedId:"platform/wechat/wechat-pay",id:"platform/wechat/wechat-pay",title:"\u5fae\u4fe1\u652f\u4ed8",description:"- \u5fae\u4fe1\u652f\u4ed8\u6587\u6863",source:"@site/../notes/platform/wechat/wechat-pay.md",sourceDirName:"platform/wechat",slug:"/platform/wechat/pay",permalink:"/notes/platform/wechat/pay",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/wechat/wechat-pay.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1676530464,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"\u5fae\u4fe1\u652f\u4ed8"},sidebar:"docs",previous:{title:"\u5f00\u653e\u5e73\u53f0",permalink:"/notes/platform/wechat/open"},next:{title:"Wechat Web",permalink:"/notes/platform/wechat/web"}},d={},b=[],w={toc:b};function h(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},w),u),o(t,c({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"\u5fae\u4fe1\u652f\u4ed8"}),"\u5fae\u4fe1\u652f\u4ed8"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"# serial no\nopenssl x509 -in cert.pem -noout -serial\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://pay.weixin.qq.com/wiki/doc/apiv3/index.shtml"}),"\u5fae\u4fe1\u652f\u4ed8\u6587\u6863")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/klover2/wechatpay-node-v3-ts"}),"klover2/wechatpay-node-v3-ts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"NodeJS")))))}h.isMDXComponent=!0}}]);