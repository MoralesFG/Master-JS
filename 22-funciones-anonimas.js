'use strict'

//Funciones anónimas: es una función que no tiene nombre y se puede guardar dentro de una variable. Se usa muchos para las funciones "callback" que son aquellas que no tienen nombre y se pasan como parámetro a otra función. Las funciones callback también se pueden definir sustituyendo la palabra funcion por =>

function sumame (numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return (sumar);
}

sumame (5, 7, function (dato) {
    console.log("La suma es: " + dato);
},
function (dato) {
    console.log("La suma por dos es: " + (dato * 2));
})
