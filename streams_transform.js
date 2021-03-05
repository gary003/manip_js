//--------------------------------------
// ------   since nodeJS v14   --------- 
// -------------------------------------

/* !!!!! spawn uses streams and no shell (good security),
   while exec uses a buffer , a shell and a lot of memory */
const { spawn } = require('child_process');
const { pipeline } = require('stream')

const options = ['./files/lorem.txt' ]
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

/* !! to use an async function as a transform (made with a generator) stream ,
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

// You can't use the ES6 syntaxe because of the keyword 'this'
const transformStream = through(function(chunk,encoding,next) {
  this.push(`-- ${chunk}`)
  next()
})

const readS  = fs.createReadStream('/home/gary/devs/dev_manips/files/lorem.txt')
const writeS = fs.createWriteStream('/home/gary/devs/dev_manips/files/lolorem.txt')

readS.pipe(transformStream).pipe(writeS)


// --------------------------------------------------
//  -----   from transform(Raw,basic way)   ---------
// --------------------------------------------------
const { Transform } = require('stream')
const fs = require('fs')
const util = require('util')

function Upper(options) {
  // allow use without new
  if (!(this instanceof Upper)) {
    return new Upper(options);
  }

  // init Transform
  Transform.call(this, options);
}

Upper.prototype._transform = function (chunk, enc, callback) {
  // console.log(chunk.toString().toUpperCase())
  const newChunk = chunk.toString().toUpperCase()
  this.push(newChunk)
  return callback()
}

util.inherits(Upper, Transform);

// try it out
const upper = new Upper()
upper.pipe(process.stdout); // output to stdout
upper.write('hello world\n'); // input line 1
upper.write('another line');  // input line 2
upper.end();  // finish
