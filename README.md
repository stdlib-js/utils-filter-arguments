<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# filterArguments

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a function that invokes a provided function according to a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-filter-arguments
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var filterArguments = require( '@stdlib/utils-filter-arguments' );
```

#### filterArguments( fcn, predicate\[, thisArg] )

Returns a `function` that invokes a provided function according to a `predicate` function.

```javascript
function foo( a, b ) {
    return [ a, b ];
}

function predicate( v ) {
    return ( v !== 2 );
}

var bar = filterArguments( foo, predicate );

var out = bar( 1, 2, 3 );
// returns [ 1, 3 ]
```

The `predicate` function is provided the following arguments:

-   **value**: argument value.
-   **index**: argument index.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function predicate( v ) {
    return ( v !== 2 );
}

function Foo() {
    this.x = 1;
    this.y = 2;
}

Foo.prototype.scale = function scale( a, b ) {
    return [ this.x*a, this.y*b ];
};

var ctx = {
    'x': 10,
    'y': 20
};

var foo = new Foo();

var bar = filterArguments( foo.scale, predicate, ctx );

var out = bar( 1, 2, 3 );
// returns [ 10, 60 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Only those arguments in which the `predicate` function returns a truthy value are applied to a provided function.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array-filled-by' );
var add = require( '@stdlib/math-base-ops-add' );
var filterArguments = require( '@stdlib/utils-filter-arguments' );

function fill( i ) {
    return i;
}

function factory( i, j ) {
    return predicate;

    function predicate( value, index ) {
        return ( i <= index ) && ( index < j );
    }
}

// Create a data array:
var x = filledarrayBy( 10, 'float64', fill );

// Compute the sum of consecutive elements...
var f;
var i;
for ( i = 0; i < x.length-1; i++ ) {
    f = filterArguments( add, factory( i, i+2 ) );
    console.log( 'sum(x_%d, x_%d) = %d', i, i+1, f.apply( null, x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-filter-arguments.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-filter-arguments

[test-image]: https://github.com/stdlib-js/utils-filter-arguments/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-filter-arguments/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-filter-arguments/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-filter-arguments?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-filter-arguments.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-filter-arguments/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-filter-arguments/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-filter-arguments/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-filter-arguments/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-filter-arguments/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-filter-arguments/main/LICENSE

</section>

<!-- /.links -->
