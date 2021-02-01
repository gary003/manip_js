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

// readableStream2.on('data',(chunk) => {
//   console.log(chunk.toString())
// })

async function * data(){
  yield 'hello'
  yield 'bonjour'
  yield 'hi'
}

const writeableStream2 = new Stream.Writable()

writeableStream2._write = (chunk,encoding,cb) => {
  console.log(chunk.toString())
  cb()
}

// writeableStream2._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   next()
// }

readableStream2.pipe(writeableStream2)
