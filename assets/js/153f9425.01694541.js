"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45529],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return g}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&p(e,n,t[n]);return e};const m={title:"ext4"},k=void 0,c={unversionedId:"os/linux/fs/ext4",id:"os/linux/fs/ext4",title:"ext4",description:"ext4",source:"@site/../notes/os/linux/fs/ext4.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/ext4",permalink:"/notes/os/linux/fs/ext4",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/ext4.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685087225,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"ext4"},sidebar:"docs",previous:{title:"exFAT",permalink:"/notes/os/linux/fs/exfat"},next:{title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/linux/fs/faq"}},f={},g=[{value:"ext4",id:"ext4",level:2},{value:"\u6d4b\u8bd5 fs",id:"\u6d4b\u8bd5-fs",level:2},{value:"mke2fs.conf",id:"mke2fsconf",level:2},{value:"resize \u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570",id:"resize-\u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570",level:2},{value:"New size results in too many block group descriptors",id:"new-size-results-in-too-many-block-group-descriptors",level:2},{value:"kernel error",id:"kernel-error",level:2},{value:"online shrink",id:"online-shrink",level:2},{value:"e2image seek_relative: Invalid argument",id:"e2image-seek_relative-invalid-argument",level:2},{value:"dd compress",id:"dd-compress",level:2},{value:"mounted filesystem with ordered data mode. Quota mode: none.",id:"mounted-filesystem-with-ordered-data-mode-quota-mode-none",level:2}],N={toc:g};function b(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},N),p),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h2",u({},{id:"ext4"}),"ext4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"man ",(0,a.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man5/ext4.5.html"}),"ext4.5")),(0,a.kt)("li",{parentName:"ul"},"man ",(0,a.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/mke2fs.8.html"}),"mke2fs.8")),(0,a.kt)("li",{parentName:"ul"},"man ",(0,a.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/resize2fs.8.html"}),"resize2fs.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/e2image.8.html"}),"e2image.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://serverfault.com/a/496099/190601"}),"Choose block size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://linuxreviews.org/Year_2038_Timestamp_Problem"}),"https://linuxreviews.org/Year_2038_Timestamp_Problem"))))),(0,a.kt)("admonition",u({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"mkfs.ext4 \u9ed8\u8ba4 1k block - \u5bfc\u81f4\u4e0d\u80fd\u8d85\u8fc7 2T",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1k \u4e00\u822c\u7528\u4e8e U \u76d8 \u8fd9\u79cd\u5b58\u50a8\u6bd4\u8f83\u5c0f\u7684\u8bbe\u5907"))),(0,a.kt)("li",{parentName:"ul"},"inode >= 256 \u907f\u514d Y2038 \u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"resize2fs \u53ef\u4ee5 on-line grow \u4f46 ",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u80fd on-line shrinking")),(0,a.kt)("li",{parentName:"ul"},"e2image \u53ef\u4ee5\u4ece QCOW2 \u8bfb\u53d6 - \u4f46\u5982\u679c QCOW2 \u4e0d\u662f\u7531 e2imaghe \u751f\u6210\u5219\u4e0d\u4e00\u5b9a\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"QCOW2 \u4e0d\u662f spare\uff0c\u56e0\u6b64\u9ed8\u8ba4\u7a7a\u95f4\u66f4\u5c0f\uff0c\u66f4\u65b9\u4fbf\u4e0b\u8f7d"))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk add e2fsprogs e2fsprogs-extra\n\nresize2fs -P /dev/sda3 # \u9884\u4f30 blocks \u6570\u91cf - \u5b9e\u9645\u5927\u5c0f*4K\ntune2fs -l /dev/sda3   # \u67e5\u770b\u4fe1\u606f\ne2fsck -p /dev/sda3    # \u68c0\u6d4b\u4fee\u590d\n\n# size \u652f\u6301 KMGT\nresize2fs /dev/sda3 100000         # \u7f29\u5c0f\u5206\u533a\ne2image -ra -p /dev/sda1 /dev/sdb1 # \u590d\u5236\u5206\u533a - \u53ea\u590d\u5236\u7528\u5230\u7684\u5757 - \u6548\u7387\u66f4\u9ad8\n\ne2image -rap /dev/vda3 vda3.img    # backup\nresize2fs -P vda3.img\ne2fsck -p vda3.img\ne2fsck -f vda3.img\nresize2fs -p vda3.img 4G\ne2image -rap vda3.img /dev/vdb2\n\nlsof /dev/vdb2 # \u4f7f\u7528\u60c5\u51b5 - \u9700\u8981 apk add lsof\nlsof / | awk '$4 ~ /[0-9].*[wu]/'\n\n# \u6302\u8f7d\u4e3a\u53ea\u8bfb\nmount -f -o remount,ro /mount/point\necho 1 > /sys/block/dm-4/ro\necho 1 > /sys/block/sda/sda2/ro\n# echo u > /proc/sysrq-trigger\n\ntune2fs -O read-only /dev/vda  # \u8bbe\u7f6e\u53ea\u8bfb\ntune2fs -O ^read-only /dev/vda # \u53d6\u6d88\u53ea\u8bfb\n\ntune2fs -U $(uuidgen) /dev/sdb1 # \u4fee\u6539 UUID\n\nlsblk -x NAME --output NAME,SIZE,VENDOR,FSTYPE,LABEL,UUID,MODE # \u67e5\u770b\u8bbe\u5907\u60c5\u51b5\n\n# dd boot 100MB\n# dd \u540e\u53ef\u4ee5\u91cd\u65b0\u4fee\u6539\u5206\u533a\ndd if=/dev/vda of=/dev/vdb count=204800 bs=512\ne2image -ra -p /dev/vda3 /dev/vdb2\n\nmount -o remount,ro / # \u4e0d\u80fd\u6210\u529f - \u4ece ro \u5230 rw \u53ef\u4ee5\nmount | column -t\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"resize2fs"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-b"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"64bit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-d debug-flags"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"force")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-F"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"flush")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-M"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u7f29\u5230\u6700\u5c0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-p"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u663e\u793a\u5b8c\u6210\u8fdb\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-P"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u663e\u793a\u9884\u4f30\u6700\u5c0f blocks \u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-s"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"off 64bit, free blocks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-S RAID-stride"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-z undo_file"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"undo_file",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"resize2fs-device.e2undo"),(0,a.kt)("li",{parentName:"ul"},"E2FSPROGS_UNDO_DIR")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"e2image"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-a"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"include file data in image file, \u9ed8\u8ba4\u53ea\u5305\u542b fs metadata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-b superblock"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-B blocksize"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-c"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5bf9\u6bd4\uff0c\u76f8\u540c\u5219\u4e0d\u62f7\u8d1d block")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"force - \u5141\u8bb8 source \u4e3a\u975e readonly \u72b6\u6001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-I"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-n"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-o src_offset"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-O tgt_offset"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-p"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u663e\u793a\u8fdb\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-Q"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"QCOW2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-r"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"raw \u683c\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-s"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",u({},{id:"\u6d4b\u8bd5-fs"}),"\u6d4b\u8bd5 fs"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"truncate --size 10M test\n\nmkfs.ext4 -v test\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 small fs type"),(0,a.kt)("li",{parentName:"ul"},"block-size 1024"),(0,a.kt)("li",{parentName:"ul"},"blocks 10240 = 10M"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u5927 fs blocks 10485760",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6700\u5927 resize 1024 \u500d = 10240","*","1024"),(0,a.kt)("li",{parentName:"ul"},"= blocks per group ",(0,a.kt)("em",{parentName:"li"}," inodes per group = 8192"),"1280")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"fs_types for mke2fs.conf resolution: 'ext4', 'small'\nDiscarding device blocks: done\nDiscard succeeded and will return 0s - skipping inode table wipe\nFilesystem label=\nOS type: Linux\nBlock size=1024 (log=0)\nFragment size=1024 (log=0)\nStride=0 blocks, Stripe width=0 blocks\n2560 inodes, 10240 blocks\n512 blocks (5.00%) reserved for the super user\nFirst data block=1\nMaximum filesystem blocks=10485760\n2 block groups\n8192 blocks per group, 8192 fragments per group\n1280 inodes per group\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"tune2fs -l test\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u53cd\u63a8 fs \u521d\u59cb\u5316\u65f6\u7684\u5927\u5c0f\uff0c\u53ef\u5224\u65ad\u6700\u5927\u53ef resize \u7a7a\u95f4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Block size"),(0,a.kt)("li",{parentName:"ul"},"Blocks per group"),(0,a.kt)("li",{parentName:"ul"},"Inodes per group")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"file test\n\nmkfs.ext4 -F -b 4096 test\n")),(0,a.kt)("h2",u({},{id:"mke2fsconf"}),"mke2fs.conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-T \u6307\u5b9a\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"man ",(0,a.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man5/mke2fs.conf.5.html"}),"mke2fs.conf.5"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"size"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"<= 3mb"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"floppy")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-conf",metastring:'title="/etc/mke2fs.conf"',title:'"/etc/mke2fs.conf"'}),"[defaults]\n    base_features = sparse_super,large_file,filetype,resize_inode,dir_index,ext_attr\n    default_mntopts = acl,user_xattr\n    enable_periodic_fsck = 0\n    blocksize = 4096\n    inode_size = 256\n    inode_ratio = 16384\n\n[fs_types]\n    ext3 = {\n        features = has_journal\n    }\n    ext4 = {\n        features = has_journal,extent,huge_file,flex_bg,metadata_csum,64bit,dir_nlink,extra_isize\n        inode_size = 256\n    }\n    small = {\n        blocksize = 1024\n        inode_ratio = 4096\n    }\n    floppy = {\n        blocksize = 1024\n        inode_size = 128\n        inode_ratio = 8192\n    }\n    big = {\n        inode_ratio = 32768\n    }\n    huge = {\n        inode_ratio = 65536\n    }\n    news = {\n        inode_ratio = 4096\n    }\n    largefile = {\n        inode_ratio = 1048576\n        blocksize = -1\n    }\n    largefile4 = {\n        inode_ratio = 4194304\n        blocksize = -1\n    }\n    hurd = {\n    blocksize = 4096\n    inode_size = 128\n    }\n")),(0,a.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",u({},{id:"resize-\u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570"}),"resize \u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570"),(0,a.kt)("p",null,"mke2fs will attempt to reserve enough space so that the filesystem may grow to 1024 times its initial size. This can be changed using the resize extended option."),(0,a.kt)("p",null,"\u5982\u679c\u521d\u59cb\u7a7a\u95f4\u662f 1G\uff0c\u90a3\u4e48\u9ed8\u8ba4\u6700\u5927\u53ea\u80fd resize \u5230 1T\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-i"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-E resize=max-online-resize")),(0,a.kt)("li",{parentName:"ul"},"-m reserved-blocks-percentage")),(0,a.kt)("h2",u({},{id:"new-size-results-in-too-many-block-group-descriptors"}),"New size results in too many block group descriptors"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u9ed8\u8ba4\u6700\u5927 resize 1024 \u500d\uff0c\u5982\u679c\u521d\u59cb 1G \u5219\u6700\u5927 1T\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/tytso/e2fsprogs/issues/74#issuecomment-889894735"}),"tytso/e2fsprogs#74"))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"e2fsck -f /dev/XXX\nresize2fs /dev/XXX\n")),(0,a.kt)("p",null,"\u6216"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"resize2fs -f /dev/sdb2\n")),(0,a.kt)("h2",u({},{id:"kernel-error"}),"kernel error"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"blk_update_request: critical target error, dev sda, sector 1875240 op 0x1:(WRITE) flags 0x800 phys_seg 2 prio class 0\nAborting journal on device sda2-8.\n\nblk_update_request: critical target error, dev sda, sector 1837056 op 0x1:(WRITE) flags 0x800 phys_seg 1 prio class 0\nBuffer I/O error on dev sda2, logical block 196608, lost sync page write\nJBD2: Error -5 detected when updating journal superblock for sda2-8.\n\nEXT4-fs (sda2): I/O error while writing superblock\nEXT4-fs error (device sda2): ext4_journal_check_start:83: Detected aborted journal\nEXT4-fs (sda2): Remounting filesystem read-only\n")),(0,a.kt)("p",null,"\u5c1d\u8bd5\u4fee\u590d"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"fsck\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"Journal checksum error found in /dev/sda2\nfsck.ext4: unable to set superblock flags on /dev/sda2\n")),(0,a.kt)("p",null,"\u5e94\u8be5\u662f SD \u5361\u5f02\u5e38\u4e86\uff0c\u5c1d\u8bd5\u66f4\u6362\u786c\u4ef6\u8bbe\u5907\u3002"),(0,a.kt)("h2",u({},{id:"online-shrink"}),"online shrink"),(0,a.kt)("p",null,"\u6700\u96be\u7684\u662f\u5c06 root remount \u4e3a ro"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u79bb\u7ebf\u65b9\u5f0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AlpineLinux \u901a\u8fc7\u914d\u7f6e\u542f\u52a8\u53c2\u6570 rootflags=ro \u91cd\u542f\u6302\u8f7d\u4e3a\u53ea\u8bfb"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tune2fs -O read-only /dev/sda1"),"  \u8bbe\u7f6e\u540e\u91cd\u542f\uff0c\u4f1a\u88ab\u6302\u8f7d\u4e3a ro")),(0,a.kt)("ol",u({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u5728\u7ebf")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pivot root")),(0,a.kt)("h2",u({},{id:"e2image-seek_relative-invalid-argument"}),"e2image seek_relative: Invalid argument"),(0,a.kt)("p",null,"\u76ee\u6807\u8bbe\u5907\u7a7a\u95f4\u4e0d\u591f"),(0,a.kt)("h2",u({},{id:"dd-compress"}),"dd compress"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-basj"}),"dd bs=1M iflag=fullblock if=/dev/sda2 status=progress | gzip >img.gz\ngzcat img.gz | dd bs=1M iflag=fullblock of=/dev/sda2 status=progress\n\ndd bs=1M iflag=fullblock if=/dev/sda2 status=progress | zstd -16v >img.zst\nzstdcat img.zst | dd bs=1M iflag=fullblock of=/dev/sda2 status=progress\n\npv /dev/sda2 | zstd -16 >img.zst\nzstdzcat img.zst | pv >/dev/sda2\n\nzstd -16v </dev/sda2 >sda2.zst\nzstdcat -v sda2.zst >/dev/sda2\n")),(0,a.kt)("h2",u({},{id:"mounted-filesystem-with-ordered-data-mode-quota-mode-none"}),"mounted filesystem with ordered data mode. Quota mode: none."),(0,a.kt)("p",null,"\u4e0d\u7ba1"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u624b\u52a8\u542f\u52a8 Quota\nsudo tune2fs -o usrquota /dev/sda1\n")))}b.isMDXComponent=!0}}]);