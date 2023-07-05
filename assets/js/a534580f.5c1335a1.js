"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26805],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=p,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53412:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return b}});var n=r(49613),p=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e};const m={title:"AppWrite"},d="AppWrite",h={unversionedId:"db/document/appwrite",id:"db/document/appwrite",title:"AppWrite",description:"- appwrite/appwrite",source:"@site/../notes/db/document/appwrite.md",sourceDirName:"db/document",slug:"/db/document/appwrite",permalink:"/notes/db/document/appwrite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/document/appwrite.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677583228,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"AppWrite"},sidebar:"docs",previous:{title:"Schema Design",permalink:"/notes/db/design-schema"},next:{title:"CouchDB",permalink:"/notes/db/document/couchdb"}},f={},b=[{value:"Inside",id:"inside",level:2},{value:"The current project has exceeded the maximum number of users. Please check your user limit in the Appwrite console.",id:"the-current-project-has-exceeded-the-maximum-number-of-users-please-check-your-user-limit-in-the-appwrite-console",level:2}],w={toc:b};function k(e){var t,r=e,{components:p}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},w),s),a(t,i({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"appwrite"}),"AppWrite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/appwrite/appwrite"}),"appwrite/appwrite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSD-3, PHP+TypeScript"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 MySQL")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u901a\u8fc7 docker \u542f\u52a8\u989d\u5916\u670d\u52a1\n# https://appwrite.io/install/compose\n# https://appwrite.io/install/env\ndocker run -it --rm \\\n  --volume /var/run/docker.sock:/var/run/docker.sock \\\n  --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \\\n  --entrypoint="install" \\\n  appwrite/appwrite:1.2.1\n')),(0,n.kt)("h2",u({},{id:""})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"_APP_CONSOLE_WHITELIST_EMAILS"),(0,n.kt)("li",{parentName:"ul"},"_APP_OPTIONS_ABUSE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://appwrite.io/docs/environment-variables"}),"https://appwrite.io/docs/environment-variables"))),(0,n.kt)("h2",u({},{id:"inside"}),"Inside"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/appwrite/appwrite/blob/master/Dockerfile"}),"https://github.com/appwrite/appwrite/blob/master/Dockerfile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/appwrite/appwrite/blob/master/app/tasks/install.php"}),"https://github.com/appwrite/appwrite/blob/master/app/tasks/install.php"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# entrypoint\n# vars doctor maintenance install migrate sdks specs ssl usage version\nalias cli="php /usr/src/code/app/cli.php"\ncli version\n\nphp /usr/src/code/app/cli.php doctor\nphp /usr/src/code/app/cli.php vars\n\nphp /usr/src/code/app/cli.php maintenance\n\nenv | grep _APP | sort\n\n# \u9ed8\u8ba4\u5165\u53e3\nphp app/http.php -dopcache.preload=opcache.preload=/usr/src/code/app/preload.php\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"install",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 /usr/src/code/appwrite/docker-compose.yml"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 /usr/src/code/appwrite/.env")))),(0,n.kt)("admonition",u({},{type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 PostgreSQL ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/appwrite/appwrite/issues/2541"}),"#2541"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/utopia-php/database"}),"utopia-php/database")))),(0,n.kt)("li",{parentName:"ul"},"Minio ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/appwrite/appwrite/issues/3989"}),"https://github.com/appwrite/appwrite/issues/3989")))),(0,n.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",u({},{id:"the-current-project-has-exceeded-the-maximum-number-of-users-please-check-your-user-limit-in-the-appwrite-console"}),"The current project has exceeded the maximum number of users. Please check your user limit in the Appwrite console."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"_APP_CONSOLE_WHITELIST_ROOT")))}k.isMDXComponent=!0}}]);