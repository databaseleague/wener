"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66171],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,f=d["".concat(l,".").concat(b)]||d[b]||s[b]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={title:"nocodb"},b="nocodb",f={unversionedId:"service/collaboration/nocodb",id:"service/collaboration/nocodb",title:"nocodb",description:"- nocodb/nocodb",source:"@site/../notes/service/collaboration/nocodb.md",sourceDirName:"service/collaboration",slug:"/service/collaboration/nocodb",permalink:"/notes/service/collaboration/nocodb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/collaboration/nocodb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685296509,formattedLastUpdatedAt:"May 28, 2023",frontMatter:{title:"nocodb"},sidebar:"docs",previous:{title:"Collaboration Awesome",permalink:"/notes/service/collaboration/awesome"},next:{title:"CRM Awesome",permalink:"/notes/service/crm/awesome"}},m={},y=[],v={toc:y};function O(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),u),a(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"nocodb"}),"nocodb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/nocodb/nocodb"}),"nocodb/nocodb"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AGPLv3, Typescript+Vue")))),(0,r.kt)("admonition",s({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Group By ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/nocodb/nocodb/issues/188"}),"#188")),(0,r.kt)("li",{parentName:"ul"},"Kanban ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/nocodb/nocodb/issues/140"}),"#140")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'docker run -it --rm \\\n  -v $PWD/data:/usr/app/data/ \\\n  --name nocodb -p 8080:8080 nocodb/nocodb:latest\n\nNC_AUTH_JWT_SECRET=$(uuidgen)\n# for PostgreSQL\ndocker run -d --name nocodb-postgres \\\n  -v $PWD/data:/usr/app/data/ \\\n  -e NC_DB="pg://host.docker.internal:5432?u=root&p=password&d=d1" \\\n  -e NC_AUTH_JWT_SECRET=$NC_AUTH_JWT_SECRET \\\n  -p 8080:8080 \\\n  nocodb/nocodb:latest\n')))}O.isMDXComponent=!0}}]);