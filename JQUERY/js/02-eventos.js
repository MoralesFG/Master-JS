$(document).ready(function() {
    
    //Eventos MouseOver y MouseOut
    var caja = $('#caja');
    
    caja.mouseover(function() {
        $(this).css("background", "red");
    });

    caja.mouseout(function() {
        $(this).css("background", "green");
    });


    //Eventos Mouse Hover
    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }
    
    caja.hover(cambiaRojo, cambiaVerde)


    //Evento click, doble click
    caja.click(function() {
        $(this).css("background", "blue")
            .css("color", "white");
    });

    caja.dblclick(function() {
        $(this).css("background", "pink")
            .css("color", "cyan");
    });


    //Eventos focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    
    nombre.focus(function () {
        $(this).css("border", "2px solid yellow");
    });

    nombre.blur(function () {
        $(this).css("border", "2px solid transparent");
        
        datos.text($(this).val()).show();
        /* esta última es para que nos imprima el valor que hemos escrito al salir del blur */
    });

    //Mousedown y mouseup
    datos.mousedown(function () {
        $(this).css("border-color", "grey")
    });

    datos.mouseup(function () {
        $(this).css("border-color", "black")
    });
});

