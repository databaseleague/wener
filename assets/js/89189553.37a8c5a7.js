"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51811],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35833:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={title:"graphql"},g=void 0,f={unversionedId:"languages/go/lib/graphql",id:"languages/go/lib/graphql",title:"graphql",description:"graphql-go/graphql",source:"@site/../notes/languages/go/lib/graphql.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/graphql",permalink:"/notes/languages/go/lib/graphql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/graphql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1626078012,formattedLastUpdatedAt:"Jul 12, 2021",frontMatter:{title:"graphql"},sidebar:"docs",previous:{title:"gqlgen",permalink:"/notes/languages/go/lib/gqlgen"},next:{title:"ko",permalink:"/notes/languages/go/lib/ko"}},d={},k=[{value:"graphql-go/graphql",id:"graphql-gographql",level:2}],b={toc:k};function h(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",s({},{id:"graphql-gographql"}),"graphql-go/graphql"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/graphql-go/graphql"}),"graphql-go/graphql")," \u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Golang GraphQL \u89e3\u6790\u3001\u6267\u884c\u5e93"),(0,n.kt)("li",{parentName:"ul"},"Code First - \u5148 Go \u4ee3\u7801\uff0c\u7136\u540e\u751f\u6210 GraphQL"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 struct \u6784\u5efa\u5185\u5bb9\u751f\u6210 graphql schema"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 struct \u6784\u5efa resolver \u548c\u7c7b\u578b\u5b57\u6bb5\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u6784\u5efa\u8fc7\u7a0b\u548c\u6267\u884c\u8fc7\u7a0b\u53ef\u4ee5\u4f7f\u7528 thunk \u6a21\u5f0f - \u8fd4\u56de\u51fd\u6570\uff0c\u7528\u5230\u7684\u65f6\u5019\u518d\u6267\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u5b58\u5728\u5faa\u73af\u4f9d\u8d56\uff0c\u5ef6\u8fdf\u6267\u884c\u4e5f\u80fd\u8fdb\u884c\u5176\u4ed6\u4f18\u5316"))),(0,n.kt)("li",{parentName:"ul"},"resolve - ",(0,n.kt)("inlineCode",{parentName:"li"},"func(p ResolveParams) (interface{}, error)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DefaultResolveFn - field \u9ed8\u8ba4 resolve",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 map \u548c struct - \u4e0d\u652f\u6301 Embed struct"),(0,n.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u6bd4\u8f83\u5ffd\u7565\u5927\u5c0f\u5199"))),(0,n.kt)("li",{parentName:"ul"},"source \u4e5f\u53ef\u4ee5\u5b9e\u73b0 FieldResolver - \u8fd9\u6837\u53ef\u4ee5\u4ea4\u7531\u8fd4\u56de\u7ed3\u679c\u5224\u65ad\u5982\u4f55 resolve"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u8fc7\u7a0b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6536\u96c6\u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"resolve \u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u503c - \u5904\u7406 promise\u3001\u5e8f\u5217\u5316 scalars\u3001\u6267\u884c\u4e0b\u7ea7\u5b57\u6bb5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"thunk \u5ef6\u8fdf"),(0,n.kt)("li",{parentName:"ul"},"null \u68c0\u67e5"),(0,n.kt)("li",{parentName:"ul"},"list \u5c55\u5f00"),(0,n.kt)("li",{parentName:"ul"},"union \u548c interface \u5b9e\u9645\u7c7b\u578b\u68c0\u6d4b"),(0,n.kt)("li",{parentName:"ul"},"object \u5c55\u5f00 - \u5411\u4e0b\u6c42\u503c"))))))),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ParseDidStart(context.Context) (context.Context, ParseFinishFunc)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ValidationDidStart(context.Context) (context.Context, ValidationFinishFunc)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ExecutionDidStart(context.Context) (context.Context, ExecutionFinishFunc)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ResolveFieldDidStart(context.Context, *ResolveInfo) (context.Context, ResolveFieldFinishFunc)"))))))}h.isMDXComponent=!0}}]);