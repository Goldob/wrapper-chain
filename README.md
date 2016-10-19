# wrapper-chain: chainable object wrapping
[![Build Status](https://travis-ci.org/Goldob/wrapper-chain.svg?branch=master)](https://travis-ci.org/Goldob/wrapper-chain)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


:package: Wrap any object or function with pre-defined chainable methods

```js
const WrapperChain = require('wrapper-chain')
const wrappers = {
  shift: function (dX, dY) {
    return (x) => this(x - dX) + dY
  }
}

let f = (x) => 2 * x

f = new WrapperChain(f, wrappers)           // f(x) = 2 * x
f = f.shift(5, 0)                           // f(x) = 2 * (x - 5)
f = f.shift(5, 0)                           // f(x) = 2 * (x - 10)
f = f.shift(0, 5)                           // f(x) = 2 * (x - 10) + 5
```

## Usage

### `new WrapperChain(object, wrappers)`

Returns a wrapper containting the specified object

#### Parameters
- `object` The object to be wrapped
- `wrappers` All functions that can be applied to the object

### Writing wrapper functions

Each key in the `wrappers` object is a method name and the corresponding value is a `wrapper` function. `wrapper` functions could take any number of parameters and should return the modified object. The original object is available as `this` inside the functions. Whether or not it will be mutated or not is up to you to decide.

__Warning:__ Don't use arrow functions to implement wrappers or you will lose `this` context!

## Install

`npm install wrapper-chain --save`

## License

MIT
