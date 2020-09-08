//--------------------------------------
// ------   since nodeJS v14   --------- 
// -------------------------------------

/* !!!!! spawn uses streams and no shell (good security),
   while exec uses a buffer , a shell and a lot of memory */
const { spawn } = require('child_process');
const { pipeline} = require('stream')

const options = ['./files/lorem.txt' ,'./files/lorem2.txt']
const less = spawn('less', options) 

/* beware , the key word 'yield' must be in a 'for of' loop 
   not a '.forEach(() => ...)' */
const transform = async function * (source) {
  for await(const val of source){
    const vv = val.toString('utf8').split(' ')
    for(const v of vv)
      yield v.toString()
  }
}

/* !! to use an async function as a transform stream ,
   you must use 'pipeline' not 'pipe' */
pipeline(
  less.stdout,
  transform,
  process.stdout,
  (err) => console.error(err)
)


// ----------------------------
//  -----   old way   ---------
// ----------------------------
const through = require('through2')
const fs = require('fs')

// You can't use the ES6 syntaxe because of the keyword 'this'
const transformStream = through(function(chunk,encoding,next) {
  this.push(`-- ${chunk}`)
  next()
})

const readS  = fs.createReadStream('./files/lorem.txt')
const writeS = fs.createWriteStream('./files/lolorem.txt')

readS.pipe(transformStream).pipe(writeS)
