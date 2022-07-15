import { Personne } from "./Personne.js"

function Homme (nom, prenom, dateNaissance, interets, aCalvitie) {
    
    Personne.call(this, nom, prenom, 'h', dateNaissance, interets)
    // this.nom = nom
    // this.prenom = prenom
    // this.sexe = 'h'
    // this.dateNaissance = dateNaissance
    // this.interets = interets

    this.aCalvitie = aCalvitie

    Homme.prototype.seRaser = function () { console.log("Je me rase") }
    
}

Homme.prototype = Object.create(Personne.prototype)
Homme.prototype.constructor = Homme

export { Homme }