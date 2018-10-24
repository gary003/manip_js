const delay = require('./delayPromise')

delay(2000).then(() => console.log("1"))
delay(2500).then(() => console.log("2"))
delay(4200).then(() => console.log("3"))
