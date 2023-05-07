'use strict'

function holaMundo(texto) {
    var hola_mundo = "Texto dentro de funcion"
    
    console.log(texto);
    console.log(numero);
}

var numero = 12;
var texto = "Hola mundo, soy una variable global"
holaMundo(texto);

//Aquí podemos ver que dentro de la funcion holaMundo podemos llamar a la variable numero para que se muestre por la consola estando esta fuera de la function. 
//Para el caso de la var hola_mundo al ser una variable local también podriamos llamarla SOLO dentro de la función ya que es local, en cambio al revés si se puede como el ejemplo de var numero que está fuera.
//Para convertir un dato a un string añadimos al parámetro .toString . Ejemplo: numero.toString()