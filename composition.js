// composition function basic
const double = x => x + x
const triple = x => x * 3
const quadra = x => x * 4

const compo = (...functions) => input => {
  return functions.reduce( (acc , f) => {
    return acc = f(acc)
  } , input)
}

const mul6  = compo(double , triple)
const mul18 = compo(double , triple , triple)

console.log(mul6(12))
console.log(mul18(5))

// composition Promise
const doubleP = async(x) => x + x
const tripleP = async(x) => x * 3
const quadraP = async(x) => x * 4

const compoP = (...arrP) => num => {
  return arrP.reduce( async (accP , currentp) => {
    const passedRes = await accP
    return await currentp(passedRes)
  },Promise.resolve(num))
}

const mul6P  = compoP(doubleP,tripleP)
const mul12P = compoP(tripleP,quadraP)
const mul24P = compoP(doubleP,tripleP,quadraP)

Promise.all([mul6P(5),mul12P(3),mul24P(2)])
.then( res => {
  console.log(res)
})
