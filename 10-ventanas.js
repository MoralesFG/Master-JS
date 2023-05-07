'use strict'

//alerta normal
alert("Esta es mi alerta");


//alerta de confirmacion
var resultado = confirm("¿Estás seguro de querer continuar?");
console.log(resultado); /* de esta forma (metiendo el confirm dentro de una variable) a parte de ver la alerta, veremos que opcion se ha clicado, true or false. Si no lo metemos en una variable igualmente nos aparecerá la alarta */


//ingreso de datos
var miresultado = prompt("¿Qué edad tienes?", 18);
console.log(miresultado); /* con esta pasa lo mismo que con la anterior */