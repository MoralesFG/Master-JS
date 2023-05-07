'use strict'

//condicional if
var edad1 = 20;
var edad2 = 12;

if (edad1 > edad2) {
    console.log("Edad 1 es mayor que Edad 2");
} 
else {
    console.log("Edad 1 es inferior");
}

//operadores relacionales (mayor, menor, igual, distinto...)
var edad3 = 74;
var nombre = "David";

if (edad3 >= 18) {
    console.log(nombre+" tiene "+ edad3);

    if(edad3 <= 33) {
        console.log("Todavia eres milenial");
    }
    else if (edad3 >= 70) {
        console.log("Eres anciano");
    }
    else {
        console.log("Ya no eres milenial");
    }
}
else {
    console.log(nombre+ " tiene "+ edad3 +" por tanto es menor de edad");
}

//operadores logicos 
/* AND - && 
OR - || 
Negacion - !*/

//negacion
var year = 2018;

if(year != 2016) {
    console.log("El año no es 2016, realmente es " +year);
}

//and &&
if(year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era postmoderna");
}

//or ||
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
}
else {
    console.log("Año no registrado");
}
