const volumeCube = (len) => (wid) => (height) => {
  return len * wid * height
}

console.log(volumeCube(5)(5)(5))
