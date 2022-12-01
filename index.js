// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).filterArguments=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&f&&f.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var r,e,n,o,i;if(null==t)return d.call(t);e=t[g],i=g,r=null!=(o=t)&&v.call(o,i);try{t[g]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[g]=e:delete t[g],n}:function(t){return d.call(t)},j=Boolean.prototype.toString;var m=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function h(t){return y(t)||w(t)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",w);var E="object"==typeof self?self:null,A="object"==typeof window?window:null,O="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(A)return A;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,P=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;p(k,"REGEXP",x);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function V(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=x.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var L="function"==typeof t||"object"==typeof P||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function F(t){return"function"===L(t)}function I(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r,e){if(!F(t))throw new TypeError(I("0jk3p",t));if(!F(r))throw new TypeError(I("0jk2S",r));return function(){var n,o,i;for(n=[],i=0;i<arguments.length;i++)r(o=arguments[i],i)&&n.push(o);return t.apply(e,n)}}}));
//# sourceMappingURL=index.js.map
