$(function() {

    $("#btn").on("click", function() {
        let flagStr = '';
        $("input:checked").toArray().forEach(inEle => {
            flagStr += $(inEle).attr('value');    
        });
        $("#result").text(
            new RegExp($("#pattern").val(), flagStr)
                .test($("#str").val()));
    });

});