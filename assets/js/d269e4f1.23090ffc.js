"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62281],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,y=m["".concat(i,".").concat(h)]||m[h]||s[h]||o;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76784:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return f}});var a=r(49613),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&u(e,r,t[r]);return e};const m={title:"HAProxy"},h="HAProxy",y={unversionedId:"devops/web/haproxy/README",id:"devops/web/haproxy/README",title:"HAProxy",description:"- haproxy.com - The #1 Open Source Software Load Balancer and Application Delivery Controller",source:"@site/../notes/devops/web/haproxy/README.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/",permalink:"/notes/devops/web/haproxy/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677583228,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"HAProxy"},sidebar:"docs",previous:{title:"Caddy",permalink:"/notes/devops/web/caddy"},next:{title:"HAProxy \u914d\u7f6e",permalink:"/notes/devops/web/haproxy/conf"}},d={},f=[{value:"metrics",id:"metrics",level:2},{value:"Runtime API",id:"runtime-api",level:2},{value:"Connect() failed for backend : no free ports",id:"connect-failed-for-backend--no-free-ports",level:2}],k={toc:f};function x(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=s(s({},k),u),o(t,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"haproxy"}),"HAProxy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/"}),"haproxy.com")," - The #1 Open Source Software Load Balancer and Application Delivery Controller"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/haproxy/haproxy"}),"haproxy/haproxy")),(0,a.kt)("li",{parentName:"ul"},"\u6700\u64c5\u957f ",(0,a.kt)("strong",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861")),(0,a.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"L4(TCP) L7(HTTP) \u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("li",{parentName:"ul"},"URL \u91cd\u5199"),(0,a.kt)("li",{parentName:"ul"},"\u9650\u6d41"),(0,a.kt)("li",{parentName:"ul"},"SSL/TLS termination/offload"),(0,a.kt)("li",{parentName:"ul"},"Gzip"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 HTTP \u4ee3\u7406\u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u68c0\u67e5"),(0,a.kt)("li",{parentName:"ul"},"\u94fe\u63a5\u548c HTTP \u65e5\u5fd7"),(0,a.kt)("li",{parentName:"ul"},"HTTP/2"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u7f1d\u91cd\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"gRPC"),(0,a.kt)("li",{parentName:"ul"},"Lua \u548c SPOE \u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"L4 \u91cd\u8bd5"),(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7194\u65ad\u673a\u5236"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HAproxy ",(0,a.kt)("a",s({parentName:"li"},{href:"https://cbonte.github.io/haproxy-dconv/2.3/intro.html"}),"Starter Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/user-spotlight-series/inside-the-github-load-balancer/"}),"HAProxy at GitHub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/blog/5-ways-to-extend-haproxy-with-lua/"}),"5 Ways to Extend HAProxy with Lua")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/blog/using-haproxy-as-an-api-gateway-part-3-health-checks/"}),"Using HAProxy as an API Gateway")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/haproxytech/client-native"}),"haproxytech/client-native"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Go client for HAProxy configuration and runtime API"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6a21\u578b ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/haproxytech/client-native/tree/master/models"}),"models"))))))),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u8f6c\u53d1\u4efb\u610f UDP - Nginx \u53ef\u4ee5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2.3+ \u652f\u6301 syslog UDP"),(0,a.kt)("li",{parentName:"ul"},"2.5+ \u652f\u6301 QUIC, HTTP/3"),(0,a.kt)("li",{parentName:"ul"},"\u672a\u6765\u53ef\u80fd\u652f\u6301 DNS"))))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"haproxy -c -f haproxy.cfg # \u68c0\u67e5\u914d\u7f6e\u662f\u5426\u6b63\u786e\n# master-worker mode - reload\n# \u672c\u8d28\u4e5f\u662f -sf \u542f\u65b0\u7684\u8fdb\u7a0b\nkill -USR2 $(cat /var/run/haproxy.pid)\n\n# \u91cd\u542f\u65b0\u7684 haproxy - reload\nhaproxy -D -f /etc/haproxy/haproxy.cfg -p /var/run/haproxy.pid -sf $(cat /var/run/haproxy.pid)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash",metastring:'title="docker"',title:'"docker"'}),"docker run --rm -it \\\n  -v /path/to/etc/haproxy:/usr/local/etc/haproxy:ro \\\n  --sysctl net.ipv4.ip_unprivileged_port_start=0 \\\n  --name haproxy haproxy:2.5\n\n# reload\ndocker kill -s HUP haproxy\n")),(0,a.kt)("h2",s({},{id:"metrics"}),"metrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/"}),"https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/"}),"https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/"))),(0,a.kt)("h2",s({},{id:"runtime-api"}),"Runtime API"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-haproxy"}),"global\n  stats socket ipv4@127.0.0.1:9999 level admin\n  stats socket /run/haproxy-runtime-api.sock mode 666 level admin\n  stats timeout 2m\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'echo "help" | socat stdio tcp4-connect:127.0.0.1:9999\necho "show acl" | socat stdio /run/haproxy-runtime-api.sock\nsocat readline /run/haproxy-runtime-api.sock\nhelp\n')),(0,a.kt)("h2",s({},{id:"connect-failed-for-backend--no-free-ports"}),"Connect() failed for backend : no free ports"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'cat /proc/sys/net/ipv4/ip_local_port_range\n\necho "2000 60999" | sudo tee /proc/sys/net/ipv4/ip_local_port_range\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"resolve-prefer ipv4"))))}x.isMDXComponent=!0}}]);