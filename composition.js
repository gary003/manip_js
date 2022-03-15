// composition function basic
const double = (x) => x + x
const triple = (x) => x * 3
const quadra = (x) => x * 4

const compose =
  (...functions) =>
  (...values) => {
    return functions.reduceRight((acc, func) => {
      return [func(...acc)]
    }, values)[0]
  }

const mul8 = compose(quadra, double)
const mul27 = compose(triple, triple, triple)

console.log(mul8(3))
console.log(mul27(3))

// composition Promise
const doubleP = async (x) => x + x
const tripleP = async (x) => x * 3
const quadraP = async (x) => x * 4

const compoP =
  (...arrFunctions) =>
  (...num) => {
    const result = arrFunctions.reduce(async (accP, currentp) => {
      let errH = null
      const passedPromiseRes = await accP.catch((err) => (errH = err))
      if (!!errH) return Promise.reject(errH)
      const resF = await currentp(...passedPromiseRes).catch((err) => (errH = err))
      return !!errH ? Promise.reject(errH) : Promise.resolve([resF])
    }, Promise.resolve(num))

    return result
  }

const mul6P = compoP(doubleP, tripleP)
const mul12P = compoP(tripleP, quadraP)
const mul24P = compoP(doubleP, tripleP, quadraP)

Promise.all([mul6P(5), mul12P(3), mul24P(2)])
  .then((res) => {
    console.log(res.flat())
  })
  .catch(console.log)

const R = require("ramda")
const mul8P = R.composeP(doubleP, quadraP)
const multi8 = R.compose(double, quadra)

mul8P(3).then((x) => {
  console.log(x)
})

console.log(multi8(2))
