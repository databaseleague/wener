"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78334],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(n),c=a,k=f["".concat(p,".").concat(c)]||f[c]||m[c]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e};const f={tags:["Version"]},c="OpenZFS Version",k={unversionedId:"os/linux/fs/zfs/zfs-version",id:"os/linux/fs/zfs/zfs-version",title:"OpenZFS Version",description:"| version          | date       | Linux             | FreeBSD |",source:"@site/../notes/os/linux/fs/zfs/zfs-version.md",sourceDirName:"os/linux/fs/zfs",slug:"/os/linux/fs/zfs/version",permalink:"/notes/os/linux/fs/zfs/version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/zfs/zfs-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678946104,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{tags:["Version"]},sidebar:"docs",previous:{title:"ZFS \u8c03\u4f18",permalink:"/notes/os/linux/fs/zfs/tuning"},next:{title:"dmidecode",permalink:"/notes/os/linux/hardware/dmidecode"}},d={},N=[{value:"OpenZFS 2.2",id:"openzfs-22",level:2},{value:"OpenZFS 2.1",id:"openzfs-21",level:2},{value:"OpenZFS 2.0",id:"openzfs-20",level:2},{value:"ZfsOnLinux 0.8",id:"zfsonlinux-08",level:2}],b={toc:N};function g(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),s),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"openzfs-version"}),"OpenZFS Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"version"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"date"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Linux"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"FreeBSD"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"[OpenZFS 2.2]"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"[OpenZFS 2.1]"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"2021-07-03"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Kernel 3.10+"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"12.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"[OpenZFS 2.0]"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"2020-10-01"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Kernel 3.10+"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"12.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"[ZfsOnLinux 0.8]"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"2019-05-24"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Kernel 2.6.32-5.9"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))),(0,r.kt)("admonition",m({},{title:"Roadmap",type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"RAIDz \u6269\u5bb9 - \u589e\u52a0\u5bb9\u91cf\u4e0d\u589e\u52a0\u5b89\u5168",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/openzfs/zfs/pull/12225"}),"#12225")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://freebsdfoundation.org/blog/raid-z-expansion-feature-for-zfs/"}),"RAID-Z Expansion Feature for ZFS In the Home Stretch")))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 renameat2/overlayfs - ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/openzfs/zfs/pull/12209"}),"#12209")))),(0,r.kt)("h2",m({},{id:"openzfs-22"}),"OpenZFS 2.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 overlay - RENAME2")),(0,r.kt)("h2",m({},{id:"openzfs-21"}),"OpenZFS 2.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dRAID"),(0,r.kt)("li",{parentName:"ul"},"compatibility \u5c5e\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236 pool \u9700\u8981\u4ec0\u4e48\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u8ba9 pool \u80fd\u66f4\u597d\u652f\u6301\u8de8\u5e73\u53f0 - BSD, Linux"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zpool influxdb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/openzfs/zfs/releases/tag/zfs-2.1.0"}),"https://github.com/openzfs/zfs/releases/tag/zfs-2.1.0"))),(0,r.kt)("h2",m({},{id:"openzfs-20"}),"OpenZFS 2.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ZfsOnLinux -> OpenZFS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5408\u5e76 BSD ZFS \u548c Linux ZFS \u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"Linux ZFS \u83b7\u5f97\u4e86\u5f88\u591a\u65b0\u7684\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7eed\u5f00\u53d1\u8fed\u4ee3\u66f4\u5feb"))),(0,r.kt)("li",{parentName:"ul"},"zstd \u538b\u7f29"),(0,r.kt)("li",{parentName:"ul"},"TRIM, ACLMODE"),(0,r.kt)("li",{parentName:"ul"},"NFSv4 ACLs"),(0,r.kt)("li",{parentName:"ul"},"AES-GCM \u52a0\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"Direct IO"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5316 L2ARC")," - \u91cd\u542f\u540e\u7f13\u5b58\u8fd8\u53ef\u7528"),(0,r.kt)("li",{parentName:"ul"},"scrub pause/resume"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/openzfs/zfs/projects/25"}),"https://github.com/openzfs/zfs/projects/25"))),(0,r.kt)("h2",m({},{id:"zfsonlinux-08"}),"ZfsOnLinux 0.8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u52a0\u5bc6 - encryption",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"zfs send/receive -w",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u63a5\u6536\u4e5f\u652f\u6301\u52a0\u5bc6"))))),(0,r.kt)("li",{parentName:"ul"},"zpool remove"),(0,r.kt)("li",{parentName:"ul"},"zpool trim",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u5f00\u542f autotrim \u540e\u53f0\u81ea\u52a8\u64cd\u4f5c"))),(0,r.kt)("li",{parentName:"ul"},"zpool initialize"),(0,r.kt)("li",{parentName:"ul"},"zfs project, zfs projectspace"),(0,r.kt)("li",{parentName:"ul"},"zpool program - Lua \u811a\u672c\u7ba1\u7406")))}g.isMDXComponent=!0}}]);