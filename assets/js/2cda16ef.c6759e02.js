"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40420],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||k[m]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var o=n(49613),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const p={title:"Kaniko"},m="Kaniko",d={unversionedId:"devops/container/kaniko",id:"devops/container/kaniko",title:"Kaniko",description:"- GoogleContainerTools/kaniko \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/devops/container/kaniko.md",sourceDirName:"devops/container",slug:"/devops/container/kaniko",permalink:"/notes/devops/container/kaniko",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/kaniko.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669789233,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{title:"Kaniko"},sidebar:"docs",previous:{title:"juju",permalink:"/notes/devops/container/juju"},next:{title:"Linux Container",permalink:"/notes/devops/container/lxc"}},f={},h=[{value:"dockerhub",id:"dockerhub",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6027\u80fd\u95ee\u9898",id:"\u6027\u80fd\u95ee\u9898",level:2},{value:"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e",id:"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e",level:2},{value:"snapshot \u963b\u585e",id:"snapshot-\u963b\u585e",level:2}],g={toc:h};function b(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=k(k({},g),u),a(t,i({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("h1",k({},{id:"kaniko"}),"Kaniko"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",k({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko"}),"GoogleContainerTools/kaniko")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6784\u5efa\u5bb9\u5668\u955c\u50cf\u7684\u5de5\u5177"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56 Docker\uff0c\u4e0d\u9700\u8981 root \u6743\u9650"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u590d\u73b0\u7684\u5bb9\u5668\u955c\u50cf\u6784\u5efa"))),(0,o.kt)("li",{parentName:"ul"},"gcr.io/kaniko-project/executor:latest"),(0,o.kt)("li",{parentName:"ul"},"gcr.io/kaniko-project/executor:debug - \u5305\u542b shell"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GitLab runner use ",(0,o.kt)("a",k({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/docker/using_kaniko.html"}),"Kaniko")))),(0,o.kt)("li",{parentName:"ul"},"\u4e13\u6ce8\u4e8e\u5728 Kubernetes \u6784\u5efa\u955c\u50cf")),(0,o.kt)("admonition",k({},{type:"caution"}),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u8de8\u5e73\u53f0\u6784\u5efa"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 multi-arch \u548c manifest"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u672c\u5730 layer \u7f13\u5b58"),(0,o.kt)("li",{parentName:"ul"},"\u6027\u80fd\u53ef\u80fd\u5f31\u4e8e dind - \u53ef\u80fd\u5f88\u6162 ",(0,o.kt)("a",k({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko/issues/875"}),"GoogleContainerTools/kaniko#875")),(0,o.kt)("li",{parentName:"ul"},"registry-mirror \u4e0d\u652f\u6301\u524d\u7f00\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"registry.example.com/dockerhub")))),(0,o.kt)("pre",null,(0,o.kt)("code",k({parentName:"pre"},{className:"language-bash"}),'# debug \u73af\u5883\ndocker run --rm -it -w /workspace --entrypoint sh registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:debug\n\nmkdir -p /workspace /images /cache\ncd /workspace\n\ncat <<DOCKERFILE > Dockerfile\nFROM wener/base\nRUN apk add coreutils\nDOCKERFILE\n# --no-push \u4e0d\u63a8\u9001 --tarPath \u751f\u6210\u7684 tar \u9700\u8981\u8bbe\u7f6e --destination\n# --context \u9ed8\u8ba4 /workspace\n# --cache \u542f\u7528\u7f13\u5b58 --cache-dir \u57fa\u7840\u955c\u50cf\u7f13\u5b58\u76ee\u5f55\uff0c\u9ed8\u8ba4 /cache --cache-repo \u7f13\u5b58\u4ed3\u5e93\n# --use-new-run \u5b9e\u9a8c\u7279\u6027\uff0c\u63d0\u5347\u6784\u5efa\u6027\u80fd\n# --reproducible \u79fb\u9664\u65f6\u95f4\u6233\n/kaniko/executor --context $PWD --dockerfile $PWD/Dockerfile \\\n  --registry-mirror hbcvocvo.mirror.aliyuncs.com \\\n  --no-push --tarPath /images/build.tar --destination=image \\\n  --use-new-run --reproducible\n\n# Docker \u8ba4\u8bc1\u914d\u7f6e\nmkdir -p /kaniko/.docker\n# \u914d\u7f6e\necho "{\\"auths\\":{\\"$CI_REGISTRY\\":{\\"username\\":\\"$CI_REGISTRY_USER\\",\\"password\\":\\"$CI_REGISTRY_PASSWORD\\"}}}" > /kaniko/.docker/config.json\n# \u6784\u5efa\u5e76\u63a8\u9001\n/kaniko/executor --context $CI_PROJECT_DIR --dockerfile $CI_PROJECT_DIR/Dockerfile --destination $CI_REGISTRY_IMAGE:$CI_COMMIT_TAG\n\n# \u76f4\u63a5\u6784\u5efa\n# registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:latest\n# gcr.io/kaniko-project/executor:latest\ndocker run \\\n  -v "$HOME"/.config/gcloud:/root/.config/gcloud \\\n  -v /path/to/context:/workspace \\\n  registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:latest \\\n  --dockerfile /workspace/Dockerfile \\\n  --destination "$PROJECT_ID/$IMAGE_NAME:$TAG" \\\n  --context dir:///workspace/\n')),(0,o.kt)("h2",k({},{id:"dockerhub"}),"dockerhub"),(0,o.kt)("pre",null,(0,o.kt)("code",k({parentName:"pre"},{className:"language-bash"}),'cat <<JSON > config.json\n{\n    "auths": {\n        "https://index.docker.io/v1/": {\n            "auth": "$(echo -n $USER:$PASSWORD | base64)"\n        }\n    }\n}\nJSON\ndocker run --rm -it $PWD/config:/kaniko/.docker/config.json --destination=yourimagename\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",k({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko/issues/1209"}),"https://github.com/GoogleContainerTools/kaniko/issues/1209"))),(0,o.kt)("h2",k({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",k({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko#additional-flags"}),"Additional Flags"))),(0,o.kt)("h1",k({},{id:"faq"}),"FAQ"),(0,o.kt)("h2",k({},{id:"\u6027\u80fd\u95ee\u9898"}),"\u6027\u80fd\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",k({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko/issues/875"}),"https://github.com/GoogleContainerTools/kaniko/issues/875"),"\nKaniko build's performance much slower comparing with DID solution")),(0,o.kt)("h2",k({},{id:"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e"}),"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e"),(0,o.kt)("pre",null,(0,o.kt)("code",k({parentName:"pre"},{className:"language-dockerfile"}),"FROM alpine:3.11 as rootfs\nRUN echo 7777\n\nFROM alpine:3.11\n# \u963b\u585e\nCOPY --from=rootfs / /sysroot/\n# Workaround https://github.com/GoogleContainerTools/kaniko/issues/960\nCOPY --from=rootfs /rootfs/ /sysroot/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",k({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko/issues/960"}),"https://github.com/GoogleContainerTools/kaniko/issues/960"))),(0,o.kt)("h2",k({},{id:"snapshot-\u963b\u585e"}),"snapshot \u963b\u585e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",k({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko/issues/970"}),"https://github.com/GoogleContainerTools/kaniko/issues/970"))))}b.isMDXComponent=!0}}]);