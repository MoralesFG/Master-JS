'use strict'

//Transformación de cadenas de texto. Cómo transformar el número a un string con .toString

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "ES MUY BUEN CURSO";

var dato = numero.toString();
    dato = texto1.toUpperCase(); //para convertirlo en mayusculas
    dato = texto2.toLowerCase(); //para convertirlo en minusculas

console.log(dato);

//Calcular la longitud del texto con .length

var nombre = "Holaaaaaa";

console.log(nombre.length);

//Concatenar - unir textos

var texto_total = texto1 + " " + texto2;

console.log(texto_total);