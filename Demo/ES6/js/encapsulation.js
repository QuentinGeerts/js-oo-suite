class Personne {

    // Attributs
    #_nom
    #_prenom
    #_sexe
    #_dateNaissance

    // Constructeur
    constructor (nom, prenom, sexe, dateNaissance) {
        console.log("Personnée créée");
        this.#_nom = nom
        this.#_prenom = prenom
        this.#_sexe = sexe
        this.#_dateNaissance = dateNaissance
    }

    parler (message) {
        return `${this.#_prenom} dit "${message}"`
    }

    // Getters et Setters
    // nom () { return this.#_nom }
    get nom () { return this.#_nom }
    set nom (nouveauNom) { this.#_nom = nouveauNom }

    get nomComplet () { return this.#_nom + ' ' + this.#_prenom }
}

let p = new Personne('Geerts', 'Quentin', 'M', new Date("1996-04-03"))

// console.log('p.#_nom :>> ', p.#_nom);
// console.log('p.nom() :>> ', p.nom());
console.log('p.nom :>> ', p.nom);

p.nom = 'Person'

console.log('p.nom :>> ', p.nom);