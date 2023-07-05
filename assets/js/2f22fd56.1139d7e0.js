"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6704],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45549:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return k}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&s(e,n,t[n]);return e};const u={title:"acme-dns"},d="acme-dns",f={unversionedId:"service/dns/acme-dns",id:"service/dns/acme-dns",title:"acme-dns",description:"- joohoi/acme-dns \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/dns/acme-dns.md",sourceDirName:"service/dns",slug:"/service/dns/acme-dns",permalink:"/notes/service/dns/acme-dns",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/acme-dns.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1672043702,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{title:"acme-dns"},sidebar:"docs",previous:{title:"DNS Service",permalink:"/notes/service/dns/"},next:{title:"AdGuard",permalink:"/notes/service/dns/adguard"}},h={},k=[{value:"cert-manager",id:"cert-manager",level:2}],g={toc:k};function b(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},g),s),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"acme-dns"}),"acme-dns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/joohoi/acme-dns"}),"joohoi/acme-dns")," \u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e13\u95e8\u7528\u4e8e\u8f85\u52a9\u7533\u8bf7 cert \u7684 dns \u670d\u52a1 - \u63d0\u4f9b HTTP \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u73b0\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"_acme-challenge.domain.tld.")," CNAME \u5230\u4ece\u8be5\u670d\u52a1\u7533\u8bf7\u7684\u4e8c\u7ea7\u57df\u540d - \u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"abc.auth.example.org")),(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u64cd\u4f5c\u73b0\u6709 DNS \u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 selfhost - acme-dns.io \u56fd\u5185\u4e0d\u4e00\u5b9a\u80fd\u8bbf\u95ee",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 SQLite3 \u548c PostgreSQL"))),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5355\u4e2a\u57df\u540d\u9700\u8981\u8bc1\u4e66\uff0c\u57df\u540d\u4f7f\u7528\u7684\u5916\u90e8 DNS \u670d\u52a1\u4e14\u6307\u5411\u7684\u5185\u90e8 IP"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u6cdb\u57df\u540d\u8bc1\u4e66 - ",(0,a.kt)("inlineCode",{parentName:"li"},"domain.tld"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"*.domain.tld")))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5ba2\u6237\u7aef",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/Neilpang/acme.sh"}),"acme.sh")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/webprofusion/certify"}),"Certify The Web")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/jetstack/cert-manager"}),"cert-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/xenolf/lego"}),"Lego")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/rmbolger/Posh-ACME"}),"Posh-ACME")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/komuw/sewer"}),"Sewer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/containous/traefik"}),"Traefik")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.win-acme.com"}),"Windows ACME Simple (WACS)"))))),(0,a.kt)("admonition",p({},{title:"\u4e00\u4e2a\u8d26\u53f7\u5bf9\u5e94\u4e00\u4e2a\u57df\u540d",type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u4e00\u4e2a\u8d26\u53f7\u53ea\u80fd\u5904\u7406\u4e24\u4e2a record - ",(0,a.kt)("inlineCode",{parentName:"li"},"domain.tld"),",",(0,a.kt)("inlineCode",{parentName:"li"},"*.domain.tld")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u80fd")," \u5171\u4eab\u8d26\u53f7\u7ed9\u4e0d\u540c\u57df\u540d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/joohoi/acme-dns/issues/110"}),"#110")," Allow more than two records?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/joohoi/acme-dns/issues/233"}),"#233")," Register multiple domains under single login?"))),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash",metastring:'title="\u6ce8\u518c\u751f\u6210\u8d26\u53f7"',title:'"\u6ce8\u518c\u751f\u6210\u8d26\u53f7"'}),"curl -sX POST https://auth.acme-dns.io/register | jq\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "username": "6f449871-18d4-4239-851c-8c221d56750f",\n  "password": "1lBTiQ5MowHC1aJ1QmAYJh9PEe5dljFTEk0zXXJv",\n  "fulldomain": "96afb9f9-93c2-4d3c-ad4a-e2ebfbf14f7b.auth.acme-dns.io",\n  "subdomain": "96afb9f9-93c2-4d3c-ad4a-e2ebfbf14f7b",\n  "allowfrom": []\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-pre",metastring:'title="\u6dfb\u52a0\u57df\u540d\u6620\u5c04"',title:'"\u6dfb\u52a0\u57df\u540d\u6620\u5c04"'}),"_acme-challenge.domain.tld 6f449871-18d4-4239-851c-8c221d56750f.auth.acme-dns.io\n")),(0,a.kt)("p",null,"\u81f3\u6b64 \u53ef\u4ee5\u914d\u7f6e\u5de5\u5177 \u83b7\u53d6\u6cdb\u57df\u540d\u8bc1\u4e66\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"dig CNAME _acme-challenge.domain.tld # \u68c0\u6d4b CNAME \u6b63\u786e\ndig TXT _acme-challenge.domain.tld    # \u68c0\u6d4b\u6b63\u786e\u8bbe\u7f6e challenge\n")),(0,a.kt)("h2",p({},{id:"cert-manager"}),"cert-manager"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"apiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: example-issuer\nspec:\n  acme:\n    solvers:\n      - dns01:\n          acmeDNS:\n            host: https://acme.example.com\n            accountSecretRef:\n              name: acme-dns\n              key: acme-dns.json\n")),(0,a.kt)("p",null,"acme-dns.json \u652f\u6301\u914d\u7f6e\u591a\u4e2a\u57df\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-json",metastring:'title="acme-dns.json"',title:'"acme-dns.json"'}),'{\n  "dev.wener.me": {\n    "username": "00000000-0000-0000-0000-000000000000",\n    "password": "",\n    "fulldomain": "00000000-0000-0000-0000-000000000000.auth.acme-dns.io",\n    "subdomain": "00000000-0000-0000-0000-000000000000",\n    "allowfrom": []\n  },\n  "test.wener.me": {\n    "username": "00000000-0000-0000-0000-000000000000",\n    "password": "",\n    "fulldomain": "00000000-0000-0000-0000-000000000000.auth.acme-dns.io",\n    "subdomain": "00000000-0000-0000-0000-000000000000",\n    "allowfrom": []\n  }\n}\n')))}b.isMDXComponent=!0}}]);