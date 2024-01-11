// 실습 1) 키보드 r키를 누르면 화면 배경을 red로 변경
//        키보드 b키를 누르면 화면 배경을 blue로 변경
//        키보드 g키를 누르면 화면 배경을 green으로 변경
document.querySelector("body").addEventListener("keydown", 
    function(e) {
    switch (e.keyCode) {
     case 82: case 114: this.style.backgroundColor = "red"; break;
     case 66: case 98: this.style.backgroundColor = "blue"; break;
     case 71: case 103: this.style.backgroundColor = "green";
    }
});

// 실습 2) #txt1에 글자를 입력하면 #sp1에 똑같이 출력되도록
document.querySelector("#txt1").addEventListener("keyup", function(e) {
    document.querySelector("#sp1").textContent = e.target.value;
});

// 실습 3) 마우스를 클릭하면 #sp2에 클릭한 x, y 좌표를 출력
window.addEventListener("click", function(e) {
    document.querySelector("#sp2").textContent 
        = `x:${e.clientX}, y:${e.clientY}`;
});

// 실습 4) 화면의 클릭한 곳에 가로10px, 세로10px 노란색 상자를 표시
const yBox = document.createElement("DIV");
yBox.style.width = "10px";
yBox.style.height = "10px";
yBox.style.backgroundColor = "yellow";
yBox.style.position = "absolute";
window.addEventListener("click", function(e) {
    const cNode = yBox.cloneNode();
    cNode.style.left = e.clientX + "px";
    cNode.style.top = e.clientY + "px";
    document.body.appendChild(cNode);
});







