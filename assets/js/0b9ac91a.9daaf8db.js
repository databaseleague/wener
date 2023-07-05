"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46274],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e};const f={title:"Kernel FAQ",tags:["FAQ"]},m="Kernel FAQ",d={unversionedId:"os/linux/sys/kernel-faq",id:"os/linux/sys/kernel-faq",title:"Kernel FAQ",description:"\u4fee\u6539",source:"@site/../notes/os/linux/sys/kernel-faq.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/kernel-faq",permalink:"/notes/os/linux/sys/kernel-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/kernel-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1635793726,formattedLastUpdatedAt:"Nov 1, 2021",frontMatter:{title:"Kernel FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"IOPS",permalink:"/notes/os/linux/sys/iops"},next:{title:"Kernel Module",permalink:"/notes/os/linux/sys/kernel-module"}},b={},k=[{value:"\u4fee\u6539",id:"\u4fee\u6539",level:2}],y={toc:k};function h(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},y),c),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"kernel-faq"}),"Kernel FAQ"),(0,r.kt)("h2",s({},{id:"\u4fee\u6539"}),"\u4fee\u6539"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux 5.4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux/pci-aspm.h -> linux/pci.h"))),(0,r.kt)("li",{parentName:"ul"},"Linux 5.1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/torvalds/linux/commit/736706bee3298208343a76096370e4f6a5c55915"}),"get_ds"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_ds()")," -> KERNEL_DS"))))),(0,r.kt)("li",{parentName:"ul"},"Linux 5.0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUBDIRS=$(PWD)")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"M=$(shell pwd)")),(0,r.kt)("li",{parentName:"ul"},"do_gettimeofday",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"do_gettimeofday(&di->last_lost_tick.tv);")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"di->last_lost_tick = ktime_get();")),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u524d\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"linux/timekeeping32.h")," \u4e4b\u540e\u88ab\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://git.asterisk.org/gitweb/?p=dahdi/linux.git;a=blobdiff;f=drivers/dahdi/xpp/xbus-pcm.c;h=8bb2fe76c66a143242730e022cf8af3a6268b062;hp=37f9260e7ecb1c7b3e00b7bd942eac7bc95d6d05;hb=ffcd08205c71dcb0e060836359418bef20f07ffa;hpb=8468250328b607cbd2774c2209fbe5826be01098"}),"xpp patch")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"struct timeval now")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"const ktime_t now"),";"),(0,r.kt)("li",{parentName:"ul"},"touch_softlockup_watchdog",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u524d ",(0,r.kt)("inlineCode",{parentName:"li"},"linux/sched.h")," \u73b0\u5728\u5728 ",(0,r.kt)("a",s({parentName:"li"},{href:"https://elixir.bootlin.com/linux/v5.4/ident/touch_softlockup_watchdog"}),"linux/nmi.h"))))))))}h.isMDXComponent=!0}}]);