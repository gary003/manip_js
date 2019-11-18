const facto = require('./facto')

// for (var i = 0; i < 10000; i++) {
//   facto.rec(150)/*?.*/
// }
// for (var i = 0; i < 10000; i++) {
//   facto.hhf(150)/*?.*/
// }
// for (var i = 0; i < 10000; i++) {
//   facto.loop(150)/*?.*/
// }
// for (var i = 0; i < 10000; i++) {
//   facto.rec_ter(150)//?.
// }

let [...iii] = facto.rec_gen(4)
console.log(iii[iii.length-1])
