const logU = require('log-update');
let time = 0

setInterval( () => {
  time += 1500
  logU("-----------\n"+time+"\n-----------\n")
},1500)
