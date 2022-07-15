import { Monstre } from './Monstre.js';
import { Personnage } from './Personnage.js';

class Heros extends Personnage {

    constructor (pseudo) {
        super(pseudo)

        this.or = 0
        this.cuir = 0
    }

    loot (monstre) {

        if (!(monstre instanceof Monstre)) return

        if ("or" in monstre) {
            this.or += monstre.or
            monstre.or = 0
        }

        if ("cuir" in monstre) {
            this.cuir += monstre.cuir
            monstre.cuir = 0
        }
    }

}

class Humain extends Heros {

    constructor (pseudo) {
        super(pseudo)
    }

}

class Nain extends Heros {

    constructor (pseudo) {
        super(pseudo)
    }

}

export { Heros, Humain, Nain }