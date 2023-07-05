"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31951],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),g=l,k=s["".concat(p,".").concat(g)]||s[g]||m[g]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return N}});var a=n(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e};const s={title:"CGO"},g="CGO",k={unversionedId:"languages/go/go-cgo",id:"languages/go/go-cgo",title:"CGO",description:"Note",source:"@site/../notes/languages/go/go-cgo.md",sourceDirName:"languages/go",slug:"/languages/go/cgo",permalink:"/notes/languages/go/cgo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-cgo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1682315301,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{title:"CGO"},sidebar:"docs",previous:{title:"Go Build",permalink:"/notes/languages/go/build"},next:{title:"Concurrent",permalink:"/notes/languages/go/concurrent"}},d={},N=[{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:2},{value:"dlopen",id:"dlopen",level:2},{value:"sqlite",id:"sqlite",level:2},{value:"\u67e5\u627e\u7528\u5230\u4e86 cgo \u7684\u6a21\u5757",id:"\u67e5\u627e\u7528\u5230\u4e86-cgo-\u7684\u6a21\u5757",level:2},{value:"zig cgo cross compile",id:"zig-cgo-cross-compile",level:2}],h={toc:N};function f(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),c),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"cgo"}),"CGO"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),"\nCGO is not GO")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/ebitengine/purego"}),"ebitengine/purego"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 go \u8c03\u7528 lib"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 asm \u8c03\u7528"))),(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d CGO",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/hashicorp/go-plugin"}),"hashicorp/go-plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/notti/nocgo"}),"notti/nocgo")," - dlopen without cgo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"dlopen, dlclose, dlerror, dlsym"),(0,a.kt)("li",{parentName:"ul"},"ffi \u6c47\u7f16, \u652f\u6301 386 \u548c amd64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/rainycape/dl"}),"rainycape/dl")," - dlopen / dlsym"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://jonwillia.ms/2022/03/09/isolating-problematic-cgo-code"}),"Isolating problematic Cgo code")))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/golang/go/issues/18296"}),"golang/go#18296")," - runtime: dlopen/dlsym without CGo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://gist.github.com/zchee/b9c99695463d8902cd33"}),"\u7c7b\u578b\u8f6c\u6362")))),(0,a.kt)("li",{parentName:"ul"},"C -> CGO",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://pkg.go.dev/modernc.org/ccgo/v3"}),"modernc.org/ccgo/v3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://pkg.go.dev/modernc.org/libc"}),"modernc.org/libc")),(0,a.kt)("li",{parentName:"ul"},"\u6848\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://pkg.go.dev/modernc.org/sqlite"}),"modernc.org/sqlite")),(0,a.kt)("li",{parentName:"ul"},"PCRE2 ",(0,a.kt)("a",m({parentName:"li"},{href:"https://pkg.go.dev/go.arsenm.dev/pcre"}),"go.arsenm.dev/pcre")),(0,a.kt)("li",{parentName:"ul"},"uber/h3 ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/akhenakh/goh3"}),"akhenakh/goh3"))))))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d Go \u7684\u540d\u5b57\u548c C \u91cc\u7684\u540d\u5b57\u51b2\u7a81\uff0c\u5426\u5219\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"C.<name>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5982\u679c Go \u91cc\u6709 MyStruct\uff0c\u5219\u65e0\u6cd5\u4f7f\u7528 C.MyStruct"))))),(0,a.kt)("admonition",m({},{title:"\u907f\u514d\u4f7f\u7528 CGO",type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"CGO_ENABLED=0 \u7981\u7528 CGO"),(0,a.kt)("li",{parentName:"ul"},"CGO \u4f9d\u8d56\u7cfb\u7edf"),(0,a.kt)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0\u7f16\u8bd1\u590d\u6742"),(0,a.kt)("li",{parentName:"ul"},"\u65e0 CGO \u65b9\u4fbf\u6784\u5efa -static binary"),(0,a.kt)("li",{parentName:"ul"},"\u65b9\u6848",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u627e\u66ff\u4ee3\u5e93"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u5230 cgo \u7684\u4f5c\u4e3a\u5916\u90e8\u8fdb\u7a0b\u901a\u8fc7 io \u4ea4\u4e92 - \u51cf\u5c11 cgo \u8303\u56f4"),(0,a.kt)("li",{parentName:"ul"},"dlopen"),(0,a.kt)("li",{parentName:"ul"},"exec"))),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u7528\u7684 CGO \u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sqlite"))))),(0,a.kt)("h2",m({},{id:"\u7c7b\u578b\u8f6c\u6362"}),"\u7c7b\u578b\u8f6c\u6362"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://pkg.go.dev/cmd/cgo"}),"https://pkg.go.dev/cmd/cgo"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Go")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-go"}),"type InteropFunctions interface {\n    // CString malloc - \u8c03\u7528\u8005 C.free\n    CString(s string) *C.char\n    // CBytes malloc - \u8c03\u7528\u8005 C.free\n    CBytes([]byte) unsafe.Pointer\n    GoString(*C.char) string\n    GoStringN(*C.char, C.int) string\n    GoBytes(unsafe.Pointer, C.int) []byte\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C.malloc \u4e0d\u56de\u76f4\u63a5\u8c03\u7528 C \u7684 malloc"),(0,a.kt)("li",{parentName:"ul"},"C.malloc \u786e\u4fdd\u4e0d\u4f1a\u8fd4\u56de NULL - \u5982\u679c\u7533\u8bf7\u5931\u8d25\u5219\u76f4\u63a5 crash")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-go"}),"func GetString(in *C.char, l C.int) *C.char {\n    input := C.GoBytes(unsafe.Pointer(in), C.int(l))\n  // \u4f7f\u7528\u8005\u9700\u8981 free \u8fd4\u56de\u7684\u6307\u9488\n    return C.CString(string(input))\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-go"}),'// #include <stdio.h>\n// #include <errno.h>\n// #cgo CFLAGS: -DPNG_DEBUG=1\n// #cgo amd64 386 CFLAGS: -DX86=1\n// #cgo LDFLAGS: -lpng\n// #include <png.h>\n// #cgo pkg-config: png cairo\n// #cgo LDFLAGS: -L${SRCDIR}/libs -lfoo\nimport "C"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-c",metastring:'title="C \u6ce8\u91ca\u4e2d\u53ef\u7528\u7684\u7279\u6b8a\u51fd\u6570"',title:'"C','\u6ce8\u91ca\u4e2d\u53ef\u7528\u7684\u7279\u6b8a\u51fd\u6570"':!0}),"size_t _GoStringLen(_GoString_ s);\nconst char *_GoStringPtr(_GoString_ s);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SRCDIR -> x.go \u7684\u4f4d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"C")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-c"}),"typedef void *GoMap;\ntypedef void *GoChan;\ntypedef struct { void *t; void *v; } GoInterface;\ntypedef struct { void *data; GoInt len; GoInt cap; } GoSlice;\n\ntypedef struct { const char *p; ptrdiff_t n; } _GoString_;\ntypedef _GoString_ GoString;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GODEBUG=cgocheck=1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"0 - \u4e0d\u68c0\u67e5"),(0,a.kt)("li",{parentName:"ul"},"2 - \u66f4\u4e25\u683c\u7684\u68c0\u67e5"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://pkg.go.dev/runtime/cgo"}),"runtime/cgo"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b89\u5168\u4f20\u9012 Go \u5185\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"interface{} -> cgo.Handle - uintptr - C.uintptr_t")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"go tool cgo\n")),(0,a.kt)("h2",m({},{id:"dlopen"}),"dlopen"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b so symbol\n# \u6ca1\u6709\u5730\u5740\u7684 symbol \u662f\u52a8\u6001\u7684\nnm -gDC /usr/lib/libsqlite3.so\nobjdump -TC libz.so\nreadelf -Ws libz.so\n# \u53ea\u770b symbol\nreadelf -Ws /usr/lib/libsqlite3.so | awk '{print $8}'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-go"}),'// +build !cgo\n\npackage dlopen\n\n// we have to use the 3 argument format here :( - 2 argument format is only allowed from inside cgo\n\n//go:cgo_import_dynamic libc_dlopen_x dlopen "libdl.so.2"\n//go:cgo_import_dynamic libc_dlclose_x dlclose "libdl.so.2"\n//go:cgo_import_dynamic libc_dlsym_x dlsym "libdl.so.2"\n//go:cgo_import_dynamic libc_dlerror_x dlerror "libdl.so.2"\n\n// on amd64 we don\'t need the following line - on 386 we do...\n// anyway - with those lines the output is better (but doesn\'t matter) - without it on amd64 we get multiple DT_NEEDED with "libc.so.6" etc\n\n//go:cgo_import_dynamic _ _ "libdl.so.2"\n')),(0,a.kt)("h2",m({},{id:"sqlite"}),"sqlite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://gitlab.com/cznic/sqlite"}),"cznic/sqlite"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CGo-free port of SQLite/SQLite3 v3.37.0"),(0,a.kt)("li",{parentName:"ul"},"C to Go"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/glebarez/go-sqlite"}),"glebarez/go-sqlite"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"driver"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/mattn/go-sqlite3"}),"mattn/go-sqlite3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-tags libsqlite3")," \u53ef link libsqlite3.so"))),(0,a.kt)("li",{parentName:"ul"},"No CGO",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/iamacarpet/go-sqlite3-win64"}),"iamacarpet/go-sqlite3-win64"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sqlite3.dll wrapper"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/cvilsmeier/sqinn-go"}),"cvilsmeier/sqinn-go"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e sqlite \u547d\u4ee4\u884c\u8fdb\u884c IO \u64cd\u4f5c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/zombiezen/go-sqlite"}),"zombiezen/go-sqlite"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6267\u884c SQL"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u63d0\u4f9b database/sql driver"),(0,a.kt)("li",{parentName:"ul"},"fork crawshaw/sqlite"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/crawshaw/sqlite"}),"crawshaw/sqlite"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"low-level Go interface to SQLite 3"),(0,a.kt)("li",{parentName:"ul"},"[Go and SQLite: when database/sql chafes]","(",(0,a.kt)("a",m({parentName:"li"},{href:"https://crawshaw.io/blog/go-and-sqlite"}),"https://crawshaw.io/blog/go-and-sqlite")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/alicebob/sqlittle"}),"alicebob/sqlittle"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8bfb\u53d6\u6587\u4ef6 - \u4e0d\u652f\u6301 SQL"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8bfb"),(0,a.kt)("li",{parentName:"ul"},"incompatible database version",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8981\u6c42 journal mode"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 WAL"),(0,a.kt)("li",{parentName:"ul"},"schema format > 1"),(0,a.kt)("li",{parentName:"ul"},"UTF8 encoding")))))))),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"\u67e5\u627e\u7528\u5230\u4e86-cgo-\u7684\u6a21\u5757"}),"\u67e5\u627e\u7528\u5230\u4e86 cgo \u7684\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'go list -f "{{if .CgoFiles}}{{.ImportPath}}{{end}}" $(go list -f "{{.ImportPath}}{{range .Deps}} {{.}}{{end}}" ./...)\n')),(0,a.kt)("h2",m({},{id:"zig-cgo-cross-compile"}),"zig cgo cross compile"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# Go 1.18+\nCGO_ENABLED=1 GOOS=linux GOARCH=amd64 CC="zig cc -target x86_64-linux" CXX="zig c++ -target x86_64-linux" go build --tags extended\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"amd64 -> x86_64"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://dev.to/kristoff/zig-makes-go-cross-compilation-just-work-29ho"}),"Zig Makes Go Cross Compilation Just Work"))))}f.isMDXComponent=!0}}]);