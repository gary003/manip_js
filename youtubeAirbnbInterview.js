// V1
const find_missing1 = (a , b) => {
  return a.filter(val => ! b.includes(val))
}

//V2
const find_missing2 = (a , b) => {
  const joinedArray = [...b,...a]
  const missing = []
  for (let i = 1; i < b.length; i++) {
    if(joinedArray.indexOf(joinedArray[joinedArray.length - i]) > b.length)
      missing.push(joinedArray[joinedArray.length - i])
  }
  return missing
}

// V3
const _ = require('lodash')
const find_missing3 = (a , b) => {
  return _.chain(a)
          .difference(b)
          .value()
}

// V4
const find_missing4 = (a , b) => {
  const aSet = new Set(a)
  const bSet = new Set(b)
  const missing = []

  for (let elem of aSet)
    if ( ! bSet.has(elem)) missing.push(elem)

  return missing
}

// Tests comparatifs
console.time('test1')
for(var i = 0; i < 1000000; i++){
  find_missing1([4,12,9,5,6],[4,9,12,6])
}
console.timeEnd('test1')

console.time('test2')
for(var i = 0; i < 1000000; i++){
  find_missing2([4,12,9,5,6],[4,9,12,6])
}
console.timeEnd('test2')

console.time('test3')
for(var i = 0; i < 1000000; i++){
  find_missing3([4,12,9,5,6],[4,9,12,6])
}
console.timeEnd('test3')

console.time('test4')
for(var i = 0; i < 1000000 ; i++){
  find_missing4([4,12,9,5,6],[4,9,12,6])
}
console.timeEnd('test4')
