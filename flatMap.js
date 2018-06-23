const fs = require('fs')
const _ = require('lodash')

const fetch_file = file => {
  return new Promise((res,rej) => {
    fs.readFile(file,'utf8',(err,data) => {
      return err? rej(err) : res(data)
    })
  })
}

const files = ["files/lorem.txt",'files/conf.json']
const res =
  _(files)
  .flatMap(f => fetch_file(__dirname+'/'+f))
  .flatMap(f => f)
  .value()

res

// Promise.all(res)
//   .then((r) => console.log(r))
//   .catch((r) => console.log(r))
