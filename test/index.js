'use-strict'

const test = require('tape')
const WrapperChain = require('../')

test('object wrapping test', (t) => {
  let object = { value: 0 }
  const wrappers = {
    increment: function () {
      return { value: this.value + 1 }
    }
  }

  object = new WrapperChain(object, wrappers)
  t.equal(object.value, 0)

  object = object.increment()
  t.equal(object.value, 1)

  object = object.increment()
  t.equal(object.value, 2)

  t.end()
})

test('function wrapping test', (t) => {
  let f = (x) => 2 * x
  const wrappers = {
    shift: function (dX, dY) {
      return (x) => this(x - dX) + dY
    }
  }

  f = new WrapperChain(f, wrappers)
  t.equal(f(0), 0)

  f = f.shift(5, 0)
  t.equal(f(0), -10)

  f = f.shift(5, 5)
  t.equal(f(0), -15)

  t.end()
})
