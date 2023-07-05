"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64067],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88817:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={title:"xds"},d="xds",g={unversionedId:"service/api/xds",id:"service/api/xds",title:"xds",description:"\u6700\u65e9\u7531 Envoy \u5f00\u53d1\uff0c\u7528\u4e8e\u6784\u5efa ServiceMesh \u7edf\u4e00\u7684 DP \u63a5\u53e3\u3002",source:"@site/../notes/service/api/xds.md",sourceDirName:"service/api",slug:"/service/api/xds",permalink:"/notes/service/api/xds",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/xds.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659680046,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{title:"xds"},sidebar:"docs",previous:{title:"twirp",permalink:"/notes/service/api/twirp"},next:{title:"Auth",permalink:"/notes/service/auth/"}},f={},y=[{value:"gRPC xDS",id:"grpc-xds",level:2}],v={toc:y};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"xds"}),"xds"),(0,n.kt)("p",null,"\u6700\u65e9\u7531 Envoy \u5f00\u53d1\uff0c\u7528\u4e8e\u6784\u5efa ServiceMesh \u7edf\u4e00\u7684 DP \u63a5\u53e3\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"xDS API - \u4e00\u5957 DP API - Mesh CP <-> Proxies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e gRPC Mesh - ",(0,n.kt)("inlineCode",{parentName:"li"},"xds://pkg.service")))),(0,n.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LDS - Listener Discovery Service - type.googleapis.com/envoy.config.listener.v3.Listener"),(0,n.kt)("li",{parentName:"ul"},"RDS - Route Discovery Service - type.googleapis.com/envoy.config.route.v3.RouteConfiguration"),(0,n.kt)("li",{parentName:"ul"},"CDS - Cluster Discovery Service - type.googleapis.com/envoy.config.cluster.v3.Cluster"),(0,n.kt)("li",{parentName:"ul"},"EDS - Endpoint Discovery Service - type.googleapis.com/envoy.config.endpoint.v3.ClusterLoadAssignment"),(0,n.kt)("li",{parentName:"ul"},"ADS - Aggregate Discovery Service - gRPC"))),(0,n.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u62a5\u544a - LRS"),(0,n.kt)("li",{parentName:"ul"},"xDSv3"),(0,n.kt)("li",{parentName:"ul"},"CP \u5b9e\u73b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GCP Traffic Director"),(0,n.kt)("li",{parentName:"ul"},"istio"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/envoyproxy/go-control-plane"}),"envoyproxy/go-control-plane")))),(0,n.kt)("li",{parentName:"ul"},"UDPA - Universal Data Plane API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0\uff0c\u8d1f\u8f7d\u5747\u8861\u5206\u914d\uff0c\u8def\u7531\u53d1\u73b0\uff0c\u76d1\u542c\u5668\u914d\u7f6e\uff0c\u5b89\u5168\u53d1\u73b0\uff0c\u8d1f\u8f7d\u62a5\u544a\uff0c\u8fd0\u884c\u72b6\u51b5\u68c0\u67e5\u59d4\u6258"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/envoyproxy/data-plane-api"}),"envoyproxy/data-plane-api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol"}),"xDS REST and gRPC protocol"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Role"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"For"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"gRPC"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u9ad8\u6027\u80fd\u901a\u4fe1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Kubernetes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0\u3001\u5065\u5eb7\u68c0\u6d4b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Istio"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u8def\u7531\u3001\u8d1f\u8f7d\uff0c\u670d\u52a1\u6cbb\u7406\uff1a\u7194\u65ad\u3001\u91cd\u62fe\uff0c\u5b89\u5168\uff1a\u8ba4\u8bc1\u3001mTLS\uff0c\u53ef\u89c2\u5bdf\u6027\uff1atrace\u3001log\u3001metrics")))),(0,n.kt)("h2",u({},{id:"grpc-xds"}),"gRPC xDS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GRPC_XDS_BOOTSTRAP"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/grpc-ecosystem/grpcdebug"}),"grpc-ecosystem/grpcdebug"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e debug xds"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/salrashid123/grpc_xds"}),"salrashid123/grpc_xds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://grpc.github.io/grpc/cpp/md_doc_grpc_xds_features.html"}),"xDS Features in gRPC")),(0,n.kt)("li",{parentName:"ul"},"go grpc xds ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/grpc/grpc-go/blob/master/examples/features/xds/README.md"}),"example")),(0,n.kt)("li",{parentName:"ul"},"gRPC ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/grpc/proposal/blob/master/A27-xds-global-load-balancing.md"}),"A27: xDS-Based Global Load Balancing"))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  // The xDS server to talk to.  The value is an array to allow for a\n  // future change to add support for failing over to a secondary xDS server\n  // if the primary is down, but for now, only the first entry in the\n  // array will be used.\n  "xds_servers": [\n    {\n      "server_uri": "", //<string containing URI of xds server>,\n      // List of channel creds; client will stop at the first type it\n      // supports.  This field is required and must contain at least one\n      // channel creds type that the client supports.\n      "channel_creds": [\n        {\n          "type": "", // google_default, insecure\n          // The "config" field is optional; it may be missing if the\n          // credential type does not require config parameters.\n          "config": "" //<JSON object containing config for the type>\n        }\n      ],\n      "server_features": ["xds_v3"]\n    }\n  ],\n  // JSON of proto\n  // https://github.com/envoyproxy/data-plane-api/blob/1adb5d54abb0e28ca409254d26fad1cf5535239b/envoy/api/v2/core/base.proto#L85-L118\n  "node": {\n    "id": "",\n    "cluster": "",\n    "metadata": {},\n    "locality": {\n      "region": "",\n      // https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html\n      // https://cloud.google.com/compute/docs/regions-zones/\n      "zone": "",\n      "sub_zone": ""\n    },\n    "build_version": ""\n  }\n}\n')))}b.isMDXComponent=!0}}]);