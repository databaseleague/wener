"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1957],{49613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,s=k["".concat(u,".").concat(N)]||k[N]||o[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},77075:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return N},default:function(){return h},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return c}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,o=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))d.call(e,a)&&m(t,a,e[a]);return t};const k={title:"IPRoute2"},N="IPRoute2",s={unversionedId:"os/linux/network/iproute2",id:"os/linux/network/iproute2",title:"IPRoute2",description:"- iproute2",source:"@site/../notes/os/linux/network/iproute2.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iproute2",permalink:"/notes/os/linux/network/iproute2",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/iproute2.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679563201,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"IPRoute2"},sidebar:"docs",previous:{title:"io_uring",permalink:"/notes/os/linux/network/io_uring"},next:{title:"IPTables Cookbook",permalink:"/notes/os/linux/network/iptables-cookbook"}},g={},c=[{value:"bridge",id:"bridge",level:2},{value:"veth - Virtual Ethernet Device - \u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907",id:"veth---virtual-ethernet-device---\u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907",level:2},{value:"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa",id:"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa",level:3},{value:"table",id:"table",level:2},{value:"rule",id:"rule",level:2},{value:"mark",id:"mark",level:2},{value:"macvlan",id:"macvlan",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u6240\u6709 table",id:"\u6240\u6709-table",level:2},{value:"Stateless NAT with iproute2",id:"stateless-nat-with-iproute2",level:3}],b={toc:c};function h(t){var e,a=t,{components:r}=a,m=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&d.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=o(o({},b),m),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",o({},{id:"iproute2"}),"IPRoute2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Iproute2"}),"iproute2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://lartc.org/howto/"}),"Linux Advanced Routing & Traffic Control HOWTO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://www.policyrouting.org/iproute2.doc.html"}),"IPROUTE2 Utility Suite Howto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://www-online.kek.jp/~yasu/ATLAS/QoS/iproute2-notes.html"}),"iproute2+tc notes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://baturin.org/docs/iproute2/"}),"iproute2 cheatsheet"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/dmbaturin/iproute2-cheatsheet"}),"https://github.com/dmbaturin/iproute2-cheatsheet")))),(0,n.kt)("li",{parentName:"ul"},"IPIP (IPv4 in IPv4), SIT (IPv6 in IPv4), IP6IP6 (IPv6 in IPv6), IPIP6 (IPv4 in IPv6), GRE (virtually anything in anything), and, in very recent versions, VTI (IPv4 in IPsec)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://www.tldp.org/HOWTO/BRIDGE-STP-HOWTO/index.html"}),"Linux BRIDGE-STP-HOWTO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://www.tldp.org/HOWTO/BRIDGE-STP-HOWTO/set-up-the-bridge.html"}),"6. Set Up The Bridge")),(0,n.kt)("li",{parentName:"ul"},"STP(Spanning Tree Protocol)\u5373\u751f\u6210\u6811\u534f\u8bae\uff0c\u6807\u51c6\u4e3a IEEE802.1D-1998\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"STP \u662f\u4e00\u79cd\u4e8c\u5c42\u5197\u4f59\u6280\u672f\uff0c\u5229\u7528 STA \u7b97\u6cd5\u6784\u5efa\u4e00\u4e2a\u903b\u8f91\u4e0a\u6ca1\u6709\u73af\u8def\u7684\u6811\u5f62\u7f51\u7edc\u62d3\u6251\u7ed3\u6784\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u4e00\u5b9a\u7684\u65b9\u6cd5\u5b9e\u73b0\u8def\u5f84\u5197\u4f59\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://www.cnblogs.com/hzl6255/p/3259909.html"}),"Linux STP \u4ecb\u7ecd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://unix.stackexchange.com/q/255484/47774"}),"How can I bridge two interfaces with ip/iproute2?")),(0,n.kt)("li",{parentName:"ul"},"ip, ss, bridge, rtacct, rtmon, tc, ctstat, lnstat, nstat, routef, routel, rtstat, tipc, arpd, devlink, tc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://serverfault.com/q/135053/190601"}),"iproute2 rules and iptables NAT\u2026 what is the difference?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://baturin.org/docs/iproute2"}),"Task-centered iproute2 user guide"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Command"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ss"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"bridge"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"rtacct"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"rtmon"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ctstat"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"lnstat"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"nstat"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"routef"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"routel"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"rtstat"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"tipc"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"arpd"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"devlink"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"tc"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Legacy utility"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Obsoleted by"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip addr, ip link, ip -s"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u5730\u5740\u3001\u94fe\u8def\u914d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"route"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip route"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u8def\u7531\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"arp"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip neigh"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Neighbors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"iptunnel"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip tunnel"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u901a\u9053")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"nameif"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifrename, ip link set name"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u7f51\u7edc\u8bbe\u5907\u522b\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ipmaddr"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip maddr"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Multicast")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"netstat"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip -s, ss, ip route"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u7f51\u7edc\u7edf\u8ba1")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"net-tools"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"iproute2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"arp -a"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip neigh")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"arp -v"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip -s neigh")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"arp -s 192.168.1.1 1:2:3:4:5:6"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip neigh add 192.168.1.1 lladdr 1:2:3:4:5:6 dev eth1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"arp -i eth1 -d 192.168.1.1"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip neigh del 192.168.1.1 dev eth1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig -a"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip addr")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig eth0 down"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip link set eth0 down")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig eth0 up"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip link set eth0 up")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig eth0 192.168.1.1"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip addr add 192.168.1.1/24 dev eth0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig eth0 netmask 255.255.255.0"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip addr add 192.168.1.1/24 dev eth0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig eth0 mtu 9000"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip link set eth0 mtu 9000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ifconfig eth0:0 192.168.1.2"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip addr add 192.168.1.2/24 dev eth0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"netstat"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"netstat -neopa"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ss -neopa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"netstat -g"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip maddr")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"route"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip route")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"route add -net 192.168.1.0 netmask 255.255.255.0 dev eth0"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip route add 192.168.1.0/24 dev eth0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"route add default gw 192.168.1.1"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ip route add default via 192.168.1.1")))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"ss -s # \u7edf\u8ba1\nss -o state established '( dport = :smtp or sport = :smtp )'\nss -o state established '( dport = :http or sport = :http )'\nss -x src /tmp/.X11-unix/*\nss -o state fin-wait-1 '( sport = :http or sport = :https )'\n\nss -atr\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-H,--no-header"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-O,--oneline"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-n,--numeric"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-r,--resolve"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-a,--all"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-l,--listening"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-o,--options"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-e,--extended"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-m,--memory"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-p,--processes"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-T,--threads"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-i,--info"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--tos"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--cgroup"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--tipcinfo"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-K,--kill"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-s,--summary"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-E,--events"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"watch")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-Z,--context"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-z,--contexts"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-N,--net=NSNAME"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-b,--bpf"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-4,--ipv4"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-6,--ipv6"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-O,--packet"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-t,--tcp"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-u,--udp"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-d,--dccp"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-w,--raw"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-x,--unix"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-S,--sctp"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--tipc"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--vsock"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--xdp"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-M,--mptcp"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--inet-sockopt"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-F,--family=FAMILY"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-A,--query,--socket=QUERY"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-D,--diag=FILE"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"-F,--filter=FILE"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"state",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"established, syn-sent, syn-recv, fin-wait-1, fin-wait-2, time-wait, closed, close-wait, last-ack, listening, closing"),(0,n.kt)("li",{parentName:"ul"},"all"),(0,n.kt)("li",{parentName:"ul"},"connected"),(0,n.kt)("li",{parentName:"ul"},"synchronized - \u9664 syn-sent \u7684 connected"),(0,n.kt)("li",{parentName:"ul"},"bucket"),(0,n.kt)("li",{parentName:"ul"},"big - !bucket"))),(0,n.kt)("li",{parentName:"ul"},"UNCONN"),(0,n.kt)("li",{parentName:"ul"},"ESTAB"),(0,n.kt)("li",{parentName:"ul"},"LISTEN")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"{dst|src} [=] HOST\n{dport|sport} [OP] [FAMILY:]:PORT\ndev [=|!=] DEVICE\nfwmark [=|!=] MASK\ncgroup [=|!=] PATH\nautobound\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HOST - ",(0,n.kt)("inlineCode",{parentName:"li"},"[FAMILY:]ADDRESS[:PORT]"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"FAMILY - unix, link, netlink, vsock, inet, inet6"))),(0,n.kt)("li",{parentName:"ul"},"OP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"<=,le,leq,>=,ge,geq,=,==,eq,!=,ne,neq,<,gt,>,lt,!,not"),(0,n.kt)("li",{parentName:"ul"},"|,||,or"),(0,n.kt)("li",{parentName:"ul"},"&,&&,and")))),(0,n.kt)("h2",o({},{id:"bridge"}),"bridge"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/docker/libnetwork/issues/2310"}),"docker/libnetwork#2310")," - docker \u4e0d\u80fd\u5728\u4e0d\u5f71\u54cd docker0 \u7684\u524d\u63d0\u4e0b\u4f7f\u7528\u73b0\u6709\u7684 bridge \u7f51\u53e3"),(0,n.kt)("li",{parentName:"ul"},"docker network ",(0,n.kt)("a",o({parentName:"li"},{href:"https://docs.docker.com/network/macvlan"}),"macvlan"))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# \u6dfb\u52a0\u6865\u63a5\nip li add name br0 type bridge\n# \u6dfb\u52a0 if\nip li set dev eth0 master br0\n# \u79fb\u9664 if\nip li set dev eth0 nomaster\n# \u540c\u65f6\u7ed9 br0 \u6dfb\u52a0\u591a\u4e2a\u5730\u5740\u53ef\u5728\u4fdd\u8bc1\u7f51\u7edc\u8bbf\u95ee\u7684\u540c\u4e8b\u8fdb\u884c\u6865\u63a5\n# \u56e0\u4e3a\u6865\u63a5, \u6240\u4ee5 gw \u7684\u4fe1\u606f\u8981\u624b\u52a8\u914d\u7f6e\n# \u9ed8\u8ba4\u7f51\u5173\nip route add 0.0.0.0/0 via 10.0.2.2\n\n# \u5220\u9664\u6700\u4e0a\u5c42\u7684\u9ed8\u8ba4\u7f51\u5173\nip ro del default\n\nip li set dev eth0 mtu 9000\n\nip route flush table main\n\nip route flush 172.17.0.0/16\n\nip route flush cache\n\nip -s route show cache\n\n# greptap\n# ==============================\n# GRE bridging, IPsec and NFQUEUE http://backreference.org/2013/07/23/gre-bridging-ipsec-and-nfqueue/\n# Layer 2 over Layer 3\n#\n# A\nip link add gretap0 type gretap local 172.31.0.1 remote 172.31.0.2\nip link set dev gretap0 up\nip link set dev eth0 up\nbrctl addbr br0\nbrctl addif br0 gretap0\nbrctl addif br0 eth0\nip addr add 10.10.10.1/24 dev br0\nip link set br0 up\n# B\nip link add gretap0 type gretap local 172.31.0.2 remote 172.31.0.1\nip link set dev gretap0 up\nip link set dev eth0 up\nbrctl addbr br0\nbrctl addif br0 gretap0\nbrctl addif br0 eth0\nip addr add 10.10.10.2/24 dev br0\nip link set br0 up\n")),(0,n.kt)("h2",o({},{id:"veth---virtual-ethernet-device---\u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907"}),"veth - Virtual Ethernet Device - \u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://man7.org/linux/man-pages/man4/veth.4.html"}),"veth.4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://superuser.com/a/765078/242730"}),"https://superuser.com/a/765078/242730"))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"ip li add veth0 type veth\n")),(0,n.kt)("h3",o({},{id:"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa"}),"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"auto eth2\niface eth2 inet static\n  address 192.168.2.101\n  netmask 255.255.252.0\n  mtu 9000\n  pre-up ip ro li tab tgbe &>/dev/null || echo '10 tgbe' >> /etc/iproute2/rt_tables\n  post-up ip ru add from 192.168.2.101 table tgbe\n  post-up ip ro add default via 192.168.2.1 dev eth2 table tgbe\n")),(0,n.kt)("h2",o({},{id:"table"}),"table"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Table \u6620\u5c04\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/iproute2/rt_tables"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"local",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u8868"),(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u9ad8\u4f18\u5148\u7684\u672c\u5730\u8def\u7531\u548c\u5e7f\u64ad\u5730\u5740"))),(0,n.kt)("li",{parentName:"ul"},"main",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u6240\u6709\u975e\u7b56\u7565\u8def\u7531"))),(0,n.kt)("li",{parentName:"ul"},"default",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7a7a\u7684")))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# \u6240\u6709\u8def\u7531\u8868\u89c4\u5219\nip route show table all\n# \u6709\u6548 table \u5217\u8868\nip route show table all | grep -Po 'table \\K[^\\s]+' | sort -u\n\n# \u6e05\u9664 table\nip route flush table 11\n")),(0,n.kt)("h2",o({},{id:"rule"}),"rule"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"routing policy database - RPDB - \u8def\u7531\u7b56\u7565\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/ip-rule.8.html"}),"ip-rule.8")),(0,n.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u8def\u7531\u57fa\u4e8e\u76ee\u6807\u5730\u5740\uff0c\u7b56\u7565\u8def\u7531\u53ef\u57fa\u4e8e\u5305\u7684\u5176\u4ed6\u5b57\u6bb5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6765\u6e90\u5730\u5740\u3001IP \u534f\u8bae\u3001\u7aef\u53e3\u3001\u5305\u5185\u5bb9"))),(0,n.kt)("li",{parentName:"ul"},"rule=selector+action predicate"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u964d\u5e8f - \u6570\u5b57\u8d8a\u4f4e\u8d8a\u4f18\u5148"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"unicast"),(0,n.kt)("li",{parentName:"ul"},"blackhole"),(0,n.kt)("li",{parentName:"ul"},"unreachable"),(0,n.kt)("li",{parentName:"ul"},"prohibit"),(0,n.kt)("li",{parentName:"ul"},"nat")))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ini"}),"# \u9ed8\u8ba4\n# local = 255\n0:      from all lookup local\n# main = 254\n32766:  from all lookup main\n# default = 253\n32767:  from all lookup default\n")),(0,n.kt)("h2",o({},{id:"mark"}),"mark"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://serverfault.com/questions/733705"}),"iproute rt_table and mark not working on linux")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://superuser.com/questions/950031/routing-subnet-to-specific-routing-table-with-fwmark-direct-to-isp-and-vpn"}),"https://superuser.com/questions/950031/routing-subnet-to-specific-routing-table-with-fwmark-direct-to-isp-and-vpn"))),(0,n.kt)("h2",o({},{id:"macvlan"}),"macvlan"),(0,n.kt)("h2",o({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",o({},{id:"\u6240\u6709-table"}),"\u6240\u6709 table"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"ip route show table all | egrep -o \"table \\S+\" | sed 's/table\\s//' | sort -u\n")),(0,n.kt)("h3",o({},{id:"stateless-nat-with-iproute2"}),"Stateless NAT with iproute2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://linux-ip.net/html/nat-stateless.html"}),"Stateless NAT with iproute2"))))}h.isMDXComponent=!0}}]);