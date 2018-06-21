const _ = require('lodash')

tab = ["13",null,null,34,6,-54,undefined,'345',7,98]

const maxi = _.chain(tab)
              .filter((val) => ! [undefined,null].includes(val))
              .map((val) => parseInt(val))
              .slice(1,5)
              .value()

maxi

const s = "azerty poiuytre ipsuuu teea cup pick up"

const maxOccurrence =  _.chain(s)
                        .split('')
                        .countBy(o => o == "a")
                        .value()

maxOccurrence

const max_letter = Promise( resolve => {
                    _.chain(s)
                    .split('')
                    .countBy()
                    .pickBy((value,key) => value > 4 )
                    .value()
                  }

max_letter

const ob = {
  'a':2,
  'c':3,
  'r':4,
  'e':6,
  'i':1,
  'r':4,
  'e':4
}

const rr = _.chain(ob)
            .invert()
            .pickBy((val,key) => key > -4 )
            .value()

rr
