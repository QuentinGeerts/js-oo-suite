// Notion d'objet en JS
let personne = {}

console.log(personne)

personne = {
    nom: ['Quentin', 'Geerts'],
    age: 26,
    sexe: 'masculin',
    interets: ['Développement', 'One Piece', 'Jeux-vidéos'],
    bio: function () {
        return this.nom[0] + ' ' + this.nom[1] + ' a ' + this.age + ' ans. Il aime ' + this.interets[0]
    },
    salutation: function () {
        return `Bonjour ! Je suis ${this.nom[1]} ${this.nom[0]}`
    }
}

// Notation avec un point

console.warn("Notation avec un point");

// Opérateur d'accès aux membres
console.dir(personne);
console.log(personne.nom[1]);
console.log(personne.salutation());
console.log(personne.bio());

// Sous-espaces de noms

console.warn("Sous-espaces de noms");

personne = {
    nom: {
        prenom: 'Quentin',
        nomFamille: 'Geerts'
    },
    age: 26,
    sexe: 'masculin',
    interets: ['Développement', 'One Piece', 'Jeux-vidéos'],
    bio: function () {
        return this.nom[0] + ' ' + this.nom[1] + ' a ' + this.age + ' ans. Il aime ' + this.interets[0]
    },
    salutation: function () {
        return `Bonjour ! Je suis ${this.nom[1]} ${this.nom[0]}`
    },

    monThis : function () { console.log(this) },
    monThis2: () => { console.log(this) },
}

console.log(personne.nom.prenom);

// Notation avec les crochets
console.log(personne.nom['prenom']);
console.log(personne['nom']['prenom']);

// Création de nouveaux membres

personne['yeux'] = 'marron'
personne.auRevoir = () => 'Au revoir tout le monde !'

console.log(personne.auRevoir());
console.log(personne.yeux);

let userInputMember = 'age';
let userInputValue = 32;

personne[userInputMember] = userInputValue;

console.log(personne.age);

// Mot-clef : this
// Fait référence à l'objet courant 
