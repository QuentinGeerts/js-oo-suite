import { Personne } from "./Personne.js"

function Femme (nom, prenom, dateNaissance, interets, nbSacsAMain) {
    
    Personne.call(this, nom, prenom, 'f', dateNaissance, interets)
    
    // this.nom = nom
    // this.prenom = prenom
    // this.sexe = 'f'
    // this.dateNaissance = dateNaissance
    // this.interets = interets
    
    this.nbSacsAMain = nbSacsAMain
}

Femme.prototype = Object.create(Personne.prototype)
Femme.prototype.contructor = Femme

export { Femme }