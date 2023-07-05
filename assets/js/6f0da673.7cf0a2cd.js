"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41089],{49613:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25640:function(e,r,t){t.r(r),t.d(r,{assets:function(){return v},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var n=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&c(e,t,r[t]);return e};const f={id:"terraform-provider",title:"Terraform Provider"},d="Terraform Provider",m={unversionedId:"ops/infra/terraform/terraform-provider",id:"ops/infra/terraform/terraform-provider",title:"Terraform Provider",description:"Tips",source:"@site/../notes/ops/infra/terraform/terraform-provider.md",sourceDirName:"ops/infra/terraform",slug:"/ops/infra/terraform/provider",permalink:"/notes/ops/infra/terraform/provider",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/infra/terraform/terraform-provider.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629019137,formattedLastUpdatedAt:"Aug 15, 2021",frontMatter:{id:"terraform-provider",title:"Terraform Provider"},sidebar:"docs",previous:{title:"Terraform K8S",permalink:"/notes/ops/infra/terraform/k8s"},next:{title:"terraformer",permalink:"/notes/ops/infra/terraform/terraformer"}},v={},b=[{value:"Tips",id:"tips",level:2},{value:"keycloak",id:"keycloak",level:2},{value:"null",id:"null",level:2}],y={toc:b};function k(e){var r,t=e,{components:a}=t,c=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},y),c),o(r,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"terraform-provider"}),"Terraform Provider"),(0,n.kt)("h2",u({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\b\u5b98\u65b9 Provider \u53d1\u5e03\u5730\u5740 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://releases.hashicorp.com/"}),"releases.hashicorp.com")),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u5b89\u88c5\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.terraform.d/plugins")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.terraform.io/docs/extend/writing-custom-providers.html"}),"Writing Custom Providers"))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u624b\u52a8\u4e0b\u8f7d\u5b89\u88c5\nos=darwin\narch=amd64\nprivder=gitlab\nver=2.10.0\ncurl -OLC- https://releases.hashicorp.com/terraform-provider-$provider/$ver/terraform-provider-${provider}_${ver}_${os}_${arch}.zip\nunzip terraform-provider-${provider}-*\nmv terraform-provider-${provider}_v* ~/.terraform.d/plugins/${os}_${arch}/terraform-provider-${provider}\n")),(0,n.kt)("h2",u({},{id:"keycloak"}),"keycloak"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/mrparkers/terraform-provider-keycloak"}),"mrparkers/terraform-provider-keycloak"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"")),(0,n.kt)("h2",u({},{id:"null"}),"null"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u573a\u666f\u4f7f\u7528\uff0c\u201c\u4e0d\u505a\u201d\u4efb\u4f55\u4e8b\u60c5")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-hcl"}),'resource "aws_instance" "cluster" {\n  count = 3\n}\n\nresource "null_resource" "cluster" {\n  # \u89e6\u53d1 - \u5f53\u53d1\u9001\u53d8\u5316\uff0c\u8be5\u8d44\u6e90\u4f1a\u88ab provisioner \u66ff\u4ee3\n  triggers = {\n    cluster_instance_ids = "${join(",", aws_instance.cluster.*.id)}"\n  }\n\n  # \u94fe\u63a5\u8fdc\u7a0b\n  connection {\n    host = "${element(aws_instance.cluster.*.public_ip, 0)}"\n  }\n\n  # \u6267\u884c\u672c\u5730\u547d\u4ee4\n  provisioner "local-exec" {\n    command = "bootstrap-cluster.sh ${join(" ", aws_instance.cluster.*.private_ip)}"\n  }\n}\n\n# \u6536\u96c6\u4e2d\u95f4\u503c\uff0c\u4ee5\u4fbf\u4e8e\u540e\u9762\u914d\u7f6e\u4f7f\u7528\ndata "null_data_source" "values" {\n  inputs = {\n    all_server_ids = "${concat(aws_instance.green.*.id, aws_instance.blue.*.id)}"\n    all_server_ips = "${concat(aws_instance.green.*.private_ip, aws_instance.blue.*.private_ip)}"\n  }\n\n  # \u6d4b\u8bd5\u4f7f\u7528 - \u8be5\u8d44\u6e90\u4f1a\u8fd4\u56de\u8fd9\u4e2a\u503c\n  has_computed_default = "default"\n}\n\nresource "aws_elb" "main" {\n  instances = "${data.null_data_source.values.outputs["all_server_ids"]}"\n}\n\noutput "all_server_ids" {\n  value = "${data.null_data_source.values.outputs["all_server_ids"]}"\n}\n\noutput "all_server_ips" {\n  value = "${data.null_data_source.values.outputs["all_server_ips"]}"\n}\n')))}k.isMDXComponent=!0}}]);