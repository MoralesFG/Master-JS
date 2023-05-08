'use strict'

var categorias = ["Acción", "Terror", "Amor"];
var peliculas = ["Titanic", "LQSA", "Los simpsons"];

var cine = [categorias, peliculas];

var elemento = ""; //empieza estando vacía para introducir peliculas

do {
    elemento = prompt("introduce tu pelicula");
    peliculas.push(elemento);
} while (elemento != "ACABAR");

peliculas.pop(elemento); //elimina el último elemento del array, para que no aparezca "ACABAR". Si hacemos mas .pop se irán borrando los elementos que siguen al último, penúltimo etc, de principio a fin.

//peliculas.push; con push añadimos elementos al array
console.log(peliculas);

//con el método .split convertimos un string en un array.

//con .sort ordenamos un array (por defecto se ordena alfabéticamente). Ejemplo peliculas.sort
// con .reverse le damos la vuelta directamente al array. Ejemplo peliculas.reverse