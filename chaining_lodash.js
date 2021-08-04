const _ = require("lodash")

const tab = ["13", null, null, 34, "-345", 7, -98, 6, -54, undefined, "345", 7, 98]
const groupVanillaJS = tab
  .filter((val) => ![undefined, null].includes(val))
  .map((val) => parseInt(val))
  .slice(1, 9)
  .reduce((group, v) => {
    let a = Math.sign(v)
    group[a] = group[a] || []
    group[a].push(v)
    return group
  }, {})

const groupLodashJS = _.chain(tab)
  .filter((val) => ![undefined, null].includes(val))
  .map((val) => parseInt(val))
  .slice(1, 9)
  .groupBy(Math.sign)
  .value()

const gLo = groupLodashJS //?.
const gJS = groupVanillaJS //?.

console.log(gLo)
console.log(gJS)

const s = "azerty poiuytrre ipsuuu teea cup pick up now the upside"

const maxOccurrence = (letter) => {
  return _.chain(s)
    .split("")
    .countBy((l) => l == letter)
    .value().true
}

console.log(maxOccurrence("u"))

const max_letter = () =>
  Promise.resolve(
    _.chain(s)
      .split("")
      .filter((x) => x != " ")
      .countBy()
      .thru((myself) => {
        const maxi = _(myself).chain().values().max().value()
        return _.pickBy(myself, (v, k) => v == maxi)
      })
      .value()
  )

max_letter()
  .then((val) => console.log(val))
  .catch((err) => console.log(err))

const ob = {
  a: 2,
  c: 11,
  r: 12,
  e: 6,
  i: 1,
  r: 7,
  e: 18,
  k: 5,
  m: 4,
  p: 3
}

const rr = _.chain(ob)
  .invert()
  .pickBy((val, key) => key >= 7)
  .mapValues((val) => val.toUpperCase())
  .value()

rr
