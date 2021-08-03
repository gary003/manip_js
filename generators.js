let iterator = "Qui?"[Symbol.iterator]()

const sizes = ["tiny", "little", "medium", "big", "huge"]
const astres = ["sun", "comet", "planet", "nova"]

const planetsMakerAsync = async function* () {
  while (Math.random() < 0.9) {
    let size = sizes[Math.floor(Math.random() * sizes.length)]
    let astretype = astres[Math.floor(Math.random() * astres.length)]
    yield size + " " + astretype
  }
}

async function example() {
  for await (const corps of planetsMakerAsync()) {
    console.log(corps)
  }
}

example()

const hello = () => ({ salutation: "Hello" })

const gen = function* () {
  yield 0
  yield [1, 2, 3]
  yield* [1, 2, 3]
  yield hello().salutation
}

console.log(...gen())

const sizes2 = ["tiny", "little", "medium", "big", "huge"][Symbol.iterator]()

console.log(sizes2.next())
