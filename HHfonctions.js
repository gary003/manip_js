const _ = require('lodash')
const fs = require('fs')

const numbers = [176,-12,6,16,122,199,9,55]
const vals = ["176","-12","6",undefined,"16","122",null,"199","9","55",null,"1","16","-55"]
const sentences = ["prix: 176","prix : 112"]
const usersString = fs.readFileSync(__dirname+'/files/users.json','utf8')
const users = JSON.parse(usersString)

const check = numbers.every((val) => val >= -9 )
const subSum  = numbers.slice(2,5).reduce((acc,val) => acc + val , 0)

let result = sentences
  .map(val => val.match(/prix *: *(\d+)/)[1])
  .map(val => parseInt(val))
  .reduce( (acc,val) => acc + val , 0 )

const int_vals = vals.filter(val => ! [undefined,null].includes(val))
                     .map( v => parseInt(v))

const mean_vals = _.mean(int_vals)
mean_vals

const isRussian = (us) => us.country == 'ru'
const isBrazilian = (us) => us.country == 'br'
const isKenian = (us) => us.country == 'ke'

const russianUsers = users.filter(isRussian)
const brazilianUsers = users.filter(isBrazilian)
const kenianUsers = users.filter(isKenian)

let countriesUsers = users
                      .reduce((acc,val) => { acc.push(val.country) ; return acc },[])
                      .sort((a,b) => a[1] > b[1])

let countries = users
                  .map(val => val.country)
                  .filter((val,i,me) => me.indexOf(val) === i)

const biggestName = users.reduce((a,b) => (a.firstname.length < b.firstname.length)? b : a ,users[0])

const max = numbers.reduce( (a,b) => Math.max(a,b))
const index_max = numbers.findIndex((val) => val == max)

const group = users
  .reduce( (group,us) => {
    group[us.group] = group[us.group] || []
    group[us.group].push(us.lastname)
    return group
  },{})

const sexes = users
  // recuperation du sex --> ['f','m','f','f','m','m']
  .map( us => us.sex )
  // uniq --> ['f','m']
  .filter( (sex,i,arr) => arr.indexOf(sex) == i)

sexes

const workGroup =  _.chain(users)
                    .groupBy(us => [us.sex,us.group])
                    .mapValues((v,k) => v.map(c => c.lastname))
                    .value()

workGroup

// for (var i = 0; i < 1000; i++) {
//   Array.from(numbers).sort( (a,b) =>  b - a)[0] //?.
//   Math.max(...numbers) //?.
//   Math.max.apply(Math,numbers) //?.
//   Math.max.apply(null,numbers) //?.
//   numbers.reduce( (a,b) => Math.max(a,b)) //?.
//   numbers.reduce( (a,b) => (a > b)? a : b) //?.
// }
