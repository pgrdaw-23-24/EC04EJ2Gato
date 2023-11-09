import Gato from './Gato.js'

let gato1 = new Gato()
let gato2 = new Gato()

console.log('*** estado inicial ***')
console.log('estado gato1:', gato1.estado())
console.log('estado gato2:', gato2.estado())

console.log('\n*** modificar estado ***')
gato1.hambre = 30; gato1.cansancio = 40; gato1.felicidad = 70;
gato1.hambre = 10; gato1.cansancio = 20; gato1.felicidad = 80;

console.log('estado gato1:', gato1.estado())
console.log('estado gato2:', gato2.estado())

console.log('\n*** pasado un tiempo ***')
gato1.tiempo(10)
gato2.tiempo(10)
console.log('estado gato1:', gato1.estado())
console.log('estado gato2:', gato2.estado())

console.log('\n*** comer, dormir y jugar ***')
gato1.comer(); gato1.dormir(); gato1.jugar()
gato2.comer(); gato2.dormir(); gato2.jugar()
console.log('estado gato1:', gato1.estado())
console.log('estado gato2:', gato2.estado())