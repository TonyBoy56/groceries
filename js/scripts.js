// Front-end logic //

$(document).ready(function() {
    $("#list").submit(function(event) {
        $("#list").toggle();
        var result1 = $("input#groclist").val();
        $("#things").show();
        $("#things").append("<li>" + result1+ "</li>");

        event.preventDefault();


    });
    
});

// Back-end logic //

    
