"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96594],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,f=d["".concat(u,".").concat(s)]||d[s]||p[s]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&m(e,n,t[n]);return e};const d={title:"mtd"},s="mtd",f={unversionedId:"os/linux/dev/mtd",id:"os/linux/dev/mtd",title:"mtd",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/linux/dev/mtd.md",sourceDirName:"os/linux/dev",slug:"/os/linux/dev/mtd",permalink:"/notes/os/linux/dev/mtd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/dev/mtd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1626706991,formattedLastUpdatedAt:"Jul 19, 2021",frontMatter:{title:"mtd"},sidebar:"docs",previous:{title:"hdparam",permalink:"/notes/os/linux/dev/hdparam"},next:{title:"PCI",permalink:"/notes/os/linux/dev/pci"}},b={},v=[],y={toc:v};function k(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),m),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"mtd"}),"mtd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"memory technology device - Linux \u8bbf\u95ee \u5185\u5b58\u8bbe\u5907(rom, flash) \u7684\u5b50\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u5e38\u7528\u4e8e\u5d4c\u5165\u5f0f\u8bbe\u5907 Flash \u5b58\u50a8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"http://www.linux-mtd.infradead.org/"}),"mtd-utils")),(0,r.kt)("li",{parentName:"ul"},"flash, jffs, nand, ubi"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/dev/mtdN")," - \u5b57\u7b26\u8bbe\u5907",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ioctl"),(0,r.kt)("li",{parentName:"ul"},"MEMGETINFO, MEMERASE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/dev/mtdblockN")," - \u4f2a\u88c5\u5757\u8bbe\u5907"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://my.oschina.net/shelllife/blog/123482"}),"https://my.oschina.net/shelllife/blog/123482")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://unix.stackexchange.com/questions/513415"}),"https://unix.stackexchange.com/questions/513415"))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b mtd \u548c ubi \u5206\u533a\ncat /proc/partitions\n# mtd \u5757\ncat /proc/mtd\n\nnanddump -f /tmp/mtd0.bin /dev/mtd0\n\n/usr/bin/ubiattach /dev/ubi_ctrl -m <MTD_partition> -O <block_size>\n/bin/mount -t ubifs ubi1:rootfs0 /media/mnt\n\n# \u5982\u679c\u6ca1\u6709 fs\nnanddump -f /tmp/mtd0.bin /dev/mtdblock0\n# data flash / NOR\ndd if=/dev/mtdblock1 of=/tmp/mtd1.bin\n\n\nmknod -m 644 /dev/mtd9        c 90 9\nmknod -m 644 /dev/mtdblock9   b 31 9\nmount -t jffs2 /dev/mtdblock9 /mnt\n")))}k.isMDXComponent=!0}}]);