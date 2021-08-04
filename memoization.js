const fib = (n, memoize = {}) => {
  if (`${n}` in memoize) return memoize[`${n}`]
  if (n == 0) return (memoize[0n] = 0n)
  if (n == 1) return (memoize[1n] = 1n)

  memoize[`${n}`] = fib(n - 1, memoize) + fib(n - 2, memoize)
  return memoize[`${n}`]
}

console.log(fib(3))

const countWaysToCountMemo = (num, count = 1, memoize = {}) => {
  if (num < 0) return 0
  if (`${num},${count}` in memoize) return memoize[`${num},${count}`]
  if (num == 0) return 1
  if (count > num) return 0

  memoize[`${num},${count}`] = countWaysToCountMemo(num, count + 1, memoize) + countWaysToCountMemo(num - count, count, memoize)

  return memoize[`${num},${count}`]
}

console.log(countWaysToCountMemo(12))
