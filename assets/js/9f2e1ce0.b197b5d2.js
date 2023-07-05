"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15248],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={title:"QoDana"},f="QoDana",m={unversionedId:"dev/qa/qodana",id:"dev/qa/qodana",title:"QoDana",description:"- docker jetbrains/qodana-{jvm,js,php,python,go,dotnet}",source:"@site/../notes/dev/qa/qodana.md",sourceDirName:"dev/qa",slug:"/dev/qa/qodana",permalink:"/notes/dev/qa/qodana",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/qa/qodana.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685296509,formattedLastUpdatedAt:"May 28, 2023",frontMatter:{title:"QoDana"},sidebar:"docs",previous:{title:"\u8d28\u91cf\u4fdd\u969c",permalink:"/notes/dev/qa/"},next:{title:"SonarQube",permalink:"/notes/dev/qa/sonarqube"}},b={},y=[],v={toc:y};function w(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"qodana"}),"QoDana"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker jetbrains/qodana-{jvm,js,php,python,go,dotnet}")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"brew install jetbrains/utils/qodana\n\n# qodana.yaml\n# https://www.jetbrains.com/help/qodana/configure-qodana.html\nqodana init\nqodana scan --show-report\n\n\n# /data/profile.xml\n# --profile-name custom-profile\n# .idea/inspectionProfiles\n# --show-report \u5f00\u542f 8080 \u7aef\u53e3\ndocker run --rm -it -p 8080:8080 \\\n-v $PWD/:/data/project/ \\\n-v /tmp/qodana/results:/data/results/ \\\njetbrains/qodana-js --show-report\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.jetbrains.com/help/qodana"}),"https://www.jetbrains.com/help/qodana"))))}w.isMDXComponent=!0}}]);