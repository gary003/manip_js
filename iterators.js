let iterator = "Qui?"[Symbol.iterator]() //?

const sizes = ["tiny","little","medium","big","huge"]
const astres = ["sun","comet","planet","nova"]

const iteraMaker = function* () {
  let ee
  while (Math.random() < 0.8) {
    let size = sizes[Math.floor((Math.random() * sizes.length))]
    let astretype = astres[Math.floor((Math.random() * astres.length))]
    yield size+" "+astretype
  }
}

const iter = iteraMaker()

let ii
do{
  ii = iter.next()
  !ii.done ? console.log(ii) : ii
}while(!ii.done)
