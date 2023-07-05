"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52309],{49613:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return N}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=m(a),N=r,j=s["".concat(o,".").concat(N)]||s[N]||u[N]||l;return a?n.createElement(j,p(p({ref:t},k),{},{components:a})):n.createElement(j,p({ref:t},k))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},11886:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return N},default:function(){return f},frontMatter:function(){return s},metadata:function(){return j},toc:function(){return h}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&k(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&k(e,a,t[a]);return e};const s={title:"Java 9"},N="Java 9",j={unversionedId:"java/version/java-9",id:"java/version/java-9",title:"Java 9",description:"\u7279\u6027",source:"@site/../notes/java/version/java-9.md",sourceDirName:"java/version",slug:"/java/version/java-9",permalink:"/notes/java/version/java-9",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/version/java-9.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"Java 9"},sidebar:"docs",previous:{title:"Java 8",permalink:"/notes/java/version/java-8"},next:{title:"\u8bed\u8a00",permalink:"/notes/languages/"}},d={},h=[{value:"\u7279\u6027",id:"feature",level:2},{value:"\u53c2\u8003",id:"reference",level:2},{value:"Contents",id:"contents",level:2},{value:"JEPs",id:"jeps",level:2}],c={toc:h};function f(e){var t,a=e,{components:r}=a,k=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},c),k),l(t,p({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"java-9"}),"Java 9"),(0,n.kt)("h2",u({},{id:"feature"}),"\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u4efb\u4f55\u8bed\u8a00\u4e0a\u7684\u4fee\u6539"),(0,n.kt)("li",{parentName:"ul"},"Flow",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bf9 CompletableFuture \u7684\u6269\u5c55"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 ReactiveStream"))),(0,n.kt)("li",{parentName:"ul"},"G1 \u4e3a\u9ed8\u8ba4 GC"),(0,n.kt)("li",{parentName:"ul"},"Jigsaws - module",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://wildfly.org/news/2016/12/12/Jigsaws-Missing-Pieces/"}),"Jigsaws Missing Pieces"))))),(0,n.kt)("h2",u({},{id:"reference"}),"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/projects/jdk9/"}),"JDK 9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.slideshare.net/SimonRitter/55-new-features-in-jdk-9"}),"55 New Features in JDK 9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/9/deploy/self-contained-application-packaging.htm#JSDPG583"}),"Self-Contained Application Packaging")),(0,n.kt)("li",{parentName:"ul"},"FAQ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/44732915"}),"\u4e3a\u4ec0\u4e48 Java9 \u65b0\u589e jmod"))))),(0,n.kt)("h2",u({},{id:"contents"}),"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://jcp.org/en/jsr/detail?id=379"}),"JSR 379: JavaTM SE 9 Release Contents")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/projects/jdk9/"}),"Java9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://www.java9countdown.xyz/"}),"Countdown to Java 9 Release Date"))),(0,n.kt)("h2",u({},{id:"jeps"}),"JEPs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"102: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/102"}),"Process API Updates"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u5347\u4e0e\u7cfb\u7edf\u7684\u4e92\u64cd\u4f5c\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5f53\u524d\u8fdb\u7a0b\u7684 PID",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u524d\u4f1a\u6bd4\u8f83\u9ebb\u70e6,\u73b0\u5728\u53ea\u9700\u8981 ",(0,n.kt)("inlineCode",{parentName:"li"},"ProcessHandle.current().pid()")))),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u8fdb\u7a0b\u662f\u5426\u5b58\u6d3b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ProcessHandle.of(pid).map(v->v.isAlive())")))),(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8fdb\u7a0b\u76f8\u5173\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8fdb\u7a0b\u7236\u5b50\u5173\u7cfb"))),(0,n.kt)("li",{parentName:"ul"},"110: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/110"}),"HTTP 2 Client"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTTP 2.0 \u5ba2\u6237\u7aef"),(0,n.kt)("li",{parentName:"ul"},"WebSocket \u5ba2\u6237\u7aef"))),(0,n.kt)("li",{parentName:"ul"},"143: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/143"}),"Improve Contended Locking")),(0,n.kt)("li",{parentName:"ul"},"158: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/158"}),"Unified JVM Logging")),(0,n.kt)("li",{parentName:"ul"},"165: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/165"}),"Compiler Control")),(0,n.kt)("li",{parentName:"ul"},"193: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/193"}),"Variable Handles")),(0,n.kt)("li",{parentName:"ul"},"197: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/197"}),"Segmented Code Cache")),(0,n.kt)("li",{parentName:"ul"},"199: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/199"}),"Smart Java Compilation, Phase Two")),(0,n.kt)("li",{parentName:"ul"},"200: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/200"}),"The Modular JDK")),(0,n.kt)("li",{parentName:"ul"},"201: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/201"}),"Modular Source Code")),(0,n.kt)("li",{parentName:"ul"},"211: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/211"}),"Elide Deprecation Warnings on Import Statements")),(0,n.kt)("li",{parentName:"ul"},"212: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/212"}),"Resolve Lint and Doclint Warnings")),(0,n.kt)("li",{parentName:"ul"},"213: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/213"}),"Milling Project Coin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@SafeVarargs")," \u53ef\u4ee5\u7528\u5728\u79c1\u6709\u65b9\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u524d\u53ea\u80fd\u5728\u9759\u6001\u548c\u79c1\u6709\u65b9\u6cd5"))),(0,n.kt)("li",{parentName:"ul"},"\u5e26\u8d44\u6e90\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"try")," \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u53d8\u91cf\u800c\u4e0d\u9700\u8981\u8d4b\u503c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u524d\u5fc5\u987b ",(0,n.kt)("inlineCode",{parentName:"li"},'try(FileReader fileReader = new FileReader("input"))'),", \u73b0\u5728\u53ef\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"try(fileReader)")))),(0,n.kt)("li",{parentName:"ul"},"\u533f\u540d\u7c7b\u7684\u7c7b\u578b\u53c2\u6570\u5982\u679c\u53ef\u4ee5\u63a8\u65ad\u5219\u53ef\u4ee5\u7701\u7565",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Comparator<Person> comp = new Comparator<>() {}")))),(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u5212\u7ebf\u4e0d\u80fd\u4f5c\u4e3a\u6807\u8bc6\u7b26",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Java 8 \u4f1a\u544a\u8b66"),(0,n.kt)("li",{parentName:"ul"},"Java 9 \u4f1a\u7981\u6b62"))))),(0,n.kt)("li",{parentName:"ul"},"214: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/214"}),"Remove GC Combinations Deprecated in JDK 8")),(0,n.kt)("li",{parentName:"ul"},"215: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/215"}),"Tiered Attribution for javac")),(0,n.kt)("li",{parentName:"ul"},"216: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/216"}),"Process Import Statements Correctly")),(0,n.kt)("li",{parentName:"ul"},"217: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/217"}),"Annotations Pipeline 2.0")),(0,n.kt)("li",{parentName:"ul"},"219: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/219"}),"Datagram Transport Layer Security (DTLS)")),(0,n.kt)("li",{parentName:"ul"},"220: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/220"}),"Modular Run-Time Images")),(0,n.kt)("li",{parentName:"ul"},"221: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/221"}),"Simplified Doclet API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"com.sun.javadoc")," -> ",(0,n.kt)("a",u({parentName:"li"},{href:"http://download.java.net/java/jdk9/docs/jdk/api/javadoc/doclet/jdk/javadoc/doclet/package-summary.html"}),"jdk.javadoc.doclet")))),(0,n.kt)("li",{parentName:"ul"},"222: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/222"}),"jshell: The Java Shell (Read-Eval-Print Loop)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Java \u7684 REPL \u5de5\u5177"))),(0,n.kt)("li",{parentName:"ul"},"223: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/223"}),"New Version-String Scheme"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SemVer \u7684\u683c\u5f0f"))),(0,n.kt)("li",{parentName:"ul"},"224: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/224"}),"HTML5 Javadoc")),(0,n.kt)("li",{parentName:"ul"},"225: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/225"}),"Javadoc Search"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3a Javadoc \u63d0\u4f9b\u641c\u7d22\u529f\u80fd"))),(0,n.kt)("li",{parentName:"ul"},"226: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/226"}),"UTF-8 Property Files")),(0,n.kt)("li",{parentName:"ul"},"227: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/227"}),"Unicode 7.0")),(0,n.kt)("li",{parentName:"ul"},"228: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/228"}),"Add More Diagnostic Commands"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5bf9 HotSpot \u8fdb\u884c\u8bca\u65ad\u7684\u65b0\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"jcmd")," \u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"jcmd 1083 VM.stringtable")))),(0,n.kt)("li",{parentName:"ul"},"229: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/229"}),"Create PKCS12 Keystores by Default")),(0,n.kt)("li",{parentName:"ul"},"231: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/231"}),"Remove Launch-Time JRE Version Selection")),(0,n.kt)("li",{parentName:"ul"},"232: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/232"}),"Improve Secure Application Performance")),(0,n.kt)("li",{parentName:"ul"},"233: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/233"}),"Generate Run-Time Compiler Tests Automatically")),(0,n.kt)("li",{parentName:"ul"},"235: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/235"}),"Test Class-File Attributes Generated by javac")),(0,n.kt)("li",{parentName:"ul"},"236: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/236"}),"Parser API for Nashorn")),(0,n.kt)("li",{parentName:"ul"},"237: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/237"}),"Linux/AArch64 Port")),(0,n.kt)("li",{parentName:"ul"},"238: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/238"}),"Multi-Release JAR Files"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u4e00\u4e2a Jar \u4e2d\u5305\u542b\u9488\u5bf9\u591a\u4e2a\u7248\u672c\u7684\u5185\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728 MANIFEST.MF \u4e2d\u6dfb\u52a0 ",(0,n.kt)("a",u({parentName:"li"},{href:"http://download.java.net/java/jdk9/docs/api/java/util/jar/Attributes.Name.html#MULTI_RELEASE"}),"Multi-Release: true")),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6839\u636e\u7248\u672c\u4e0d\u540c\u4ece\u4e0d\u540c\u7684\u76ee\u5f55\u52a0\u8f7d\u66f4\u591a\u7684\u5185\u5bb9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"META-INF/versions/9"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"META-INF/versions/10")))))),(0,n.kt)("li",{parentName:"ul"},"240: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/240"}),"Remove the JVM TI hprof Agent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u79fb\u9664 hprof"),(0,n.kt)("li",{parentName:"ul"},"\u65e9\u671f\u4e3b\u8981\u7528\u4e8e\u5806\u8f6c\u50a8\u548c\u53d6\u5f97 CPU profile"),(0,n.kt)("li",{parentName:"ul"},"\u73b0\u5728\u5806\u8f6c\u50a8\u53ef\u4ee5\u4f7f\u7528 jmap, \u800c profile \u53ef\u4ee5\u4f7f\u7528 visualvm \u7b49\u5de5\u5177"))),(0,n.kt)("li",{parentName:"ul"},"241: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/241"}),"Remove the jhat Tool"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u79fb\u9664 jhat"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u5806\u72b6\u6001"))),(0,n.kt)("li",{parentName:"ul"},"243: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/243"}),"Java-Level JVM Compiler Interface")),(0,n.kt)("li",{parentName:"ul"},"244: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/244"}),"TLS Application-Layer Protocol Negotiation Extension")),(0,n.kt)("li",{parentName:"ul"},"245: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/245"}),"Validate JVM Command-Line Flag Arguments")),(0,n.kt)("li",{parentName:"ul"},"246: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/246"}),"Leverage CPU Instructions for GHASH and RSA")),(0,n.kt)("li",{parentName:"ul"},"247: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/247"}),"Compile for Older Platform Versions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e9\u671f\u7f16\u8bd1\u65f6\u4f7f\u7528 source \u548c target \u6765\u63a7\u5236, \u73b0\u5728\u53ef\u4ee5\u7edf\u4e00\u4f7f\u7528 release \u6765\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--release")," \u7b49\u540c\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"-source N -target N -bootclasspath <bootclasspath-from-N>")),(0,n.kt)("li",{parentName:"ul"},"Java 9 \u53ef\u4ee5\u9488\u5bf9\u65e9\u671f\u7248\u672c\u7684\u7b7e\u540d\u505a\u4e00\u4e9b\u5904\u7406 ",(0,n.kt)("inlineCode",{parentName:"li"},"$JDK_HOME/lib/ct.sym")))),(0,n.kt)("li",{parentName:"ul"},"248: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/248"}),"Make G1 the Default Garbage Collector"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GC \u9ed8\u8ba4\u4f7f\u7528 G1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://www.oracle.com/technetwork/tutorials/tutorials-1876574.html"}),"Getting Started with the G1 Garbage Collector")))),(0,n.kt)("li",{parentName:"ul"},"249: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/249"}),"OCSP Stapling for TLS")),(0,n.kt)("li",{parentName:"ul"},"250: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/250"}),"Store Interned Strings in CDS Archives")),(0,n.kt)("li",{parentName:"ul"},"251: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/251"}),"Multi-Resolution Images"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u5206\u8fa8\u7387\u56fe\u7247 ",(0,n.kt)("a",u({parentName:"li"},{href:"http://download.java.net/java/jdk9/docs/api/java/awt/image/MultiResolutionImage.html"}),"MultiResolutionImage")))),(0,n.kt)("li",{parentName:"ul"},"252: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/252"}),"Use CLDR Locale Data by Default")),(0,n.kt)("li",{parentName:"ul"},"253: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/253"}),"Prepare JavaFX UI Controls & CSS APIs for Modularization")),(0,n.kt)("li",{parentName:"ul"},"254: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/254"}),"Compact Strings"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u538b\u7f29\u7684\u5b57\u7b26\u4e32\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"JVM \u7684\u5185\u90e8\u4f18\u5316, \u4e3b\u8981\u8003\u8651\u662f\u5927\u90e8\u5206\u5b57\u7b26\u90fd\u4e0d\u9700\u8981\u4e24\u4e2a\u5b57\u8282, \u5185\u90e8\u4f7f\u7528 byte \u6570\u7ec4, \u4f7f\u7528\u7f16\u7801\u8fdb\u884c\u63a7\u5236."),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4e00\u4e2a\u989d\u5916\u7684\u5b57\u8282\u6765\u6807\u8bc6\u7f16\u7801, \u6700\u591a\u4f7f\u7528 1 byte \u7684\u5b57\u7b26\u4e32\u4f7f\u7528 Latin-1, \u5176\u4ed6\u7684\u4f7f\u7528 UTF16"))),(0,n.kt)("li",{parentName:"ul"},"255: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/255"}),"Merge Selected Xerces 2.11.0 Updates into JAXP")),(0,n.kt)("li",{parentName:"ul"},"256: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/256"}),"BeanInfo Annotations")),(0,n.kt)("li",{parentName:"ul"},"257: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/257"}),"Update JavaFX/Media to Newer Version of GStreamer")),(0,n.kt)("li",{parentName:"ul"},"258: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/258"}),"HarfBuzz Font-Layout Engine")),(0,n.kt)("li",{parentName:"ul"},"259: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/259"}),"Stack-Walking API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e9\u671f\u9700\u8981\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"sun.reflect.Reflection::getCallerClass")),(0,n.kt)("li",{parentName:"ul"},"\u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u904d\u5386\u8c03\u7528\u6808 ",(0,n.kt)("inlineCode",{parentName:"li"},"StackWalker.getInstance().walk((s) -> s.collect(Collectors.toList()))")))),(0,n.kt)("li",{parentName:"ul"},"260: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/260"}),"Encapsulate Most Internal APIs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c06\u5927\u90e8\u5206 Java \u5185\u90e8\u63a5\u53e3(sun., com.sun.)\u5c01\u88c5\u5728\u5185\u90e8\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u9488\u5bf9\u5e38\u7528\u7684\u5185\u90e8\u63a5\u53e3\u4e5f\u505a\u4e86\u66b4\u9732,\u4e0d\u8fc7\u5df2\u6807\u8bc6\u4e3a\u5f03\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sun.misc.{Signal,SignalHandler}"),(0,n.kt)("li",{parentName:"ul"},"sun.misc.Unsafe"),(0,n.kt)("li",{parentName:"ul"},"sun.reflect.Reflection::getCallerClass"),(0,n.kt)("li",{parentName:"ul"},"sun.reflect.ReflectionFactory.newConstructorForSerialization"))))),(0,n.kt)("li",{parentName:"ul"},"261: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/261"}),"Module System")),(0,n.kt)("li",{parentName:"ul"},"262: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/262"}),"TIFF Image I/O")),(0,n.kt)("li",{parentName:"ul"},"263: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/263"}),"HiDPI Graphics on Windows and Linux")),(0,n.kt)("li",{parentName:"ul"},"264: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/264"}),"Platform Logging API and Service")),(0,n.kt)("li",{parentName:"ul"},"265: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/265"}),"Marlin Graphics Renderer")),(0,n.kt)("li",{parentName:"ul"},"266: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/266"}),"More Concurrency Updates"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ReactiveStream \u5b9e\u73b0\u63a5\u53e3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://download.java.net/java/jdk9/docs/api/java/util/concurrent/Flow.html"}),"Flow"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Flow.Publisher"),(0,n.kt)("li",{parentName:"ul"},"Flow.Subscriber"),(0,n.kt)("li",{parentName:"ul"},"Flow.Subscription"),(0,n.kt)("li",{parentName:"ul"},"Flow.Processor"))))))),(0,n.kt)("li",{parentName:"ul"},"267: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/267"}),"Unicode 8.0")),(0,n.kt)("li",{parentName:"ul"},"268: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/268"}),"XML Catalogs")),(0,n.kt)("li",{parentName:"ul"},"269: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/269"}),"Convenience Factory Methods for Collections"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728 List, Set, Map \u4e0a\u6dfb\u52a0\u7528\u4e8e\u521b\u5efa\u4e0d\u53ef\u53d8\u96c6\u5408\u7684\u8f85\u52a9\u7c7b\u5de5\u5382\u65b9\u6cd5 ",(0,n.kt)("inlineCode",{parentName:"li"},"of")),(0,n.kt)("li",{parentName:"ul"},"Stream \u589e\u5f3a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Stream<T> takeWhile(Predicate<? super T> predicate)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Stream<T> dropWhile(Predicate<? super T> predicate)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Stream<T> iterate(T seed, Predicate<? super T> hasNext, UnaryOperator<T> next)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Stream<T> ofNullable(T t)")))),(0,n.kt)("li",{parentName:"ul"},"Optional \u589e\u5f3a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void ifPresentOrElse(Consumer<? super T> action, Runnable emptyAction)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Optional<T> or(Supplier<? extends Optional<? extends T>> supplier)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Stream<T> stream()")))))),(0,n.kt)("li",{parentName:"ul"},"270: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/270"}),"Reserved Stack Areas for Critical Sections")),(0,n.kt)("li",{parentName:"ul"},"271: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/271"}),"Unified GC Logging")),(0,n.kt)("li",{parentName:"ul"},"272: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/272"}),"Platform-Specific Desktop Features")),(0,n.kt)("li",{parentName:"ul"},"273: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/273"}),"DRBG-Based SecureRandom Implementations")),(0,n.kt)("li",{parentName:"ul"},"274: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/274"}),"Enhanced Method Handles")),(0,n.kt)("li",{parentName:"ul"},"275: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/275"}),"Modular Java Application Packaging")),(0,n.kt)("li",{parentName:"ul"},"276: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/276"}),"Dynamic Linking of Language-Defined Object Models")),(0,n.kt)("li",{parentName:"ul"},"277: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/277"}),"Enhanced Deprecation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@Deprecated")," \u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"li"},"forRemoval")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"since")," \u5c5e\u6027"))),(0,n.kt)("li",{parentName:"ul"},"278: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/278"}),"Additional Tests for Humongous Objects in G1")),(0,n.kt)("li",{parentName:"ul"},"279: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/279"}),"Improve Test-Failure Troubleshooting")),(0,n.kt)("li",{parentName:"ul"},"280: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/280"}),"Indify String Concatenation")),(0,n.kt)("li",{parentName:"ul"},"281: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/281"}),"HotSpot C++ Unit-Test Framework")),(0,n.kt)("li",{parentName:"ul"},"282: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/282"}),"jlink: The Java Linker")),(0,n.kt)("li",{parentName:"ul"},"283: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/283"}),"Enable GTK 3 on Linux")),(0,n.kt)("li",{parentName:"ul"},"284: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/284"}),"New HotSpot Build System")),(0,n.kt)("li",{parentName:"ul"},"285: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/285"}),"Spin-Wait Hints"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"java.lang.Thread.onSpinWait()")," \u7528\u4e8e\u63d0\u793a JVM \u8fdb\u884c\u4f18\u5316"))),(0,n.kt)("li",{parentName:"ul"},"287: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/287"}),"SHA-3 Hash Algorithms")),(0,n.kt)("li",{parentName:"ul"},"288: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/288"}),"Disable SHA-1 Certificates")),(0,n.kt)("li",{parentName:"ul"},"289: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/289"}),"Deprecate the Applet API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e9f\u5f03\u6240\u6709 Applet \u76f8\u5173\u63a5\u53e3, \u4f46\u6682\u672a\u8003\u8651\u79fb\u9664"))),(0,n.kt)("li",{parentName:"ul"},"290: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/290"}),"Filter Incoming Serialization Data")),(0,n.kt)("li",{parentName:"ul"},"292: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/292"}),"Implement Selected ECMAScript 6 Features in Nashorn")),(0,n.kt)("li",{parentName:"ul"},"294: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/294"}),"Linux/s390x Port")),(0,n.kt)("li",{parentName:"ul"},"295: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/295"}),"Ahead-of-Time Compilation")),(0,n.kt)("li",{parentName:"ul"},"297: ",(0,n.kt)("a",u({parentName:"li"},{href:"http://openjdk.java.net/jeps/297"}),"Unified arm32/arm64 Port"))))}f.isMDXComponent=!0}}]);