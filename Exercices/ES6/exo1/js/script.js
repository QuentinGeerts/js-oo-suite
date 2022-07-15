import { De } from "../models/De.js";
import { Personnage } from "../models/Personnage.js";

let p = new Personnage("Hakhio")
let monstre = new Personnage("Loup")

let de = new De(6)

console.log(p);
console.log(monstre);

p.frapper(monstre)
monstre.frapper(p)

console.log(p);
console.log(monstre);
