const combinations = (cards, hand = [], allHands = [], shift = false) => {
  if(cards.length == 0) return null

  const [card, ...rest] = cards
  
  if(shift) allHands.push(hand)

  if(hand.filter(x => x == card).length < cards.filter(x => x == card).length)
    combinations(cards, hand.concat([card]),allHands , true) 
  
  combinations(rest, hand, allHands,false)
  
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
const comb = combinations(['♠A','♠2','♠K','♠8','♠5','♠Q','♠9'])
// const s = [...comb]
console.log(comb);
// console.log(s);

console.timeEnd('e')
