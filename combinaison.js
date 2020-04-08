const { parse } = require("path")
const { map } = require("bluebird")

const changeRec = (amount, coins, change = [], res = []) => {
  let [coin, ...rest] = coins
  
  if (!coin || amount <  0) return 0
  if (amount == 0)          return res.push(change)
  
  changeRec(amount - coin, coins, change.concat([coin]),res) 
  changeRec(amount, rest, change,res)

  return res
}

const countChangeLoop = (money, coins) => {
  const arr = new Array(money+1).fill(0);
  arr[0]=1;
  for(let iCoin=0;iCoin<arr.length;iCoin++)
    for(let iMoney=coins[iCoin];iMoney<=money;iMoney++)
      arr[iMoney]+=arr[iMoney-coins[iCoin]];

  return arr[money]
}

const change2Loop = (money, coins) => {
  const arr = new Array(money+1).fill(0);
  arr[0]=[[null]];
  for(let iCoin=0;iCoin<arr.length;iCoin++)
    for(let iMoney=coins[iCoin];iMoney<=money;iMoney++){
      // If the array is not initialize , we create it
      if(!arr[iMoney]) arr[iMoney] = new Array()
      // this variable contains the new change for the current iMoney
      let newChg = (arr[iMoney-coins[iCoin]] || [])
      /* we check the change value for the current chane + the coin 
      and update the arr (for each change previously calculated)
      We filter the original null value from the parameter(first value of arr) */
      newChg = newChg.map(x => x.concat(coins[iCoin])).map(x => x.filter(xx => !!xx))
      // We add the new change to the arr
      arr[iMoney] = arr[iMoney].concat([...newChg])
    }

  return arr[money]
}

const changeRecTer = (money, coins , indexCoin = 0, indexMoney = coins[0], result = [[[null]]].concat(Array(money)) ) => {
  //Here , all the combination have been done we return the result(end of reccursion)
  if(indexCoin == coins.length) return result[money]
  // If the array is not initialize , we create it
  if(!result[indexMoney]) result[indexMoney] = new Array()
  // this variable contains the new change for the current indexMoney
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
// changeRecTer(16,[2,8])
console.log(change2Loop(703,[2,5,7]))
