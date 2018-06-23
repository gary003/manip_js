const R = require('ramda');

const rec = (x) => (x == 1)? 1 : x * rec(x-1)

//const hhf = (n) => Array.from(Array(n).keys())
const hhf = (n) => R.range(2,n+1)
                    .reduce((acc,x) => acc * x , 1)

const loop = (n) => {
  let acc = 1
  for (let i = 1 ; i <= n ; i++)
    acc = i * acc

  return acc
}

const rec_ter = (x , tot = 1) => (x < 2)? tot : rec_ter(x-1 , tot * x )

module.exports.rec = rec
module.exports.hhf = hhf
module.exports.loop = loop
module.exports.rec_ter = rec_ter
