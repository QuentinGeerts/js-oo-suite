class Personne {
    
    // Attributs
    // nom
    // prenom
    // sexe
    // dateNaissance
    // interets

    // Constructeur
    constructor(nom, prenom, sexe, dateNaissance) {
        console.log("Personnée créée");
        this.nom = nom
        this.prenom = prenom
        this.sexe = sexe
        this.dateNaissance = dateNaissance
    }

    parler(message) {
        return `${this.prenom} dit "${message}"`
    }
}

let p = new Personne('Geerts', 'Quentin', 'M', new Date("1996-04-03"))
let p2 = new Personne('Person', 'Michael', 'M', new Date("1980-05-05"))
let melanie = new Personne('Geerts', 'Mélanie', 'F', new Date('1988-05-08'))

console.log('p :>> ', p);
console.log('p2 :>> ', p2);
console.log('melanie :>> ', melanie);
console.log(p.parler("Bonjour les JS !"));