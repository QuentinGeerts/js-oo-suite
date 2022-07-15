class Personne {

    // Constructeur
    constructor (nom, prenom, sexe, dateNaissance) {
        console.log("Personnée créée");
        this.nom = nom
        this.prenom = prenom
        this.sexe = sexe
        this.dateNaissance = dateNaissance
    }

    parler (message) {
        return `${this.prenom} dit "${message}"`
    }
}

class Homme extends Personne {

    constructor (nom, prenom, dateNaissance, longueurBarbe) {
        super(nom, prenom, 'H', dateNaissance)
        // this.nom = nom
        // this.prenom = prenom
        // this.sexe = 
        // this.dateNaissance = dateNaissance
        this.longueurBarbe = longueurBarbe
    }

    parler (message) {
        return super.parler(message) + ` d'une voix grave !`
    }

}

class Femme extends Personne {
    constructor (nom, prenom, dateNaissance, estEnceinte) {
        super(nom, prenom, 'F', dateNaissance)
        // this.nom = nom
        // this.prenom = prenom
        // this.sexe = 'F'
        // this.dateNaissance = dateNaissance
        this.estEnceinte = estEnceinte
    }

    parler (message) {
        return `${this.prenom} chuchote "${message}"`
    }

    accoucher() {
        if(!this.estEnceinte) return
        
        console.log(`${this.prenom} accouche`);

        return Math.floor(Math.random() * 2) % 2 
            ? new Homme('Anonyme', 'Anonyme', new Date(), 0)
            : new Femme('Anonyme', 'Anonyme', new Date(), false)

    }
}

let p = new Personne('Geerts', 'Quentin', 'M', new Date("1996-04-03"))

let homme = new Homme('Geerts', 'Quentin', new Date(), 1)
let femme = new Femme('Geerts', 'Mélanie', new Date(), false)

console.log('p :>> ', p);
console.log('homme :>> ', homme)
console.log('femme :>> ', femme)


console.log(homme instanceof Personne);
console.log(femme instanceof Personne);

console.log(homme.parler('Je suis un homme'));
console.log(femme.parler('Je suis une femme'));

femme.accoucher()
femme.estEnceinte = true
let bebe = femme.accoucher()
console.log(bebe)