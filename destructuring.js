const _ = require("lodash")

const box = {
  content: ["screwdriver", "screw", "hammer"],
  weight: 122,
  height: 11,
  color: "red"
}

const { content, ...metadata } = box

const inside = content.map((x) => _.capitalize(x))

console.log(inside)
console.log(metadata)

const new_box = { inside, ...metadata }

console.log(new_box)
