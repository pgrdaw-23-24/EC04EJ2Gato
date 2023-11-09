function aleatorio(n) {
    return Math.round(2 * n * Math.random())
}

class Gato {

    constructor() {
        this.hambre = 50
        this.cansancio = 50
        this.felicidad = 50
    }

    estado = function () {
        return {
            hambre: this.hambre,
            cansancio: this.cansancio,
            felicidad: this.felicidad
        }
    }

    tiempo = function (t) {
        this.hambre += aleatorio(t)
        this.cansancio += aleatorio(t)
        this.felicidad -= aleatorio(t)
    }

    comer = () => { this.hambre -= aleatorio(10) }
    dormir = () => { this.cansancio -= aleatorio(10) }
    jugar = () => { this.felicidad += aleatorio(10) }
}

export default Gato