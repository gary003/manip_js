const fs = require('fs')
const _ = require ('lodash')

const fetch_file = file => {
  return new Promise((res,rej) => {
    fs.readFile(file,'utf8',(err,data) => {
      return (err)? rej(err) : res(data)
    })
  })
}

const getResults = (...values) => {
  values = _.flatten(values)
  const f_files = values.map(file => fetch_file(__dirname+"/"+file))

  return Promise.all(f_files)
                .then(results => results)
                .catch( err => err)
}

getResults("files/lorem.txt",'/files/conf.json').then( res => console.log(res))
