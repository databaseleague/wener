"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95306],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19079:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={title:"whisper"},f="whisper",g={unversionedId:"ai/whisper",id:"ai/whisper",title:"whisper",description:"- openai/whisper",source:"@site/../notes/ai/whisper.md",sourceDirName:"ai",slug:"/ai/whisper",permalink:"/notes/ai/whisper",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ai/whisper.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1681042995,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{title:"whisper"},sidebar:"docs",previous:{title:"stable-diffusion",permalink:"/notes/ai/stable-diffusion/awesome"},next:{title:"\u7b97\u6cd5",permalink:"/notes/algorithm/"}},h={},b=[],d={toc:b};function w(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},d),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"whisper"}),"whisper"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/openai/whisper"}),"openai/whisper"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://news.ycombinator.com/item?id=32927360"}),"HN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://openai.com/blog/whisper/"}),"https://openai.com/blog/whisper/")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/ggerganov/whisper.cpp"}),"ggerganov/whisper.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/m-bain/whisperX"}),"m-bain/whisperX"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake -j\n\n./models/download-ggml-model.sh base.en\n\n./main -f samples/jfk.wav -m models/ggml-base.en.bin -pc\n\n# \u56fd\u5185\u80fd\u76f4\u63a5\u4e0b\u8f7d \uff5e150K/s\n# \u4ee3\u7406\u80fd\u4e0a 5MB/s\n# tiny.en,tiny,base.en,base,small.en,small,medium.en,medium,large-v1,large\ncurl -LOC- https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin\ncurl -LOC- https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large.bin\n\n# samples\ncurl -Lo samples/hp0.ogg https://upload.wikimedia.org/wikipedia/en/d/d4/En.henryfphillips.ogg\nffmpeg -i samples/hp0.ogg -ac 1 -ar 16000 samples/hp0.wav\n\n./main -f samples/hp0.wav -pc -t $(nproc)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6a21\u578b\u8d8a\u5927\u8d8a\u51c6\u786e"),(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e CPU \u4e0d\u540c\uff0c\u53ef\u80fd\u4e00\u822c\u53ea\u80fd\u8dd1 base \u6216 small"),(0,n.kt)("li",{parentName:"ul"},"hf \u4e0b\u8f7d\u57df\u540d cdn-lfs.huggingface.co"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/ggerganov/whisper.cpp/tree/master/models"}),"https://github.com/ggerganov/whisper.cpp/tree/master/models"))))}w.isMDXComponent=!0}}]);