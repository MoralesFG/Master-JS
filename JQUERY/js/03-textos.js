$(document).ready(function() {
    
    $('#add_button').click(function() {
        $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
        reloadLinks();
    });
});

function reloadLinks () {
    $('a').each(function(index) {
        var that = $(this);
        var enlace = that.attr("href");
        that.text(enlace);
    });
}

/*  append: nos añade el elemento al final de la lista 
    prepend: lo añade al principio de la lista 
    before: lo añade fuera de la lista */