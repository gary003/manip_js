const fs = require("fs")
const _ = require("lodash")
const Prom = require("bluebird")

const fetch_file = (file) => {
  return new Promise((res, rej) => {
    fs.readFile(file, "utf8", (err, data) => {
      return err ? rej(err) : res(data)
    })
  })
}

const files = ["files/lorem.txt", "files/ascii.txt"]
// const res =
//   _(files)
//   .map(f => fetch_file(__dirname+'/'+f))
//   .value()

const res = Prom.map(files, (f) => fetch_file(__dirname + "/" + f))
res

// Promise.all(res)
//   .then((r) => console.log(r))
//   .catch((r) => console.log(r))
