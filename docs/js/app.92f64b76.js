(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"saveFavoriteList",function(){return P}),n.d(r,"deleteList",function(){return M}),n.d(r,"saveUsedList",function(){return Q}),n.d(r,"removeUsedList",function(){return U}),n.d(r,"removeFavoriteList",function(){return $});var s={};n.r(s),n.d(s,"favoriteList",function(){return J}),n.d(s,"usedList",function(){return R});n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e");function a(t,e,n,r,s,i,a,o){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):s&&(c=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}var o=a({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},[],!1,null,null,null).exports,c=n("8c4f"),u=(n("b54a"),n("7f7f"),n("386d"),n("8e6e"),n("ac6a"),n("456d"),n("85f2")),l=n.n(u);function d(t,e,n){return e in t?l()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("20d6");var f=n("b311"),h=n.n(f),p=n("2f62");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m={props:{navData:{default:[]},subTitle:{default:""},del:{default:!1},spinShow:{default:!1}},methods:A({jumpLink:function(t){t.title=this.subTitle?this.subTitle:t.title,this.saveUsedList(t),window.open(t.link)},copyLink:function(){var e=this,n=new h.a(".btn");n.on("success",function(t){e.$Message.success("复制成功"),n.destroy()}),n.on("error",function(t){e.$Message.error("该浏览器不支持自动复制"),n.destroy()})},addFavorite:function(e){0<=this.favoriteList.findIndex(function(t){return e.link===t.link})?this.$Message.info("你已经添加啦！"):(e.title=this.subTitle?this.subTitle:e.title,this.saveFavoriteList(e),this.$Message.success("添加成功"))},delUrl:function(t){this.deleteList(t)},addBookmarks:function(t,e){if(-1<navigator.userAgent.toLowerCase().indexOf("msie 8"))window.external.AddToFavoritesBar(t,e);else if(document.all||window.external)try{window.external.addFavorite(t,e)}catch(t){this.$Message.error("您的浏览器不支持,请手动收藏!")}else window.sidebar?window.sidebar.addPanel(e,t,""):this.$Message.error("您的浏览器不支持,请手动收藏!")}},Object(p.b)(["saveFavoriteList","saveUsedList","deleteList"])),computed:A({},Object(p.c)(["favoriteList"]))},w=(n("7574"),a(m,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("ul",{staticClass:"nav-ul"},n._l(n.navData,function(e,t){return r("li",{key:t,staticClass:"nav-li"},[r("Poptip",{attrs:{placement:"right",trigger:"hover",transfer:!0}},[r("div",{staticClass:"top"},[r("p",{staticStyle:{float:"left","margin-right":"5px"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.icon,expression:"item.icon"}],staticClass:"icon",attrs:{alt:""}})]),r("span",[n._v(n._s(e.name))]),0<e.num?r("span",{staticClass:"used"},[r("Icon",{attrs:{type:"ios-link"}}),n._v("次数："+n._s(e.num))],1):n._e()]),r("div",{staticClass:"desc"},[r("Tag",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"item.title"}],attrs:{type:"border",color:"green"}},[n._v(n._s(e.title))]),r("p",[r("span",[n._v(n._s(e.desc))])])],1),r("div",{staticClass:"mu",attrs:{slot:"content"},slot:"content"},[r("ButtonGroup",{attrs:{vertical:""}},[r("Button",{attrs:{icon:"ios-send"},on:{click:function(t){return n.jumpLink(e)}}},[n._v("跳转")]),r("Button",{attrs:{icon:"md-heart"},on:{click:function(t){return n.addFavorite(e)}}},[n._v("添加到我的收藏")]),r("Button",{staticClass:"btn",attrs:{icon:"ios-clipboard","data-clipboard-text":e.link},on:{click:n.copyLink}},[n._v("\n              拷贝网址")]),r("Button",{attrs:{icon:"ios-add-circle"},on:{click:function(t){return n.addBookmarks(e.link,e.name)}}},[n._v("加入书签")]),r("Button",{directives:[{name:"show",rawName:"v-show",value:n.del,expression:"del"}],attrs:{icon:"ios-trash"},on:{click:function(t){return n.delUrl(e)}}},[n._v("从本项中删除")])],1)],1)])],1)}),0),n.spinShow?r("Spin",{attrs:{size:"large",fix:""}}):n._e()],1)},[],!1,null,"95a4aa4c",null).exports);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={props:{data:{default:{}},spinShow:{default:!1}},methods:b({removeUsed:function(){this.removeUsedList(),this.$Message.success("清空成功")},removeFavorite:function(){this.removeFavoriteList(),this.$Message.success("清空成功")}},Object(p.b)(["removeUsedList","removeFavoriteList"])),computed:b({},Object(p.c)(["favoriteList","usedList"])),components:{Nav:w}},_=(n("c1aa"),{data:function(){return{isCollapsed:!1,search:"",searchStatus:!1,data:null,sourceData:"",serarchNum:0,spinShow:!1}},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},created:function(){this._getData()},methods:{_getData:function(){var e=this;this.spinShow=!0,this.$axios.get("/data/nav.json").then(function(t){e.data=t.data,e.spinShow=!1}).catch(function(t){e.$Message.error({content:"获取数据失败!",duration:120,closable:!0})})},jumpAnchor:function(t){document.documentElement.clientWidth<=768&&(this.isCollapsed=!0),document.querySelector("#"+t).scrollIntoView({behavior:"smooth",block:"start"})},searchData:function(){if(void 0===this.search||null===this.search||""===this.search)return this.$Message.error("输入内容呀！"),!0;for(var t in this.searchStatus?this.data=JSON.parse(JSON.stringify(this.sourceData)):this.sourceData=JSON.parse(JSON.stringify(this.data)),this.searchStatus=!0,this.serarchNum=0,this.data)for(var e=0;e<this.data[t].nav.length;e++)-1===this.data[t].nav[e].name.toLowerCase().indexOf(this.search.toLowerCase())&&-1===this.data[t].nav[e].link.toLowerCase().indexOf(this.search.toLowerCase())?this.data[t].nav.splice(e--,1):this.serarchNum++;0===this.serarchNum?this.$Message.error("没找到哦，请重试!"):this.$Message.success("查找到了"+this.serarchNum+"个相近的.")},resetSearch:function(){var t=this;this.spinShow=!0,this.searchStatus=!1,this.search="",this.serarchNum=0,this.data=JSON.parse(JSON.stringify(this.sourceData)),setTimeout(function(){t.spinShow=!1},1e3)}},components:{NavSub:a(y,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:n.favoriteList.length,expression:"favoriteList.length"}],attrs:{id:"我的收藏"}},[r("Card",{staticClass:"nodeCard"},[r("p",{staticClass:"anchor",attrs:{slot:"title"},slot:"title"},[n._v("我的收藏"),r("a",{attrs:{href:"#我的收藏"}},[n._v("#")])]),r("a",{attrs:{slot:"extra",href:"#"},on:{click:n.removeFavorite},slot:"extra"},[r("Icon",{attrs:{type:"ios-loop-strong"}}),n._v("\n                清空\n            ")],1),r("Nav",{attrs:{navData:n.favoriteList,del:!0,spinShow:n.spinShow}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:n.usedList.length,expression:"usedList.length"}],attrs:{id:"常用网址"}},[r("Card",{staticClass:"nodeCard"},[r("p",{staticClass:"anchor",attrs:{slot:"title"},slot:"title"},[n._v("常用网址"),r("a",{attrs:{href:"#常用网址"}},[n._v("#")])]),r("a",{attrs:{slot:"extra",href:"#"},on:{click:n.removeUsed},slot:"extra"},[r("Icon",{attrs:{type:"ios-loop-strong"}}),n._v("\n                清空\n            ")],1),r("Nav",{attrs:{navData:n.usedList,del:!0,spinShow:n.spinShow}})],1)],1),n._l(n.data,function(t,e){return r("div",{key:e,attrs:{id:t.title}},[r("Card",{staticClass:"nodeCard"},[r("p",{staticClass:"anchor",attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.title)),r("a",{attrs:{href:"#"+t.title}},[n._v("#")])]),r("p",{attrs:{slot:"extra"},slot:"extra"},[n._v("共计："+n._s(t.nav.length)+" 个项目")]),r("Nav",{attrs:{navData:t.nav,subTitle:t.title,spinShow:n.spinShow}})],1)],1)})],2)},[],!1,null,"38b8d6e9",null).exports}}),C=(n("f063"),a(_,function(){var n=this,t=n.$createElement,r=n._self._c||t;return n.data?r("div",{staticClass:"layout"},[r("Layout",[r("Sider",{attrs:{breakpoint:"md",collapsible:"","collapsed-width":78},model:{value:n.isCollapsed,callback:function(t){n.isCollapsed=t},expression:"isCollapsed"}},[r("div",{staticClass:"logo-con"},[r("a",{attrs:{href:"./"}},[r("img",{key:"max-logo",attrs:{src:"logo.png"}})])]),r("Menu",{class:n.menuitemClasses,attrs:{"active-name":"1-2",theme:"dark",width:"auto"},on:{"on-select":n.jumpAnchor}},[r("MenuItem",{attrs:{name:"我的收藏"}},[r("Icon",{attrs:{type:"ios-heart"}}),r("span",[n._v("我的收藏")])],1),r("MenuItem",{attrs:{name:"常用网址"}},[r("Icon",{attrs:{type:"ios-navigate"}}),r("span",[n._v("常用网址")])],1),n._l(n.data,function(t,e){return r("MenuItem",{key:e,attrs:{name:t.title}},[r("Icon",{attrs:{type:"ios-search"}}),r("span",[n._v(n._s(t.title))])],1)})],2),r("div",{attrs:{slot:"trigger"},slot:"trigger"})],1),r("Layout",[r("Header",{staticClass:"layout-header-bar"},[n._v("欢迎使用\n            "),r("Input",{staticClass:"search",attrs:{placeholder:"请输入内容搜搜..."},on:{"on-enter":n.searchData},model:{value:n.search,callback:function(t){n.search=t},expression:"search"}}),r("span",{staticClass:"search-text"},[r("Button",{attrs:{type:"primary",icon:"search"},on:{click:n.searchData}},[n._v("搜索")])],1),r("Button",{directives:[{name:"show",rawName:"v-show",value:n.searchStatus,expression:"searchStatus"}],attrs:{type:"success",icon:"plus-round"},on:{click:n.resetSearch}},[n._v("重置")])],1),r("Content",[r("NavSub",{attrs:{data:n.data,spinShow:n.spinShow}})],1),r("Footer",{staticClass:"layout-footer-center"},[n._v("lenav ©2021 Created by Lework "),r("a",{attrs:{href:"https://github.com/lework/lenav",target:"_blank"}},[n._v("GitHub")])])],1)],1),r("BackTop")],1):n._e()},[],!1,null,"68b540be",null).exports);i.default.use(c.a);var k=new c.a({mode:"hash",base:"https://cdn.jsdelivr.net/gh/lework/lenav@master/docs/",routes:[{path:"/",name:"Main",component:C}]});k.beforeEach(function(t,e,n){"/"!==t.fullPath?n("/"):n()});var S=k,O="SET_FAVORITE_LIST",L="SET_USED_LIST",x=n("a78e"),j=n.n(x),I="__favorite__",T="__used__";function D(t,e,n,r){var s=t.findIndex(n);0<=s&&t.splice(s,1),t.unshift(e),r&&t.length>r&&t.pop()}function E(t,e){var n=t.findIndex(e);-1<n&&t.splice(n,1)}function B(){return j.a.getJSON(I)||[]}function F(){return j.a.getJSON(T)||[]}var N,P=function(t,e){(0,t.commit)(O,function(e){var t=B();return e.hasOwnProperty("num")&&delete e.num,D(t,e,function(t){return t.link===e.link},200),j.a.set(I,t),t}(e))},M=function(t,e){var n=t.commit;e.num?n(L,function(e){var t=F();return E(t,function(t){return t.link===e.link}),j.a.set(T,t),t}(e)):n(O,function(e){var t=B();return E(t,function(t){return t.link===e.link}),j.a.set(I,t),t}(e))},Q=function(t,e){(0,t.commit)(L,function(t){var e=F(),n=Object.assign({},t);return n.hasOwnProperty("num")?n.num+=1:(n.num=1,e.forEach(function(t){t.link===n.link&&n.num&&(n.num=t.num+1)})),D(e,n,function(t){return n.link===t.link},200),j.a.set(T,e),e}(e))},U=function(t){(0,t.commit)(L,(j.a.remove(T),[]))},$=function(t){(0,t.commit)(O,(j.a.remove(I),[]))},J=function(t){return t.favoriteList},R=function(t){return t.usedList},G={usedList:F(),favoriteList:B()},H=(d(N={},L,function(t,e){t.usedList=e}),d(N,O,function(t,e){t.favoriteList=e}),N);n("b054");i.default.use(p.a);var K=new p.a.Store({actions:r,getters:s,state:G,mutations:H,strict:!1,plugins:[]}),V=n("e069"),z=n.n(V),X=(n("dcad"),n("caf9")),Z=n("bc3a"),Y=n.n(Z);i.default.use(z.a),i.default.use(X.a,{loading:n("cf1c")}),i.default.config.productionTip=!1,Y.a.defaults.baseURL="https://cdn.jsdelivr.net/gh/lework/lenav@master/docs/",i.default.prototype.$axios=Y.a,new i.default({router:S,store:K,render:function(t){return t(o)}}).$mount("#app")},"6cce":function(t,e,n){},7574:function(t,e,n){"use strict";var r=n("6cce");n.n(r).a},"76e0":function(t,e,n){},"85f2":function(t,e,n){t.exports=n("454f")},a78e:function(r,s,i){var a,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(t){if(void 0===(o="function"==typeof(a=t)?a.call(s,i,s,r):a)||(r.exports=o),!0,r.exports=t(),!!0){var e=window.Cookies,n=window.Cookies=t();n.noConflict=function(){return window.Cookies=e,n}}}(function(){function o(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function u(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(c){function a(){}function n(t,e,n){if("undefined"!=typeof document){"number"==typeof(n=o({path:"/"},a.defaults,n)).expires&&(n.expires=new Date(1*new Date+864e5*n.expires)),n.expires=n.expires?n.expires.toUTCString():"";try{var r=JSON.stringify(e);/^[\{\[]/.test(r)&&(e=r)}catch(t){}e=c.write?c.write(e,t):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var i in n)n[i]&&(s+="; "+i,!0!==n[i]&&(s+="="+n[i].split(";")[0]));return document.cookie=t+"="+e+s}}function e(t,e){if("undefined"!=typeof document){for(var n={},r=document.cookie?document.cookie.split("; "):[],s=0;s<r.length;s++){var i=r[s].split("="),a=i.slice(1).join("=");e||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var o=u(i[0]);if(a=(c.read||c)(a,o)||u(a),e)try{a=JSON.parse(a)}catch(t){}if(n[o]=a,t===o)break}catch(t){}}return t?n[t]:n}}return a.set=n,a.get=function(t){return e(t,!1)},a.getJSON=function(t){return e(t,!0)},a.remove=function(t,e){n(t,"",o(e,{expires:-1}))},a.defaults={},a.withConverter=t,a}(function(){})})},c1aa:function(t,e,n){"use strict";var r=n("ed87");n.n(r).a},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},cf1c:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEAAQAMQQAObm5uLi4unp6dHR0cnJydfX1+jo6O/v7/Dw8NPT0/39/crKyvr6+uDg4MfHx////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAQACwAAAAAEAAQAAAFXeAjPkiTjGgaLI6Tvs9BtPAIMPH8KgK5DDhZSlFYlFrAGIrYMrUcyRGzdapZr6jE02FAyZ6JxrOrEAVnjgaCRS6IkjLjo9F2PaDBwLJAu+NfAix2LQsAMCVVYQgoIQAh+QQFAAAQACwJAAAABwAHAAAFFGDSIE/5OM7SmKhjsK55vjIt32UIACH5BAUAABAALAoAAwAGAAoAAAUaICQqgggpxYKcheM0qOskZm0/eA7luMibvRAAIfkEBQAAEAAsCQAJAAcABwAABRXgcxBOmTwi6TRouiAoIwbtI9d4/oQAIfkEBQAAEAAsAwAKAAoABgAABRsgJI7MKD6POJQnKjpD60IODKFzvQD3nDQISAgAIfkEBQAAEAAsAAAJAAcABwAABRPgI45kSSrFWTgj6rCisLwk0iQhACH5BAUAABAALAAAAwAHAAoAAAUcIPRAJPmco4mm61m+cJk4tGNATX0ryGK/jVspBAAh+QQFAAAQACwAAAAABwAHAAAFFOAjjmRpPgBDIsugio3juGIiz2oIADs="},ed87:function(t,e,n){},f063:function(t,e,n){"use strict";var r=n("76e0");n.n(r).a},f28c:function(t,e){var n,r,s=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var t=o(f);l=!0;for(var e=u.length;e;){for(c=u,u=[];++d<e;)c&&c[d].run();d=-1,e=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function v(){}s.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=v,s.addListener=v,s.once=v,s.off=v,s.removeListener=v,s.removeAllListeners=v,s.emit=v,s.prependListener=v,s.prependOnceListener=v,s.listeners=function(t){return[]},s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}}},[[0,"runtime","npm.core-js","npm.axios","npm.iview","npm.vuex","npm.clipboard","npm.vue-lazyload","npm.vue-router","npm.vue"]]]);