/* Lo que viene a continuación de $(document) es para comprobar que está todo bien vinculado y demás antes de empezar. El $ dolar se refiere al objeto JQuery, document es el selector y ready el evento, lo demás es una función de callback */

$(document).ready(function() {
    //Selector de ID
    $("#rojo").css("background", "red")
            .css("color", "white");

    $('#amarillo').css("background", "yellow")
                .css("color", "green");

    $('#verde').css("background", "green")
            .css("color", "white");
    
    //Selectores de clases
    var mi_clase = $('.zebra');
    mi_clase.css("border", "2px dashed black");

    //Selectores de etiqueta
    var parrafos = $('p');

    parrafos.click(function() {
        $(this).removeClass(".zebra");
    });

    //Selectores de atributo
    $('[title="Google"]').css('background', 'green');
    $('[title="Facebook"]').css('background', 'cyan');

    //Otros
    
});