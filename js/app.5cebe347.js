(function(t){function e(e){for(var n,s,l=e[0],o=e[1],c=e[2],p=0,f=[];p<l.length;p++)s=l[p],r[s]&&f.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("hr"),a("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar justify-content-center navbar-expand-sm navbar-dark bg-dark"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[n("img",{attrs:{width:"40px",alt:"Vue logo",src:a("980d")}})])],1),t._m(0),n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Videolarım")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/mysites"}},[t._v("Sitelerim")])],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExample03","aria-controls":"navbarsExample03","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o={name:"Navbar"},c=o,u=a("2877"),p=Object(u["a"])(c,s,l,!1,null,null,null),f=p.exports,d=a("1157"),v=a.n(d),b={name:"app",components:{Navbar:f},mounted:function(){v()("body").addClass("bg-light")}},m=b,h=(a("034f"),Object(u["a"])(m,r,i,!1,null,null,null)),g=h.exports,y=a("8c4f"),_=(a("ab8b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("ul",t._l(t.items.items,function(e,n){return a("li",{key:n},[a("div",{staticClass:"card text-white bg-info mb-3",staticStyle:{width:"400px",margin:"0px 10px","padding-right":"15px"}},[a("iframe",{attrs:{width:"400",height:"400",src:t.getUrl(e.snippet.resourceId.videoId),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.snippet.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.snippet.description))])])])])}),0)])}),w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow p-3 mb-5 bg-white rounded text-left"},[a("p",{staticClass:"text-info"},[t._v("\n      Bir süredir Vue js ile ilgili sadece kodlayarak video çekip yüklüyorum.\n      "),a("a",{attrs:{href:"https://www.youtube.com/channel/UC-XhAb5WL2LzA8c46138TDQ",target:"_blank"}},[t._v("\n        Buradan onlara ulaşabilirsiniz.")])])])}],x={name:"MyVideo",data:function(){return{items:[]}},created:function(){var t=this;fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDG4qXSgXzW5vFHkq6H2dJeTgHGxh8tVd&key=AIzaSyDqg9vDShgSwqtmDKeEaYcpSlCUTx2VWrg").then(function(t){return t.json()}).then(function(e){t.items=e})},methods:{getUrl:function(t){var e="https://www.youtube.com/embed/";return e+t}}},C=x,k=(a("c8fb"),Object(u["a"])(C,_,w,!1,null,"9971dfda",null)),j=k.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid text-left"},[a("div",{staticClass:"col-sm-8"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[a("a",{attrs:{href:"https://nomioscars.firebaseapp.com/#/",target:"_blank"}},[t._v("Oscar  Adayları ve kazananları")])]),a("li",{staticClass:"list-group-item"},[a("a",{attrs:{href:"https://ekiptodo.firebaseapp.com/#/",target:"_blank"}},[t._v(" Yapılacaklar Listesi")])])])])])}],E={},$=E,P=Object(u["a"])($,O,S,!1,null,null,null),T=P.exports;n["a"].config.productionTip=!1,n["a"].use(y["a"]);var D=new y["a"]({routes:[{path:"/",component:j},{path:"/mysites",component:T}]});new n["a"]({router:D,render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,a){},"980d":function(t,e,a){t.exports=a.p+"img/ZImage.9b5b00c1.jpg"},c8a8:function(t,e,a){},c8fb:function(t,e,a){"use strict";var n=a("c8a8"),r=a.n(n);r.a}});
//# sourceMappingURL=app.5cebe347.js.map