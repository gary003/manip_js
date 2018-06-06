const rxjs = require('rxjs')

let observableO = rxjs.Observable.create((observable) => {
  setInterval(() => {
    ran = Math.random()
    if(ran > 0.95)
      observable.error('err -- '+ran)
    else if (ran < 0.05)
      observable.complete('ok -- '+ran)
    else
      observable.next(ran)
  },500)
})

let observer = observableO.subscribe({
    next:(val) => console.log(val),
    error:(val) => {
      console.log(val)
      observer.unsubscribe()
    },
    complete:() => {
      console.log('Completed : < 0.05')
      observer.unsubscribe()
    }
})
