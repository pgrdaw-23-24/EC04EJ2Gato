function aleatorio(n) {
    return Math.round(n / 2 + Math.random() * n)
}

let gato = {
    hambre: 50,
    cansancio: 50,
    felicidad: 50,
    estado: function () {               // devuelve objeto estado
        return {
            hambre: this.hambre,
            cansancio: this.cansancio,
            felicidad: this.felicidad
        }
    },
    tiempo: function tiempo(t) {        // modifica estado con tiempo
        this.hambre += aleatorio(t)
        this.cansancio += aleatorio(t)
        this.felicidad -= aleatorio(t)
    },
    comer: function () { this.hambre -= aleatorio(10) },
    dormir: function () { this.cansancio -= aleatorio(10) },
    jugar: function () { this.felicidad += aleatorio(10) },
}


module.exports = { gato }