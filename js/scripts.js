$(document).ready(function() {
    $("#id").submit(function(event) {
       var result1 = $("input#groclist").val();
       $("#things").show();
       $("#things").append("<li>" + result1+ "</li>");

       event.preventDefault();


    });
    
});
    
