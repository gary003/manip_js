// Creation of a simple read stream
const Stream = require('stream')

/* ************************
 **** deprecated way ! ****
 **************************/ 
const readableStream1 = new Stream.Readable({
  read: () => {}
})

readableStream1.on('data',(chunk) => {
  console.log(chunk.toString())
})

readableStream1.push('hi!')
readableStream1.push('ho!')
// readableStream1.destroy() 
readableStream1.push('hu!')

/* ************************
 **** with a generator ****
 **************************/
const readableStream2 = new Stream.Readable.from(data())

async function * data(){
  yield 'hello'
  yield 'bonjour'
  yield 'hi'
}

const writeableStream2 = new Stream.Writable()

writeableStream2._write = (chunk,encoding,next) => {
  console.log(`${chunk}!`)
  next()
}

readableStream2.pipe(writeableStream2)
