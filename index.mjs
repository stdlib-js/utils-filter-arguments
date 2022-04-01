// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=t,e=r;var s=function(t,r,s){if(!n(t))throw new TypeError(e("invalid argument. First argument must be a function. Value: `%s`.",t));if(!n(r))throw new TypeError(e("invalid argument. Second argument must be a function. Value: `%s`.",r));return function(){var n,e,i;for(n=[],i=0;i<arguments.length;i++)r(e=arguments[i],i)&&n.push(e);return t.apply(s,n)}};export{s as default};
//# sourceMappingURL=index.mjs.map
