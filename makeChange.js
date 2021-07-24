const changeRec = (amount, coins, change = [], res = []) => {
  let [coin, ...rest] = coins

  if ([undefined, null].includes(coin)) return 0
  if (amount < 0) return 0
  if (amount == 0) return res.push(change)

  changeRec(amount - coin, coins, change.concat([coin]), res)
  changeRec(amount, rest, change, res)

  return res
}

const changeTab = (money, coins) => {
  const res = Array(money + 1).fill([])
  res[0] = [[]]

  for (let iMoney = 0; iMoney <= money; iMoney++) {
    if (res[iMoney].length > 0) {
      for (let coin of coins) {
        if (iMoney + coin <= money) {
          const subChange = res[iMoney]
          const newChg = subChange.map((x) => [...x, coin])
          res[iMoney + coin] = [...res[iMoney + coin], ...newChg]
        }
      }
    }
  }

  return res[money]
}

const changeTab2 = (money, coins) => {
  const res = Array(money + 1).fill([])
  res[0] = [[]]

  for (let coin of coins)
    for (let iMoney = coin; iMoney <= money; iMoney++) {
      // this variable contains the subProblem for the current iMoney
      const subChange = res[iMoney - coin]

      /* we check the change value for the current change + the coin 
      and update the res (for each change previously calculated)
      We filter the original null value from the parameter(first value of res) */
      const newChg = subChange.map((x) => [...x, coin])
      // We add the new change to the res
      res[iMoney] = [...res[iMoney], ...newChg]
    }

  return res[money]
}

const changeRecTer = (money, coins, indexCoin = 0, indexMoney = coins[0], result = [[[]]].concat(Array(money).fill([]))) => {
  //Here , all the combination have been done we return the result(end of recursion)
  if (indexCoin == coins.length) return result[money]
  // If the array is not initialize , we create it
  let newChg = result[indexMoney - coins[indexCoin]] || []
  /* we check the change value for the current chane + the coin 
  and update the result (for each change previously calculated)
  We filter the original null value from the parameter(first value of result) */
  newChg = newChg.map((x) => x.concat(coins[indexCoin]))
  // We add the new change to the result
  result[indexMoney] = result[indexMoney].concat([...newChg])
  // We handle the indexes for the recursion
  if (indexMoney == money && indexCoin < coins.length) {
    indexCoin += 1
    indexMoney = coins[indexCoin]
  } else if (indexMoney < money) {
    indexMoney += 1
  }

  return changeRecTer(money, coins, indexCoin, indexMoney, result)
}

const changeHF = (money, coins, change = [], res = []) => {
  if (money === 0) return res.push(change)
  if (money < 0) return 0
  coins.reduce((a, c, i) => changeHF(money - c, coins.slice(i), change.concat(c), res), 0)
  return res
}

const countWaysToCountMemo = (num, count = 1, memoize = {}) => {
  if (num < 0) return 0
  if (`${num},${count}` in memoize) return memoize[`${num},${count}`]
  if (num == 0) return 1
  if (count > num) return 0

  memoize[`${num},${count}`] = countWaysToCountMemo(num, count + 1, memoize) + countWaysToCountMemo(num - count, count, memoize)

  return memoize[`${num},${count}`]
}

console.time("changeRec")
// console.log(changeRec(120, [2, 5, 7]))
const result1 = changeRec(50, [2, 5, 7])
console.timeEnd("changeRec")

console.time("changeTab")
// console.log(changeTab(20, [2, 5, 7]))
const result2 = changeTab(50, [2, 5, 7])
console.timeEnd("changeTab")

console.time("changeTab2")
// console.log(changeTab2(20, [2, 5, 7]))
const result2Bis = changeTab2(50, [2, 5, 7])
console.timeEnd("changeTab2")

console.time("changeHF")
// console.log(changeHF(20, [2, 5, 7]))
const result3 = changeHF(50, [2, 5, 7])
console.timeEnd("changeHF")

console.time("changeRecTer")
// console.log(changeRecTer(12, [2, 5, 7]))
const result4 = changeRecTer(50, [2, 5, 7])
console.timeEnd("changeRecTer")
