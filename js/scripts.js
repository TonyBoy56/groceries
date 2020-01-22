$(document).ready(function() {
    $("#input").submit(function(event) {
        var result1 = $("input#groclist").val();
        $("#things").show();
        $("#things").append("<li>" + result1+ "</li>");
        event.preventDefault();
    });

    $("#list").submit(function(event) {
        // var result2 = result1;
        $("#input").hide();
      //  $("#show").append("<li>" + result2+ "</li>");
        event.preventDefault();
    });
    
});
    
