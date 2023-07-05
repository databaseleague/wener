"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67243],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(n),s=a,g=f["".concat(u,".").concat(s)]||f[s]||m[s]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e};const f={title:"Vlang FAQ",tags:["FAQ"]},s="Vlang FAQ",g={unversionedId:"languages/v/v-faq",id:"languages/v/v-faq",title:"Vlang FAQ",description:"Vlang \u4e0e Golang \u7684\u76f8\u4f3c\u70b9",source:"@site/../notes/languages/v/v-faq.md",sourceDirName:"languages/v",slug:"/languages/v/faq",permalink:"/notes/languages/v/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/v/v-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634945411,formattedLastUpdatedAt:"Oct 22, 2021",frontMatter:{title:"Vlang FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Vlang Build",permalink:"/notes/languages/v/build"},next:{title:"V Reference",permalink:"/notes/languages/v/reference"}},d={},k=[{value:"Vlang \u4e0e Golang \u7684\u76f8\u4f3c\u70b9",id:"vlang-\u4e0e-golang-\u7684\u76f8\u4f3c\u70b9",level:2}],N={toc:k};function v(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},N),c),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"vlang-faq"}),"Vlang FAQ"),(0,r.kt)("h2",m({},{id:"vlang-\u4e0e-golang-\u7684\u76f8\u4f3c\u70b9"}),"Vlang \u4e0e Golang \u7684\u76f8\u4f3c\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"=")),(0,r.kt)("li",{parentName:"ul"},"struct, interface, \u51fd\u6570\u5904\u7406\u65b9\u5f0f, type alias"),(0,r.kt)("li",{parentName:"ul"},"go, chan, select"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_test.v")," \u4e3a\u6d4b\u8bd5, ",(0,r.kt)("inlineCode",{parentName:"li"},"test_")," \u4e3a\u6d4b\u8bd5\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"v fmt")),(0,r.kt)("li",{parentName:"ul"},"c inter op"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$embed_file")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"//go:embed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".${backend}.v")," \u6839\u636e\u60c5\u51b5\u9009\u62e9\u7f16\u8bd1"),(0,r.kt)("li",{parentName:"ul"},"\u6bd4 Go \u66f4\u597d\u7684\u5730\u65b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"error/optional \u7684\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u53ef\u4ee5\u4f5c\u4e3a\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b57\u7b26\u4e32\u63d2\u503c"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&Type")," \u8868\u793a\u5f15\u7528\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"*Type")),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58\u57fa\u4e8e reference count \u91ca\u653e - \u5927\u90e8\u5206\u4f20\u503c\u4e3a\u81ea\u52a8\u91ca\u653e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64 v \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"mut Type")," \u800c\u4e0d\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"*Type")," - \u66f4\u597d\u7531\u7f16\u8bd1\u5668\u63a7\u5236\u662f\u5426\u662f\u6307\u9488"))),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u5168\u5c40\u53d8\u91cf - \u9ed8\u8ba4 pure function"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u53ef\u53d8 - \u9700\u8981 mut \u4fee\u9970"),(0,r.kt)("li",{parentName:"ul"},"int \u56fa\u5b9a\u4e3a i32"),(0,r.kt)("li",{parentName:"ul"},"interface \u8c03\u7528\u53ef\u80fd\u4e0d\u4f1a\u8c03\u7528\u5230\u5b9e\u9645 struct \u5b9e\u73b0\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"shared \u5bf9\u8c61\u7b49\u540c\u4e8e\u5c01\u88c5\u4e86 mutex \u7684\u5938\u7ebf\u7a0b\u5171\u4eab\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5efa ORM - \u652f\u6301 LINQ"),(0,r.kt)("li",{parentName:"ul"},"unsafe \u5173\u952e\u5b57\u64cd\u4f5c\u5185\u5b58\u4e0d\u5b89\u5168\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"union \u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"sizeof, ",(0,r.kt)("inlineCode",{parentName:"li"},"__offsetof")),(0,r.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u7f16\u8bd1 ",(0,r.kt)("inlineCode",{parentName:"li"},"$if")," \u7c7b\u4f3c go build tag \u7b49\u540c\u4e8e c \u7684 preprocessor"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u652f\u6301 attribute - \u7c7b\u4f3c java \u7684 annotation"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u751f\u6210\u6765\u652f\u6301\u8303\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7f16\u8bd1\u65f6\u53cd\u5c04"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7b80\u5355\u7684\u64cd\u4f5c\u7b26\u91cd\u8f7d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+, -, *, /, %, <, >, ==, !=, <=, >=")))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 asm \u5173\u952e\u5b57\u5185\u8054\u6c47\u7f16")))))}v.isMDXComponent=!0}}]);