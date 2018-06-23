const _ = require('lodash')

tab = ["13",null,null,34,6,-54,undefined,'345',7,98]

const maximum =
       _.chain(tab)
        .filter((val) => ! [undefined,null].includes(val))
        .map((val) => parseInt(val))
        .slice(1,5)
        .value()

maximum

const s = "azerty poiuytrre ipsuuu teea cup pick up"

const maxOccurrence =  _.chain(s)
                        .split('')
                        .countBy(o => o == "a")
                        .value()

maxOccurrence

const max_letter = () => {
  return new Promise( (resolve,reject) => {
    return resolve(
            _(s)
              .split('')
              .countBy()
              .thru( value => {
                const maxi = _(value).chain().values().max().value()
                return _.pickBy(value,(v,k) => v == maxi )
              })
              .value()
    )
  })
}

max_letter()
  .then( val => console.log(val) )
  .catch(err => console.log(err))

const ob = {
  'a':2,'c':3,'r':4,
  'e':6,'i':1,'r':4,
  'e':4
}

const rr = _.chain(ob)
            .invert()
            .pickBy((val,key) => key > -4 )
            .value()

rr
