const combinationsTree = (cards, hand = [], allHands = [], shift = false) => {
  if (cards.length == 0) return null

  const [card, ...rest] = cards

  if (shift) allHands.push(hand)

  if (hand.filter((x) => x == card).length < cards.filter((x) => x == card).length) combinationsTree(cards, hand.concat([card]), allHands, true)

  combinationsTree(rest, hand, allHands, false)

  return allHands
}

function* iCombinations2rec(coins, change = [], shift = false) {
  if (coins.length == 0) return null

  const [coin, ...rest] = coins

  if (shift) yield change

  if (change.filter((x) => x == coin).length < coins.filter((x) => x == coin).length) yield* [...iCombinations2rec(coins, change.concat([coin]), true)]

  yield* [...iCombinations2rec(rest, change, false)]
}

function* iCombinations1rec(arr, k, change = Array.from(arr)) {
  if (k <= 0) return [undefined]
  if (k > arr.length) return null
  if (k === 1) yield* change.map((x) => [x])
  for (let i = 0; i < arr.length; ++i)
    for (const x of iCombinations1rec(arr.slice(i + 1), k - 1)) {
      yield [change[i]].concat(x)
    }
}

function* iCombinationsTab(arr) {
  const table = Array(arr.length + 1)
  table[0] = [[]]

  for (let i = 0; i < arr.length; i += 1) {
    const subPlusNewCard = table[i].map((x) => [...x, arr[i]])
    table[i + 1] = [...subPlusNewCard, ...table[i]]
    yield* subPlusNewCard
  }
}

console.time("combinationsTree")
const comb1 = combinationsTree(["♣A", "♦2", "♥K", "♠Q", "♠9"])
// console.log(comb1)
console.timeEnd("combinationsTree")

console.time("iCombinations2rec")
const comb2 = [...iCombinations2rec(["♣A", "♦2", "♥K", "♠Q", "♠9"])]
// console.log(comb2)
console.timeEnd("iCombinations2rec")

console.time("iCombinations1rec")
const comb3 = [...iCombinations1rec(["♣A", "♦2", "♥K", "♠Q", "♠9"], 5)]
// console.log(comb3)
console.timeEnd("iCombinations1rec")

console.time("iCombinationsTab")
const comb4 = [...iCombinationsTab(["♣A", "♦2", "♥K", "♠Q", "♠9"])]
// console.log(comb4)
console.timeEnd("iCombinationsTab")
