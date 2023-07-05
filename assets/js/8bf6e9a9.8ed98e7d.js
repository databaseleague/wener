"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75392],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,g=s["".concat(u,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},10985:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e};const s={title:"\u805a\u5408"},m="\u805a\u5408",g={unversionedId:"db/theory/aggregate",id:"db/theory/aggregate",title:"\u805a\u5408",description:"\u5c06\u6240\u6709\u6570\u636e\u5904\u7406\u4e3a\u4e00\u4e2a\u6570\u636e\u7684\u8fc7\u7a0b\u3002",source:"@site/../notes/db/theory/aggregate.md",sourceDirName:"db/theory",slug:"/db/theory/aggregate",permalink:"/notes/db/theory/aggregate",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/theory/aggregate.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641222557,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{title:"\u805a\u5408"},sidebar:"docs",previous:{title:"Sysbench",permalink:"/notes/db/sysbench"},next:{title:"ulid",permalink:"/notes/db/ulid"}},d={},y=[],b={toc:y};function k(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"\u805a\u5408"}),"\u805a\u5408"),(0,n.kt)("p",null,"\u5c06\u6240\u6709\u6570\u636e\u5904\u7406\u4e3a\u4e00\u4e2a\u6570\u636e\u7684\u8fc7\u7a0b\u3002"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u51fd\u6570 - ",(0,n.kt)("a",f({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Aggregate_function"}),"Aggregate function"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"avg"),(0,n.kt)("li",{parentName:"ul"},"count"),(0,n.kt)("li",{parentName:"ul"},"max"),(0,n.kt)("li",{parentName:"ul"},"mean"),(0,n.kt)("li",{parentName:"ul"},"min"),(0,n.kt)("li",{parentName:"ul"},"mode"),(0,n.kt)("li",{parentName:"ul"},"range"),(0,n.kt)("li",{parentName:"ul"},"sum"),(0,n.kt)("li",{parentName:"ul"},"NanMean - mean ignore NaN"),(0,n.kt)("li",{parentName:"ul"},"stddev"))),(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u6570\u636e - ",(0,n.kt)("a",f({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Aggregate_data"}),"Aggregate data"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u89c6\u56fe"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Aggregate_(data_warehouse)"}),"OLAP Aggregate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e\u7684 rollup \u8fc7\u7a0b")))))}k.isMDXComponent=!0}}]);