const jsl = require('json-logic-js')

const obj = { a : 21, b : 23 }

const value = jsl.apply(
  { "var" : ["a"] },
  obj
)

value
