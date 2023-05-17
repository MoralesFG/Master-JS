'use strict '

//Local Storage

//Comprobar su disponibilidad
if (typeof (Storage) !== 'undefined') {
    console.log('Local Storage disponible');
} else {
    console.log('No está disponible');
}

//Guardar datos en este
localStorage.setItem("titulo", "curso de js", );

//Recuperar elemento
console.log(localStorage.getItem("titulo"));

//Guardar objetos
var usuario = {
    nombre: 'Fran',
    email: 'Fran@gmail',
    web: 'franmorales.com'
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector('#datos').append(" " + userjs.web + " - " + userjs.nombre); //parece que el .append no funciona bien