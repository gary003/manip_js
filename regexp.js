let reg = /P3.(\d{3,})/g
let reg3 = /(\d)\1{3}/g

let matches = []

let str   = "Bienvenue sur P3543272 , P354368"
let str2  = "P3X4356 P3X3054 P3X3008 planet"
let str3  = "123827363335242"

// while(res = reg.exec(str2)){
//   matches.push(res)
// }

const ll = str3.match(reg3)
console.log(ll)
