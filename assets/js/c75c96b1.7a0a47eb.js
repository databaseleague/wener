"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28322],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(r),f=s,y=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44240:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return d}});var n=r(49613),s=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&u(e,r,t[r]);return e};const m={title:"sysfs"},f="sysfs",y={unversionedId:"os/linux/sys/sysfs",id:"os/linux/sys/sysfs",title:"sysfs",description:"- /sysfs/class/net",source:"@site/../notes/os/linux/sys/sysfs.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/sysfs",permalink:"/notes/os/linux/sys/sysfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/sysfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678678348,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"sysfs"},sidebar:"docs",previous:{title:"sysctl",permalink:"/notes/os/linux/sys/sysctl"},next:{title:"Trace",permalink:"/notes/os/linux/sys/trace"}},k={},d=[{value:"/sys/kernel",id:"syskernel",level:2},{value:"oom",id:"oom",level:2}],b={toc:d};function w(e){var t,r=e,{components:s}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),u),l(t,a({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"sysfs"}),"sysfs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://www.kernel.org/doc/Documentation/ABI/testing/"}),"/sysfs/class/net"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"/proc/sysrq-trigger")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"/sys/block/mmcblk0/mmcblk0p2/ro")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"/proc/pressure - PSI - Pressure Stall Information  - v4.20 - Facebook 2018"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"io"),(0,n.kt)("li",{parentName:"ul"},"cpu"),(0,n.kt)("li",{parentName:"ul"},"memory"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"/sys/fs/cgroup/cg1/io.pressure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CONFIG_PSI=y")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CONFIG_PSI_DEFAULT_DISABLED=y"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"psi=1")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"cat /boot/config-lts | grep PSI\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"for_each_possible_cpu(cpu)\n\nnr_active += cpu_of(cpu)->nr_running + cpu_of(cpu)->nr_uninterruptible;\n\navenrun[n] = avenrun[0] * exp_n + nr_active * (1 - exp_n)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"avg10\u3001avg60\u3001avg300 \u5206\u522b\u4ee3\u8868 10s\u300160s\u3001300s \u7684\u65f6\u95f4\u5468\u671f\u5185\u7684\u963b\u585e\u65f6\u95f4\u767e\u5206\u6bd4\u3002total \u662f\u603b\u7d2f\u8ba1\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://facebookmicrosites.github.io/psi/docs/overview"}),"https://facebookmicrosites.github.io/psi/docs/overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.kernel.org/doc/html/latest/accounting/psi.html"}),"https://www.kernel.org/doc/html/latest/accounting/psi.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://lwn.net/Articles/759658/"}),"https://lwn.net/Articles/759658/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://lwn.net/Articles/759781/"}),"https://lwn.net/Articles/759781/"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"find /sys -type f -name power_now 2>/dev/null\nsensors power_meter-acpi-0\n")),(0,n.kt)("p",null,"/proc/acpi/battery/BAT0/state\n/sys/bus/acpi/drivers/battery/PNP0C0A:00/power_supply/BAT0/power_now"),(0,n.kt)("p",null,"tlp-stat -b\n--- TLP 1.1 --------------------------------------------"),(0,n.kt)("p",null,"+++ Battery Status\n/sys/class/power_supply/BAT1/manufacturer                   = SANYO\n/sys/class/power_supply/BAT1/model_name                     = L12S3F01\n/sys/class/power_supply/BAT1/cycle_count                    =     16\n/sys/class/power_supply/BAT1/energy_full_design             =  32560 ","[mWh]","\n/sys/class/power_supply/BAT1/energy_full                    =  16180 ","[mWh]","\n/sys/class/power_supply/BAT1/energy_now                     =  16090 ","[mWh]","\n/sys/class/power_supply/BAT1/power_now                      =      0 ","[mW]","\n/sys/class/power_supply/BAT1/status                         = Unknown"),(0,n.kt)("p",null,"Charge                                                      =   99.4 ","[%]","\nCapacity                                                    =   49.7 ","[%]"),(0,n.kt)("p",null,"modprobe i2c-dev\nsensors-detect"),(0,n.kt)("h2",c({},{id:"syskernel"}),"/sys/kernel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/sys/kernel/debug"),(0,n.kt)("li",{parentName:"ul"},"/sys/kernel/security",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"securityfs"))),(0,n.kt)("li",{parentName:"ul"},"/proc/sys/kernel/hotplug"),(0,n.kt)("li",{parentName:"ul"},"/sys/kernel/config"),(0,n.kt)("li",{parentName:"ul"},"/sys/firmware/efi/efivars"),(0,n.kt)("li",{parentName:"ul"},"/sys/fs/pstore"),(0,n.kt)("li",{parentName:"ul"},"/etc/init.d/sysfs")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'modprobe configfs\ngrep "configfs$" /proc/filesystems\nmount -n -t configfs -o nodev,noexec,nosuid configfs /sys/kernel/config\n')),(0,n.kt)("h2",c({},{id:"oom"}),"oom"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/proc/self/oom_score"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"oom_score_adj"))),(0,n.kt)("li",{parentName:"ul"},"/proc/sys/vm/overcommit_memory",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2 - \u4e0d overcommit - \u4e0d\u4f1a kill \u800c\u662f\u8fd4\u56de\u9519\u8bef"),(0,n.kt)("li",{parentName:"ul"},"vm.oom-kill"),(0,n.kt)("li",{parentName:"ul"},"panic_on_oom")))))}w.isMDXComponent=!0}}]);