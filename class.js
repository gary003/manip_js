class Pers{

  constructor(nom,age,poids){
    this.nom = nom
    this.age = age
    this.poids = poids
  }

  getAge(){
    return this.age
  }

}

class Magician extends Pers{
  constructor(nom,age,poids,power){
    super(nom,age,poids)
  }

  getPower(){
    return this.power
  }

  fire(){

  }
}

const us = new Pers("Gary",123,107)
const ma = new Magician("Gregory",34,87,127)

console.log(us.getAge())
//console.log(ma.getPower())
console.log(ma);
