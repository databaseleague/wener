"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37916],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,y=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},54032:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return s},metadata:function(){return y},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&u(e,r,t[r]);return e};const s={title:"typia"},m="typia",y={unversionedId:"web/framework/typia",id:"web/framework/typia",title:"typia",description:"- samchon/typia",source:"@site/../notes/web/framework/typia.md",sourceDirName:"web/framework",slug:"/web/framework/typia",permalink:"/notes/web/framework/typia",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/typia.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1684216634,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"typia"},sidebar:"docs",previous:{title:"ts-patch",permalink:"/notes/web/framework/ts-patch"},next:{title:"uniapp",permalink:"/notes/web/framework/uniapp"}},b={},d=[],w={toc:d};function O(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},w),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"typia"}),"typia"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/samchon/typia"}),"samchon/typia"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e interface \u751f\u6210",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 validator - \u6bd4 class-validator \u66f4\u5feb"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 JSON \u5e8f\u5217\u5316\u65b9\u6cd5"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 JSON Schema"))),(0,n.kt)("li",{parentName:"ul"},"\u975e\u6807\u51c6\u73af\u5883\u53ef\u4ee5\u624b\u52a8\u751f\u6210 - ",(0,n.kt)("inlineCode",{parentName:"li"},"pnpm typia generate")),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982: swc, esbuild, babel"),(0,n.kt)("li",{parentName:"ul"},"vite \u53ef\u4ee5\u4f7f\u7528 plugin"),(0,n.kt)("li",{parentName:"ul"},"AOT \u4f9d\u8d56 ",(0,n.kt)("a",f({parentName:"li"},{href:"/notes/web/framework/ts-patch"}),"ts-patch"))))),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"pnpm add typia\n")))}O.isMDXComponent=!0}}]);