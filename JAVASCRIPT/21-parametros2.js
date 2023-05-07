'use strict'

//Parámetros rest y spread

//PARÁMETRO REST: Al poner los 3 puntos en resto frutas le estamos diciendo que muestre todos los parámetros que estén fuera de los dos primeros, ya que si hay más de 3 parámetros y no ponemos los ... solo mostrará esos 3 primeros, dejando de lado el resto, pero de esta forma aparecen todos.

function listadoFrutas (fruta1, fruta2, ...resto_frutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log("Resto de frutas: " + resto_frutas);
}

listadoFrutas ("naranja", "manzana", "sandía", "melocoton", "aguacate");

//PARÁMETRO SPREAD: parecido al anterior, al usar los ... delante de frutas, haremos que llame a los dos parámetros que aparecen dentro de esta directamente. 

var frutas = ["Naranja", "Manzana"];
listadoFrutas (...frutas, "sandía", "melocoton", "aguacate");