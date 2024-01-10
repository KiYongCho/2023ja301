$(function() {

    $("#pattern").on("keydown", function() {
        let flagStr = '';
        $("input.flag:checked").toArray().forEach(inEle => {
            const eleVal = $(inEle).attr('value');
            if (eleVal!='test' && eleVal!='match') {
                flagStr += $(inEle).attr('value'); 
            }
        });
        $("input.method:checked").toArray().forEach(inEle => {
            const eleVal = $(inEle).attr('value');
            if (eleVal=='test') printTest(flagStr);
            if (eleVal=='match') printMatch(flagStr);
        });
    });
});

function printTest(flagStr) {
    console.log($("#str").val());
    $("#result").text(
        new RegExp($("#pattern").val(), flagStr)
            .test($("#str").val()));
}

function printMatch(flagStr) {
    $("#result2").text(
        $("#str").val().match(
            new RegExp($("#pattern").val(), flagStr)
        )
    );
}