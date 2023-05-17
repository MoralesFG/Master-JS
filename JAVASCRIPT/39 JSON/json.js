'use strict'

// JSON - Javascript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman', 
    year: 2018,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "la verdad duele", year: 2016, pais: 'Francia'},
    pelicula
]; //también lo podemos hacer como array sin problema


var caja_peliculas = document.querySelector('#peliculas');
var index;
for (index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p); //parece que el append no lo lee bien
}