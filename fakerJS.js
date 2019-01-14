const faker = require('faker')
const _ = require('lodash')

const tabs = [[[2,43,23,54,4]]]

console.log(tabs)
console.log(_.flattenDeep(tabs));

console.log(process.platform);

const firstname = faker.name.firstName()
firstname

// const lastname = faker.name.lastName()
// let date_f = new Date(faker.date.past())
// date_f = Date.parse(date_f)

// console.log(firstname+' '+lastname+' '+new Date(date_f));
