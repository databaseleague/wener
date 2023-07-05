"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61351],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50649:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e};const f={title:"NestJS Zod"},m="NestJS Zod",d={unversionedId:"web/framework/nestjs/nestjs-zod",id:"web/framework/nestjs/nestjs-zod",title:"NestJS Zod",description:"- Query \u53c2\u6570\u6ca1\u751f\u6210",source:"@site/../notes/web/framework/nestjs/nestjs-zod.md",sourceDirName:"web/framework/nestjs",slug:"/web/framework/nestjs/zod",permalink:"/notes/web/framework/nestjs/zod",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/nestjs/nestjs-zod.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685599201,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"NestJS Zod"},sidebar:"docs",previous:{title:"NestJS Version",permalink:"/notes/web/framework/nestjs/version"},next:{title:"NextJS",permalink:"/notes/web/framework/nextjs/"}},b={},y=[],w={toc:y};function O(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},w),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"nestjs-zod"}),"NestJS Zod"),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Query \u53c2\u6570\u6ca1\u751f\u6210"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/risen228/nestjs-zod/issues/23"}),"https://github.com/risen228/nestjs-zod/issues/23")),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7528 DTO - \u4f46\u5b9a\u4e49\u7684\u989d\u5916\u53c2\u6570\u4f1a\u88ab filter\uff0c\u83b7\u53d6\u4e0d\u5230"),(0,n.kt)("li",{parentName:"ul"},"\u989d\u5916\u7684\u53c2\u6570\u53ef\u4ee5\u8003\u8651 ",(0,n.kt)("inlineCode",{parentName:"li"},"@ApiParam({ name: 'id', schema: paramsSchema.properties.id })")),(0,n.kt)("li",{parentName:"ul"},"\u6216\u8005\u63a7\u5236 ",(0,n.kt)("inlineCode",{parentName:"li"},"@UsePipes(ZodValidationPipe)")," \u4f5c\u7528\u8303\u56f4"))))}O.isMDXComponent=!0}}]);