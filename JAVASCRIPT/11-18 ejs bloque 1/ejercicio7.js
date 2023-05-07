'use strict'

/* Tabla de multiplicar de un número introducido por pantalla */

var numero = parseInt(prompt("¿de qué número quieres la tabla? ", 1));

for (var i = 1; i <= 10; i++) {
    document.write(i + " x " + numero + " = " + (i * numero));
}

/* Los document.write hacen que el resultado aparezca en el cuerpo de la web */

/* TODAS LAS TABLAS */

for (var c = 1; i <= 10; i++) {
    for (var i = 1; i <= 10; i++) {
        document.write(i + " x " + numero + " = " + (i * numero));
    }
}

/* creo que está mal */