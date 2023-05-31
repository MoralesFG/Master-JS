'use strict'

/* Como capturar errores para que nos avise cuando el código tenga fallos. La función try catch nos dirá por consola dónde tenemos el error, en este caso es el alert con la variable mal escrita */

try {
    var year = 2019;
    alert(yea);
} catch(error) {
    console.log(error);
    alert("Ha ocurrido un error");
}
