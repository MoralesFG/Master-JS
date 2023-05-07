'use strict'

/* Mostrar todos los números impares que hay entre dos números introducidos por el usuario */

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while (numero1 < numero2) {
    numero1++;

    if (numero1%2 != 0) {
        console.log("El "+numero1+" es impar");
    }
}

/* Mientras que número1 sea menor que número2 ve contandome posiciones hasta que sea igual o mayor que numero2. Mientras esto pasa, si el resto del número1 dividido entre 2 es distinto de cero (por tanto impar) queremos que lo presente por la consola. */