const importarGato = require('./gato.js')

let gato1 = { ...importarGato.gato }
let gato2 = { ...importarGato.gato }

console.log('\n*** inicial ***')
console.log('estado gato1:',gato1.estado())
console.log('estado gato2:',gato2.estado())

console.log('\n*** pasado un tiempo ***')
gato1.tiempo(10)
gato2.tiempo(10)
console.log('estado gato1:',gato1.estado())
console.log('estado gato2:',gato2.estado())

console.log('\n*** comer, dormir y jugar ***')
gato1.comer(); gato1.dormir(); gato1.jugar()
gato2.comer(); gato2.dormir(); gato2.jugar()
console.log('estado gato1:',gato1.estado())
console.log('estado gato2:',gato2.estado())
