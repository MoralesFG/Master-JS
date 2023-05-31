'use strict'

/* fecha en JS */
var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
/* getMinutes y getSeconds para saber la hora completa*/

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}
    La hora es: ${hora}
`;

console.log(textoHora);