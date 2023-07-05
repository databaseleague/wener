"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51985],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,f=m["".concat(u,".").concat(h)]||m[h]||c[h]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={title:"zsh"},h="zsh",f={unversionedId:"os/linux/shell/zsh",id:"os/linux/shell/zsh",title:"zsh",description:"- \u914d\u7f6e",source:"@site/../notes/os/linux/shell/zsh.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/zsh",permalink:"/notes/os/linux/shell/zsh",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/zsh.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685890478,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{title:"zsh"},sidebar:"docs",previous:{title:"yq",permalink:"/notes/os/linux/shell/yq"},next:{title:"stat",permalink:"/notes/os/linux/stat/"}},d={},k=[{value:"Why ZSH",id:"why-zsh",level:2}],b={toc:k};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"zsh"}),"zsh"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},".zshenv - \u6240\u6709"),(0,r.kt)("li",{parentName:"ul"},".zprofile - \u767b\u9646 shell"),(0,r.kt)("li",{parentName:"ul"},".zshrc - \u4ea4\u4e92 shell"),(0,r.kt)("li",{parentName:"ul"},".zlogin"),(0,r.kt)("li",{parentName:"ul"},".zlogout"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/robbyrussell/oh-my-zsh"}),"robbyrussell/oh-my-zsh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/zsh-users/antigen"}),"zsh-users/antigen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://apple.stackexchange.com/a/361957/103557"}),"https://apple.stackexchange.com/a/361957/103557"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\necho source ~/.bash_profile >> ~/.zshenv && source ~/.zshenv\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"feature"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"zsh"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"bash"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Automatic cd"),(0,r.kt)("td",c({parentName:"tr"},{align:null})),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Recursive path expansion"),(0,r.kt)("td",c({parentName:"tr"},{align:null})),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Spelling correction and approximate completion"),(0,r.kt)("td",c({parentName:"tr"},{align:null})),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Plugin and theme suppor"),(0,r.kt)("td",c({parentName:"tr"},{align:null})),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",c({},{id:"why-zsh"}),"Why ZSH"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pros",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"macOS \u9ed8\u8ba4 Shell"))),(0,r.kt)("li",{parentName:"ul"},"Cons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5927\u591a ZSH \u6709\u7684\u7279\u6027 Bash \u4e5f\u6709",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46 zsh \u53ef\u80fd\u652f\u6301\u7684\u66f4\u5b8c\u5584"))),(0,r.kt)("li",{parentName:"ul"},"\u5927\u591a\u670d\u52a1\u5668\u73af\u5883\u90fd\u662f Bash \u6216 POSIX Shell",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e73\u65f6\u4f7f\u7528 bash \u66f4\u5229\u4e8e\u670d\u52a1\u7aef\u7f16\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u8fc7\u591a\u4f7f\u7528 zsh \u76f8\u5173\u7279\u6027\u4f1a\u4ea7\u751f\u4f9d\u8d56")))))))}y.isMDXComponent=!0}}]);