"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1027],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10845:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&u(e,a,t[a]);return e};const d={title:"Grafana Prometheus"},k="Grafana Prometheus",c={unversionedId:"service/observability/grafana/grafana-prometheus",id:"service/observability/grafana/grafana-prometheus",title:"Grafana Prometheus",description:"- \u53d8\u91cf\u8bed\u6cd5",source:"@site/../notes/service/observability/grafana/grafana-prometheus.md",sourceDirName:"service/observability/grafana",slug:"/service/observability/grafana/prometheus",permalink:"/notes/service/observability/grafana/prometheus",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/grafana/grafana-prometheus.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1684666307,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{title:"Grafana Prometheus"},sidebar:"docs",previous:{title:"grafana-operator",permalink:"/notes/service/observability/grafana/operator"},next:{title:"Grafana Version",permalink:"/notes/service/observability/grafana/version"}},N={},f=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],g={toc:f};function b(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=s(s({},g),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"grafana-prometheus"}),"Grafana Prometheus"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u8bed\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$<varname>"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'rate(http_requests_total{job=~"$job"}[5m])')))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[[varname]]"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u66f4\u597d\u76f4\u63a5\u66ff\u6362"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'rate(http_requests_total{job=~"[[job]]"}[5m])'))))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6a21\u677f\u67e5\u8be2")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"var"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"API"),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"label_names()"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/api/v1/labels"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u6807\u7b7e\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"label_values(label)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/api/v1/label/label/values"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u6807\u7b7e\u503c\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"label_values(metric, label)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/api/v1/series"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u6307\u6807\u6807\u7b7e\u503c\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"metrics(metric)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/api/v1/label/","_","_","name","_","_","/values"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u6b63\u5219\u5339\u914d\u7684\u6307\u6807\u540d\u5b57")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"query_result(query)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/api/v1/query"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7531 grafana \u8fdb\u884c\u9884\u5904\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/grafana/grafana/blob/9fc9708ba5e9ee0f0565c00e681d2bf19146cee0/public/app/plugins/datasource/prometheus/metric_find_query.ts"}),"grafana/public/app/plugins/datasource/prometheus/metric_find_query.ts"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5168\u5c40\u53d8\u91cf")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"demo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"desc"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"since"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$__interval")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"30s"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(to - from)/resolution")),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$__interval_ms")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"30000"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$__range")),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"to - from"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"v5.3+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$__range_s")),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"v5.3+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$__range_ms")),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"v5.3+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$__rate_interval")),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"max($__interval + Scrape interval, 4 * Scrape interval)")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"v7.2+")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u6a21\u677f\u53d8\u91cf\u4e2d\u4f7f\u7528\uff0c\u6ce8\u610f\u5c06 refresh \u8bbe\u7f6e\u4e3a On Time Range Change"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$interva")," \u7b49\u540c\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"$__interval"),"\uff0c \u4f46\u5e94\u8be5\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"$__interval")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://grafana.com/docs/grafana/latest/variables/variable-types/global-variables/"}),"\u5168\u5c40\u53d8\u91cf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$__dashboard")," - dashboard \u540d\u5b57"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$__from")," , ",(0,n.kt)("inlineCode",{parentName:"li"},"$__to")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$__name")," - \u5728 Singlestat \u9762\u677f\u4e2d\u66ff\u6362\u4e3a serial \u7684\u540d\u5b57\u6216\u522b\u540d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$__org")," - ID, ",(0,n.kt)("inlineCode",{parentName:"li"},"${__org.name}")," - \u540d\u5b57"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$__user")," - id,login,email"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$timeFilter"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"$__timeFilter")," - \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"time > now() - 7d"))))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-promql"}),'# \u53d8\u91cf\u66ff\u6362\n# $<varname>\nrate(http_requests_total{job=~\u201d$job\u201d}[5m])\n# [[varname]]\nrate(http_requests_total{job=~\u201d[[job]]"}[5m])\n')),(0,n.kt)("h2",s({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://grafana.com/docs/grafana/latest/datasources/prometheus/"}),"Prometheus data source"))))}b.isMDXComponent=!0}}]);