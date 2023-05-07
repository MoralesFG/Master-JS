'use strict'

// Operadores
var numero1 = 7; /* Si lo ponemos sin comillas js detecta que es una variable, si le ponemos comillas detecta que es un string o cadena de texto */
var numero2 = 12;
var operacion = numero1 * numero2;

alert("El resultado de la operacion es: "+ operacion);

// Tipos de datos (Entero, string, decimales, booleanos, arrays y objetos)
var numero_entero = 44;
var cadea_texto = "Hola que tal";
var booleanos = true; //or false

var numero_falso = "33";

console.log(booleanos);
console.log(Number(numero_falso) + 7); //con number convertimos nuestro string "33" en un entero para poder sumarlo, sino lo que hará será concatenar. Si queremos al contrario, que convierta en un string, donde pone Number pondremos string.

console.log(typeof numero_entero); //Esto nos dirá que tipo de variable es en cada caso