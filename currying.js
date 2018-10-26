const volumeCube = (len) => (wid) => (height) => len * wid * height

console.log(volumeCube(5))

const ii = async (a,b) => a * b

Promise.all([
  ii(4,5),
  ii(12,5)
])
.then( res => console.log(res))
.catch(e => e)

