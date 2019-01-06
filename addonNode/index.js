const addon = require('./build/Release/addon')

console.time('c++')
console.log(addon.sum())
console.timeEnd('c++')

console.time('node')
let a = 3.14153
let b = 2.718
for (let index = 0; index < 100000000; index++) {
  a+= b
}
console.timeEnd('node')
