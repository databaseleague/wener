"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29247],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),b=o,y=f["".concat(s,".").concat(b)]||f[b]||p[b]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89720:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return m}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&u(e,r,t[r]);return e};const f={title:"Sysbench"},b="Sysbench",y={unversionedId:"db/sysbench",id:"db/sysbench",title:"Sysbench",description:"- akopytov/sysbench",source:"@site/../notes/db/sysbench.md",sourceDirName:"db",slug:"/db/sysbench",permalink:"/notes/db/sysbench",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/sysbench.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678946104,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"Sysbench"},sidebar:"docs",previous:{title:"zinc",permalink:"/notes/db/search/zincsearch"},next:{title:"\u805a\u5408",permalink:"/notes/db/theory/aggregate"}},d={},m=[],h={toc:m};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},h),u),a(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"sysbench"}),"Sysbench"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/akopytov/sysbench"}),"akopytov/sysbench"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"brew install sysbench\n")))}O.isMDXComponent=!0}}]);