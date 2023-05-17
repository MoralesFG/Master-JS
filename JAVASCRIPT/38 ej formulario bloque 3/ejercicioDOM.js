'use strict'

window.addEventListener('load', function() {
    console.log("DOM cargado");

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = "none";

    
    formulario.addEventListener('submit', function() {
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value; //para ver el valor que tiene dentro cada uno
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value); 

        if (nombre.trim() == null || nombre.trim().length == 0 ){
            alert("El nombre no es válido");
            return false;
        }

        if (apellidos.trim() == null || apellidos.trim().length == 0 ){
            alert("Los apellidos no son válidos");
            return false;
        }

        if (edad.trim() == null || edad.trim().length <= 0 || isNaN(edad) ){
            alert("La edad no es válida");
            return false;
        }

        box_dashed.style.display = "block";
        
        var datos_usuario = [nombre, apellidos, edad];
        var indice;

        for (indice in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        } //bucle para que muestre los datos como array de forma ordenada. Esto también se puede hacer en html creando varios parrafos (método clásico uno para cada uno) y nos ahorramos el bucle for in.
    });
});