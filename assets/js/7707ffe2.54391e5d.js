"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20580],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60357:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&c(e,n,t[n]);return e};const u={title:"Dnsmasq FAQ",tags:["FAQ"]},m="Dnsmasq FAQ",f={unversionedId:"service/dns/dnsmasq-faq",id:"service/dns/dnsmasq-faq",title:"Dnsmasq FAQ",description:"dnsmasq Operation not permitted",source:"@site/../notes/service/dns/dnsmasq-faq.md",sourceDirName:"service/dns",slug:"/service/dns/dnsmasq-faq",permalink:"/notes/service/dns/dnsmasq-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/dnsmasq-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1636785414,formattedLastUpdatedAt:"Nov 13, 2021",frontMatter:{title:"Dnsmasq FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"DNSCrypt",permalink:"/notes/service/dns/dnscrypt"},next:{title:"dnsmasq",permalink:"/notes/service/dns/dnsmasq"}},v={},b=[{value:"dnsmasq: setting capabilities failed: Operation not permitted",id:"dnsmasq-setting-capabilities-failed-operation-not-permitted",level:2},{value:"dnsmasq: failed to bind DHCP server socket: Address in use",id:"dnsmasq-failed-to-bind-dhcp-server-socket-address-in-use",level:2},{value:"libvirtd dnsmasq",id:"libvirtd-dnsmasq",level:2},{value:"dnsmasq as",id:"dnsmasq-as",level:2},{value:"\u6240\u6709\u57df\u540d CNAME \u4e3a\u5176\u4ed6\u57df\u540d",id:"\u6240\u6709\u57df\u540d-cname-\u4e3a\u5176\u4ed6\u57df\u540d",level:2}],h={toc:b};function y(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},h),c),s(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"dnsmasq-faq"}),"Dnsmasq FAQ"),(0,r.kt)("h2",p({},{id:"dnsmasq-setting-capabilities-failed-operation-not-permitted"}),"dnsmasq: setting capabilities failed: Operation not permitted"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker \u91cc\u9047\u5230"),(0,r.kt)("li",{parentName:"ul"},"\u7528 root \u542f\u52a8")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"dnsmasq --user=root\n")),(0,r.kt)("h2",p({},{id:"dnsmasq-failed-to-bind-dhcp-server-socket-address-in-use"}),"dnsmasq: failed to bind DHCP server socket: Address in use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"67 \u7aef\u53e3\u88ab\u5360\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 bind-interfaces")),(0,r.kt)("h2",p({},{id:"libvirtd-dnsmasq"}),"libvirtd dnsmasq"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"/usr/sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script=/usr/lib/libvirt/libvirt_leaseshelper\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"##WARNING:  THIS IS AN AUTO-GENERATED FILE. CHANGES TO IT ARE LIKELY TO BE\n##OVERWRITTEN AND LOST.  Changes to this configuration should be made using:\n##    virsh net-edit default\n## or other application using the libvirt API.\n##\n## dnsmasq conf file created by libvirt\nstrict-order\npid-file=/var/run/libvirt/network/default.pid\nexcept-interface=lo\nbind-dynamic\ninterface=virbr0\ndhcp-range=192.168.122.2,192.168.122.254,255.255.255.0\ndhcp-no-override\ndhcp-authoritative\ndhcp-lease-max=253\ndhcp-hostsfile=/var/lib/libvirt/dnsmasq/default.hostsfile\naddn-hosts=/var/lib/libvirt/dnsmasq/default.addnhosts\n")),(0,r.kt)("h2",p({},{id:"dnsmasq-as"}),"dnsmasq as"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"auth-server=localhost\nauth-zone=localhost,127.0.0.0/24\n# \u4f1a\u89e3\u6790\u6240\u6709\u7684 cluster.internal \u7ed3\u5c3e\u57df\u540d\n# x.cluster.internal\n# x.x.cluster.internal\naddress=/cluster.internal/192.168.1.1\n")),(0,r.kt)("h2",p({},{id:"\u6240\u6709\u57df\u540d-cname-\u4e3a\u5176\u4ed6\u57df\u540d"}),"\u6240\u6709\u57df\u540d CNAME \u4e3a\u5176\u4ed6\u57df\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"# \u6240\u6709 example.com \u90fd\u4f1a CNAME \u4e3a wener.me\ncname=*.example.com,wener.me,180\nauth-server=example.com\nauth-zone=example.com\n")))}y.isMDXComponent=!0}}]);