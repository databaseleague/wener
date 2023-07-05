"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87839],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,k=c["".concat(u,".").concat(f)]||c[f]||m[f]||l;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},64477:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e};const c={title:"SMB"},f="SMB",k={unversionedId:"os/linux/fs/smb",id:"os/linux/fs/smb",title:"SMB",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/linux/fs/smb.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/smb",permalink:"/notes/os/linux/fs/smb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/smb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"SMB"},sidebar:"docs",previous:{title:"rootfs",permalink:"/notes/os/linux/fs/rootfs"},next:{title:"ZFS",permalink:"/notes/os/linux/fs/zfs/"}},d={},v=[{value:"CIFS vs SMB",id:"cifs-vs-smb",level:2},{value:"mounting cifs: \u201cOperation not supported\u201d",id:"mounting-cifs-operation-not-supported",level:2}],b={toc:v};function N(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),p),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"smb"}),"SMB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Server Message Block"),(0,n.kt)("li",{parentName:"ul"},"1983 IBM \u521b\u5efa"))),(0,n.kt)("li",{parentName:"ul"},"\u7248\u672c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1983 SMBv1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea Windows Server 2003\uff0cWindows 2000"),(0,n.kt)("li",{parentName:"ul"},"Windows Server 2012 R2 \u5e9f\u5f03\u652f\u6301"),(0,n.kt)("li",{parentName:"ul"},"Windows Server 2016\uff0cWindows 10 \u65e0 SMBv1 \u652f\u6301"),(0,n.kt)("li",{parentName:"ul"},"Samba 4.11 \u9ed8\u8ba4\u7981\u7528"))),(0,n.kt)("li",{parentName:"ul"},"2006 SMBv2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea Windows Vista in 2006\uff0cWindows Server 2008"),(0,n.kt)("li",{parentName:"ul"},"Samba 3.6"),(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u6307\u4ee4\uff0c\u652f\u6301\u7b26\u53f7\u94fe\u63a5\uff0c\u7f13\u5b58\u6587\u4ef6\u5c5e\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u534f\u8bae\u89c4\u8303"),(0,n.kt)("li",{parentName:"ul"},"OS X 10.9 \u4ece afp \u8fc1\u79fb\u5230 SMBv2"),(0,n.kt)("li",{parentName:"ul"},"Linux 3.7 CIFS \u652f\u6301 SMBv2"))),(0,n.kt)("li",{parentName:"ul"},"2009 SMBv2.1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea Windows 7, Windows Server 2008 R2"),(0,n.kt)("li",{parentName:"ul"},"opportunistic locking mechanism"))),(0,n.kt)("li",{parentName:"ul"},"2012 SMBv3 - SMBv2.2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SMB Direct Protocol - SMB RDMA"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u901a\u9053 - \u4e00\u4e2a\u4f1a\u8bdd\u591a\u4e2a\u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u5c42 Failover"),(0,n.kt)("li",{parentName:"ul"},"\u7aef\u5230\u7aef\u52a0\u5bc6"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e AES \u7b7e\u540d\u7b97\u6cd5 - \u4e4b\u524d\u662f HMAC SHA-256"))),(0,n.kt)("li",{parentName:"ul"},"2013 SMB 3.0.2 - 3.02",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7981\u7528 SMBv1"))),(0,n.kt)("li",{parentName:"ul"},"2016 SMB 3.1.1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728 AES-128 CCM \u65b0\u589e AES-128 GCM"),(0,n.kt)("li",{parentName:"ul"},"SHA-512 \u6bcf\u6b21\u8ba4\u8bc1\u5b8c\u6574\u6027\u68c0\u67e5"),(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u5b89\u5168\u534f\u8bae\u534f\u5546")))))),(0,n.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",m({},{id:"cifs-vs-smb"}),"CIFS vs SMB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CIFS - Common Internet File System",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SMB \u7684\u65b9\u8a00"),(0,n.kt)("li",{parentName:"ul"},"SMB \u7531 IBM \u521b\u5efa"),(0,n.kt)("li",{parentName:"ul"},"1996 \u5fae\u8f6f \u5c1d\u8bd5\u91cd\u547d\u540d\u4e3a CIFS\uff0c \u5bf9\u5e94 SMBv1\uff0c\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"Linux \u7684 CIFS \u6a21\u5757\u652f\u6301 SMBv2"))),(0,n.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u7edf\u4e00\u4f7f\u7528 SMB"),(0,n.kt)("li",{parentName:"ul"},"Windows Vista/Windows 2006 SMBv2"),(0,n.kt)("li",{parentName:"ul"},"Windows 8/Windows 2012 SMBv3"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://blog.varonis.com/cifs-vs-smb/"}),"CIFS vs SMB"))),(0,n.kt)("h2",m({},{id:"mounting-cifs-operation-not-supported"}),"mounting cifs: \u201cOperation not supported\u201d"),(0,n.kt)("p",null,"\u5c1d\u8bd5\u6dfb\u52a0 vers=3.0 \u9009\u9879"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"mount -t cifs //192.168.1.1/share /mnt -o user=username,password=passwordd,vers=3.0\n")))}N.isMDXComponent=!0}}]);