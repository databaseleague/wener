"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27580],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19618:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={title:"DFS"},m="DFS",d={unversionedId:"ops/storage/fs/dfs",id:"ops/storage/fs/dfs",title:"DFS",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/ops/storage/fs/dfs.md",sourceDirName:"ops/storage/fs",slug:"/ops/storage/fs/dfs",permalink:"/notes/ops/storage/fs/dfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/fs/dfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1604593660,formattedLastUpdatedAt:"Nov 5, 2020",frontMatter:{title:"DFS"},sidebar:"docs",previous:{title:"Filesystem",permalink:"/notes/ops/storage/fs/"},next:{title:"FTP",permalink:"/notes/ops/storage/network/ftp"}},b={},y=[{value:"Samba",id:"samba",level:2}],v={toc:y};function g(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"dfs"}),"DFS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Distributed File System"),(0,n.kt)("li",{parentName:"ul"},"\u5fae\u8f6f\u5f00\u53d1\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"alternative name space, load balancing, automatic failover"))),(0,n.kt)("li",{parentName:"ul"},"junction \u5b9a\u4f4d\u5143\u4fe1\u606f\uff0c\u7136\u540e\u8bbf\u95ee\u5b9e\u9645 server \u83b7\u53d6\u6570\u636e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u8054\u90a6"))),(0,n.kt)("li",{parentName:"ul"},"DFS-R - Distributed File System Replication",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 DFS \u4e2d\u7684\u526f\u672c\u673a\u5236"))),(0,n.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u6709\u4f7f\u7528 SMB \u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\uff08\u5355\u673a\uff09\u4f7f\u7528\u6216\u5728\u57df\u4e2d\u90e8\u7f72\u4f7f\u7528")),(0,n.kt)("h2",c({},{id:"samba"}),"Samba"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://wiki.samba.org/index.php/Distributed_File_System_(DFS)"}),"Distributed File System")),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 DFS-R")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-properties"}),"path = /export/dfsroot\nmsdfs root = yes\nhost msdfs = yes\nvfs object = dfs_samba4\n")))}g.isMDXComponent=!0}}]);