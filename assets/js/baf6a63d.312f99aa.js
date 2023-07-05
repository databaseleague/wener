"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70650],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),k=i,d=u["".concat(l,".").concat(k)]||u[k]||f[k]||o;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4353:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return w}});var r=t(49613),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(a)for(var t of a(n))c.call(n,t)&&p(e,t,n[t]);return e};const u={title:"Jenkinsfile"},k="Jenkinsfile",d={unversionedId:"service/forge/jenkins/jenkins-jenkinsfile",id:"service/forge/jenkins/jenkins-jenkinsfile",title:"Jenkinsfile",description:"- https://www.jenkins.io/doc/pipeline/steps/workflow-basic-steps/",source:"@site/../notes/service/forge/jenkins/jenkins-jenkinsfile.md",sourceDirName:"service/forge/jenkins",slug:"/service/forge/jenkins/jenkinsfile",permalink:"/notes/service/forge/jenkins/jenkinsfile",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/jenkins/jenkins-jenkinsfile.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679563201,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Jenkinsfile"},sidebar:"docs",previous:{title:"Jenkins",permalink:"/notes/service/forge/jenkins/"},next:{title:"Nexus",permalink:"/notes/service/forge/nexus"}},m={},w=[{value:"NodeJS",id:"nodejs",level:2},{value:"Java+Maven",id:"javamaven",level:2}],j={toc:w};function v(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=f(f({},j),p),o(n,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",f({},{id:"jenkinsfile"}),"Jenkinsfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://www.jenkins.io/doc/pipeline/steps/workflow-basic-steps/"}),"https://www.jenkins.io/doc/pipeline/steps/workflow-basic-steps/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://www.jenkins.io/doc/book/pipeline/jenkinsfile/"}),"https://www.jenkins.io/doc/book/pipeline/jenkinsfile/")),(0,r.kt)("li",{parentName:"ul"},"Docker",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://www.jenkins.io/doc/book/pipeline/docker/"}),"https://www.jenkins.io/doc/book/pipeline/docker/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://docs.cloudbees.com/docs/admin-resources/latest/plugins/docker-workflow"}),"https://docs.cloudbees.com/docs/admin-resources/latest/plugins/docker-workflow")),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u8bbe\u7f6e DOCKER_CONFIG\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 buildx \u4e0d\u53ef\u7528\uff0ccontext \u4e0d\u4e00\u6837")))),(0,r.kt)("h2",f({},{id:"nodejs"}),"NodeJS"),(0,r.kt)("h2",f({},{id:"javamaven"}),"Java+Maven"))}v.isMDXComponent=!0}}]);