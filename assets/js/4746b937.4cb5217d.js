"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90958],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,v=m["".concat(o,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83455:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={tags:["FAQ"]},f="API FAQ",v={unversionedId:"service/api/api-faq",id:"service/api/api-faq",title:"API FAQ",description:"HTTP vs RPC vs gRPC",source:"@site/../notes/service/api/api-faq.md",sourceDirName:"service/api",slug:"/service/api/faq",permalink:"/notes/service/api/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/api-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664421654,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"API Design",permalink:"/notes/service/api/design"},next:{title:"Apollo Config",permalink:"/notes/service/api/apollo-config"}},k={},d=[{value:"HTTP vs RPC vs gRPC",id:"http-vs-rpc-vs-grpc",level:2}],y={toc:d};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),c),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"api-faq"}),"API FAQ"),(0,n.kt)("h2",s({},{id:"http-vs-rpc-vs-grpc"}),"HTTP vs RPC vs gRPC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HTTP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u6807\u51c6\u7684\u8bed\u4e49\u64cd\u4f5c - method,path,header,encoding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8def\u7531\u901a\u5e38\u57fa\u4e8e HOST+PATH"))),(0,n.kt)("li",{parentName:"ul"},"Proxy Server \u80fd Inspect \u8bf7\u6c42\u4fe1\u606f\u4f5c\u51fa\u54cd\u5e94",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u7f13\u5b58 GET \u54cd\u5e94, \u589e\u52a0\u989d\u5916\u65e5\u5fd7, \u589e\u52a0\u5143\u4fe1\u606f"))),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a WWW \u7684\u57fa\u7840\u534f\u8bae\u5e94\u7528\u6700\u5e7f\u6cdb"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u8eab\u4e3b\u8981\u7528\u4e8e\u63d0\u4f9b Web Server - POST \u8bf7\u6c42\u53ef\u63d0\u4f9b C/S \u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u534f\u8bae\u672c\u8eab\u7075\u6d3b\uff0c\u9664\u4e86\u57fa\u672c\u7ea6\u675f\uff0c\u5176\u4ed6\u7684\u4eba\u4e3a\u89c4\u8303\u53ea\u662f\u5f62\u5f0f\u4e0a\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982: RESTful, JSONRPC, gRPC-Web"))))),(0,n.kt)("li",{parentName:"ul"},"RPC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RPC \u53ea\u662f\u6982\u5ff5\u800c\u4e0d\u662f\u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7a0b\u5e8f\u8bed\u4e49",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8def\u7531\u901a\u5e38\u57fa\u4e8e \u670d\u52a1+\u65b9\u6cd5"))),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e API \u64cd\u4f5c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316 - \u9ad8\u6548 - \u56fa\u5b9a\u7f16\u7801\u903b\u8f91"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168 - mTLS, \u9ed8\u8ba4 TLS"),(0,n.kt)("li",{parentName:"ul"},"\u8de8\u8bed\u8a00 - DSL+\u751f\u6210 - \u5b8c\u6574\u6807\u51c6\u5de5\u5177\u94fe"))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684 RPC \u534f\u8bae\u5b9e\u73b0\u90fd\u6709\u6240\u4e0d\u540c"))),(0,n.kt)("li",{parentName:"ul"},"gRPC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u6d41 RPC \u534f\u8bae - \u57fa\u4e8e HTTP2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"protobuf \u5e8f\u5217\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 TLS"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e\u5e38\u591a\u7684\u8bed\u8a00\u751f\u6210"))),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u7ea7\u7684 Proxy Server \u80fd Inspect \u8bf7\u6c42\u8fdb\u884c\u6709\u9650\u7684\u5904\u7406\u903b\u8f91",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u534f\u8bae\u8f6c\u6362"),(0,n.kt)("li",{parentName:"ul"},"trace \u4fe1\u606f\u6ce8\u5165"),(0,n.kt)("li",{parentName:"ul"},"retry")))))))}b.isMDXComponent=!0}}]);