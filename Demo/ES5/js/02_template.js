function Personne (prenom, nom, age, genre, interets) {
    this.nomComplet = { prenom, nom }
    this.age = age
    this.genre = genre
    this.interets = interets

    Personne.prototype.sePresenter = function () {
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`
    }
}

let p1 = new Personne('Quentin', 'Geerts', 26, 'homme', ['Développement', 'Musique'])
let p2 = new Personne('Michael', 'Person', 40, 'homme', ['Développement', 'Bière'])

let p3 = new Personne()

with(p3) {
    nomComplet.nom = "nom3"
    nomComplet.prenom = "prenom3"
    estMajeur = true;
    age = 26
}


console.log(p1);
console.log(p2);
console.log(p3);