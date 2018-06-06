const _ = require('lodash')

const pushy = (...values) => {
  // In case the user passes an array of args instead of a list of args
  values = _.flatten(values)

  console.log(values)

  values.shift()
  if(values.length > 0)
    pushy(...values)
}

pushy("JS","ruby","PHP","java","kotlin")
