const combinationsTreeDP = (cards) => {
  if (cards.length == 0) return [""]
  const [card, ...rest] = cards

  const allcombsWithoutCard = combinationsTreeDP(rest)
  const allCombsWithCard = []

  for (let c of allcombsWithoutCard) {
    allCombsWithCard.push([card, ...c].join(""))
  }

  return [...allCombsWithCard, ...allcombsWithoutCard]
}

const combinationsTree = (cards, hand = [], allHands = [], shift = false) => {
  if (cards.length == 0) return null

  const [card, ...rest] = cards

  if (shift) allHands.push(hand)

  if (hand.filter((x) => x == card).length < cards.filter((x) => x == card).length) combinationsTree(cards, hand.concat([card]), allHands, true)

  combinationsTree(rest, hand, allHands, false)

  return allHands
}

const combinationsTab = (arr) => {
  const table = Array(arr.length + 1).fill(null)
  table[0] = [""]

  for (let i = 0; i < arr.length; i += 1) {
    table[i + 1] = table[i].map((val) => val + arr[i]).concat(table[i])
  }

  return table
}

console.time("combinationsTree")
const comb2 = combinationsTree(["A", "B", "C", "D", "E", "F", "G"])
// console.log(JSON.stringify(comb2, null, 2))
console.timeEnd("combinationsTree")

console.time("combinationsTreeDP")
const comb1 = combinationsTreeDP(["A", "B", "C", "D", "E", "F", "G"])
// console.log(JSON.stringify(comb1, null, 2))
console.timeEnd("combinationsTreeDP")

console.time("combinationsTab")
const comb3 = combinationsTab(["A", "B", "C", "D", "E", "F", "G"])
console.log(comb3)
console.timeEnd("combinationsTab")
