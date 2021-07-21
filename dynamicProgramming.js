/*******************************************/
/***********    FIBONACCI       ************/
/*******************************************/
const fibMemo = (num, memo = {}) => {
  if (num in memo) return memo[num]
  if (num <= 2) return 1
  memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo)
  return memo[num]
}
console.time("fibMemo")
console.log(fibMemo(1200))
console.timeEnd("fibMemo")

const fibTab = (num) => {
  const arr = Array(num + 1).fill(0)
  arr[1] = 1

  // Methode 1
  // for(let index = 0; index <= num; index+=1){
  //   index + 1 <= num ? arr[index + 1] += arr[index] : 0
  //   index + 2 <= num ? arr[index + 2] += arr[index] : 0
  // }

  // return arr[num]

  // Methode 2
  const res = arr.reduce((acc, val, index) => {
    index + 1 <= num ? (acc[index + 1] += val) : 0
    index + 2 <= num ? (acc[index + 2] += val) : 0
    return acc
  }, arr)

  return res[num]
}
console.time("fibTab")
console.log(fibTab(1200))
console.timeEnd("fibTab")

/*******************************************/
/*********    GridTraveler       ***********/
/*******************************************/
const gridTravelerMemo = (height, length, memo = {}) => {
  if (`${height}-${length}` in memo) return memo[`${height}-${length}`]
  if (height == 1 && length == 1) return 1
  if (height == 0 || length == 0) return 0
  memo[`${height}-${length}`] = gridTravelerMemo(height - 1, length, memo) + gridTravelerMemo(height, length - 1, memo)
  return memo[`${height}-${length}`]
}

console.time("gridTravelerMemo")
console.log(gridTravelerMemo(35, 35))
console.timeEnd("gridTravelerMemo")

const gridTravelerTab = (height, width, memo = {}) => {
  const arr = Array(height + 1)
    .fill()
    .map((x) => Array(width + 1).fill(0))

  arr[1][1] = 1

  const res = arr.reduce((accH, valH, indexH) => {
    valH.reduce((accW, valW, indexW) => {
      indexH + 1 <= height ? (arr[indexH + 1][indexW] += valW) : 0
      indexW + 1 <= width ? (arr[indexH][indexW + 1] += valW) : 0
      return accW
    })
    return accH
  }, arr)

  return res[height][width]

  // for(let indexH = 0; indexH <= height; indexH +=1)
  //   for(let indexW = 0; indexW <= width; indexW +=1){
  //     if(indexH + 1 <= height) arr[indexH+1][indexW] += arr[indexH][indexW]
  //     if(indexW + 1 <= width) arr[indexH][indexW+1] += arr[indexH][indexW]
  //   }

  // return arr[height][width]
}

console.time("gridTravelerTab")
console.log(gridTravelerTab(35, 35))
console.timeEnd("gridTravelerTab")

/*******************************************/
/*********        canSum         ***********/
/*******************************************/

const canSumMemo = (num, numbers, res = false, memo = {}) => {
  if (num in memo) return memo[num]
  if (num == 0) return true
  if (num < 0) return false

  for (let n of numbers) {
    res = res || canSumMemo(num - n, numbers, res, memo)
  }

  memo[num] = res
  return res
}

console.log(canSumMemo(300, [7, 14]))

const canSumTab = (num, numbers) => {
  const res = Array(num + 1).fill(false)
  res[0] = true

  // res.reduce((acc,val,idx) => {
  //   if(val == true){
  //     numbers.reduce((acc2,val2) => {
  //       if(idx + val2 <= num) res[idx + val2] = true
  //     },0)
  //   }
  // },res)

  for (let i = 0; i < num; i += 1)
    if (res[i] == true) {
      for (let value of numbers) {
        if (i + value <= num) res[i + value] = true
      }
    }

  return res[num]
}

console.log(canSumTab(100, [7, 14]))

/*******************************************/
/*********        howSum         ***********/
/*******************************************/

const howSumMemo = (targetNum, numbers, memo = {}) => {
  if (targetNum in memo) return memo[targetNum]
  if (targetNum == 0) return []
  if (targetNum < 0) return null

  for (let n of numbers) {
    newTarget = howSumMemo(targetNum - n, numbers, memo)
    // console.log(typeof newTarget)
    if (newTarget !== null) {
      memo[targetNum] = [n, ...newTarget]
      return memo[targetNum]
    }
  }
  memo[targetNum] = null
  return null
}

console.log(howSumMemo(300, [7, 14]))

const howSumTab = (targetNum, numbers, memo = {}) => {
  const res = Array(targetNum + 1).fill(null)
  res[0] = []

  for (let i = 0; i < targetNum; i += 1) {
    if (res[i] !== null) {
      for (num of numbers) {
        res[i + num] = [...res[i], num]
      }
    }
  }

  return res[targetNum]
}

console.log(howSumTab(28, [7, 3]))

/*******************************************/
/*****  bestSum (shortest result)  *********/
/*******************************************/

const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]

  if (targetSum == 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const bs = bestSumMemo(targetSum - num, numbers, memo)
    if (bs !== null) {
      const comb = [num, ...bs]
      if (shortestCombination == null || comb.length < shortestCombination.length) {
        shortestCombination = comb
      }
    }
  }

  memo[targetSum] = shortestCombination
  return shortestCombination
}

console.log(bestSumMemo(8, [2, 5, 3]))
console.log(bestSumMemo(100, [30, 25, 2]))

const bestSumTab = (targetSum, numbers, memo = {}) => {
  const result = Array(targetSum + 1).fill(null)
  result[0] = []

  for (let i = 0; i < targetSum; i += 1) {
    if (result[i] !== null) {
      for (let num of numbers) {
        if (i + num <= targetSum) {
          if (result[i + num] === null) result[i + num] = [...result[i], num]
          else {
            result[i + num] = result[i + num].length > [...result[i], num].length ? [...result[i], num] : result[i + num]
          }
        }
      }
    }
  }

  return result[targetSum]
}

console.log(bestSumTab(8, [2, 5, 3, 8]))
console.log(bestSumTab(100, [30, 25, 2]))
