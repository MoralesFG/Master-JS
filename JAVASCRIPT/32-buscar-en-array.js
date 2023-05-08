'use strict'

//búsquedas dentro de arrays

var lenguajes = new Array("php", "js", "java", "python", "C#");

var busqueda = lenguajes.find(lenguaje => lenguaje == "php");
console.log(busqueda);

//con la función .find podemos buscar específicamente un elemento dentro de un array, si no lo escribimos tal cual, dará error o indefinido. Si pondemos .findIndex nos dirá el índice en el que se encuentra nuestro elemento

