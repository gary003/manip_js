let i = 0
const inter = setInterval(() => {
    i += 1
    console.log(i)
}, 1000 )

setTimeout(() => {
    clearInterval(inter)
    console.log("fin")
}, 12000)
