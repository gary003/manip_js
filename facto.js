const rec = (x) => (x == 1)? 1 : x * rec(x-1)

const hhf = (n) => Array.from(Array(n).keys())
                        .map( x => x + 1)
                        .reduce(( acc,x ) => (acc||1) * x)

const loop = (n) => {
  let acc = 1
  for (var i = 1 ; i <= n ; i++)
    acc = i * acc

  return acc
}

const rec_ter = (x , tot = 1) => (x < 2)? tot : rec_ter(x-1 , tot * x )

module.exports.rec = rec
module.exports.hhf = hhf
module.exports.loop = loop
module.exports.rec_ter = rec_ter
