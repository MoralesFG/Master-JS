'use strict'

//programa que muestra todos los números entre dos números introducidos por el usuario

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

document.write("<h1>De "+numero1+" a "+numero2+" están estos números</h1>")
for (var i = numero1; i <= numero2; i++) {
    document.write(i+"<br/>");
}

//la variable que inicia el bucle será el primer número que introduzca el usuario. Con document.write podremos añadir texto generado tras completar el bucle en el cuerpo de la página.