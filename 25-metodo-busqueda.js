'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "ES MUY BUEN CURSO";
var texto3 = "Hola como te llamas, yo me llamo Fran"

var busqueda = texto1.indexOf("curso");
    busqueda = texto2.lastIndexOf("BUEN");
    busqueda = texto3.charAt(20); //sacará exactamente el caracter número 20
console.log(busqueda);

//Con indexOf nos dirá en que carácter empieza nuestra palabra curso, mira la primera coincidencia. Con lastIndexOf empezará a buscar desde el final.
