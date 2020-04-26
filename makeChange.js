const changeRec = (amount, coins, change = [], res = []) => {
  let [coin, ...rest] = coins
  
  if (!coin || amount <  0) return 0
  if (amount == 0)          return res.push(change)
  
  changeRec(amount - coin, coins, change.concat([coin]),res) 
  changeRec(amount, rest, change,res)
  
  return res
}

const change2Loop = (money, coins, res = [[[null]]].concat(Array(money).fill([]))) => {
  for(let iCoin=0;iCoin<res.length;iCoin++)
    for(let iMoney=coins[iCoin];iMoney<=money;iMoney++){
      // this variable contains the new change for the current iMoney
      let newChg = (res[iMoney-coins[iCoin]])
      /* we check the change value for the current chane + the coin 
      and update the res (for each change previously calculated)
      We filter the original null value from the parameter(first value of res) */
      newChg = newChg.map(x => x.concat(coins[iCoin])).map(x => x.filter(xx => !!xx))
      // We add the new change to the res
      res[iMoney] = res[iMoney].concat(newChg)
    }

  return res
}

const changeRecTer = (money, coins , indexCoin = 0, indexMoney = coins[0], result = [[[null]]].concat(Array(money).fill([]))) => {
  //Here , all the combination have been done we return the result(end of reccursion)
  if(indexCoin == coins.length) return result[money]
  // If the array is not initialize , we create it
  let newChg = (result[indexMoney-coins[indexCoin]] || [])
  /* we check the change value for the current chane + the coin 
  and update the result (for each change previously calculated)
  We filter the original null value from the parameter(first value of result) */
  newChg = newChg.map(x => x.concat(coins[indexCoin])).map(x => x.filter(xx => !!xx))
  // We add the new change to the result
  result[indexMoney] = result[indexMoney].concat([...newChg])    
  // We handle the indexes for the reccursion
  if(indexMoney == money && indexCoin < coins.length) {
    indexCoin += 1
    indexMoney = coins[indexCoin]
  }
  else if(indexMoney < money) {
    indexMoney += 1
  }
  
  return changeRecTer(money, coins , indexCoin , indexMoney, result)
}

const changeHF = (money, coins , change = [] ,res = []) => {
  if (money === 0) return res.push(change)
  if (money < 0 )  return 0
  coins.reduce((a,c,i) => a + changeHF(money - c, coins.slice(i) , change.concat(c) , res), 0)
  return res
}

let countWaysToCount = (num,count = 1, memoize = {}) => {
  if(num < 0) return 0
  if(`${num},${count}` in memoize) return memoize[`${num},${count}`]
  if(num == 0) return 1
  if(count > num) return 0
  
  memoize[`${num},${count}`] = countWaysToCount(num ,count+1,memoize) + countWaysToCount(num-count,count,memoize)
  
  return memoize[`${num},${count}`]
}

console.time('r');
console.log(countWaysToCount(2000))
console.timeEnd('r');
