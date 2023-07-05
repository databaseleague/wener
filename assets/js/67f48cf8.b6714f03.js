"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51219],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2738:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))i.call(t,r)&&u(e,r,t[r]);return e};const m={title:"sealed-secrets"},d="sealed-secrets",b={unversionedId:"devops/kubernetes/app/sealed-secrets",id:"devops/kubernetes/app/sealed-secrets",title:"sealed-secrets",description:"- \u6ce8\u610f",source:"@site/../notes/devops/kubernetes/app/sealed-secrets.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/sealed-secrets.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637157808,formattedLastUpdatedAt:"Nov 17, 2021",frontMatter:{title:"sealed-secrets"},sidebar:"docs",previous:{title:"Reloader",permalink:"/notes/devops/kubernetes/app/reloader"},next:{title:"stolon",permalink:"/notes/devops/kubernetes/app/stolon"}},f={},k=[{value:"already exists and is not managed by SealedSecret",id:"already-exists-and-is-not-managed-by-sealedsecret",level:2},{value:"\u5220\u9664 secret \u91cd\u5efa",id:"\u5220\u9664-secret-\u91cd\u5efa",level:2}],y={toc:k};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),s(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"sealed-secrets"}),"sealed-secrets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SealdSecret \u662f\u7ed1\u5b9a namespace\uff0ckubeseal \u7684\u65f6\u5019\u6307\u5b9a\u6216\u539f secret \u5305\u542b\uff0c\u4e0d\u53ef\u4fee\u6539",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6216\u8005\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"li"},'sealedsecrets.bitnami.com/cluster-wide": "true"')," \u96c6\u7fa4\u5185\u53ef\u7528"))))),(0,n.kt)("li",{parentName:"ul"},"\u6a21\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"strict - \u9ed8\u8ba4 - \u540d\u5b57\u548c namespace \u5339\u914d"),(0,n.kt)("li",{parentName:"ul"},"namespace-wide - \u76f8\u540c namespace \u5185\u53ef\u4fee\u6539 name"),(0,n.kt)("li",{parentName:"ul"},"cluster-wide - \u53ef\u4fee\u6539 namespace \u548c name")))),(0,n.kt)("admonition",p({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a yaml \u5305\u542b\u591a\u4e2a secret \u53ea\u6709\u7b2c\u4e00\u4e2a\u4f1a seal - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/bitnami-labs/sealed-secrets/issues/114"}),"#114")),(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664 secret \u4e0d\u4f1a\u91cd\u5efa - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/bitnami-labs/sealed-secrets/issues/224"}),"bitnami-labs/sealed-secrets#224")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u96c6\u7fa4\u5b89\u88c5\n# \u67e5\u770b\u7248\u672c https://github.com/bitnami-labs/sealed-secrets/releases\nkubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.13.1/controller.yaml\n\nbrew install kubeseal\n\n# \u6b63\u5e38 secret\necho -n bar | kubectl create secret generic mysecret --dry-run=client --from-file=foo=/dev/stdin -o json >mysecret.json\n# seal\nkubeseal <mysecret.json >mysealedsecret.json\n# \u521b\u5efa seal\nkubectl create -f mysealedsecret.json\n# \u751f\u6210 secret\nkubectl get secret mysecret\n\n# \u9650\u5b9a\u8303\u56f4\nkubeseal --scope cluster-wide <secret.yaml >sealed-secret.json\n\n# \u5907\u4efd master.key - \u6062\u590d\u5219\u53ef\u4ee5\u4f7f\u5f97\u4e4b\u524d\u7684\u52a0\u5bc6\u6570\u636e\u751f\u6548\nkubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml >master.key\n\n# \u6062\u590d master.key\nkubectl apply -f master.key\n# \u751f\u6548\nkubectl delete pod -n kube-system -l name=sealed-secrets-controller\n\n# \u79bb\u7ebf\u89e3\u5bc6\nkubeseal --recovery-unseal --recovery-private-key file1.key\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"annotations:\n  # \u96c6\u7fa4\u5185\u53ef\u89e3\u5bc6 - \u4e0d\u7ed1\u5b9a namespace\n  sealedsecrets.bitnami.com/cluster-wide\": 'true'\n  # \u4e0d\u7ed1\u5b9a name\n  sealedsecrets.bitnami.com/namespace-wide: 'true'\n")),(0,n.kt)("h1",p({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",p({},{id:"already-exists-and-is-not-managed-by-sealedsecret"}),"already exists and is not managed by SealedSecret"),(0,n.kt)("p",null,"\u5b58\u5728\u4e8e\u5c06 secret \u8fc1\u79fb\u4e3a sealed-secrets \u7684\u60c5\u51b5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/bitnami-labs/sealed-secrets/issues/288"}),"bitnami-labs/sealed-secrets#288"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"annotations:\n  # \u8bc6\u522b\u65b9\u5f0f\n  sealedsecrets.bitnami.com/managed: 'true'\n")),(0,n.kt)("h2",p({},{id:"\u5220\u9664-secret-\u91cd\u5efa"}),"\u5220\u9664 secret \u91cd\u5efa"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u542f controller \u53ef\u4ee5 - \u4f46\u662f sealedsecrets \u591a\u7684\u65f6\u5019\u975e\u5e38\u6162",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u4e00\u822c 0.7 - 1.2s")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/bitnami-labs/sealed-secrets/issues/224"}),"bitnami-labs/sealed-secrets#224"))))}v.isMDXComponent=!0}}]);