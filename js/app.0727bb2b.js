(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)i=s[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"warper"},[n("div",{attrs:{id:"mainContent"}},[e._m(0),n("div",{staticClass:"fullbox"},[n("h1",[e._v("Simple Translator!")]),n("h2",[e._v("Based on Yandex API")]),n("div",{staticClass:"box-container"},[e._m(1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6  col-12 left"},[n("Givenword",{on:{translatme:e.GivemeSomeTranslate}})],1),n("div",{staticClass:"col-md-6  col-12"},[n("div",{staticClass:"inoutsbox-textarea"},[n("Retrivedword",{domProps:{textContent:e._s(e.datareturned)}})],1)])]),n("FooterCom")],1)])])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"grid-container"}},[n("div",{staticClass:"green",attrs:{id:"grid-container"}},[n("div",{staticClass:"grid-columns"}),n("div",{staticClass:"gridDots"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("ede7"),alt:""}})])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inoutsbox-textarea"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?n:n[0]}}},e._l(e.langs,function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(e._s(t))])})),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.givenword,expression:"givenword"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.givenword},on:{keyup:e.Blurme,input:function(t){t.target.composing||(e.givenword=t.target.value)}}}),e._m(0)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Type a word or text then select a language and use the "),n("span",[n("img",{attrs:{width:"15px",src:"https://upload.wikimedia.org/wikipedia/commons/f/f4/Oxygen480-actions-key-enter.svg",alt:""}})]),e._v(" Enter Key to SUBMIT\n                     ")])}],l={name:"Givenword",data:function(){return{givenword:"",langs:"",selected:"fr"}},created:function(){var e=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20180830T032430Z.f083cc8e4265220a.cfe70e5a6083c7275c03417d20ca20c5f03c7141&ui=JSON").then(function(t){e.langs=t.body.langs},function(e){})},methods:{Blurme:function(e){if(13==e.keyCode&&!e.shiftKey)return e.preventDefault(),this.$emit("translatme",this.givenword,this.selected),!1}}},c=l,u=n("2877"),d=Object(u["a"])(c,i,s,!1,null,null,null);d.options.__file="index.vue";var f=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{attrs:{readonly:"",name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.datareturned}})},p=[],m={name:"Retrivedword",props:["datareturned"]},g=m,h=Object(u["a"])(g,v,p,!1,null,null,null);h.options.__file="index.vue";var _=h.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"copyright-info"},[n("strong",[e._v("Ayoub Bousetta")]),n("br"),e._v("Copyright - 2018 Limited.")])}],b={name:"FooterCom"},w=b,C=Object(u["a"])(w,y,x,!1,null,null,null);C.options.__file="index.vue";var O=C.exports,j={name:"app",components:{Givenword:f,Retrivedword:_,FooterCom:O},data:function(){return{datareturned:""}},methods:{GivemeSomeTranslate:function(e,t){var n=this;event.preventDefault(),this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180830T032430Z.f083cc8e4265220a.cfe70e5a6083c7275c03417d20ca20c5f03c7141&text="+e+"&lang="+t).then(function(e){n.datareturned=e.body.text[0]},function(e){})}}},$=j,k=(n("034f"),Object(u["a"])($,a,o,!1,null,null,null));k.options.__file="App.vue";var P=k.exports,S=n("28dd");r["a"].config.productionTip=!1,r["a"].use(S["a"]),new r["a"]({render:function(e){return e(P)}}).$mount("#app")},c21b:function(e,t,n){},ede7:function(e,t,n){e.exports=n.p+"img/logo.3edecc95.png"}});
//# sourceMappingURL=app.0727bb2b.js.map