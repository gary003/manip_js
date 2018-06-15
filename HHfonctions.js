const numbers = [176,-12,6,16,122,199,9,55]
const vals = ["176","-12","6",undefined,"16","122",null,"199","9","55",null,"1","16","-55"]
const sentences = ["prix: 176","prix : 112"]

const check = numbers.every((val) => val >= -9 )
const subSum  = numbers.slice(2,5).reduce((acc,val) => acc + val , 0)

let result = sentences
  .map(val => val.match(/prix *: *(\d+)/)[1])
  .map(val => parseInt(val))
  .reduce( (acc,val) => acc + val ,0 )

console.log(typeof(result))

console.log(
  vals
    .filter(val => ! [undefined,null].includes(val))
    .map((val => parseInt(val)))
    .slice(2,-2)
    .filter((val) => val > 12)
    .reduce((acc,val) => acc + val , 0)
)

console.log(Math.pow(2,6))
console.log(Math.log(128)/Math.log(2))
console.log(2**6)

console.log(typeof(undefined))

console.log(check)
console.log(subSum)

const isRussian = (us) => us.country == 'ru'
const isBrazilian = (us) => us.country == 'br'
const isKenian = (us) => us.country == 'ke'

let users = [ {name : 'Yen' , country:'an'},{name : 'Gabriel' , country:'an'},
              {name : 'Marie', country:'be'},{name : 'Gary' , country:'fr'},
              {name : 'Dayanara', country:'br'},{name : 'Yemi' , country:'ke'},
              {name : 'Sean' , country:'ca'},{name : 'Julio' , country:'br'},
              {name : 'Anna' , country:'ca'},{name : 'Xiaoming' , country:'cn'},
              {name : 'Inara' , country:'br'},{name : 'Petter' , country:'sd'},
              {name : 'Igor' , country:'ru'},{name : 'Ricardo' , country:'mx'}]

const russianUsers = users.filter(isRussian)
const brazilianUsers = users.filter(isBrazilian)
const kenianUsers = users.filter(isKenian)

let countriesUsers = users
                      .reduce((acc,val) => { acc.push(val.country) ; return acc },[])
                      .sort((a,b) => a[1] > b[1])
let countries = users
                  .map(val => val.country)
                  .filter((val,i,me) => me.indexOf(val) === i)

console.log(kenianUsers)

console.log(countriesUsers)
console.log(countries)

const biggestName = users.reduce((a,b) => (a.name.length < b.name.length)? b : a ,users[0])

const max = numbers.reduce( (a,b) => Math.max(a,b))
const index_max = numbers.findIndex((val) => val == max)

console.log(
  biggestName,
  max,
  index_max
)

// for (var i = 0; i < 1000; i++) {
//   Array.from(numbers).sort( (a,b) =>  b - a)[0] //?.
//   Math.max(...numbers) //?.
//   Math.max.apply(Math,numbers) //?.
//   Math.max.apply(null,numbers) //?.
//   numbers.reduce( (a,b) => Math.max(a,b)) //?.
//   numbers.reduce( (a,b) => (a > b)? a : b) //?.
// }
