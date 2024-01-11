// attribute
function clickBtn1() {
    console.log("btn1 클릭!");
};

// property
const btn2 = document.getElementById("btn2");
btn2.onclick = function() {
    console.log("btn2 클릭!");
};

// addEventListener
const btn3 = document.getElementById("btn3");
const func1 = function() {
    console.log("btn3 클릭! 1번 핸들러 호출!");
};
btn3.addEventListener("click", func1);
const func2 = function(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    console.log(e.bubbles);
    console.log(e.cancelable);
    console.log(e.defaultPrevented);
    console.log(e.isTrusted);
    console.log(e.timeStamp);
    console.log("btn3 클릭! 2번 핸들러 호출!");

    console.log(e.target);
    console.log(e.currentTarget);
};
btn3.addEventListener("click", func2);

btn3.removeEventListener("click", func1);

// jquery
//$("#btn3").on("click", function() {
//    console.log("btn3 클릭! 2번 핸들러 호출!");
//});