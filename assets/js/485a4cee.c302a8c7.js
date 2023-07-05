"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65397],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={title:"Jetty Guice"},f="Jetty Guice",m={unversionedId:"java/lib/jetty-guice",id:"java/lib/jetty-guice",title:"Jetty Guice",description:"- \u5982\u679c\u60f3\u8981\u76f4\u63a5\u4f7f\u7528 servlet\uff0c\u53c8\u4e0d\u60f3\u4f7f\u7528\u5bb9\u5668\uff0c\u90a3\u4e48\u4f7f\u7528\u5d4c\u5165\u7684 jetty-servlet \u53ef\u80fd\u662f\u6700\u597d\u7684\u9009\u62e9\u3002",source:"@site/../notes/java/lib/jetty-guice.md",sourceDirName:"java/lib",slug:"/java/lib/jetty-guice",permalink:"/notes/java/lib/jetty-guice",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/lib/jetty-guice.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678678348,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Jetty Guice"},sidebar:"docs",previous:{title:"JavaPoet",permalink:"/notes/java/lib/javapoet"},next:{title:"JMH",permalink:"/notes/java/lib/jmh"}},v={},g=[],b={toc:g};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"jetty-guice"}),"Jetty Guice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981\u76f4\u63a5\u4f7f\u7528 servlet\uff0c\u53c8\u4e0d\u60f3\u4f7f\u7528\u5bb9\u5668\uff0c\u90a3\u4e48\u4f7f\u7528\u5d4c\u5165\u7684 jetty-servlet \u53ef\u80fd\u662f\u6700\u597d\u7684\u9009\u62e9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u65e2\u7136\u9009\u62e9\u8f7b\u4fbf\uff0c\u90a3\u4e48 Spring \u662f\u9700\u8981\u907f\u514d\u7684\uff0c\u53ef\u4ee5\u8003\u8651 Guice \u7684 ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/google/guice/wiki/ServletModule"}),"ServletModule"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"web.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="ISO-8859-1"?>\n<web-app\n  xmlns="http://xmlns.jcp.org/xml/ns/javaee"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"\n  metadata-complete="false"\n  version="3.1">\n  \x3c!-- \u521d\u59cb\u5316 ServletModule --\x3e\n  <listener>\n    <listener-class>trials.web.MyGuiceServletConfig</listener-class>\n  </listener>\n\n  \x3c!-- \u5168\u5c40\u62e6\u622a\u5668 --\x3e\n  <filter>\n    <filter-name>guiceFilter</filter-name>\n    <filter-class>com.google.inject.servlet.GuiceFilter</filter-class>\n  </filter>\n  <filter-mapping>\n    <filter-name>guiceFilter</filter-name>\n    <url-pattern>/*</url-pattern>\n  </filter-mapping>\n</web-app>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MyGuiceServletConfig.java")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'public class MyGuiceServletConfig extends GuiceServletContextListener {\n  @Override\n  protected Injector getInjector() {\n    return Guice.createInjector(new MyServletModule());\n  }\n\n  public static class MyServletModule extends ServletModule {\n    @Override\n    protected void configureServlets() {\n      // \u914d\u7f6e servlet \u548c filter\n      serve("/my/*").with(MyServlet.class);\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"App.java")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'public class App {\n  public static void main(String[] args) throws Exception {\n    WebAppContext webAppContext = new WebAppContext();\n    webAppContext.setContextPath("/");\n    // \u4f7f\u7528 resources/webapp\n    URL webAppDir = Thread.currentThread().getContextClassLoader().getResource("webapp");\n    webAppContext.setResourceBase(webAppDir.toURI().toString());\n\n    Server server = new Server(8080);\n    server.setHandler(webAppContext);\n    server.start();\n    server.join();\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"pom.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-xml"}),"<dependencies>\n  \x3c!-- jetty webapp \u652f\u6301 web.xml --\x3e\n  \x3c!-- \u5982\u679c\u4e0d\u60f3\u4f7f\u7528 web.xml \u4e5f\u53ef\u4ee5\u4f7f\u7528\u7f16\u7801\u4ee3\u66ff\uff1a\u66f4\u9002\u7528\u4e8e\u53ea\u6709\u4ee3\u7801\u7684\u573a\u666f --\x3e\n  <dependency>\n    <groupId>org.eclipse.jetty</groupId>\n    <artifactId>jetty-webapp</artifactId>\n    <version>9.4.20.v20190813</version>\n  </dependency>\n\n  <dependency>\n    <groupId>com.google.inject.extensions</groupId>\n    <artifactId>guice-servlet</artifactId>\n    <version>4.2.2</version>\n  </dependency>\n  <dependency>\n    <groupId>com.google.inject</groupId>\n    <artifactId>guice</artifactId>\n    <version>4.2.2</version>\n  </dependency>\n</dependencies>\n")))}y.isMDXComponent=!0}}]);