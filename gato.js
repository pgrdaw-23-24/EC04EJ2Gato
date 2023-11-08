let gato = {
    hambre: 0,
    cansancio: 0,
    felicidad: 100
}

function aleatorio(num) {
    return Math.round(Math.random()*num)
}

function comer() {
    gato.hambre -= aleatorio(10)
}

function dormir() {
    gato.cansancio -= aleatorio(10)
}

function jugar() {
    gato.felicidad += aleatorio(10)
}

function tiempo(t) {    
    gato.hambre += aleatorio(t)
    gato.cansancio += aleatorio(t)
    gato.felicidad -= aleatorio(t)
}

function estado() {
    console.log(gato)
}

module.exports = { gato, tiempo, estado, comer, dormir, jugar }


