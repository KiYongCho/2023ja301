window.onload = function() {
    document.getElementById("btn1").onclick = function() {
        var color = 
            document.getElementById("txt1").value;
        var body = 
            document.getElementsByClassName("body")[0];
        body.style.backgroundColor = color;
    }
}