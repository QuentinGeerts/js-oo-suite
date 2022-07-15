import { De } from "./De.js"

class Personnage {

    constructor (pseudo) {
        this.de4 = new De(4)
        this.de6 = new De(6)

        this.pseudo = pseudo
        this.force = this.getStats()
        this.endurance = this.getStats()
        this.pv = this.endurance + this.modificateur(this.endurance)
    }

    frapper(cible) {  

        if (cible == this || !(cible instanceof Personnage) || cible.pv <= 0) return

        let degats = this.de4.lancer() + this.modificateur(this.force)
        cible.pv -= degats
        console.log(`${this.pseudo} a infligé ${degats} points de dégats à ${cible.pseudo}`)
    }

    getStats () {
        let stats = []

        for (let i = 0; i < 4; i++) {
            stats[i] = this.de6.lancer()
        }

        stats.sort((a, b) => b - a)

        stats.pop()

        // console.log(stats);

        // return stats[0] + stats[1] + stats[2]
        return stats.reduce((acc, current) => acc + current, 0)
    }

    modificateur (stats) {
        // if (stats < 5) return -1
        // else if (stats < 10) return 0
        // else if (stats < 15) return 1
        // else return 2

        return stats < 5 ? -1 : stats < 10 ? 0 : stats < 15 ? 1 : 2
        // Ternary operator : (condition) ? valeurVrai : valeurFaux
    }

}

export { Personnage }