const jsl = require('json-logic-js')

const value = jsl.apply(
  { "var" : ["a"] },
  { a : 21, b : 23 }
)

value
