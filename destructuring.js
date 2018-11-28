const _ = require('lodash')

// makeSound({
//   species:'dog',
//   weight:34,
//   sound:'woof'
// })

// function makeSound({species,sound}){
//   console.log(species+' says '+sound);
// }

const box = {
  'content' : ['screwdriver' , 'screw' , 'hammer'] ,
  'weight' : 12 ,
  'height' : 11 ,
  'color'  : 'red' 
}

const { content , ...metadata } = box  

const inside = content.map(x => {
  return _.capitalize(x)
})

console.log(inside);
console.log(metadata);
 
const new_box = { inside , ...metadata }

console.log(new_box);
