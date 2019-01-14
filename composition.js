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
