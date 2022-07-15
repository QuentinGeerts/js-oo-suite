function Personne (nom, prenom, sexe, dateNaissance, interets) {

    // Caractéristiques
    this.nom = nom
    this.prenom = prenom
    this.sexe = sexe
    this.dateNaissance = dateNaissance
    this.interets = interets

    // Actions
    Personne.prototype.parler = function (message, destinataire = null) {

        if (message == undefined) return

        if (!destinataire) console.log(`${this.prenom} dit tout haut : "${message}"`)
        else {
            if (destinataire instanceof Personne)
                console.log(`${this.prenom} dit à ${destinataire.prenom} : "${message}"`)
            else
                console.log(`${this.prenom} dit à un inconnu : "${message}"`)

        }

    }

}

export { Personne }