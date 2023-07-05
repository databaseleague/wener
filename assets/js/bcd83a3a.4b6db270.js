"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23700],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(r),m=a,s=k["".concat(p,".").concat(m)]||k[m]||d[m]||l;return r?n.createElement(s,o(o({ref:t},u),{},{components:r})):n.createElement(s,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},85335:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return E},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return N}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e};const k={title:"Agent"},m="Woodpecker Agent",s={unversionedId:"service/forge/woodpecker/woodpecker-agent",id:"service/forge/woodpecker/woodpecker-agent",title:"Agent",description:"| flag                 | env                          | default         |",source:"@site/../notes/service/forge/woodpecker/woodpecker-agent.md",sourceDirName:"service/forge/woodpecker",slug:"/service/forge/woodpecker/agent",permalink:"/notes/service/forge/woodpecker/agent",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/woodpecker/woodpecker-agent.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"Agent"},sidebar:"docs",previous:{title:"woodpecker",permalink:"/notes/service/forge/woodpecker/"},next:{title:"Woodpecker FAQ",permalink:"/notes/service/forge/woodpecker/faq"}},g={},N=[{value:"Docker",id:"docker",level:2},{value:"docker network mtu",id:"docker-network-mtu",level:2}],O={toc:N};function E(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},O),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"woodpecker-agent"}),"Woodpecker Agent"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"env"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--server"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_SERVER"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"woodpecker:9000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--grpc-username"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_USERNAME"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"x-oauth-basic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--grpc-password"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_AGENT_SECRET"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--grpc-secure"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_GRPC_SECURE"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--grpc-skip-insecure"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_GRPC_VERIFY"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--log-level"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_LOG_LEVEL"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"trace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--pretty"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_DEBUG_PRETTY"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--nocolor"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_DEBUG_NOCOLOR"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--hostname"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_HOSTNAME"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--filter"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_FILTER_LABELS"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--max-procs"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_MAX_WORKFLOWS"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--healthcheck"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_HEALTHCHECK"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--keepalive-time"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_KEEPALIVE_TIME"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"0s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--keepalive-timeout"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_KEEPALIVE_TIMEOUT"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"20s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"--backend-engine"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"WOODPECKER_BACKEND"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"auto-detect")))),(0,n.kt)("h2",d({},{id:"docker"}),"Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"agent \u76f4\u63a5\u901a\u8fc7 sock \u8c03\u7528 docker \u8fdb\u884c\u64cd\u4f5c")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ini"}),"WOODPECKER_BACKEND_DOCKER_NETWORK=\nWOODPECKER_BACKEND_DOCKER_ENABLE_IPV6=false\nWOODPECKER_BACKEND_DOCKER_VOLUMES=/etc/ssl/certs:/etc/ssl/certs:ro,/etc/timezone:/etc/timezone\nWOODPECKER_DOCKER_CONFIG=\n# \u7528\u4e8e\u652f\u6301 podman\nDOCKER_SOCK=\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://woodpecker-ci.org/docs/next/administration/backends/docker"}),"https://woodpecker-ci.org/docs/next/administration/backends/docker"))),(0,n.kt)("h1",d({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",d({},{id:"docker-network-mtu"}),"docker network mtu"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"dind \u9700\u8981\u4fee\u6539 mtu \u4e3a 1450"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4fee\u6539"),(0,n.kt)("li",{parentName:"ul"},"drone \u53ef\u4ee5 DRONE_RUNNER_NETWORK_OPTS"),(0,n.kt)("li",{parentName:"ul"},"workaround WOODPECKER_BACKEND_DOCKER_NETWORK=bridge",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"v0.15 \u4e0d\u652f\u6301"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/issues/1579"}),"https://github.com/woodpecker-ci/woodpecker/issues/1579"))))}E.isMDXComponent=!0}}]);