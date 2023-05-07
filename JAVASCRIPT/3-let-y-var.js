'use strict'

alert("hola");

var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

//prueba con let

var texto = "cursojs"
console.log(texto);

if (true) {
    let texto = "cursooooo";
    console.log(texto);
}

console.log(texto);

/* con let solo actuamos a nivel del bloque del if, entonces solo nos mostrará el resultado "cursooooo" cuando hagamos ese console.log dentro del if, con los de fuera mostrará "cursojs". Con var pasa al contrario, una vez que damos un nuevo valor de ahí en adelante se mostrará ese cuando hagamos console.log */