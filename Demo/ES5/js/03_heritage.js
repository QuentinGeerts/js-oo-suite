import { Personne } from "../models/Personne.js";
import { Homme } from "../models/Homme.js";
import { Femme } from "../models/Femme.js";

let p1 = new Personne('Geerts', 'Quentin', 'h', new Date(1996, 3, 3), ['dev', 'js'])
let p2 = new Personne('Geerts', 'Benjamin', 'h', new Date(1998, 11, 26), ['bus', 'crypto'])

p1.parler("Coucou tout le monde !", p2)

let michael = new Homme('Person', 'Michael', new Date(), [], false)
let melanie = new Femme('Geerts', 'Mélanie', new Date(), [], 10)

console.dir(michael);
console.dir(melanie);

console.dir(michael instanceof Personne);
console.dir(melanie instanceof Personne);


console.dir(Homme.constructor)
console.dir(Personne.constructor)



michael.parler('Hello Mel', melanie);

melanie.parler('Coucou', michael)

console.log(michael instanceof Personne);
console.log(melanie instanceof Personne);

michael.seRaser()