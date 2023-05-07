'use strict'

//programa que nos pida dos números y que nos diga cual es mayor, cual es menor y si son iguales
//PLUS: si los números no son menores o iguales a cero, o no son números, que nos vuelva a pedir números

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

while (numero1 <= 0 || numero2 <= 0 ||  isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));
}

if(numero1 == numero2) {
    alert("los números son iguales");
} else if(numero1 > numero2) {
    alert("el número mayor es: "+numero1);
    alert("el número menor es: "+numero2);
} else if(numero2 > numero1) {
    alert("el número mayor es: "+numero2);
    alert("el número menor es: "+numero1);
} else {
    alert("Introduce números correctos");
}