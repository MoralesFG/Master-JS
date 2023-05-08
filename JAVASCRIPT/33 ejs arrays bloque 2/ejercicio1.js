'use strict'

// 1- crear un programa que pida seis números por pantalla y los meta en un array
// 2 - después tiene que mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola. 
// 3 - también tiene que sacar el array ordenado y mostrarlo. 
// 4 - invertir su orden y mostrarlo
// 5 - mostrar cuantos elementos tiene el array
// 6 - búsqueda de un valor introducido por el usuario y que nos diga si está en el array y su índice


function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "<li>");
});
    document.write("<ul>");
}

//Pedir los números
var numeros = new Array(6); 

for (var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Introduce un número", 0))); 
}

//Mostrar en el cuerpo de la página
mostrarArray(numeros);

//Mostrar array en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a, b) {return a - b});
mostrarArray(numeros, ' ordenado');

//Invertir orden y mostrar
numeros.reverse();
mostrarArray(numeros, ' revertido');

//Mostrar cuantos elementos tiene el array / contar indices
document.write("<h1>el arrya tiene " + numeros.length + " elementos</h1>");

//Búsqueda del valor del usuario
var busqueda = parseInt(prompt("busca un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion == true && posicion != -1) {
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>posición de la búsqueda " + posicion + "</h1>");
} else {
    document.write("<h1>NO ENCONTRADO</h1>");
}
