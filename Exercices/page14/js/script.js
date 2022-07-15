import { Chien } from "../models/Chien.js";

let chien1 = new Chien('Clifford', 'Chihuahua', 'rouge')

console.log(chien1);

chien1.waff();
chien1.medaille();

chien1.addRole("Chien de garde")

console.log(chien1);