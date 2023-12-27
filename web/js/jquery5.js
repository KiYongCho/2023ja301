$(function(){
    $("#btn").on("click", function(){

        let sname = $("input[name='sname']").val();
        let sage = $("input[name='sage']").val();
        let url = "http://172.30.1.34:9999/ajaxTest/ajaxTest.jsp?"
        + "sname=" + sname + "&sage=" + sage;

        $.get(url, function(responseText) {
            $("#result").text(responseText);
        });

    });

    $("#btn2").on("click", function(){
        
        let sname = $("input[name='sname']").val();
        let sage = $("input[name='sage']").val();
        let url = "http://172.30.1.34:9999/ajaxTest/ajaxTest.jsp";
        let data = {"sname":sname, "sage":sage};

        $.post(url, data, function(responseText) {
            $("#result").text(responseText);
        });

    });    
});