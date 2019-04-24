// composition function basic
const double = x => x + x
const triple = x => x * 3
const quadra = x => x * 4

const compo = (...functions) => input => {
  return functions.reduce( (acc , f) => {
    return acc = f(acc)
  } , input)
}

const mul12 = compo(quadra , triple)
const mul18 = compo(double , triple , triple)

console.log(mul12(3))
console.log(mul18(3))

// composition Promise
const doubleP = async(x) => x + x
const tripleP = async(x) => x * 3
const quadraP = async(x) => x * 4

const compoP = (...arrFunctions) => num => {
  return arrFunctions.reduce( async (accP , currentp) => {
    let errH = null
    const passedPromiseRes = await accP.catch(err => errH = err)
    if(!!errH) return Promise.reject(errH)
    const resF = await currentp(passedPromiseRes).catch(err => errH = err)
    return !!errH ? Promise.reject(errH) : Promise.resolve(resF)
  },Promise.resolve(num))
}

const mul6P  = compoP(doubleP,tripleP)
const mul12P = compoP(tripleP,quadraP)
const mul24P = compoP(doubleP,tripleP,quadraP)

Promise.all([mul6P(5),mul12P(3),mul24P(2)])
.then(console.log)
.catch(console.log);

// composition avec ramda !! a la version 0.26.x ; ce n'est pas au point
// const R = require('ramda')
// const mul8P =  R.composeP(doubleP ,quadraP)
// const mul8 =  R.compose(double ,quadra)
//
// mul8P(3).then( x => {
//   console.log(x);
// })
//
// console.log(mul8P(3));
// console.log(mul8(2))
