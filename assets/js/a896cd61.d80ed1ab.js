"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51747],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,k=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14118:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return v}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={title:"Traefik"},f="Traefik",k={unversionedId:"devops/web/traefik",id:"devops/web/traefik",title:"Traefik",description:"- containous/traefik",source:"@site/../notes/devops/web/traefik.md",sourceDirName:"devops/web",slug:"/devops/web/traefik",permalink:"/notes/devops/web/traefik",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/traefik.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627904182,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"Traefik"},sidebar:"docs",previous:{title:"Traefik V1",permalink:"/notes/devops/web/traefik-v1"},next:{title:"Tyk",permalink:"/notes/devops/web/tyk"}},d={},v=[{value:"\u89c4\u5219",id:"\u89c4\u5219",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u9759\u6001\u914d\u7f6e\u9879",id:"\u9759\u6001\u914d\u7f6e\u9879",level:3},{value:"PowerDNS \u8bc1\u4e66",id:"powerdns-\u8bc1\u4e66",level:4},{value:"Docker \u914d\u7f6e\u53d1\u73b0",id:"docker-\u914d\u7f6e\u53d1\u73b0",level:4},{value:"FAQ",id:"faq",level:2},{value:"traefik v1 vs v2",id:"traefik-v1-vs-v2",level:3}],b={toc:v};function g(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"traefik"}),"Traefik"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/containous/traefik"}),"containous/traefik"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://raw.githubusercontent.com/containous/traefik/master/traefik.sample.toml"}),"traefik.sample.toml")))),(0,r.kt)("li",{parentName:"ul"},"ISSUES",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6cdb\u57df\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/containous/traefik/issues/5048"}),"#5048")," \u652f\u6301 UDP"))),(0,r.kt)("li",{parentName:"ul"},"ACME",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"20 certificates per domain per week"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://letsencrypt.org/docs/rate-limits/"}),"https://letsencrypt.org/docs/rate-limits/")))),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c EndPoint \u662f HTTPS \u4f46\u662f router \u672a\u6307\u5b9a tls \u4f1a\u65e0\u6cd5\u5339\u914d\u51fa\u73b0 404 - router \u76f8\u5f53\u4e8e\u662f\u5339\u914d HTTP"),(0,r.kt)("li",{parentName:"ul"},"V2 \u4e0d\u652f\u6301\u9ad8\u53ef\u7528\u90e8\u7f72 ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/containous/traefik/issues/5792"}),"#5792")),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u91cd\u5199 Host")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8\n# \u914d\u7f6e\u6587\u4ef6\u652f\u6301 yaml\u3001toml\u3001json\n# \u4eba\u4e3a\u914d\u7f6e\u63a8\u8350 yaml\ntraefik --configfile traefik.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57fa\u7840\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"providers:\n  file:\n    # \u81ea\u52a8\u76d1\u542c\u8be5\u76ee\u5f55\u914d\u7f6e\n    directory: traefik.d\n    watch: true\n\nentryPoints:\n  http:\n    address: ':8080'\n  https:\n    address: ':8443'\n")),(0,r.kt)("h2",c({},{id:"\u89c4\u5219"}),"\u89c4\u5219"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host \u5339\u914d\u57df\u540d"),(0,r.kt)("li",{parentName:"ul"},"HostRegexp",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'HostRegexp("a.example.com","{subdomain}.domain.com","{subdomain:[a-z]+}.domain.com")')),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u5b8c\u5168\u6b63\u5219\u5339\u914d - \u53ea\u6709\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," \u5185\u7684\u624d\u4f1a\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u662f gorilla/mux \u7684 ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/gorilla/mux/blob/4de8a5a4d283677c69afa1a86a044c8451633a18/route.go#L293:17"}),"Host"))))),(0,r.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.traefik.io/master/reference/static-configuration/file/"}),"Static Configuration"))),(0,r.kt)("h3",c({},{id:"\u9759\u6001\u914d\u7f6e\u9879"}),"\u9759\u6001\u914d\u7f6e\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# \u5168\u5c40\u914d\u7f6e\nglobal:\n  checkNewVersion: false\n  sendAnonymousUsage: false\n# \u670d\u52a1\u7aef\u4f20\u8f93\u914d\u7f6e\nserversTransport:\n  insecureSkipVerify: false\n  rootCAs: ['foobar', 'foobar']\n  maxIdleConnsPerHost: 42\n  forwardingTimeouts:\n    dialTimeout: 42\n    responseHeaderTimeout: 42\n    idleConnTimeout: 42\n\n# \u9ed8\u8ba4\nentryPoints:\n  web:\n    address: ':80'\n  websecure:\n    address: ':443'\n# \u914d\u7f6e\u53d1\u73b0\nproviders:\n  providersThrottleDuration: 42\n  file:\n    directory: traefik.d\n    watch: true\n    filename: traefik.yaml\n    debugLogGeneratedTemplate: true\n# \u542f\u7528 API\napi:\n  # \u4e0d\u5b89\u5168\u6a21\u5f0f\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\n  # \u5b89\u5168\u6a21\u5f0f\u4f1a\u5b9a\u4e49 api@internal \u5185\u90e8\u670d\u52a1\uff0c\u9700\u8981\u81ea\u884c\u914d\u7f6e\u8def\u7531\n  insecure: true\n  dashboard: true\n  # \u6dfb\u52a0 /debug \u7aef\u53e3\n  debug: true\n# \u6307\u6807\u76d1\u63a7\nmetrics:\n  prometheus:\n    buckets: []\n    addEntryPointsLabels: true\n    addServicesLabels: true\n    entryPoint: traefik\n# \u542f\u7528 PING - \u7528\u4e8e\u5065\u5eb7\u68c0\u67e5 - \u7aef\u53e3\u4e3a /ping\nping:\n  entryPoint: traefik\n# \u65e5\u5fd7\u914d\u7f6e\nlog:\n  level: INFO\n  filePath: traefik.log\n  # common/json\n  format: common\n# \u8bbf\u95ee\u65e5\u5fd7\u914d\u7f6e\naccessLog:\n  filePath: access.log\n  format: json\n  # \u5728\u5185\u5b58\u7f13\u51b2\u7684\u884c\u6570\n  bufferingSize: 100\n  # \u843d\u65e5\u5fd7\u7684\u6761\u4ef6 - \u6216 \u5173\u7cfb\n  filters:\n    statusCodes: [400, 401]\n    # \u91cd\u8bd5\n    retryAttempts: true\n    # \u81f3\u5c11 10ms\n    minDuration: 10\n  # \u5b57\u6bb5\u63a7\u5236\n  fields:\n    # \u4fdd\u7559\u5b57\u6bb5\n    defaultMode: keep\n    names:\n      # \u4e22\u5f03\u5b57\u6bb5\n      ClientUsername: drop\n      name1: foobar\n    headers:\n      # \u5c06\u5b57\u6bb5\u503c\u66ff\u6362\u4e3a redacted\n      'User-Agent': 'redact'\n\n# \u8c03\u7528\u8ddf\u8e2a\ntracing:\n  serviceName: foobar\n  spanNameLimit: 42\n  zipkin:\n    httpEndpoint: foobar\n    sameSpan: true\n    id128Bit: true\n    sampleRate: 42\n# \u4e3b\u673a\u57df\u540d\u89e3\u6790\nhostResolver:\n  cnameFlattening: true\n  resolvConfig: foobar\n  resolvDepth: 5\n# \u8bc1\u4e66\u89e3\u6790\ncertificatesResolvers:\n  CertificateResolver0:\n    # let\u2018s encrypt\n    acme:\n      email: foobar\n      caServer: foobar\n      storage: foobar\n      keyType: foobar\n      dnsChallenge:\n        provider: foobar\n        delayBeforeCheck: 42\n        resolvers:\n          - foobar\n          - foobar\n        disablePropagationCheck: true\n      httpChallenge:\n        entryPoint: foobar\n      tlsChallenge: {}\n")),(0,r.kt)("h4",c({},{id:"powerdns-\u8bc1\u4e66"}),"PowerDNS \u8bc1\u4e66"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"certificatesResolvers:\n  pdns:\n    acme:\n      dnsChallenge:\n        # \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u94fe\u63a5\u4fe1\u606f PDNS_API_KEY, PDNS_API_URL\n        # \u73af\u5883\u53d8\u91cf\u4e5f\u53ef\u4ee5\u4f7f\u7528 *_FILE \u6307\u5411\u6587\u4ef6\u6765\u914d\u7f6e\n        provider: pdns\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"http:\n  routers:\n    traefik:\n      entryPoints: [https]\n      rule: Host(`traefik.example.com`)\n      service: api@internal\n      tls:\n        # \u5f15\u7528\u5b9a\u4e49\n        certResolver: pdns\n        # \u4f7f\u7528\u901a\u914d\u7b26\u8bc1\u4e66\n        domains:\n          - main: example.com\n            sans:\n              - '*.example.com'\n")),(0,r.kt)("h4",c({},{id:"docker-\u914d\u7f6e\u53d1\u73b0"}),"Docker \u914d\u7f6e\u53d1\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),'# \u8fd0\u884c docker \u6dfb\u52a0 -v /var/run/docker.sock:/var/run/docker.sock\nproviders:\n  docker:\n    endpoint: \'unix:///var/run/docker.sock\'\n    # \u662f\u5426\u9ed8\u8ba4\u66b4\u9732\u670d\u52a1 - \u6b63\u5e38\u9700\u8981 traefik.enable=true\n    exposedByDefault: false\n    # \u9ed8\u8ba4\u7684\u6620\u5c04\u89c4\u5219\n    # \u652f\u6301 https://masterminds.github.io/sprig \u51fd\u6570\n    # defaultRule: "Host(`{{ .Name }}.{{ index .Labels \\"customLabel\\"}}`)"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it \\\n  -l traefik.enable=true \\\n  -l traefik.http.routers.my-container.rule=Host(`mydomain.com`) \\\n  -l traefik.http.services.my-container-service.loadbalancer.server.port=80\n  --name web nginx\n\n# \u6307\u5b9a\u7aef\u53e3 - \u591a\u4e2a\u9017\u53f7\u5206\u5272\n# traefik.http.routers.my-container.entrypoints=https\n# \u542f\u7528 tls\n# traefik.http.routers.my-container.tls=true\n")),(0,r.kt)("h2",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h3",c({},{id:"traefik-v1-vs-v2"}),"traefik v1 vs v2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e26 SNI \u7684 TCP \u8def\u7531\u548c\u591a\u534f\u8bae\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 TCP \u548c HTTP \u5728\u540c\u4e00\u4e2a\u7aef\u53e3 - \u4f7f\u7528 SNI \u533a\u5206"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u7684\u7ed3\u6784 Routers, Middlewares, Services"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u7684\u76d1\u63a7\u9875\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u5e26\u6743\u91cd\u7684 AB \u53d1\u5e03"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\u652f\u6301\u955c\u50cf\u8bf7\u6c42 - \u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u591a\u4e2a\u7aef\u5ffd\u7565\u8fd4\u56de\u7ed3\u679c"))),(0,r.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u4e86 Frontends \u548c Backends \u6982\u5ff5\uff0c\u65b0\u7684\u6838\u5fc3\u7ec4\u4ef6\u4e3a Routers, Middlewares, Services"),(0,r.kt)("li",{parentName:"ul"},"TLS \u6bcf\u4e2a\u8def\u7531\u52a8\u6001\u914d\u7f6e - v1 \u4e3a\u5168\u5c40\u9759\u6001"),(0,r.kt)("li",{parentName:"ul"},"HTTP \u8c03\u6574 HTTPS \u73b0\u5728\u662f\u8def\u7531 - v1 \u9700\u8981\u5728\u5165\u53e3\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"LetsEncrypt \u914d\u7f6e\u8c03\u6574"),(0,r.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u4e0d\u5728\u4f5c\u4e3a\u5168\u5c40\u914d\u7f6e\uff0c\u914d\u7f6e\u5728 log \u533a\u5757\u4e0b"),(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664\u4e86\u6240\u6709\u5168\u5c40\u8bbe\u7f6e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"v2 \u7684 provider \u652f\u6301\u8f83\u5c11")," - \u4f1a\u9010\u6e10\u5b8c\u5584"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://blog.containo.us/traefik-2-0-6531ec5196c2"}),"v2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.traefik.io/migration/v1-to-v2/"}),"v1 \u8fc1\u79fb v2"))))))}g.isMDXComponent=!0}}]);