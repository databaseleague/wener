"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57274],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48409:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return N}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={title:"ESP32"},f="ESP32",d={unversionedId:"hardware/soc/esp32/README",id:"hardware/soc/esp32/README",title:"ESP32",description:"- 2016 \u5e74",source:"@site/../notes/hardware/soc/esp32/README.md",sourceDirName:"hardware/soc/esp32",slug:"/hardware/soc/esp32/",permalink:"/notes/hardware/soc/esp32/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/soc/esp32/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"ESP32"},sidebar:"docs",previous:{title:"ESP Awesome",permalink:"/notes/hardware/soc/esp-awesome"},next:{title:"ESP8266",permalink:"/notes/hardware/soc/esp8266/"}},k={},N=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"Dev",id:"dev",level:2}],h={toc:N};function w(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},h),s),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"esp32"}),"ESP32"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2016 \u5e74"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.espressif.com/en/news/ESP32_C3"}),"ESP32 C3"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RISC-V MCU, Wi-Fi, BLE 5"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.espressif.com.cn/en/news/ESP32-C5"}),"ESP32-C5"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dual-band Wi-Fi 6 - 802.11b/g/n/ax"),(0,n.kt)("li",{parentName:"ul"},"BLE")))))),(0,n.kt)("h2",c({},{id:"\u7279\u6027"}),"\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406\u5668",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CPU Xtensa dual-core (or single-core) 32-bit LX6 microprocessor, operating at 160 or 240 MHz and performing at up to 600 DMIPS"),(0,n.kt)("li",{parentName:"ul"},"Ultra low power (ULP) co-processor"))),(0,n.kt)("li",{parentName:"ul"},"520 KiB SRAM"),(0,n.kt)("li",{parentName:"ul"},"Wi-Fi 802.11 b/g/n"),(0,n.kt)("li",{parentName:"ul"},"Bluetooth v4.2 BR/EDR and BLE (shares the radio with Wi-Fi)"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u8bbe\u63a5\u53e3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"12-bit SAR ADC up to 18 channels"),(0,n.kt)("li",{parentName:"ul"},"2 \xd7 8-bit DACs"),(0,n.kt)("li",{parentName:"ul"},"10 \xd7 touch sensors (capacitive sensing GPIOs)"),(0,n.kt)("li",{parentName:"ul"},"4 \xd7 SPI"),(0,n.kt)("li",{parentName:"ul"},"2 \xd7 I\xb2S interfaces"),(0,n.kt)("li",{parentName:"ul"},"2 \xd7 I\xb2C interfaces"),(0,n.kt)("li",{parentName:"ul"},"3 \xd7 UART"),(0,n.kt)("li",{parentName:"ul"},"SD/SDIO/CE-ATA/MMC/eMMC host controller"),(0,n.kt)("li",{parentName:"ul"},"SDIO/SPI slave controller"),(0,n.kt)("li",{parentName:"ul"},"Ethernet MAC interface with dedicated DMA and IEEE 1588 Precision Time Protocol support"),(0,n.kt)("li",{parentName:"ul"},"CAN bus 2.0"),(0,n.kt)("li",{parentName:"ul"},"Infrared remote controller (TX/RX, up to 8 channels)"),(0,n.kt)("li",{parentName:"ul"},"Motor PWM"),(0,n.kt)("li",{parentName:"ul"},"LED PWM (up to 16 channels)"),(0,n.kt)("li",{parentName:"ul"},"Hall effect sensor"),(0,n.kt)("li",{parentName:"ul"},"Ultra low power analog pre-amplifier"))),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WiFi WFA, WPA/WPA2 and WAPI"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u542f\u52a8"),(0,n.kt)("li",{parentName:"ul"},"Flash encryption"),(0,n.kt)("li",{parentName:"ul"},"1024-bit OTP, up to 768-bit for customers"),(0,n.kt)("li",{parentName:"ul"},"Cryptographic hardware acceleration: AES, SHA-2, RSA, elliptic curve cryptography (ECC), random number generator (RNG)"))),(0,n.kt)("li",{parentName:"ul"},"\u7535\u6e90\u7ba1\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8\u4f4e\u538b\u5dee\u7a33\u538b\u5668(low-dropout regulator - LDO)"),(0,n.kt)("li",{parentName:"ul"},"Individual power domain for RTC"),(0,n.kt)("li",{parentName:"ul"},"5\u03bcA deep sleep current"),(0,n.kt)("li",{parentName:"ul"},"Wake up from GPIO interrupt, timer, ADC measurements, capacitive touch sensor interrupt")))),(0,n.kt)("h2",c({},{id:"dev"}),"Dev"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/"}),"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/")),(0,n.kt)("li",{parentName:"ul"},"Espressif IoT Development Framework"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://esp-idf-zh.readthedocs.io/zh_CN/latest/"}),"https://esp-idf-zh.readthedocs.io/zh_CN/latest/"))))}w.isMDXComponent=!0}}]);