//Importacion CommonJS

// const { obtenertitulo, obtenerdocente } = require("./src/funciones"); //se importo descostruyendo
// const { boot } = require("./src/objetos");

// const { cursoboot, dificultad, nivel } = boot;

// console.log(obtenertitulo());
// console.log(obtenerdocente("Jhonathan", "Devrier"));
// console.log(cursoboot);
// console.log("La dificultad del curso es ", dificultad);
// console.log("el nivel es ", nivel);


//Importacion con Module ES6

import { obtenertitulo, obtenerdocente } from "./src/funciones.js";
import { boot } from "./src/objetos.js";

const { cursoboot, dificultad, nivel } = boot;

console.log(obtenertitulo());
console.log(obtenerdocente("Jhonathan", "Devrier"));
console.log(cursoboot);
console.log("La dificultad del curso es ", dificultad);
console.log("el nivel es ", nivel);
