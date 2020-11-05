const fib = (n,memoize = {}) => {
  if(`${n}` in memoize) return memoize[`${n}`]
  if(n == 0) return memoize[0n] = 0n
  if(n == 1) return memoize[1n] = 1n
  
  memoize[`${n}`] = fib(n-1,memoize) + fib(n-2,memoize)
  return memoize[`${n}`]
}

console.log(fib(3))
