'use strict'

//Arrays multidimensionales: son arrays dentro de arrays, por ejemplo categorías y temáticas

var categorias = ["Acción", "Terror", "Amor"];
var peliculas = ["Titanic", "LQSA", "Los simpsons"];

var cine = [categorias, peliculas];

console.log(cine[0][1]); //para acceder a categorías y dentro de esta al elemento que queramos, en este caso categorias > terror
console.log(cine[1][2]) //en este caso peliculas > los simpsons