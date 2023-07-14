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
});