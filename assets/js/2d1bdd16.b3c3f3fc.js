"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93323],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),y=a,d=f["".concat(i,".").concat(y)]||f[y]||s[y]||o;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86059:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};const f={title:"HAProxy Data Plane"},y="HAProxy Data Plane",d={unversionedId:"devops/web/haproxy/haproxy-dataplane",id:"devops/web/haproxy/haproxy-dataplane",title:"HAProxy Data Plane",description:"- haproxytech/dataplaneapi",source:"@site/../notes/devops/web/haproxy/haproxy-dataplane.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/dataplane",permalink:"/notes/devops/web/haproxy/dataplane",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/haproxy-dataplane.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677583228,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"HAProxy Data Plane"},sidebar:"docs",previous:{title:"HAProxy \u914d\u7f6e",permalink:"/notes/devops/web/haproxy/conf"},next:{title:"HAProxy FAQ",permalink:"/notes/devops/web/haproxy/faq"}},m={},b=[],h={toc:b};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},h),u),o(t,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"haproxy-data-plane"}),"HAProxy Data Plane"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/haproxytech/dataplaneapi"}),"haproxytech/dataplaneapi"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,n.kt)("li",{parentName:"ul"},"\u66b4\u9732 HAProxy \u80fd\u529b\u4e3a REST \u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5b9e\u73b0\u4e0e\u5916\u90e8\u7cfb\u7edf\u5bf9\u63a5 - kubernetes ingress"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/documentation/dataplaneapi/"}),"HAProxy Data Plane API"))))))}v.isMDXComponent=!0}}]);