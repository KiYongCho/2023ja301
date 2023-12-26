$(function() {
    // DOM
    // var btn1 = document.getElementById("btn1");
    // btn1.addEventListener("click", function() {
    //   btn1.value = "변경됨!"; 
    // });

    // jQuery
    $("#btn1").click(function(){
        $(this).val('변경됨!');
    });

    // DOM => document.createElement("P")
    
    // jQuery => $("P")
});