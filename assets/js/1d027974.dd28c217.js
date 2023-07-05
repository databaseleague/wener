"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66794],{49613:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return d}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=u(a),d=r,s=k["".concat(m,".").concat(d)]||k[d]||N[d]||l;return a?n.createElement(s,i(i({ref:e},o),{},{components:a})):n.createElement(s,i({ref:e},o))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6178:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return O}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,N=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&o(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&o(t,a,e[a]);return t};const k={title:"OpenObserve"},d="OpenObserve",s={unversionedId:"service/observability/openobserve",id:"service/observability/openobserve",title:"OpenObserve",description:"- zinclabs/openobserve",source:"@site/../notes/service/observability/openobserve.md",sourceDirName:"service/observability",slug:"/service/observability/openobserve",permalink:"/notes/service/observability/openobserve",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/openobserve.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688206885,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"OpenObserve"},sidebar:"docs",previous:{title:"Observability FAQ",permalink:"/notes/service/observability/faq"},next:{title:"\u94fe\u8def\u8ddf\u8e2a",permalink:"/notes/service/observability/tracing/"}},g={},O=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"API",id:"api",level:2},{value:"\u91c7\u96c6\u6570\u636e\u5927\u5c0f",id:"\u91c7\u96c6\u6570\u636e\u5927\u5c0f",level:2},{value:"_timestamp",id:"_timestamp",level:2}],c={toc:O};function b(t){var e,a=t,{components:r}=a,o=((t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=N(N({},c),o),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",N({},{id:"openobserve"}),"OpenObserve"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://github.com/zinclabs/openobserve"}),"zinclabs/openobserve"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"),(0,n.kt)("li",{parentName:"ul"},"\u539f ZincObserve"),(0,n.kt)("li",{parentName:"ul"},"\u4ece ZincSearch \u6f14\u5316\u800c\u6765"),(0,n.kt)("li",{parentName:"ul"},"Log & Trace & Metrics"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8 Parquet + Datafusion"))),(0,n.kt)("li",{parentName:"ul"},"HA",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Etcd + \u5bf9\u8c61\u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6 Ingester\u3001Querier\u3001Compactor\u3001AlterManager")))),(0,n.kt)("admonition",N({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u6700\u8fd1 5h \u5185\u7684\u6570\u636e - ZO_INGEST_ALLOWED_UPTO"),(0,n.kt)("li",{parentName:"ul"},"\u8fd8\u5904\u4e8e\u76f8\u5f53\u65e9\u671f\u9636\u6bb5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u529f\u80fd\u76f8\u5bf9\u5b8c\u5584"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u57fa\u672c\u53ef\u7528"))),(0,n.kt)("li",{parentName:"ul"},"CE \u529f\u80fd\u9650\u5236",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0 Elastic \u517c\u5bb9\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"Cloud \u5728 CE \u57fa\u7840\u4e0a\u52a0 Proxy \u505a\u4e86\u989d\u5916\u7684\u6743\u9650\u529f\u80fd\u548c UI"),(0,n.kt)("li",{parentName:"ul"},"\u65e0 Grafana \u63d2\u4ef6"))))),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-bash"}),"ZO_ROOT_USER_PASSWORD=$(uuidgen)\ndocker run --rm -it \\\n  -v $PWD/data:/data \\\n  -e ZO_TELEMETRY=false \\\n  -e ZO_DATA_DIR=/data \\\n  -e ZO_ROOT_USER_EMAIL=wener@wener.me \\\n  -e ZO_ROOT_USER_PASSWORD=$ZO_ROOT_USER_PASSWORD \\\n  -e ZO_COMPACT_DATA_RETENTION_DAYS=30 \\\n  -p 5080:5080 \\\n  --name openobserve zinclabs/openobserve:latest\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",N({parentName:"tr"},{align:null}),"env"),(0,n.kt)("th",N({parentName:"tr"},{align:null}),"default"),(0,n.kt)("th",N({parentName:"tr"},{align:null}),"note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u4e3b\u8981\u914d\u7f6e")),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_COMPACT_DATA_RETENTION_DAYS"),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u4fdd\u7559\u591a\u5c11\u5929")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_TELEMETRY"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_INGEST_ALLOWED_UPTO"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u5141\u8bb8\u63d2\u5165 5h \u5185\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_DATA_DIR"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"./data/zincobserve/"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u5176\u4ed6\u914d\u7f6e")),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_LOCAL_MODE"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_LOCAL_MODE_STORAGE"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"disk"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"s3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_NODE_ROLE"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"all"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_INSTANCE_NAME"),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_HTTP_PORT"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"5080"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_GRPC_PORT"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"5081"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_GRPC_TIMEOUT"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"600"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_ROUTE_TIMEOUT"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"600"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_GRPC_ORG_HEADER_KEY"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"zinc-org-id"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_BASE_URI"),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_DATA_WAL_DIR"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"./data/zincobserve/wal/"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"$ZO_DATA_DIR/wal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_DATA_STREAM_DIR"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"./data/zincobserve/stream/"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"$ZO_DATA_DIR/stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_TIME_STAMP_COL"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"_","timestamp"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_UI_ENABLED"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_TRACING_ENABLED"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u53d1\u9001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"OTEL_OTLP_HTTP_ENDPOINT"),(0,n.kt)("td",N({parentName:"tr"},{align:null})),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_JSON_LIMIT"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"209715200"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"200M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_PAYLOAD_LIMIT"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"209715200"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"200M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_MAX_FILE_SIZE_ON_DISK"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"10mb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_MAX_FILE_RETENTION_TIME"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"600"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"600s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_FILE_PUSH_INTERVAL"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"10s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_COMPACT_ENABLED"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_MEMORY_CACHE_ENABLED"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_PROMETHEUS_ENABLED"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"/metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"RUST_LOG"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"info"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_SLED_DATA_DIR"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"./data/zincobserve/sled/"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_SLED_PREFIX"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"/zinc/oxide/"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_COMPACT_ENABLED"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_COMPACT_INTERVAL"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"60"),(0,n.kt)("td",N({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",N({parentName:"tr"},{align:null}),"ZO_COMPACT_MAX_FILE_SIZE"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",N({parentName:"tr"},{align:null}),"\u591a\u5c11 MB \u65f6 compact")))),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-bash"}),'docker run --rm -it \\\n  -v $PWD/data:/data \\\n  -e ZO_DATA_DIR="/data" \\\n  -e ZO_ROOT_USER_EMAIL=root@example.com -e ZO_ROOT_USER_PASSWORD=PASSWORD \\\n  -e ZO_TELEMETRY=false \\\n  -p 5080:5080 \\\n  --name openobserve zinclabs/openobserve:latest\n')),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-http"}),"POST /api/{organization}/{stream}/_json\n\n[{}]\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"organization",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"default"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5b58\u5728\u4f1a\u81ea\u52a8\u521b\u5efa"))),(0,n.kt)("li",{parentName:"ul"},"stream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"default"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5b58\u5728\u4f1a\u81ea\u52a8\u521b\u5efa")))),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-bash"}),"# \u6d4b\u8bd5\ncurl -X POST zincobserve:5080/api/default/default/_json --user $ZO_USER --password $ZO_PASSWORD -d '[]'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$DATA/stream/files/ORG/{logs|metrics}/NAME/YRAR/MONTH/DAY/HOUR/ID.parquet"),(0,n.kt)("li",{parentName:"ul"},"$DTAT/db"),(0,n.kt)("li",{parentName:"ul"},"$DTAT/wal")),(0,n.kt)("h2",N({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://openobserve.ai/docs/environment-variables/"}),"https://openobserve.ai/docs/environment-variables/"))),(0,n.kt)("h2",N({},{id:"api"}),"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"http://zincobserve.monitoring-system:5080/api/default/prometheus/api/v1/"}),"http://zincobserve.monitoring-system:5080/api/default/prometheus/api/v1/")),(0,n.kt)("li",{parentName:"ul"},"Grafana",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/api/default/prometheus")))),(0,n.kt)("h2",N({},{id:"\u91c7\u96c6\u6570\u636e\u5927\u5c0f"}),"\u91c7\u96c6\u6570\u636e\u5927\u5c0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u91c7\u96c6\u6570\u636e\u5927\u5c0f - JSON"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u6570\u636e\u5927\u5c0f - parquet")),(0,n.kt)("h2",N({},{id:"_timestamp"}),"_","timestamp"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u81ea\u52a8\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"li"},"_timestamp=NOW")),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u88ab\u8986\u76d6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_timestamp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@timestamp")))),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u683c\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"unix ms"),(0,n.kt)("li",{parentName:"ul"},"RFC 3339, ISO 8601 - ",(0,n.kt)("inlineCode",{parentName:"li"},"1996-12-19T16:39:57-08:00")),(0,n.kt)("li",{parentName:"ul"},"RFC 2822 - ",(0,n.kt)("inlineCode",{parentName:"li"},"Tue, 1 Jul 2003 10:52:37 +0200")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",N({parentName:"li"},{href:"https://openobserve.ai/docs/api/ingestion/json/#timestamp"}),"https://openobserve.ai/docs/api/ingestion/json/#timestamp"))))}b.isMDXComponent=!0}}]);