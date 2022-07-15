class De {

    constructor(max) {
        this.min = 1
        this.max = max
    }

    lancer () {
        return Math.floor(Math.random() * this.max + this.min)
    }

}

export { De }