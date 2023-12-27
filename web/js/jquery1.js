$(function() {
    $("*").css("font-size", "1em");
    $("#ul1").css("background-color", "blue");
    $(".lis").css("font-weight", "bold");
    $("#ul1 .lis").css("background-color", "#ffcc00"); // descendant
    $("#ul1>.lis").css("background-color", "#ffcc00"); // child
    $("p:first").css("background-color", "lightgray");
    $("[style]").css("font-size", "1.2em");
    $("[id='p1']").css("font-size", "1.5em");
    $("p[id='p1']").css("font-size", "1.5em");
    $("p[id!='p1']").css("font-size", "1.5em");
    $(":button").css("background-color", "red");
    $("#table1 tr:even").css("background-color", "#efefef");
    $("#table1 tr:odd").css("background-color", "#333333");

});