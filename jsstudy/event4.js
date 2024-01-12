/* 이벤트핸들러의 this */
// - 전역함수내에서의 this는 window
// - 이벤트프라퍼티와 addEventListener의 이벤트핸들러 내에서의
//   this는 이벤트타겟객체
// - 이벤트핸들러가 화살표함수일때는 이벤트타겟객체가 아니라 window

// onclick어트리뷰트의 이벤트핸들러
function handleClick() {
    console.log(this); // window
}

// onclick프라퍼티의 이벤트핸들러 
document.querySelector("#btn1").onclick = function() {
    console.log(this); // #btn1
};

// addEventListener의 이벤트핸들러
document.querySelector("#btn2").addEventListener("click", function() {
    console.log(this); // #btn2
});

// addEventListener의 이벤트핸들러 (화살표함수)
document.querySelector("#btn3").addEventListener("click", 
    () => console.log(this)); // window

console.log();

// 이벤트핸들러내에 인자 전달 (dataset 이용)
document.querySelector("#btn4").addEventListener("click", function() {
    printInfo(this.dataset.name, this.dataset.age);
});
const printInfo = function(name, age) {
    console.log(name, age);
};

/* 커스텀 이벤트 */
// 커스텀이벤트는 내장되어 있는 이벤트생성자함수를 이용하는 방법과
// 사용자정의하는 방법이 있다.

// 내장 이벤트생성자함수
const myMouseEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
});
console.log(myMouseEvent.bubbles);
console.log(myMouseEvent.cancelable);
console.log(myMouseEvent.clientX);
console.log(myMouseEvent.clientY);

document.querySelector("#btn5")
    .addEventListener("click", function(e) {
        e = myMouseEvent;
        console.log(e.bubbles);
        console.log(e.cancelable);
        console.log(e.clientX);
        console.log(e.clientY);
});

// 사용자정의 이벤트
const myCustomEvent = new CustomEvent("myEvent", {
    detail : {
        name: "내가 만든 이벤트",
        version: "1.0"
    }
});
document.querySelector("#btn6").addEventListener("myEvent", function() {
    console.log("내가만든 이벤트 처리!");
});
console.log(myCustomEvent.type);
console.log(myCustomEvent.detail.name);
console.log(myCustomEvent.detail.version);

// 사용자정의이벤트는 dispatchEvent메서드로 trigger해줘야 실행됨
document.querySelector("#btn6").dispatchEvent(myCustomEvent);



