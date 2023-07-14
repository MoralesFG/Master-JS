$(document).ready(function () {
    
    //Draggable - Mover elementos por la página con el cursor
    $(".elemento").draggable();

    //Resizable - Redimensionar elementos
    $(".elemento").resizable();

    //Seleccionar y ordenar (para ordenar tendremos que comentar .selectable) elementos
    $(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable();

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function() {
            console.log("Has soltado el elemento dentro");
        }
    });

    //Efectos
    $("#mostrar").click (function() {
        $(".caja-efectos").fadeToggle();
        // $("caja-efectos").toggle("explode"); - Otro efecto
        // $("caja-efectos").toggle("blind"); - Otro efecto
        // $("caja-efectos").toggle("slide"); - Otro efecto
        // $("caja-efectos").toggle("drop"); - Otro efecto
        // $("caja-efectos").toggle("fold"); - Otro efecto
        // $("caja-efectos").toggle("puff"); - Otro efecto
        // $("caja-efectos").toggle("scale"); - Otro efecto
        // $("caja-efectos").toggle("shake", 2000s); - Otro efecto
    });

    //Tooltip
    $(document).tooltip();

    //Dialog
    $("#lanzar-popup").click (function() {
        $("#popup").dialog();
    });

    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
});