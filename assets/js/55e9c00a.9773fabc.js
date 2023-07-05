"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47546],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(a),c=n,g=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return a?r.createElement(g,o(o({ref:t},m),{},{components:a})):r.createElement(g,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},82713:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return b}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&m(e,a,t[a]);return e};const s={tags:["Version"]},c="ArangoDB Version",g={unversionedId:"db/graph/arangodb-version",id:"db/graph/arangodb-version",title:"ArangoDB Version",description:"| version        | date       |",source:"@site/../notes/db/graph/arangodb-version.md",sourceDirName:"db/graph",slug:"/db/graph/arangodb-version",permalink:"/notes/db/graph/arangodb-version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/graph/arangodb-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{tags:["Version"]},sidebar:"docs",previous:{title:"agensgraph",permalink:"/notes/db/graph/agensgraph"},next:{title:"ArangoDB",permalink:"/notes/db/graph/arangodb"}},k={},b=[{value:"ArangoDB 3.9",id:"arangodb-39",level:2},{value:"ArangoDB 3.8",id:"arangodb-38",level:2},{value:"ArangoDB 3.7",id:"arangodb-37",level:2},{value:"ArangoDB 3.5",id:"arangodb-35",level:2},{value:"ArangoDB 3.2",id:"arangodb-32",level:2}],N={toc:b};function f(e){var t,a=e,{components:n}=a,m=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},N),m),l(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"arangodb-version"}),"ArangoDB Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"version"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"#arangodb-39"}),"ArangoDB 3.9")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"2021-02-15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"#arangodb-38"}),"ArangoDB 3.8")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"2021-07-29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"#arangodb-37"}),"ArangoDB 3.7")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"2020-08-27")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"#arangodb-36"}),"ArangoDB 3.6")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"2020-08-27")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"#arangodb-37"}),"ArangoDB 3.7")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"2020-08-27")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://www.arangodb.com/docs/stable/release-notes.html"}),"Release Notes")),(0,r.kt)("li",{parentName:"ul"},"ArangoML")),(0,r.kt)("h2",d({},{id:"arangodb-39"}),"ArangoDB 3.9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-dimensional Indexes (experimental)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"zkd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://www.arangodb.com/docs/stable/indexing-multi-dim.html"}),"https://www.arangodb.com/docs/stable/indexing-multi-dim.html")))),(0,r.kt)("li",{parentName:"ul"},"AQL Decay \u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"AQL Vector \u51fd\u6570 - \u8ba1\u7b97\u76f8\u4f3c"),(0,r.kt)("li",{parentName:"ul"},"Upsert with Index Hint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enterprise"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hybrid Smart Graphs")))),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-aql"}),'UPSERT { a: 1234 }\n  INSERT { a: 1234, name: "AB"}\n  UPDATE {name: "ABC"} IN myCollection\n  // hint\n  OPTIONS { indexHint: "index_name", forceIndexHint: true }\n')),(0,r.kt)("h2",d({},{id:"arangodb-38"}),"ArangoDB 3.8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AQL window \u64cd\u4f5c - \u5206\u6790\u65f6\u95f4\u5e8f\u5217\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"Weighted Traversal"),(0,r.kt)("li",{parentName:"ul"},"Pipeline Analyzer"),(0,r.kt)("li",{parentName:"ul"},"Search GEO",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ArangoSearch \u652f\u6301\u5206\u6790 GeoJSON, GeoPoint")))),(0,r.kt)("h2",d({},{id:"arangodb-37"}),"ArangoDB 3.7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fuzzy Search - ArangoSearch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"N-gram"),(0,r.kt)("li",{parentName:"ul"},"Levenshtein"))),(0,r.kt)("li",{parentName:"ul"},"Insert-Update, Insert-Ignore"),(0,r.kt)("li",{parentName:"ul"},"Schema Validation"),(0,r.kt)("li",{parentName:"ul"},"Security Enhancements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rotate JWT, TLS"))),(0,r.kt)("li",{parentName:"ul"},"Cluster Performance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enterprise"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Satellite Graphs"),(0,r.kt)("li",{parentName:"ul"},"Disjoint SmartGraphs"),(0,r.kt)("li",{parentName:"ul"},"Parallel Graph Traversals"),(0,r.kt)("li",{parentName:"ul"},"SNI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://www.arangodb.com/2020/08/arangodb-3-7-a-big-step-forward-for-multi-model/"}),"https://www.arangodb.com/2020/08/arangodb-3-7-a-big-step-forward-for-multi-model/"))),(0,r.kt)("h2",d({},{id:"arangodb-35"}),"ArangoDB 3.5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ArangoSearch \u641c\u7d22\u652f\u6301\u4e2d\u6587",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TFIDF BM25",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e2d\u6587")))))),(0,r.kt)("h2",d({},{id:"arangodb-32"}),"ArangoDB 3.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"arangoimp",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 key \u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 jsonl \u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u6307\u5b9a\u7c7b\u578b auto \u901a\u8fc7\u6587\u4ef6\u6269\u5c55\u540d\u68c0\u6d4b\u7c7b\u578b")))))}f.isMDXComponent=!0}}]);