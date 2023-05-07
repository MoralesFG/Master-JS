'use strict'

//usando un bucle mostrar la media y la suma de los resultados metidos por el usuario, hasta que este meta un número negrativo

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce números hasta que metas uno negativo', 0));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero; // es lo mismo que suma += numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
} while (numero >= 0)

alert("la suma de todos los números es: "+ suma);
alert("la media de todos los números es: "+ (suma/contador));

/* Primero ejecutamos el bucle y finalmente comprobamos la condición. Comprobamos con isNan que si el valor que mete el usuario no es un número, nos devuelva cero, sino queremos que si este es mayor a cero queremos ir sumando la variable "suma" + el número que se haya metido, mientras tanto nuestro contador va contando para la media. Queremos que se nos presenten ambas por pantalla con console.log. Finalmente, esto se ejecutará 'mientras' que número sea >= 0.  */