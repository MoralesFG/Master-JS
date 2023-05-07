'use strict'

/* Mostrar todos los números divisores de un número introducido en un prompt */

var numero = parseInt(prompt("El número es ", 1));

for (var i = 1; i <= numero; i++) {
    
    if (numero%i == 0) {
        console.log("Divisor "+ i);
    }
}

/* El bucle for está formado por tres partes, la primera es el contador (establecemos la variable creada a una cifra para que empiece desde ahí), la segunda es la comparación o condición (mientras que nuestra variable sea tal pasará tal), la tercera parte es el sumatorio de nuestra variable (i++) 

Dentro del bucle en el if cogeremos nuestro número y al dividirlo entre i, el resto nos tiene que dar exactamente 0, para demostrar que es su divisor. */