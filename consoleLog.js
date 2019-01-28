const tab = [
  {l:12 , a:33 , p:73},
  {l:43 , a:98 , p:25},
  {l:1 , a:76 , p:41}
]

// log avec nom de la variable
console.log({tab});

// timer
console.time("timerTest")
setTimeout(() => console.timeEnd("timerTest") , 2500)
