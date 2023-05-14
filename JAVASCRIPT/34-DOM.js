'use strict'

//DOM - Document object mode

//Conseguir elementos con id concreto
var caja = document.getElementById(micaja); //otra forma de hacerlo es la de abajo
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto de la caja desde js";

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var contenidos = todosLosDivs[2]; //veremos lo que pone en el segundo div del html porque hemos seleccionado ese elemento del array.
contenidos.innerHTML = "otro texto nuevvoooo"; //de esta forma hacemos que cambie lo que ponía en el segundo div.

console.log(contenidos);

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
var div;

for (div in divsRojos) {
    divsRojos[div].style.background = "red";
}

console.log(divsRojos);

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Query selector 
var id = document.querySelector('#encabezado');
console.log(id);

