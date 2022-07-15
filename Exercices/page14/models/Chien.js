function Chien (nom, race, couleur) {
    this.nom = nom
    this.race = race
    this.couleur = couleur

    Chien.prototype.waff = () => {
        console.log("Waff !")
    }

    Chien.prototype.medaille = () => {
        console.log(`Nom: ${this.nom} Race: ${this.race} Couleur: ${this.couleur}`)
    }

    Chien.prototype.addRole = (role) => {
        this.role = role
    }

}

export { Chien }