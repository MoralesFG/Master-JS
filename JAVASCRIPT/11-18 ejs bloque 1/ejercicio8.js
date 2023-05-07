'use strict'

/* Calculadora. Pide dos números por pantalla para hacer la cuenta. Si metemos mal un número lo volverá a pedir y que muestre en el body de la pagina en una alerta y por la consola el resultado de la cuenta que sea */

var numero1 = parseInt(prompt("El primer número es ", 0));
var numero2 = parseInt(prompt("El segundo número es ", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("El primer número es ", 0));
    numero2 = parseInt(prompt("El segundo número es ", 0));
}

var resultado = "La suma es "+(numero1+numero2)+"<br/>"+
                "La resta es "+(numero1-numero2)+"<br/>"+
                "La multiplicación es "+(numero1*numero2)+"<br/>"+
                "La división es "+(numero1/numero2)+"<br/>";

var resultadoCMD = "La suma es "+(numero1+numero2)+"\n"+
                "La resta es "+(numero1-numero2)+"\n"+
                "La multiplicación es "+(numero1*numero2)+"\n"+
                "La división es "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultado);


/* El primer while comprueba que los números no sean negativos ni sean letras u otros caracteres, si se da el caso, volverá a pedirlos. */
