$(document).ready(function() {
    var caja = $("#caja__efectos");
//Inicio botones de efecto
    $('#mostrar').hide();
    
    $('#mostrar').click(function() {
        $(this).hide();
        $('#ocultar').show();
        caja.fadeIn('fast');
    });

    $('#ocultar').click(function() {
        $(this).hide();
        $('#mostrar').show();
        caja.fadeOut('fast');
    });
//Fin botones de efecto

//Inicio botón de animación
    $('#animacion').click(function() {
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px',
            }, 'slow')
        .animate ({
            borderRadius: '900px',
            marginTop: '50px'
            }, 'slow');
    });
//Fin botón de animación
});