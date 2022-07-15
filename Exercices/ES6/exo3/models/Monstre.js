import { De } from './De.js';
import { Personnage } from './Personnage.js';

class Monstre extends Personnage {

    constructor (pseudo) {
        super(pseudo)
    }

}

class Loup extends Monstre {

    constructor (pseudo) {
        super(pseudo)
        this.cuir = this.de4.lancer()
    }

}
class Orque extends Monstre {

    constructor (pseudo) {
        super(pseudo)
        this.or = this.de6.lancer()
    }

    get force () { return super.force + 1 }

}
class Dragonnet extends Monstre {

    constructor (pseudo) {
        super(pseudo)
        this.cuir = this.de4.lancer()
        this.or = this.de6.lancer()
    }

    get endurance () { return super.endurance + 1 }
}

export { Monstre, Loup, Orque, Dragonnet }