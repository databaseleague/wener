"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48898],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},31383:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e};const s={title:"LLVM IR"},f="LLVM",d={unversionedId:"dev/build/llvm",id:"dev/build/llvm",title:"LLVM IR",description:"- LLVM IR LLVM Language Reference Manual",source:"@site/../notes/dev/build/llvm.md",sourceDirName:"dev/build",slug:"/dev/build/llvm",permalink:"/notes/dev/build/llvm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/llvm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641222557,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{title:"LLVM IR"},sidebar:"docs",previous:{title:"just",permalink:"/notes/dev/build/just"},next:{title:"magefile",permalink:"/notes/dev/build/mage"}},b={},v=[],y={toc:v};function O(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),p),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"llvm"}),"LLVM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LLVM IR ",(0,n.kt)("a",m({parentName:"li"},{href:"https://llvm.org/docs/LangRef.html"}),"LLVM Language Reference Manual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://blog.yossarian.net/2021/07/19/LLVM-internals-part-1-bitcode-format"}),"LLVM internals, part 1: the bitcode format"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28233735"}),"HN")))),(0,n.kt)("li",{parentName:"ul"},"Learning Almost Nothing About LLVM ",(0,n.kt)("a",m({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28438296"}),"HN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/llir/llvm"}),"llir/llvm"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LLVM IR in pure Go"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://lowlevelbits.org/how-to-learn-compilers-llvm-edition/"}),"HOW TO LEARN COMPILERS: LLVM EDITION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://aykevl.nl/2019/04/llvm-from-go"}),"LLVM from a Go perspective"))))}O.isMDXComponent=!0}}]);