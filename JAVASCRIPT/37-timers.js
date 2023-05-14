'use strict'

window.addEventListener('load', function(){

    //Timers - función que cuando pase x tiempo hará una acción que le indiquemos
    var tiempo = setInterval(function() {
        console.log("Set interval ejecutado");
        document.querySelector("h1").style.fontSize = "50px";
    }, 3000);
});