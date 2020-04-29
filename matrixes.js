const determinant = (m) => {
  if(m.length == 1) return m[0][0]
  if(m.length == 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0])
  
  let sub_matrixes = getAllSubMatrixes(m)
  
  return sub_matrixes.reduce((acc,mat,index) => {
    acc = (index % 2 == 0)
    ? acc + (determinant(mat) * m[0][index])
    : acc - (determinant(mat) * m[0][index])    
    return acc
  },0)
}

const getAllSubMatrixes = (mat ,indexCoef = 0,result = []) => {
  if(indexCoef == mat.length) return result
  let subMatrix = []
  mat.slice(1).map((val) => {
    const arrayLine = Array.from(val)
    arrayLine.splice(indexCoef,1)
    return subMatrix.push(arrayLine)
  })
  result.push(subMatrix)
  return getAllSubMatrixes(mat ,indexCoef+1,result)
}

const mamat = [
  [-3,4,-5,5,8,12,18,12,32,8],[-1,-7,7,-10,10,8,-3,12,32,8],[4,3,-3,1,5,4,-3,12,32,8],
  [4,9,3,-4,-5,8,-3,12,32,8],[2,9,-3,-4,-2,-8,-3,12,11,8],[4,11,-3,-4,-5,-8,-3,12,-4,8],
  [2,9,-3,-4,-5,-8,-3,12,32,8],[-3,4,-5,5,8,12,18,12,7,8],[-1,-7,7,-10,10,8,-3,1,2,8],
  [1,3,-3,1,5,4,-3,12,-2,3]
]

console.time('t');
console.log(determinant(mamat));
console.timeEnd('t')
