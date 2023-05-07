'use strict'

function Calculadora (numero1, numero2) {
    console.log("Suma "+(numero1 + numero2));
    console.log("Resta "+(numero1 - numero2));
    console.log("Multiplicación "+(numero1 * numero2));
    console.log("***************************");
    
    return ("Hola soy la calculadora");
}

Calculadora(12,8);
Calculadora(20, 4);

//De esta forma en vez de decirle en cada console.log la cifra que tiene que sumar o restar, le daremos un parámetro y luego diremos cuanto vale este para que lo haga automáticamente y sea más funcional. En la misma consola también le podemos pedir nuevos parámetros. 
// A los parámetros le podemos añadir parámetros opcionales como booleanos true or false para que si se cumplen los resultados sean unos u otros.

for (var i = 1; i <= 10; i++) {
    console.log(i);
    Calculadora(i, 8);
}

//Con el bulce for conseguiremos que nos haga las cuentas que pedimos arriba (suma,resta,multiplicación) tantas veces como le digamos, en este caso hasta que la i sea igual a 10.