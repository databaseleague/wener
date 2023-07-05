"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50220],{49613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=l,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93546:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&p(e,a,t[a]);return e};const m={title:"Headscale"},d="Headscale",h={unversionedId:"service/network/vpn/headscale",id:"service/network/vpn/headscale",title:"Headscale",description:"- juanfont/headscale",source:"@site/../notes/service/network/vpn/headscale.md",sourceDirName:"service/network/vpn",slug:"/service/network/vpn/headscale",permalink:"/notes/service/network/vpn/headscale",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn/headscale.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"Headscale"},sidebar:"docs",previous:{title:"VPN",permalink:"/notes/service/network/vpn/"},next:{title:"IKEv2",permalink:"/notes/service/network/vpn/ikev2"}},k={},f=[{value:"conf",id:"conf",level:2},{value:"Notes",id:"notes",level:2},{value:"Offcial Client/IPN",id:"offcial-clientipn",level:2},{value:"headscale now requires a new <code>noise.private_key_path</code> field in the config file for the Tailscale v2 protocol",id:"headscale-now-requires-a-new-noiseprivate_key_path-field-in-the-config-file-for-the-tailscale-v2-protocol",level:2},{value:"register request: Post &quot;https://host/machine/register&quot;: all connection attempts failed (HTTP: unexpected HTTP response: 301 Moved Permanently, HTTPS: unexpected HTTP response: 404 Not Found)",id:"register-request-post-httpshostmachineregister-all-connection-attempts-failed-http-unexpected-http-response-301-moved-permanently-https-unexpected-http-response-404-not-found",level:2}],g={toc:f};function N(e){var t,a=e,{components:l}=a,p=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},g),p),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"headscale"}),"Headscale"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/juanfont/headscale"}),"juanfont/headscale"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSD-3, Go"),(0,n.kt)("li",{parentName:"ul"},"tailscale control server"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Wireguard \u7684 Mesh \u65b9\u6848"),(0,n.kt)("li",{parentName:"ul"},"SQLite driver \u4f7f\u7528 - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/glebarez/go-sqlite"}),"glebarez/go-sqlite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 CGO"))))),(0,n.kt)("li",{parentName:"ul"},"endpoint",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/api/v1"),(0,n.kt)("li",{parentName:"ul"},"/swagger"),(0,n.kt)("li",{parentName:"ul"},"/windows"),(0,n.kt)("li",{parentName:"ul"},"/windows/tailscale.reg"),(0,n.kt)("li",{parentName:"ul"},"/apple"),(0,n.kt)("li",{parentName:"ul"},"/apple/ios"),(0,n.kt)("li",{parentName:"ul"},"/apple/macos"),(0,n.kt)("li",{parentName:"ul"},"/metrics"),(0,n.kt)("li",{parentName:"ul"},"/machine/:id/map"),(0,n.kt)("li",{parentName:"ul"},"/register"),(0,n.kt)("li",{parentName:"ul"},"/key"),(0,n.kt)("li",{parentName:"ul"},"/derp"),(0,n.kt)("li",{parentName:"ul"},"/bootstrap-dns"),(0,n.kt)("li",{parentName:"ul"},"\u6682\u65f6\u65e0\u6cd5\u5173\u95ed - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/juanfont/headscale/issues/503"}),"#503"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u8003\u8651\u53ea\u66b4\u9732 /api,/machine,/key"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/gurucomputing/headscale-ui"}),"gurucomputing/headscale-ui"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"headscale apikeys create"))))),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Namespace -> User"),(0,n.kt)("li",{parentName:"ul"},"Tailscale iOS & Android \u4e0d\u652f\u6301\u4fee\u6539 control server \u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"WebUI ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/juanfont/headscale/issues/234"}),"#234")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash",metastring:'title="\u542f\u52a8 control \u670d\u52a1"',title:'"\u542f\u52a8',control:!0,'\u670d\u52a1"':!0}),"curl -Lo config.yaml https://raw.githubusercontent.com/juanfont/headscale/main/config-example.yaml\ncurl -Lo headscale https://github.com/juanfont/headscale/releases/download/v0.14.0/headscale_0.14.0_linux_amd64\nchmod +x headscale\nmkdir -p /var/lib/headscale\n./headscale serve\n./headscale namespaces create myns\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash",metastring:'title="\u5ba2\u6237\u7aef \u52a0\u5165"',title:'"\u5ba2\u6237\u7aef','\u52a0\u5165"':!0}),"# AlpineLinux tailscale\napk add tailscale\nservice tailscale start\n# macOS tailscale\nbrew install tailscale\n\ntailscale up --login-server http://192.168.1.2:8080\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash",metastring:'title="control \u540c\u610f\u52a0\u5165"',title:'"control','\u540c\u610f\u52a0\u5165"':!0}),"# @Server \u540c\u610f\n./headscale -n myns nodes register --key $KEY\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash",metastring:'title="\u5ba2\u6237\u7aef\u72b6\u6001"',title:'"\u5ba2\u6237\u7aef\u72b6\u6001"'}),"tailscale ip\ntailscale status\n")),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash",metastring:'title="\u9884\u751f\u6210 authkey \u51cf\u5c11\u540c\u610f\u73af\u8282"',title:'"\u9884\u751f\u6210',authkey:!0,'\u51cf\u5c11\u540c\u610f\u73af\u8282"':!0}),"# \u670d\u52a1\u7aef\u9884\u751f\u6210 - \u51cf\u5c11\u540c\u610f\u8fd9\u4e2a\u73af\u8282\nheadscale --namespace myns preauthkeys create --reusable --expiration 24h\n\n# \u5ba2\u6237\u7aef\u52a0\u5165\ntailscale up --login-server http://192.168.1.2:8080 --authkey $KE\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"headscale nodes list              # \u8282\u70b9\u5217\u8868\n# headscale nodes share -i 1 -n ns2 # \u4e0d\u518d\u652f\u6301\uff0c\u4f7f\u7528 ACL \u63a7\u5236 - \u5c06\u8282\u70b9 1 \u5171\u4eab\u7ed9 ns2 \u79df\u6237\n\nheadscale nodes routes list -i 1  # \u67e5\u770b\u8282\u70b9\u7533\u8bf7\u7684 subnet routes\nheadscale routes enable -i 1 -r 192.168.1.0/24 # \u5141\u8bb8 routes\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Docker\n# 8080 http\n# 9090 metrics\n# https://github.com/juanfont/headscale/blob/main/docs/running-headscale-container.md\ndocker run --rm -it \\\n  -v $PWD/headscale/etc:/etc/headscale/ \\\n  -v $PWD/headscale/var:/var/lib/headscale/ \\\n  -p 127.0.0.1:8080:8080 \\\n  -p 127.0.0.1:9090:9090 \\\n  --name headscale headscale/headscale:0-alpine \\\n  headscale serve\n")),(0,n.kt)("h2",u({},{id:"conf"}),"conf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/juanfont/headscale/blob/main/config-example.yaml"}),"config-example.yaml")),(0,n.kt)("li",{parentName:"ul"},"config.yaml,config.json",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/etc/headscale"),(0,n.kt)("li",{parentName:"ul"},"~/.headscale"),(0,n.kt)("li",{parentName:"ul"},"./")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# \u5ba2\u6237\u7aef\u8fde\u63a5\u4f7f\u7528\u7684\u5730\u5740\nserver_url: http://127.0.0.1:8080\n\n# \u670d\u52a1\u7aef\u76d1\u542c\nlisten_addr: 0.0.0.0:8080\n\n# /metrics\nmetrics_listen_addr: 127.0.0.1:9090\n\n# gRPC API - \u901a\u8fc7 cert \u8ba4\u8bc1\ngrpc_listen_addr: 0.0.0.0:50443\ngrpc_allow_insecure: false\n\n# \u4e0d\u5b58\u5728\u4f1a\u751f\u6210\nprivate_key_path: /var/lib/headscale/private.key\n\n# IP \u6bb5\nip_prefixes:\n  - fd7a:115c:a1e0::/48\n  - 100.64.0.0/10\n\n# DERP - \u4e2d\u7ee7\n# https://tailscale.com/blog/how-tailscale-works/#encrypted-tcp-relays-derp\nderp:\n  server:\n    # \u8fd0\u884c\u5185\u7f6e\u7684 DERP - HTTPS\n    enabled: false\n    # \u5185\u7f6e DERP \u7684 Region ID\n    region_id: 999\n\n    # Region \u4fe1\u606f\n    region_code: 'headscale'\n    region_name: 'Headscale Embedded DERP'\n\n    # \u76d1\u542c\u8f85\u52a9 NAT\n    # https://tailscale.com/blog/how-tailscale-works/\n    stun:\n      enabled: false\n      listen_addr: '0.0.0.0:3478'\n\n  # \u5916\u90e8 DERP\n  urls:\n    - https://controlplane.tailscale.com/derpmap/default\n\n  # \u672c\u5730 DERP \u914d\u7f6e\u6587\u4ef6 - YAML - \u7528\u4e8e selfhost DERP\n  # https://tailscale.com/kb/1118/custom-derp-servers/\n  paths: []\n\n  # \u5237\u65b0 derpmap\n  auto_update_enabled: true\n  update_frequency: 24h\n\ndisable_check_updates: true\nephemeral_node_inactivity_timeout: 30m\n\ndb_type: sqlite3\ndb_path: /var/lib/headscale/db.sqlite\n\n# # Postgres config\n# db_type: postgres\n# db_host: localhost\n# db_port: 5432\n# db_name: headscale\n# db_user: foo\n# db_pass: bar\n\n### TLS configuration\n#\n## Let's encrypt / ACME\n#\n# headscale supports automatically requesting and setting up\n# TLS for a domain with Let's Encrypt.\n#\n# URL to ACME directory\nacme_url: https://acme-v02.api.letsencrypt.org/directory\n\n# Email to register with ACME provider\nacme_email: ''\n\n# Domain name to request a TLS certificate for:\ntls_letsencrypt_hostname: ''\n\n# Client (Tailscale/Browser) authentication mode (mTLS)\n# Acceptable values:\n# - disabled: client authentication disabled\n# - relaxed: client certificate is required but not verified\n# - enforced: client certificate is required and verified\ntls_client_auth_mode: relaxed\n\n# Path to store certificates and metadata needed by\n# letsencrypt\ntls_letsencrypt_cache_dir: /var/lib/headscale/cache\n\ntls_letsencrypt_challenge_type: HTTP-01\ntls_letsencrypt_listen: ':http'\n\ntls_cert_path: ''\ntls_key_path: ''\n\nlog_level: info\n\n# ACL - YAML or HUJSON\n# https://tailscale.com/kb/1018/acls/\n# https://github.com/juanfont/headscale/blob/main/docs/acls.md\nacl_policy_path: ''\n\n## DNS\n#\n# headscale supports Tailscale's DNS configuration and MagicDNS.\n# Please have a look to their KB to better understand the concepts:\n#\n# - https://tailscale.com/kb/1054/dns/\n# - https://tailscale.com/kb/1081/magicdns/\n# - https://tailscale.com/blog/2021-09-private-dns-with-magicdns/\n#\ndns_config:\n  # List of DNS servers to expose to clients.\n  nameservers:\n    - 1.1.1.1\n\n  # Split DNS (see https://tailscale.com/kb/1054/dns/),\n  # list of search domains and the DNS to query for each one.\n  #\n  # restricted_nameservers:\n  #   foo.bar.com:\n  #     - 1.1.1.1\n  #   darp.headscale.net:\n  #     - 1.1.1.1\n  #     - 8.8.8.8\n\n  # Search domains to inject.\n  domains: []\n\n  # Whether to use [MagicDNS](https://tailscale.com/kb/1081/magicdns/).\n  # Only works if there is at least a nameserver defined.\n  magic_dns: true\n\n  # Defines the base domain to create the hostnames for MagicDNS.\n  # `base_domain` must be a FQDNs, without the trailing dot.\n  # The FQDN of the hosts will be\n  # `hostname.namespace.base_domain` (e.g., _myhost.mynamespace.example.com_).\n  base_domain: example.com\n\n# Unix socket used for the CLI to connect without authentication\n# Note: for local development, you probably want to change this to:\n# unix_socket: ./headscale.sock\nunix_socket: /var/run/headscale.sock\nunix_socket_permission: '0770'\n#\n# headscale supports experimental OpenID connect support,\n# it is still being tested and might have some bugs, please\n# help us test it.\n# OpenID Connect\n# oidc:\n#   issuer: \"https://your-oidc.issuer.com/path\"\n#   client_id: \"your-oidc-client-id\"\n#   client_secret: \"your-oidc-client-secret\"\n#\n#   If `strip_email_domain` is set to `true`, the domain part of the username email address will be removed.\n#   This will transform `first-name.last-name@example.com` to the namespace `first-name.last-name`\n#   If `strip_email_domain` is set to `false` the domain part will NOT be removed resulting to the following\n#   namespace: `first-name.last-name.example.com`\n#\n#   strip_email_domain: true\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'title="acls.yaml"',title:'"acls.yaml"'}),'Groups:\n  # group user\n  group:wener: [ wener ]\nTagOwners:\n  # who can adertise tag\n  tag:internal: [ group:wener ]\n  tag:public: [ group:wener ]\n  tag:derp: [ group:wener ]\nACLs:\n- { Action: accept, Users: [ wener ], Ports: [ "*:*" ] }\n- { Action: accept, Users: [ tag:derp ], Ports: [ "*:*" ] }\n- { Action: accept, Users: [ "*" ], Ports: [ tag:public:* ] }\n')),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'title="derp.yaml"',title:'"derp.yaml"'}),"regions:\n  999:\n    regionid: 999\n    regioncode: sha\n    regionname: Shanghai\n    nodes:\n      - name: 999a\n        regionid: 999\n        hostname: derp.example.com\n        ipv4: 1.1.1.1\n        stunport: 3478\n        stunonly: false\n        derpport: 443\n")),(0,n.kt)("h2",u({},{id:"notes"}),"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/var/lib/headscale/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"private.key"),(0,n.kt)("li",{parentName:"ul"},"db.sqlite",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"api_keys"),(0,n.kt)("li",{parentName:"ul"},"kvs"),(0,n.kt)("li",{parentName:"ul"},"machines"),(0,n.kt)("li",{parentName:"ul"},"namespaces"),(0,n.kt)("li",{parentName:"ul"},"pre_auth_keys"),(0,n.kt)("li",{parentName:"ul"},"shared_machines")))))),(0,n.kt)("h2",u({},{id:"offcial-clientipn"}),"Offcial Client/IPN"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d ",(0,n.kt)("a",u({parentName:"li"},{href:"https://tailscale.com/download/"}),"https://tailscale.com/download/")),(0,n.kt)("li",{parentName:"ul"},"macOS GUI - \u4ece ",(0,n.kt)("inlineCode",{parentName:"li"},"http://<headscale>/apple/macos")," \u4e0b\u8f7d\u5b89\u88c5 mobileconfig"),(0,n.kt)("li",{parentName:"ul"},"windows \u4ece ",(0,n.kt)("inlineCode",{parentName:"li"},"http://<headscale>/windows/tailscale.reg")," \u4e0b\u8f7d\u6267\u884c\u6ce8\u518c\u8868"),(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5ba2\u6237\u7aef\u5373\u53ef")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# macOS \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 ControlURL\ndefaults write io.tailscale.ipn.macos ControlURL https://127.0.0.1:8080\n\n# GUI \u7248 cli \u4f4d\u7f6e\n/Applications/Tailscale.app/Contents/MacOS/Tailscale --help\n\n# /Library/LaunchDaemons/com.tailscale.tailscaled.plist\n# \u547d\u4ee4\u884c\u7248\u672c\u914d\u7f6e \u5f00\u673a\u542f\u52a8\nsudo tailscaled install-system-daemon\n# \u5378\u8f7d\nsudo tailscaled uninstall-system-daemon\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bat"}),': Windows \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\nREG ADD "HKLM\\Software\\Tailscale IPN" /v UnattendedMode /t REG_SZ /d always\nREG ADD "HKLM\\Software\\Tailscale IPN" /v LoginURL /t REG_SZ /d "https://127.0.0.1:8080"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows \u72b6\u6001\u76ee\u5f55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"%LocalAppData%\\Tailscale")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"C:\\WINDOWS\\system32\\config\\systemprofile\\AppData\\Local\\Tailscale")))),(0,n.kt)("li",{parentName:"ul"},"macOS GUI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u72b6\u6001\u4f7f\u7528 keychain",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tailscale-daemon"),(0,n.kt)("li",{parentName:"ul"},"tailscale-logdata"),(0,n.kt)("li",{parentName:"ul"},"tailscale-machinekey"),(0,n.kt)("li",{parentName:"ul"},"tailscale-preferences"))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Apple Network Extension API - tailscaled \u4f7f\u7528 utun",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4\uff0cVPN \u7684\u5f62\u5f0f"))))),(0,n.kt)("li",{parentName:"ul"},"macOS tailscaled",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u72b6\u6001\u76ee\u5f55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"root /Library/Tailscale/tailscaled.state"),(0,n.kt)("li",{parentName:"ul"},"user $HOME/.local/share/tailscale/tailscaled.state")))))),(0,n.kt)("h2",u({},{id:"headscale-now-requires-a-new-noiseprivate_key_path-field-in-the-config-file-for-the-tailscale-v2-protocol"}),"headscale now requires a new ",(0,n.kt)("inlineCode",{parentName:"h2"},"noise.private_key_path")," field in the config file for the Tailscale v2 protocol"),(0,n.kt)("h2",u({},{id:"register-request-post-httpshostmachineregister-all-connection-attempts-failed-http-unexpected-http-response-301-moved-permanently-https-unexpected-http-response-404-not-found"}),'register request: Post "https://host/machine/register": all connection attempts failed (HTTP: unexpected HTTP response: 301 Moved Permanently, HTTPS: unexpected HTTP response: 404 Not Found)'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd cloudflare \u53cd\u5411\u4ee3\u7406"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/juanfont/headscale/issues/775"}),"https://github.com/juanfont/headscale/issues/775"))))}N.isMDXComponent=!0}}]);