const faker = require('faker')

const firstname = faker.name.firstName()
const lastname = faker.name.lastName()
let date_f = new Date(faker.date.past())
date_f = Date.parse(date_f)

console.log(firstname+' '+lastname+' '+new Date(date_f));
