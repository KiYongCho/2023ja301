$(function() {

    $("#btn").on("click", function() {
        let flagStr = '';
        $("input:checked").toArray().forEach(inEle => {
            const eleVal = $(inEle).attr('value');
            if (eleVal!='test' && eleVal!='match') {
                flagStr += $(inEle).attr('value'); 
            }
        });
        $("input:checked").toArray().forEach(inEle => {
            const eleVal = $(inEle).attr('value');
            if (eleVal=='test') printTest(flagStr);
            if (eleVal=='match') printMatch(flagStr);
        });
    });
});

function printTest(flagStr) {
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