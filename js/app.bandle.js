!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s="./src/js/main.js")}({"./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */function(e,t,n){},"./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/*! no static exports found */function(e,t,n){},"./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! no static exports found */function(e,t){let n,r=document.getElementById("mainContent"),o=document.getElementsByClassName("grid-columns"),s=document.getElementsByClassName("gridDots"),c=r.clientWidth,l=(r.clientHeight,c/175);for(let e=0;e<l;e++)for(let e=0;e<o.length;e++)(n=document.createElement("div")).style="width: 175px",n.className="column",o[e].appendChild(n);for(let e=0;e<175;e++)for(let t=0;t<l;t++)for(let r=0;r<s.length;r++)(n=document.createElement("div")).style="left: "+87.5*e+"px;top: "+175*t+"px",n.className="dot",s[r].appendChild(n)},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);n(/*! ../fonts/fonts.css */"./src/fonts/fonts.css"),n(/*! ../css/main.scss */"./src/css/main.scss"),n(/*! ../js/grid.js */"./src/js/grid.js")}});
//# sourceMappingURL=app.bandle.js.map