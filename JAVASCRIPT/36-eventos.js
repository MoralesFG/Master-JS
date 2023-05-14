'use strict'

//Función que se ejecuta cuando sucede algo

//Eventos de ratón
var boton = document.querySelector("#boton");

function cambiarColor() {
    console.log("me has dado clic");

    var bg = boton.style.background
    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background == "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid black";

    return true;
}

//Mouse hover
boton.addEventListener('mouseover', function() {
    boton.style.background = 'ccc';
})