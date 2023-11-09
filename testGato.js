const importarGato = require('./gato.js')

let gato1 = { ...importarGato.gato }
let gato2 = { ...importarGato.gato }

//inicial
console.log('\n*** inicial ***')
console.log('estado inicial gato1:  ',gato1.estado())
console.log('estado inicial gato2:  ',gato2.estado())

//gato1
console.log('\n*** gato1 ***')
gato1.tiempo(10)
console.log('pasado un tiempo:      ',gato1.estado())
gato1.comer(); gato1.dormir(); gato1.jugar()
console.log('comer, dormir y jugar: ',gato1.estado())

//gato2
console.log('\n*** gato2 ***')
gato2.tiempo(20)
console.log('pasado un tiempo:      ',gato2.estado())
gato2.comer(); gato2.dormir(); gato2.jugar()
console.log('comer, dormir y jugar: ',gato2.estado())

//final
console.log('\n*** final ***')
console.log('estado final gato1:    ',gato1.estado())
console.log('estado final gato2:    ',gato2.estado())