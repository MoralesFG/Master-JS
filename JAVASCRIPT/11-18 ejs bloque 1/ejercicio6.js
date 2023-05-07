'use strict'

/* Un programa que nos diga si un número es par o impar. Tiene que tener ventana prompt. Si metemos un número no válido que nos pida de nuevo el número. */

var numbers = parseInt(prompt("introduce un número", 0));

while (isNaN(numbers)) {
    numbers = parseInt(prompt("introduce un número", 0));
}

if (numbers % 2 == 0) {
    alert("es un número par");
} else {
    alert("es un número impar");
}

/* Siempre que el resto de un número entre 2 sea exactamente cero, tendremos claro que el número es par. */