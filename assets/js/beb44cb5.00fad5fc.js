"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33300],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=a(r),p=o,b=m["".concat(s,".").concat(p)]||m[p]||l[p]||i;return r?n.createElement(b,c(c({ref:t},d),{},{components:r})):n.createElement(b,c({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var a=2;a<i;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87244:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))a.call(t,r)&&d(e,r,t[r]);return e};const m={title:"Linux GSM"},p="Linux GSM",b={unversionedId:"service/telecom/mobile/linux-gsm",id:"service/telecom/mobile/linux-gsm",title:"Linux GSM",description:"Huawei GSM Modem",source:"@site/../notes/service/telecom/mobile/linux-gsm.md",sourceDirName:"service/telecom/mobile",slug:"/service/telecom/mobile/linux-gsm",permalink:"/notes/service/telecom/mobile/linux-gsm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/telecom/mobile/linux-gsm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627207978,formattedLastUpdatedAt:"Jul 25, 2021",frontMatter:{title:"Linux GSM"},sidebar:"docs",previous:{title:"AT \u6307\u4ee4",permalink:"/notes/service/telecom/mobile/at"},next:{title:"QMI",permalink:"/notes/service/telecom/mobile/qmi"}},f={},v=[{value:"Huawei GSM Modem",id:"huawei-gsm-modem",level:2},{value:"EC20 Dongle",id:"ec20-dongle",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 usb-modeswitch",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-usb-modeswitch",level:2}],w={toc:v};function g(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&a.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=l(l({},w),d),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",l({},{id:"linux-gsm"}),"Linux GSM"),(0,n.kt)("h2",l({},{id:"huawei-gsm-modem"}),"Huawei GSM Modem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Huawei Technologies Co., Ltd. E161/E169/E620/E800 HSDPA Modem")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"usb 2-4.1: new full-speed USB device number 5 using xhci_hcd\nusb 2-4.1: New USB device found, idVendor=12d1, idProduct=1001, bcdDevice= 0.00\nusb 2-4.1: New USB device strings: Mfr=1, Product=2, SerialNumber=1\nusb 2-4.1: Product: HUAWEI Mobile\nusb 2-4.1: Manufacturer: \xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\nusb 2-4.1: SerialNumber: \xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\nusb-storage 2-4.1:1.0: USB Mass Storage device detected\nusb-storage 2-4.1:1.1: USB Mass Storage device detected\nusb-storage 2-4.1:1.2: USB Mass Storage device detected\nusbcore: registered new interface driver usbserial_generic\nusbserial: USB Serial support registered for generic\nusbcore: registered new interface driver option\nusbserial: USB Serial support registered for GSM modem (1-port)\noption 2-4.1:1.0: GSM modem (1-port) converter detected\nusb 2-4.1: GSM modem (1-port) converter now attached to ttyUSB0\noption 2-4.1:1.1: GSM modem (1-port) converter detected\nusb 2-4.1: GSM modem (1-port) converter now attached to ttyUSB1\noption 2-4.1:1.2: GSM modem (1-port) converter detected\nusb 2-4.1: GSM modem (1-port) converter now attached to ttyUSB2\n")),(0,n.kt)("h2",l({},{id:"ec20-dongle"}),"EC20 Dongle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quectel Wireless Solutions Co., Ltd. EC25 LTE modem")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"usb 1-12: new high-speed USB device number 3 using xhci_hcd\nusb 1-12: New USB device found, idVendor=2c7c, idProduct=0125, bcdDevice= 3.18\nusb 1-12: New USB device strings: Mfr=1, Product=2, SerialNumber=0\nusb 1-12: Product: Android\nusb 1-12: Manufacturer: Android\nusbcore: registered new interface driver usbserial_generic\nusbserial: USB Serial support registered for generic\nusbcore: registered new interface driver option\nusbserial: USB Serial support registered for GSM modem (1-port)\noption 1-12:1.0: GSM modem (1-port) converter detected\nusb 1-12: GSM modem (1-port) converter now attached to ttyUSB0\noption 1-12:1.1: GSM modem (1-port) converter detected\nusb 1-12: GSM modem (1-port) converter now attached to ttyUSB1\noption 1-12:1.2: GSM modem (1-port) converter detected\nusb 1-12: GSM modem (1-port) converter now attached to ttyUSB2\noption 1-12:1.3: GSM modem (1-port) converter detected\nusb 1-12: GSM modem (1-port) converter now attached to ttyUSB3\nusbcore: registered new interface driver cdc_wdm\nqmi_wwan 1-12:1.4: cdc-wdm0: USB WDM device\nqmi_wwan 1-12:1.4 wwan0: register 'qmi_wwan' at usb-0000:00:14.0-12, WWAN/QMI device, 1a:b5:99:71:81:5e\nusbcore: registered new interface driver qmi_wwan\n")),(0,n.kt)("h1",l({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",l({},{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-usb-modeswitch"}),"\u4e3a\u4ec0\u4e48\u9700\u8981 usb-modeswitch"),(0,n.kt)("p",null,"GSM Modem \u4e00\u822c\u6709 ZeroCD/\u514d\u9a71 \u6a21\u5f0f, \u6240\u4ee5\u4f1a\u5148\u6302\u8f7d\u4e3a USB \u5b58\u50a8, \u9700\u8981\u4f7f\u7528 usb-modeswitch \u6765\u5207\u6362\u4e3a modem \u6a21\u5f0f, lsusb \u5982\u679c\u51fa\u73b0\u7684\u662f modem \u90a3\u4e48\u5c31\u6ca1\u95ee\u9898\u3002"))}g.isMDXComponent=!0}}]);