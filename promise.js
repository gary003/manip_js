const fs = require('fs')

const fetch_file = file => {
  return new Promise((res,rej) => {
    fs.readFile(file,'utf8',(err,data) => {
      return (err)? rej(err) : res(data)
    })
  })
}

Promise.all([
  ii = fetch_file('./manip_js/files/lorem.txt'),
  tt = fetch_file('./manip_js/files/conf.json') ,
  yy = fetch_file('./manip_js/files/ll.pdf'),
])
//.then(c => c.json())
.then(results => {
  //let conf = JSON.parse(results)
  console.log('__',results)
})
.catch((c) => console.log('-catch-',c))
