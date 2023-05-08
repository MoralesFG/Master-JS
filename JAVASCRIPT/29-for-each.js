'use strict'

var lenguajes = new Array("php", "js", "java", "python", "C#");

lenguajes.forEach((elemento, indice) => {
    document.write(" - " + indice + elemento);
});