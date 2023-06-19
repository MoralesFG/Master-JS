$(document).ready(function() {
    //Load
   //$('#datos-ajax').load("https://reqres.in/")

    //GET y POST
    /*
    $.get("https://reqres.in/api/users", {page:3}, function(response) {
        response.data.forEach((element, index) => {
            $('#datos-ajax').append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });
    */ //Comentado para hacerlo con el método ajax

    $("#formulario").submit(function(e) {
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            apellido: $('input[name="apellido"]').val()
        };
    /*
        $.post($(this).attr("action"), usuario, function(response) {
            console.log(response);
        }).done(function() {
            alert("Usuario añadido correctamente");
        });
        */ //Comentado para hacerlo con el método ajax

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function() {
                console.log("Enviando usuario...");
            },
            succes: function (response) {
                console.log(response);
            },
            error: function () {
                console.log("Ha ocurrido un error");
            },
            timeout: 200
        });
        
        return false;
    });
});