// composition function basic
const double = x => x + x
const triple = x => x * 3
const quadra = x => x * 4

const compo = (...functions) => input => {
  return functions.reduce( (acc , f) => {
    return acc = f(acc)
  } , input)
}

const mul6 = compo(double , triple)
const mul18 = compo(double , triple , triple)

console.log(mul6(12))
console.log(mul18(5))

// composition Promise
const doubleP = async(x) => x + x
const tripleP = async(x) => x * 3
const quadraP = async(x) => x * 4

// const compoP = (...arrP) => num => {
//   return arrP.reduce( (accP , currentp) => {
//     return accP.then( passedRes => {
//       return currentp(passedRes).then(res => res)
//     })
//   },Promise.resolve(num))
// }

const compoP = (...arrP) => num => {
  return arrP.reduce( async (accP , currentp) => {
    const passedRes = await accP
    const res = await currentp(passedRes)
    return res
  },Promise.resolve(num))
}

const mul6P = compoP(doubleP,tripleP)
const mul12P = compoP(tripleP,quadraP)

mul6P(2).then( res => {
  console.log(res)
})

mul12P(2).then( res => {
  console.log(res)
})

console.log( quadraP() )
