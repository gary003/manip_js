const Pers = function() {
  this.id = "12AA",
  this.age = 19,
  this.poids = 102
  this.sayHello = () => {
    return `hello everyone my id is ${this.id}`
  }
}

const marie = new Pers()
console.log(marie.sayHello())
