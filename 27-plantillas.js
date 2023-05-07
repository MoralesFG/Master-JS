'use strict'

//Plantillas de texto

var nombre = prompt("mete tu nombre");
var apellidos = prompt("mete tus apellidos");

var texto = `
<h1>Hola que tal </h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);

//Es una forma de incrustar html en javascript en código multilinea, siempre dentro de comillas invertidas.