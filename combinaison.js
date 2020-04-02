let countChange = async (amount, coins, change = [], res = []) => {
  let [coin, ...rest] = coins
  
  if (!coin)       return 0
  if (amount <  0) return 0
  if (amount == 0) return res.push(change)
  
  await countChange(amount - coin, coins, change.concat([coin]),res) 
  await countChange(amount, rest, change,res)

  return res
}

console.time('tt') 
countChange(36, [3,5,8,13]).then(data => {
  console.log(data)
  console.timeEnd('tt')
})

let combi = (arr, res = [], index1 = 0, index2 = 1) => {
  if(arr[index1] !== arr[index2]) {
    (arr[index1] > arr[index2])? res.push(`${arr[index1]},${arr[index2]}`) : res.push(`${arr[index2]},${arr[index1]}`)
  }
  if (index2 < arr.length - 1) {
    index2++
    combi(arr, res, index1, index2)
  }
  else if(index1 < arr.length -1){
    index2 = 0
    index1++
    combi(arr, res, index1, index2)
  }

  return res.filter((couple,index,array) => array.indexOf(couple) === index)
}

// console.log(combi([6,1,4,12,3,78,56]))
