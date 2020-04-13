const combinationCouple = async (arr , nEnd = arr.length-1 , nInit = 0, allHands = []) => {
  if(!arr.length) return Promise.reject(res)
  if(nEnd == nInit) return Promise.resolve()

  if(arr[nInit] != arr[nEnd])
    res.push([arr[nInit],arr[nEnd]].sort())

  await combination(arr, nEnd, nInit+1, res).catch(err => console.log(err))
  await combination(arr, nEnd-1, nInit, res).catch(err => console.log(err))
  
  res = res.map(val => JSON.stringify(val))
           .filter((val,i,a) => a.indexOf(val) == i)
           .map(x => JSON.parse(x))

  return Promise.resolve(res)
}

const combination = (cards, hand = [], allHands = [], shift = false) => {
  if(cards.length == 0) return null

  const [card, ...rest] = cards
  
  if(shift) allHands.push(hand)

  if(hand.filter(x => x == card).length < cards.filter(x => x == card).length)
    combination(cards, hand.concat([card]),allHands , true) 
  
  combination(rest, hand, allHands,false)
  
  return allHands
}

function* iCombinations2rec(coins,change = [], shift = false){
  if (coins.length == 0) return null

  const [coin, ...rest] = coins  
  
  if(shift) yield change
  
  if(change.filter(x => x == coin).length < coins.filter(x => x == coin).length)
    yield* [...iCombinations2rec(coins, change.concat([coin]) ,true)]
      
  yield* [...iCombinations2rec(rest, change, false)]
    
}

function* iCombinations1rec(arr, k,change = Array.from(arr)){
  if (k <= 0) return [undefined]
  if (k > arr.length) return null
  if (k === 1) yield* change.map(x=>[x])
  for (let i = 0; i < arr.length; ++i)
    for (const x of iCombinations1rec(arr.slice(i+1),k-1)){
      yield [change[i]].concat(x)
    }
}

console.time('e')
const comb = iCombinations2rec(['♠A','♠2','♠8','♠J','♠9','♠K','♠7','♠4','♠Q','♠J','♠2','♠A','♠9','♠Q','♠J','♠8'])
const s = [...comb]
console.log(s);

console.timeEnd('e')
