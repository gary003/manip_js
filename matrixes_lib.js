const matrixLib = require('matrix-js')

const arrMatrix = [[-1, 2,5],[3, 1,5]]
const matA = matrixLib(arrMatrix)

console.log(matA.prod(matA.trans))
