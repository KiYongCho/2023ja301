/* 이벤트핸들러내에서의 this */
// - 일반함수내에서의 this는 window
// - 이벤트프라퍼티의 이벤트핸들러와 addEventListener의 이벤트핸들러에서는 이벤트타겟 객체
// - 화살표함수내에서의 this는 window

// onclick어트리뷰트의 이벤트핸들러내 this
function handleClick() {
    console.log(this); // window
}

// onclick프라퍼티의 이벤트핸들러내 this
document.querySelector("#btn1").onclick = function() {
    console.log(this); // #btn1
}

// addEventListener의 이벤트핸들러내 this
document.querySelector("#btn2").addEventListener("click", function() {
    console.log(this); // #btn1
});

// addEventListener의 이벤트핸들러(화살표함수)내 this
document.querySelector("#btn3").addEventListener("click", 
    () => console.log(this) // window
);

// 이벤트핸들러내에 인수 전달 (dataset 이용)
document.querySelector("#btn4").addEventListener("click", function() {
    printInfo(this.dataset.name, this.dataset.age);
});
const printInfo = function(name, age) {
    console.log(name, age);
}

/* 커스텀 이벤트 */
// 커스텀이벤트는 내장이벤트 생성자함수를 사용하는 방식과 사용자정의이벤트를 CustomEvent로 생성하는 방식으로 나눔

// 내장이벤트 생성자함수
const myMouseEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
});
console.log(myMouseEvent.bubbles); // true
console.log(myMouseEvent.cancelable); // true
console.log(myMouseEvent.clientX); // 100
console.log(myMouseEvent.clientY); // 100

document.querySelector("#btn5").addEventListener("click", function (e) {
    e = myMouseEvent;
    console.log(e.bubbles); // true
    console.log(e.cancelable); // true
    console.log(e.clientX); // 100
    console.log(e.clientY); // 100
});

// 사용자정의 이벤트
const myCustomEvent = new CustomEvent("myEvent", {detail: {name:"내가만든이벤트", version:"1.0"}});
console.log(myCustomEvent.type);
console.log(myCustomEvent.detail.name);
console.log(myCustomEvent.detail.version);

document.querySelector("#btn6").addEventListener("myEvent", function() {
    console.log("내가만든이벤트 처리!");
});

document.querySelector("#btn6").dispatchEvent(myCustomEvent);
