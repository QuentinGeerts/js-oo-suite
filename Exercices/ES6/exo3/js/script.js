import { Humain } from "../models/Heros.js"
import { Loup, Orque, Dragonnet } from "../models/Monstre.js"

let humain = new Humain("Quentin")

let loup = new Loup("Sif")
let orque = new Orque("Thrall")
let dragonnet = new Dragonnet("Mushu")

console.log('humain :>> ', humain);
console.log('loup :>> ', loup);
console.log('orque :>> ', orque);
console.log('dragonnet :>> ', dragonnet);

humain.frapper(loup)

humain.loot(loup)
humain.loot(orque)
humain.loot(dragonnet)

console.log(humain.force);