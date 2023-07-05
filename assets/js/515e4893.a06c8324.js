"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65631],{49613:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return d}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),u=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},k=function(t){var e=u(t.components);return a.createElement(g.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,g=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),s=u(n),d=r,o=s["".concat(g,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(o,p(p({ref:e},k),{},{components:n})):a.createElement(o,p({ref:e},k))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},32711:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&k(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&k(t,n,e[n]);return t};const s={title:"GPG"},d="GPG",o={unversionedId:"security/gpg",id:"security/gpg",title:"GPG",description:"- GNU Privacy Guard",source:"@site/../notes/security/gpg.md",sourceDirName:"security",slug:"/security/gpg",permalink:"/notes/security/gpg",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/gpg.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668972316,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{title:"GPG"},sidebar:"docs",previous:{title:"FIPS",permalink:"/notes/security/fips"},next:{title:"hashcat",permalink:"/notes/security/hashcat"}},N={},c=[{value:"gpg.conf",id:"gpgconf",level:3},{value:"gpg-agent",id:"gpg-agent",level:2},{value:"gpg-agent.conf",id:"gpg-agentconf",level:3},{value:"rsa2048",id:"rsa2048",level:2},{value:"ssh",id:"ssh",level:2},{value:"backup &amp; restore",id:"backup--restore",level:2},{value:"uid unknown",id:"uid-unknown",level:2},{value:"fingerprint",id:"fingerprint",level:2},{value:"\u5931\u6548\u540e\u64cd\u4f5c",id:"\u5931\u6548\u540e\u64cd\u4f5c",level:2},{value:"gpg: lookup_hashtable failed: Unknown system error",id:"gpg-lookup_hashtable-failed-unknown-system-error",level:3},{value:"A locale function failed",id:"a-locale-function-failed",level:2},{value:"subkeys",id:"subkeys",level:2},{value:"No pinentry",id:"no-pinentry",level:2},{value:"gpg --help",id:"gpg---help",level:2}],y={toc:c};function b(t){var e,n=t,{components:r}=n,k=((t,e)=>{var n={};for(var a in t)g.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},y),k),l(e,p({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"gpg"}),"GPG"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/GNU_Privacy_Guard"}),"GNU Privacy Guard")),(0,a.kt)("li",{parentName:"ul"},"Cheatsheet",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://stuff.imeos.org/persistent/gpg-cheatsheet.pdf"}),"http://stuff.imeos.org/persistent/gpg-cheatsheet.pdf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://devhints.io/gnupg"}),"https://devhints.io/gnupg")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/"}),"http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/")))),(0,a.kt)("li",{parentName:"ul"},"Public keyservers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pgp.mit.edu"),(0,a.kt)("li",{parentName:"ul"},"keys.gnupg.net"),(0,a.kt)("li",{parentName:"ul"},"sks-keyservers.net"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.gnupg/pubring.gpg")),(0,a.kt)("li",{parentName:"ul"},"RFC 4880"),(0,a.kt)("li",{parentName:"ul"},"KEYID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u90ae\u7bb1"),(0,a.kt)("li",{parentName:"ul"},"641CA51175E65BF5F319443E1D0D06BE9E196B37"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://gnupg.org/documentation/manuals/gnupg/GPG-Commands.html"}),"https://gnupg.org/documentation/manuals/gnupg/GPG-Commands.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.gnupg.org/documentation/manuals.html"}),"https://www.gnupg.org/documentation/manuals.html")))),(0,a.kt)("li",{parentName:"ul"},"GnuPG",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gpg - OpenPGP Protocol"),(0,a.kt)("li",{parentName:"ul"},"gpgsm - S/MIME Protocol"),(0,a.kt)("li",{parentName:"ul"},"gpg-card - Smartcards"),(0,a.kt)("li",{parentName:"ul"},"dirmgr - crl, ocsp"),(0,a.kt)("li",{parentName:"ul"},"gpg-agent"),(0,a.kt)("li",{parentName:"ul"},"gpg-wks-client - Web Key Directory, Web Key Service"),(0,a.kt)("li",{parentName:"ul"},"gpg-wks-server"))),(0,a.kt)("li",{parentName:"ul"},"libgcrypt"),(0,a.kt)("li",{parentName:"ul"},"libksba"),(0,a.kt)("li",{parentName:"ul"},"libassuan"),(0,a.kt)("li",{parentName:"ul"},"GPGME"),(0,a.kt)("li",{parentName:"ul"},"Scute")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# macOS\n# pinentry-mac \u5bf9\u8bdd\u6846\u8f93\u5165 \u5bc6\u7801\nbrew install gpg pinentry-mac\n\n# \u751f\u6210\u79d8\u94a5 - RSA \u63a8\u8350\u81f3\u5c11 4096\ngpg --default-new-key-algo rsa4096 --gen-key\n# \u63a8\u8350 ECC\ngpg --default-new-key-algo "ed25519/cert,sign+cv25519/encr" --quick-generate-key "wener@wener.me"\n# \u5b8c\u6574\u751f\u6210\u903b\u8f91\ngpg --full-generate-key\n\ngpg --list-keys --keyid-format=long # \u5b8c\u6574\u7684 keyid\ngpg --list-secret-keys\ngpg --export --armor 0000000000000000 # \u5bfc\u51fa\u4e3a PEM \u683c\u5f0f\n\n# \u63d0\u4ea4\u5230\u670d\u52a1\u5668\ngpg --keyserver hkp://pgp.mit.edu --send-keys $KEYID\n# \u9a8c\u8bc1\u662f\u5426\u6210\u529f\ngpg --keyserver hkp://pgp.mit.edu --recv-keys $KEYID\n\n# \u5bfc\u51fa\ngpg --export-secret-keys $KEYID > private.key\n# \u5bfc\u5165\ngpg --import private.key\n\n# \u914d\u7f6e\u4fe1\u606f\ngpgconf --list-components\n# check password\ngpg --dry-run --passwd $KEYID\n')),(0,a.kt)("h1",m({},{id:"gnupg"}),"GnuPG"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GNUPGHOME, ",(0,a.kt)("inlineCode",{parentName:"li"},"--homedir")),(0,a.kt)("li",{parentName:"ul"},"~/.gnupg",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"S.gpg-agent"),(0,a.kt)("li",{parentName:"ul"},"S.gpg-agent.ssh - ",(0,a.kt)("inlineCode",{parentName:"li"},"--enable-ssh-support"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--enable-putty-support"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ssh-agent"),(0,a.kt)("li",{parentName:"ul"},"SSH_AUTH_SOCK"),(0,a.kt)("li",{parentName:"ul"},"ssh 8.2 \u624d\u652f\u6301 FIDO2/U2F"))),(0,a.kt)("li",{parentName:"ul"},"S.gpg-agent.browser",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"keychain"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u548c\u7f13\u5b58\u5bc6\u7801"))),(0,a.kt)("li",{parentName:"ul"},"S.gpg-agent.extra",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u8fdc\u7a0b gpg \u4f7f\u7528\u672c\u5730 key"))),(0,a.kt)("li",{parentName:"ul"},"pubring.kbx",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"new public keyring using keybox format"))),(0,a.kt)("li",{parentName:"ul"},"pubring.gpg",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"legacy public keyring"))),(0,a.kt)("li",{parentName:"ul"},"trustdb.gpg"),(0,a.kt)("li",{parentName:"ul"},"openpgp-revocs.d/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"revocation certificates"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<ID>.rev")))),(0,a.kt)("li",{parentName:"ul"},"private-keys-v1.d/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<ID>.key")))))),(0,a.kt)("li",{parentName:"ul"},"GPG_AGENT_INFO")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u5b8c\u6574\u4fe1\u606f\ngpg --with-colons --list-keys --with-fingerprint --with-fingerprint\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Field 1 - Type of record"),(0,a.kt)("li",{parentName:"ul"},"Field 2 - Validity"),(0,a.kt)("li",{parentName:"ul"},"Field 3 - Key length"),(0,a.kt)("li",{parentName:"ul"},"Field 4 - Public key algorithm"),(0,a.kt)("li",{parentName:"ul"},"Field 5 - KeyID"),(0,a.kt)("li",{parentName:"ul"},"Field 6 - Creation date"),(0,a.kt)("li",{parentName:"ul"},"Field 7 - Expiration date"),(0,a.kt)("li",{parentName:"ul"},"Field 8 - Certificate S/N, UID hash, trust signature info"),(0,a.kt)("li",{parentName:"ul"},"Field 9 - Ownertrust"),(0,a.kt)("li",{parentName:"ul"},"Field 10 - User-ID"),(0,a.kt)("li",{parentName:"ul"},"Field 11 - Signature class"),(0,a.kt)("li",{parentName:"ul"},"Field 12 - Key capabilities"),(0,a.kt)("li",{parentName:"ul"},"Field 13 - Issuer certificate fingerprint or other info"),(0,a.kt)("li",{parentName:"ul"},"Field 14 - Flag field"),(0,a.kt)("li",{parentName:"ul"},"Field 15 - S/N of a token"),(0,a.kt)("li",{parentName:"ul"},"Field 16 - Hash algorithm"),(0,a.kt)("li",{parentName:"ul"},"Field 17 - Curve name"),(0,a.kt)("li",{parentName:"ul"},"Field 18 - Compliance flags"),(0,a.kt)("li",{parentName:"ul"},"Field 19 - Last update"),(0,a.kt)("li",{parentName:"ul"},"Field 20 - Origin"),(0,a.kt)("li",{parentName:"ul"},"Field 21 - Comment")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"abbr."),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sec"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"SECret key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ssb"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Secret SuBkey")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"pub"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PUBlic key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sub"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"public SUBkey - secondary key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uid"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"user id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sig"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"key signature")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"crt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"X.509 certificate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"crs"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"X.509 certificate and private key available")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uat"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"User attribute (same as user id except for field 10).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rev"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Revocation signature")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"fpr"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fingerprint (fingerprint is in field 10)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"pkd"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Public key data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"grp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Keygrip")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rvk"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Revocation key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"tru"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Trust database information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"spk"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Signature subpacket")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cfg"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Configuration data")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"subkeys",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728 master key \u4e4b\u4e0b"),(0,a.kt)("li",{parentName:"ul"},"revoked independently"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://dev.gnupg.org/source/gnupg/browse/master/doc/DETAILS"}),"https://dev.gnupg.org/source/gnupg/browse/master/doc/DETAILS"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"abbr."),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rsa2048"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RSA 2048")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4096R"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RSA 4096")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cv25519"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ed25519"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u64cd\u4f5c")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"flag"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Signarure")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-s,--sign"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--clearsign,--clear-sign"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-b,--detach-sign"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--check-sigs,--check-signatures"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Enc/Dec")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-e,--encrypt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-c,--symmetric"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--store"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-d,--decrypt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--verify"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Multi")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--multifile"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--verify-files"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--multifile --verify"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--encrypt-files"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--multifile --encrypt"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--decrypt-files"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--multifile --decrypt"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Keys")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-k,--list-keys,--list-pub-keys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u516c\u94a5\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-K,--list-secret-keys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u79c1\u94a5\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--delete-keys NAME"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--delete-secret-keys NAME"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--delete-secret-and-public-key NAME"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--locate-keys,--locate-external-keys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--show-keys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u663e\u793a\u7ed9\u7684 Key \u7684\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--fingerprint"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Smartcard")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--edit-card,--card-edit"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--card-status"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--change-pin"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Export/Restore")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--export"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--export-secret-keys,--export-secret-subkeys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--export-ssh-key"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--import,--fast-import"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--import-options merge-only"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--export-ownertrust"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--import-ownertrust"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Key Server")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--send-keys KEYIDS"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--recv-keys,--receive-keys KEYIDS"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--refresh-keys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--search-keys NAMES"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--fetch-keys URL"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--update-trustdb"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--check-trustdb"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--rebuild-keydb-caches"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Misc")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--list-packets"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--print-md algo"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--print-mds"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u8ba1\u7b97\u6587\u4ef6\u6240\u6709\u6458\u8981")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--gen-random 0","|","1","|","2","|","16","|","30 COUNT"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u751f\u6210\u968f\u673a\u6570\u636e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--gen-prime MODE BITS"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"--enarmor,--dearmor"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"cap"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"create"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"s"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sign"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sign"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"e"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"encr"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"encrypt,decrypt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"auth"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"authenticate"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ssh login")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"c"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cert"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"certify"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u7b7e\u540d\u53e6\u5916\u4e00\u4e2a key")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u751f\u6210 base64 \u968f\u673a\ngpg -a --gen-random 1 20\n")),(0,a.kt)("h3",m({},{id:"gpgconf"}),"gpg.conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/drduh/config/blob/master/gpg.conf"}),"https://github.com/drduh/config/blob/master/gpg.conf"))),(0,a.kt)("h2",m({},{id:"gpg-agent"}),"gpg-agent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for gpg, gpgsm"),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u81ea\u52a8\u542f\u52a8")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# \u4e3b\u52a8\u9000\u51fa\ngpg-connect-agent /bye\ngpgconf --kill gpg-agent\n\npidof gpg-agent\n\n# \u5e38\u7528\u8bbe\u7f6e\nGPG_TTY=$(tty)\nexport GPG_TTY\n\n# .bashrc\nexport GPG_TTY="$(tty)"\nexport SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)\ngpgconf --launch gpg-agent\n\n# \u67e5\u770b\u7f13\u5b58\u7684 Key\ngpg-connect-agent \'keyinfo --list\' /bye\ngpg-connect-agent "keyinfo --ssh-list --ssh-fpr" /bye\ngpg-connect-agent "keyinfo --ssh-list --ssh-fpr=sha1" /bye\n')),(0,a.kt)("h3",m({},{id:"gpg-agentconf"}),"gpg-agent.conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"~/.gnupg/gpg-agent.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# https://www.gnupg.org/documentation/manuals/gnupg/Agent-Options.html\nenable-ssh-support\nttyname $GPG_TTY\npinentry-program /usr/local/bin/pinentry-mac\n\ndefault-cache-ttl 60\nmax-cache-ttl 120\n# pinentry-program /usr/bin/pinentry-curses\n#pinentry-program /usr/bin/pinentry-tty\n#pinentry-program /usr/bin/pinentry-gtk-2\n#pinentry-program /usr/bin/pinentry-x11\n#pinentry-program /usr/bin/pinentry-qt\n#pinentry-program /usr/local/bin/pinentry-curses\n#pinentry-program /usr/local/bin/pinentry-mac\n#pinentry-program /opt/homebrew/bin/pinentry-mac\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/drduh/config"}),"https://github.com/drduh/config"))),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"rsa2048"}),"rsa2048"),(0,a.kt)("p",null,"GPG \u9ed8\u8ba4 RSA2048\uff0c\u4f46\u73b0\u5728\u5df2\u7ecf\u4e0d\u63a8\u8350\u4e86\uff0c\u5efa\u8bae\u81f3\u5c11 4096 bit\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NIST Special Publication 800-57 - July 2012",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8ba4\u4e3a rsa2048 \u5728 2030 \u5e74\u524d\u8fd8\u662f\u5b89\u5168\u7684"))),(0,a.kt)("li",{parentName:"ul"},"Github \u8981\u6c42 RSA4096+"),(0,a.kt)("li",{parentName:"ul"},"\u65b0 key \u63a8\u8350 ECC/elliptical-curve"),(0,a.kt)("li",{parentName:"ul"},"Github \u652f\u6301\u7684 Key \u7b97\u6cd5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RSA"),(0,a.kt)("li",{parentName:"ul"},"ElGamal"),(0,a.kt)("li",{parentName:"ul"},"DSA"),(0,a.kt)("li",{parentName:"ul"},"ECDH"),(0,a.kt)("li",{parentName:"ul"},"ECDSA"),(0,a.kt)("li",{parentName:"ul"},"EdDSA")))),(0,a.kt)("h2",m({},{id:"ssh"}),"ssh"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gpg-agent \u652f\u6301\u4f5c\u4e3a ssh-agent"),(0,a.kt)("li",{parentName:"ul"},"ssh key \u53ef\u5bfc\u5165\u5230 gpg \u4f46 ",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u63a8\u8350"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/dkg/monkeysphere"}),"dkg/monkeysphere"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pem2openpgp")))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u7528\u4e8e SSH \u767b\u9646\u7684 keu\ngpg --quick-add-key $KEYID ed25519 auth 1y\ngpg -k --with-keygrip $KEYID\n\ngpg --export-ssh-key $KEYID\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'echo enable-ssh-support >> $HOME/.gnupg/gpg-agent.conf\n\n# \u542f\u52a8\nunset SSH_AGENT_PID\nif [ "${gnupg_SSH_AUTH_SOCK_by:-0}" -ne $$ ]; then\n  export SSH_AUTH_SOCK="$(gpgconf --list-dirs agent-ssh-socket)"\nfi\nexport GPG_TTY=$(tty)\ngpg-connect-agent updatestartuptty /bye > /dev/null\n\n# \u901a\u8fc7 gpgconf \u542f\u52a8\n# gpgconf --launch gpg-agent\n\ngpg --list-keys --with-keygrip\necho $KEYGRIP >> ~/.gnupg/sshcontrol\nssh-add -l\n\n# ssh-ed25519 XXXX openpgp:0xABCD\ngpg --export-ssh-key $KEYID\n\n# \u5982\u679c\u914d\u7f6e\u4e86 github \u53ef\u4ee5\u6d4b\u8bd5\nssh -T git@github.com\n')),(0,a.kt)("h2",m({},{id:"backup--restore"}),"backup & restore"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"KEYID=$(gpg -k wener@wener.me | sed '2q;d' | tr -d '[:blank:]')\ngpg -a --export-secret-keys $KEYID > private.gpg\ngpg -a --export-secret-subkeys $KEYID >> private.gpg\ngpg --batch --yes --delete-secret-and-public-key $KEYID\ngpg --show-keys private.gpg\ngpg --import private.gpg\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u5907\u4efd secret master key\n# -a \u4f7f\u7528 PEM \u683c\u5f0f\ngpg -a -o secrets.gpg --export-secret-keys wener@wener.me\ngpg -a -o subkeys.gpg --export-secret-subkeys wener@wener.me\n\ngpg --show-keys secrets.gpg subkeys.gpg\ngpg --list-packets secrets.gpg\ngpg --list-packets subkeys.gpg\n\nKEYID=$(gpg -k wener@wener.me | sed '2q;d' | tr -d '[:blank:]')\n# --batch --yes \u9700\u8981\u7528 fingerprint\ngpg --batch --yes --delete-secret-and-public-key $KEYID\ngpg -K\ngpg -k\n\n# \u5bfc\u5165\n# key \u540e\u9762\u663e\u793a # \u8868\u793a key \u975e\u672c\u5730\u5b58\u50a8\ngpg --import subkeys.gpg\ngpg -K\ngpg --import secrets.gpg\ngpg -K\ngpg -k\n\n# \u53ef\u4ee5\u5408\u5e76\u4e3a\u5355\u4e2a\u6587\u4ef6\n# cat subkeys.gpg secrets.gpg > backup.gpg\n\n# \u4fe1\u4efb\necho -e \"5\\ny\\n\" | gpg --command-fd 0 --expert --edit-key $KEYID trust\n")),(0,a.kt)("h2",m({},{id:"uid-unknown"}),"uid unknown"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0 trust \u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},"~/.gnupg/trustdb.gpg")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'gpg --edit-key $KEYID\ntrust\n5\nsave\n\n# \u6279\u5904\u7406\necho -e "5\\ny\\n" | gpg --command-fd 0 --expert --edit-key wener@wener.me trust\n')),(0,a.kt)("h2",m({},{id:"fingerprint"}),"fingerprint"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"gpg -k wener@wener.me | head -n 2 | tail -n 1 | tr -d '[:blank:]'\ngpg -k wener@wener.me | sed '2q;d' | tr -d '[:blank:]'\n")),(0,a.kt)("h2",m({},{id:"\u5931\u6548\u540e\u64cd\u4f5c"}),"\u5931\u6548\u540e\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"gpg --edit-key $KEYID\nlist\n\nkey 0\nexpire\n\nkey 1\nexpire\n\nlist # \u786e\u8ba4\nsave # \u4fdd\u5b58\u9000\u51fa\n")),(0,a.kt)("h3",m({},{id:"gpg-lookup_hashtable-failed-unknown-system-error"}),"gpg: lookup_hashtable failed: Unknown system error"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"gpg --fix-trustdb\n\ncd ~/.gnupg\ngpg --export-ownertrust > otrust.tmp\nrm trustdb.gpg\ngpg --import-ownertrust < otrust.tmp\n")),(0,a.kt)("h2",m({},{id:"a-locale-function-failed"}),"A locale function failed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"--batch --yes")," \u907f\u514d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=866023"}),"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=866023"))),(0,a.kt)("h2",m({},{id:"subkeys"}),"subkeys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://wiki.debian.org/Subkeys"}),"https://wiki.debian.org/Subkeys"))),(0,a.kt)("h2",m({},{id:"no-pinentry"}),"No pinentry"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"gpgconf --kill gpg-agent\n")),(0,a.kt)("h2",m({},{id:"gpg---help"}),"gpg --help"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"gpg (GnuPG) 2.2.5\nlibgcrypt 1.8.2\nCopyright (C) 2018 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: /Users/user/.gnupg\n\u652f\u6301\u7684\u7b97\u6cd5\uff1a\n\u516c\u94a5\uff1aRSA, ELG, DSA, ECDH, ECDSA, EDDSA\n\u5bf9\u79f0\u52a0\u5bc6\uff1aIDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256,\n     TWOFISH, CAMELLIA128, CAMELLIA192, CAMELLIA256\n\u6563\u5217\uff1aSHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\n\u538b\u7f29\uff1a\u4e0d\u538b\u7f29, ZIP, ZLIB, BZIP2\n\nSyntax: gpg [options] [files]\nSign, check, encrypt or decrypt\nDefault operation depends on the input data\n\n\u6307\u4ee4\uff1a\n\n -s, --sign                  make a signature\n     --clear-sign            make a clear text signature\n -b, --detach-sign           \u751f\u6210\u4e00\u4efd\u5206\u79bb\u7684\u7b7e\u540d\n -e, --encrypt               \u52a0\u5bc6\u6570\u636e\n -c, --symmetric             \u4ec5\u4f7f\u7528\u5bf9\u79f0\u52a0\u5bc6\n -d, --decrypt               \u89e3\u5bc6\u6570\u636e(\u9ed8\u8ba4)\n     --verify                \u9a8c\u8bc1\u7b7e\u540d\n -k, --list-keys             \u5217\u51fa\u5bc6\u94a5\n     --list-signatures       \u5217\u51fa\u5bc6\u94a5\u548c\u7b7e\u540d\n     --check-signatures      \u5217\u51fa\u5e76\u68c0\u67e5\u5bc6\u94a5\u7b7e\u540d\n     --fingerprint           \u5217\u51fa\u5bc6\u94a5\u548c\u6307\u7eb9\n -K, --list-secret-keys      \u5217\u51fa\u79c1\u94a5\n     --generate-key          \u751f\u6210\u4e00\u526f\u65b0\u7684\u5bc6\u94a5\u5bf9\n     --quick-generate-key    quickly generate a new key pair\n     --quick-add-uid         quickly add a new user-id\n     --quick-revoke-uid      quickly revoke a user-id\n     --quick-set-expire      quickly set a new expiration date\n     --full-generate-key     full featured key pair generation\n     --generate-revocation   \u751f\u6210\u4e00\u4efd\u540a\u9500\u8bc1\u4e66\n     --delete-keys           \u4ece\u516c\u94a5\u94a5\u5319\u73af\u91cc\u5220\u9664\u5bc6\u94a5\n     --delete-secret-keys    \u4ece\u79c1\u94a5\u94a5\u5319\u73af\u91cc\u5220\u9664\u5bc6\u94a5\n     --quick-sign-key        quickly sign a key\n     --quick-lsign-key       quickly sign a key locally\n     --sign-key              \u4e3a\u67d0\u628a\u5bc6\u94a5\u6dfb\u52a0\u7b7e\u540d\n     --lsign-key             \u4e3a\u67d0\u628a\u5bc6\u94a5\u6dfb\u52a0\u672c\u5730\u7b7e\u540d\n     --edit-key              \u7f16\u8f91\u67d0\u628a\u5bc6\u94a5\u6216\u4e3a\u5176\u6dfb\u52a0\u7b7e\u540d\n     --change-passphrase     change a passphrase\n     --export                \u5bfc\u51fa\u5bc6\u94a5\n     --send-keys             \u628a\u5bc6\u94a5\u5bfc\u51fa\u5230\u67d0\u4e2a\u516c\u94a5\u670d\u52a1\u5668\u4e0a\n     --receive-keys          \u4ece\u516c\u94a5\u670d\u52a1\u5668\u4e0a\u5bfc\u5165\u5bc6\u94a5\n     --search-keys           \u5728\u516c\u94a5\u670d\u52a1\u5668\u4e0a\u641c\u5bfb\u5bc6\u94a5\n     --refresh-keys          \u4ece\u516c\u94a5\u670d\u52a1\u5668\u66f4\u65b0\u6240\u6709\u7684\u672c\u5730\u5bc6\u94a5\n     --import                \u5bfc\u5165/\u5408\u5e76\u5bc6\u94a5\n     --card-status           \u6253\u5370\u5361\u72b6\u6001\n     --edit-card             \u66f4\u6539\u5361\u4e0a\u7684\u6570\u636e\n     --change-pin            \u66f4\u6539\u5361\u7684 PIN\n     --update-trustdb        \u66f4\u65b0\u4fe1\u4efb\u5ea6\u6570\u636e\u5e93\n     --print-md              print message digests\n     --server                run in server mode\n     --tofu-policy VALUE     set the TOFU policy for a key\n\n\u9009\u9879\uff1a\n\n -a, --armor                 \u8f93\u51fa\u7ecf ASCII \u5c01\u88c5\n -r, --recipient USER-ID     encrypt for USER-ID\n -u, --local-user USER-ID    use USER-ID to sign or decrypt\n -z N                        set compress level to N (0 disables)\n     --textmode              \u4f7f\u7528\u6807\u51c6\u7684\u6587\u672c\u6a21\u5f0f\n -o, --output FILE           write output to FILE\n -v, --verbose               \u8be6\u7ec6\u6a21\u5f0f\n -n, --dry-run               \u4e0d\u505a\u4efb\u4f55\u6539\u53d8\n -i, --interactive           \u8986\u76d6\u524d\u5148\u8be2\u95ee\n     --openpgp               \u884c\u4e3a\u4e25\u683c\u9075\u5faa OpenPGP \u5b9a\u4e49\n\n(\u8bf7\u53c2\u8003\u5728\u7ebf\u8bf4\u660e\u4ee5\u83b7\u5f97\u6240\u6709\u547d\u4ee4\u548c\u9009\u9879\u7684\u5b8c\u6574\u6e05\u5355)\n\nExamples:\n\n -se -r Bob [file]          sign and encrypt for user Bob\n --clear-sign [file]        make a clear text signature\n --detach-sign [file]       make a detached signature\n --list-keys [names]        show keys\n --fingerprint [names]      show fingerprints\n\n\u8bf7\u5411 <https://bugs.gnupg.org> \u62a5\u544a\u7a0b\u5e8f\u7f3a\u9677\u3002\n\u8bf7\u5411 <zuxyhere@eastday.com> \u53cd\u6620\u7b80\u4f53\u4e2d\u6587\u7ffb\u8bd1\u7684\u95ee\u9898\u3002\n")))}b.isMDXComponent=!0}}]);