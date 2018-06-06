"use strict"
const person = (p_age) => {
  let age = p_age
  const myObj = {
    salutation : () => 'Hello i\'am '+age+' years old',
    getAge : () => age ,
    setAge : (pp_age) => age = pp_age
  }
  return Object.freeze(myObj)
}

const magician = (p_age,p_power) => {
  let power = p_power

  // super constructor
  const ob = person(p_age)

  const ob2 = {}
  ob2.getPower   = () => power
  ob2.salutation = () => 'Hello i\'am the geat wizard'
  ob2.setPower   = (p) => power = p

  const ob3 = Object.assign({},ob,ob2)

  return Object.freeze(ob3)
}

for (var i = 0; i < 100000; i++) {
  const m = magician()
}

const m = magician(95,124)
// Object.getPrototypeOf(m)
m.salutation()
m.setPower(23)
m.getPower()
m.getAge()

const p = person(65)
//p.age = 33
p.salutation()
p.setAge(45)
p.getAge()
