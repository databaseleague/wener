"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92482],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(r),k=a,d=m["".concat(i,".").concat(k)]||m[k]||p[k]||l;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<l;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18028:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))o.call(t,r)&&c(e,r,t[r]);return e};const m={title:"RBAC"},k="RBAC",d={unversionedId:"devops/kubernetes/ops/rbac",id:"devops/kubernetes/ops/rbac",title:"RBAC",description:"- UserAccount",source:"@site/../notes/devops/kubernetes/ops/rbac.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/rbac",permalink:"/notes/devops/kubernetes/ops/rbac",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/ops/rbac.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677583228,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"RBAC"},sidebar:"docs",previous:{title:"kustomize",permalink:"/notes/devops/kubernetes/ops/kustomize"},next:{title:"RKE - \u5b89\u88c5\u5668",permalink:"/notes/devops/kubernetes/ops/rke"}},b={},y=[{value:"ServiceAccount",id:"serviceaccount",level:2},{value:"API discovery roles",id:"api-discovery-roles",level:2}],N={toc:y};function f(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&o.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},N),c),l(t,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"rbac"}),"RBAC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UserAccount",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a\u79cd\u8ba4\u8bc1\u65b9\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"x509"),(0,n.kt)("li",{parentName:"ul"},"bearer token -  JWT"),(0,n.kt)("li",{parentName:"ul"},"basic-auth"))))),(0,n.kt)("li",{parentName:"ul"},"ServiceAccount",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u521b\u5efa\uff0c\u751f\u6210\u5305\u542b Token \u7684 Secret")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"kubectl get clusterroles\nkubectl get ClusterRoleBinding\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u7528\u6237\u5185\u7f6e\u89d2\u8272",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"view - \u6392\u9664 secret \u7684 get"),(0,n.kt)("li",{parentName:"ul"},"edit -  view + \u6392\u9664 role, rolebinding \u7684 create, delete, update"),(0,n.kt)("li",{parentName:"ul"},"admin - edit + namespace \u7ea7\u522b role, rolebinding"),(0,n.kt)("li",{parentName:"ul"},"cluster-admin"))),(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"system:kube-scheduler"),(0,n.kt)("li",{parentName:"ul"},"system:volume-scheduler"),(0,n.kt)("li",{parentName:"ul"},"system:kube-controller-manager"),(0,n.kt)("li",{parentName:"ul"},"system:node"),(0,n.kt)("li",{parentName:"ul"},"system:node-proxier"))),(0,n.kt)("li",{parentName:"ul"},"verbs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"create, get, delete, list, update"),(0,n.kt)("li",{parentName:"ul"},"exec"))),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Role, RoleBinding, Subjects"),(0,n.kt)("li",{parentName:"ul"},"ClusterRole, ClusterRoleBinding")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"ClusterRole"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cluster-admin")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# username\n(umask 077;openssl genrsa -out username.key 2048)\n\n# O=group\n# \u53ef\u4ee5\u591a group - CN=username/O=group1/O=group2\nopenssl req -new -key username.key -out username.csr -subj "/O=dev/CN=username"\n\n\n# \u76f4\u63a5\u670d\u52a1\u7aef\u4f7f\u7528 CA Approve CSR\n# -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key\nopenssl x509 -req -in username.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out username.crt -days 365\n\nkubectl config set-credentials username --client-certificate=username.crt --client-key=username.key\n\n# \u5224\u65ad\u6743\u9650\nkubectl auth can-i list pods --as username\n\n# rakkess\n# ==========\n# https://github.com/corneliusweig/rakkess\nkubectl krew install access_matrix\n# \u67e5\u770b\u6240\u6709\u6743\u9650\nkubectl access-matrix -n my-project-dev --as username\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/FairwindsOps/rbac-manager"}),"https://github.com/FairwindsOps/rbac-manager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/aquasecurity/kubectl-who-can"}),"https://github.com/aquasecurity/kubectl-who-can")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/FairwindsOps/rbac-lookup"}),"https://github.com/FairwindsOps/rbac-lookup")),(0,n.kt)("li",{parentName:"ul"},"Kubectl Approve CSR",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/"}),"https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/"))))),(0,n.kt)("h2",p({},{id:"serviceaccount"}),"ServiceAccount"),(0,n.kt)("h2",p({},{id:"api-discovery-roles"}),"API discovery roles"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"kubectl get clusterroles system:discovery -o yaml\n\nkubectl get clusterroles system:discovery -o json | jq '.rules[0].nonResourceURLs | join(\", \")' -r\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"ClusterRole"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"verbs"),(0,n.kt)("th",p({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"system:basic-user"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"create"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"selfsubjectaccessreviews,selfsubjectrulesreviews")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"system:public-info-viewer"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"get"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"/healthz, /livez, /readyz, /version, /version/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"system:discovery"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"get"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"public-info-viewer + /openapi,/api,/apis")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ClusterRoleBinding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"system:authenticated"),(0,n.kt)("li",{parentName:"ul"},"system:unauthenticated"))),(0,n.kt)("li",{parentName:"ul"},"subjects",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"system:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"system:serviceaccount: - service account usernames"),(0,n.kt)("li",{parentName:"ul"},"system:serviceaccounts: - service account groups"),(0,n.kt)("li",{parentName:"ul"},"system:controller:"))))),(0,n.kt)("li",{parentName:"ul"},"cluster-admin")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"kubectl get clusterroles system:discovery -o yaml\n")))}f.isMDXComponent=!0}}]);