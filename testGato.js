const gato = require('./gato.js')

let gato1 = { ...gato }

gato1.tiempo(0)
gato1.estado()

gato1.tiempo(50)
gato1.estado()

gato1.jugar()
gato1.comer()
gato1.dormir()
gato1.estado()