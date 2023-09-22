// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var x=String.fromCharCode,S=isNaN,j=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=A.exec(e);i;)(r=e.slice(n,A.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=A.lastIndex,i=A.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t,i;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var O,R=Object.prototype,P=R.toString,Z=R.__defineGetter__,G=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&G&&G.call(e,r,t.set),e};var U=O;function B(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function z(){return M&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,J=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",K=z()?function(e){var r,t,i,n,a;if(null==e)return H.call(e);t=e[D],a=D,r=null!=(n=e)&&J.call(n,a);try{e[D]=void 0}catch(r){return H.call(e)}return i=H.call(e),r?e[D]=t:delete e[D],i}:function(e){return H.call(e)},Q=Boolean,Y=Boolean.prototype.toString,ee=z();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return N(e)||re(e)}function ie(){return new Function("return this;")()}B(te,"isPrimitive",N),B(te,"isObject",re);var ne="object"==typeof self?self:null,ae="object"==typeof window?window:null,oe="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!N(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(oe)return oe;if(ne)return ne;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ce.document&&ce.document.childNodes,le=Int8Array,pe=X(),ue=Object.prototype.toString,fe=Object.prototype.hasOwnProperty,ge="function"==typeof q?q.toStringTag:"",de=pe&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return ue.call(e);t=e[ge],a=ge,r=null!=(n=e)&&fe.call(n,a);try{e[ge]=void 0}catch(r){return ue.call(e)}return i=ue.call(e),r?e[ge]=t:delete e[ge],i}:function(e){return ue.call(e)},he="function"==typeof Object.defineProperty?Object.defineProperty:null,we=Object.defineProperty;function be(e){return"number"==typeof e}function ye(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ve(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ye(n):ye(n)+e,i&&(e="-"+e)),e}var me=String.prototype.toLowerCase,_e=String.prototype.toUpperCase;function Ee(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!be(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ve(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ve(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===_e.call(e.specifier)?_e.call(t):me.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ke(e){return"string"==typeof e}var xe=Math.abs,Se=String.prototype.toLowerCase,je=String.prototype.toUpperCase,Te=String.prototype.replace,Ve=/e\+(\d)$/,Ae=/e-(\d)$/,$e=/^(\d+)$/,Fe=/^(\d+)e/,Ie=/\.0$/,Ce=/\.0*e/,Oe=/(\..*[^0])0*e/;function Re(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!be(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":xe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Te.call(t,Oe,"$1e"),t=Te.call(t,Ce,"e"),t=Te.call(t,Ie,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Te.call(t,Ve,"e+0$1"),t=Te.call(t,Ae,"e-0$1"),e.alternate&&(t=Te.call(t,$e,"$1."),t=Te.call(t,Fe,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===je.call(e.specifier)?je.call(t):Se.call(t)}function Pe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ze(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Pe(i):Pe(i)+e}var Ge=String.fromCharCode,Le=isNaN,We=Array.isArray;function Ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Be(e){var r,t,i,n,a,o,c,s,l;if(!We(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ke(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ue(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Le(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Le(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ee(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Le(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Le(a)?String(i.arg):Ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Re(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ve(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ze(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ne=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Me(e){var r,t,i,n;for(t=[],n=0,i=Ne.exec(e);i;)(r=e.slice(n,Ne.lastIndex-i[0].length)).length&&t.push(r),t.push(Xe(i)),n=Ne.lastIndex,i=Ne.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function ze(e){return"string"==typeof e}function He(e){var r,t,i;if(!ze(e))throw new TypeError(He("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Me(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Be.apply(null,t)}var Je,qe=Object.prototype,De=qe.toString,Ke=qe.__defineGetter__,Qe=qe.__defineSetter__,Ye=qe.__lookupGetter__,er=qe.__lookupSetter__;Je=function(){try{return he({},"x",{}),!0}catch(e){return!1}}()?we:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===De.call(e))throw new TypeError(He("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===De.call(t))throw new TypeError(He("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Ye.call(e,r)||er.call(e,r)?(i=e.__proto__,e.__proto__=qe,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ke&&Ke.call(e,r,t.get),o&&Qe&&Qe.call(e,r,t.set),e};var rr=Je;function tr(){return/^\s*function\s*([^(]*)/i}var ir=/^\s*function\s*([^(]*)/i;!function(e,r,t){rr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(tr,"REGEXP",ir);var nr="function"==typeof Object.defineProperty?Object.defineProperty:null,ar=Object.defineProperty;function or(e){return"number"==typeof e}function cr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function sr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+cr(n):cr(n)+e,i&&(e="-"+e)),e}var lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase;function ur(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!or(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=sr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=sr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===pr.call(e.specifier)?pr.call(t):lr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fr(e){return"string"==typeof e}var gr=Math.abs,dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase,wr=String.prototype.replace,br=/e\+(\d)$/,yr=/e-(\d)$/,vr=/^(\d+)$/,mr=/^(\d+)e/,_r=/\.0$/,Er=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!or(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":gr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=wr.call(t,kr,"$1e"),t=wr.call(t,Er,"e"),t=wr.call(t,_r,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=wr.call(t,br,"e+0$1"),t=wr.call(t,yr,"e-0$1"),e.alternate&&(t=wr.call(t,vr,"$1."),t=wr.call(t,mr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===hr.call(e.specifier)?hr.call(t):dr.call(t)}function Sr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function jr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Sr(i):Sr(i)+e}var Tr=String.fromCharCode,Vr=isNaN,Ar=Array.isArray;function $r(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fr(e){var r,t,i,n,a,o,c,s,l;if(!Ar(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(fr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=$r(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Vr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Vr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ur(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Vr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Vr(a)?String(i.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=xr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=sr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=jr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Or(e){var r,t,i,n;for(t=[],n=0,i=Ir.exec(e);i;)(r=e.slice(n,Ir.lastIndex-i[0].length)).length&&t.push(r),t.push(Cr(i)),n=Ir.lastIndex,i=Ir.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Rr(e){return"string"==typeof e}function Pr(e){var r,t,i;if(!Rr(e))throw new TypeError(Pr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Or(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Fr.apply(null,t)}var Zr,Gr=Object.prototype,Lr=Gr.toString,Wr=Gr.__defineGetter__,Ur=Gr.__defineSetter__,Br=Gr.__lookupGetter__,Nr=Gr.__lookupSetter__;Zr=function(){try{return nr({},"x",{}),!0}catch(e){return!1}}()?ar:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Lr.call(e))throw new TypeError(Pr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Lr.call(t))throw new TypeError(Pr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Br.call(e,r)||Nr.call(e,r)?(i=e.__proto__,e.__proto__=Gr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Wr&&Wr.call(e,r,t.get),o&&Ur&&Ur.call(e,r,t.set),e};var Xr=Zr,Mr=Array.isArray?Array.isArray:function(e){return"[object Array]"===de(e)};function zr(e){return null!==e&&"object"==typeof e}function Hr(e){var r,t,i,n;if(("Object"===(t=de(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ir.exec(i.toString()))return r[1]}return zr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}!function(e,r,t){Xr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(zr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Pr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Mr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(zr));var Jr="function"==typeof e||"object"==typeof le||"function"==typeof se?function(e){return Hr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Hr(e).toLowerCase():r};function qr(e){return"function"===Jr(e)}function Dr(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}return function(e,r,t){if(!qr(e))throw new TypeError(Dr("1Tn3c,J9",e));if(!qr(r))throw new TypeError(Dr("1Tn2H,G6",r));return function(){var i,n,a;for(i=[],a=0;a<arguments.length;a++)r(n=arguments[a],a)&&i.push(n);return e.apply(t,i)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).filterArguments=r();
//# sourceMappingURL=browser.js.map
