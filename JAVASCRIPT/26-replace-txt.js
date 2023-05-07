'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "ES MUY BUEN CURSO";

var busqueda = texto1.replace("curso", "máster"); //reemplaza primer por segundo parámetro
var busqueda = texto1.slice(10); //le decimos a partir de donde queremos que recorte el string
var busqueda = texto1.split(" "); //el split corta todas las palabras cada vez que encuentra en este caso un espacio y los va agrupando en arrays palabra por palabra, pero le podemos pedir que corte donde queramos
var busqueda = texto1.trim(); //quita los espacios por delante y por detrás que tiene nuestro string, pero solo los sobrantes si hay al principio y al final, no los de enmedio.
console.log(busqueda);