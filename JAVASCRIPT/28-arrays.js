'use strict'

//Arrays (arreglos): colección de tipos de datos/valores agrupados que puede tener una variable. En los arrays podemos meter los datos que queramos, incluso mezclados. Empiezan contando desde cero.

var nombre = "Fran";
var nombres = ["Fran", "Jose", "Alejandro", "Daniel"];

var lenguajes = new Array("php", "js", "java", "python", "C#");

console.log(nombres[2]); //poniendo ese [2] sacaremos exactamente ese valor de nuestro array
console.log(lenguajes); //aquí si aparecerán todos los valores del array porque no especificamos

console.log(nombres.length) //para ver cuantos elementos tiene nuestro array

//////////////////////////////////////////////////////////////////////////////////////////////

var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));
if (elemento >= nombres) {
    alert("introduce el número correcto menor que" + nombres.length); //para que no metan números que superan la cantidad de elementos que contiene el array
} else {
    alert("el usuario seleccionado es: " + nombres[elemento]);
}

alert(nombres[elemento]); //para decirle que elemento del array queremos que nos saque con alerta

///////////////////////////////////////////////////////////////////////////////////////////////

document.write("<h1>Lenguajes de programación</h1>")

for (var i = 0; i < lenguajes.length; i++) {
    document.write(lenguajes[i], '\n');
} //bucle que recorre el array y lo muestra