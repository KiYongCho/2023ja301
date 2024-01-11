/* 타이머 */
// setTimeout : 일정시간(밀리세컨드) 후 콜백 한번 실행
// setInterval : 일정시간(밀리세컨드) 간격으로 콜백 연속 실행

// setTimeout / clearTimeout
const sto = setTimeout(() => {
    console.log("1초가 지났네요!");
    clearTimeout(sto);
}, 1000);


// setInterval / clearTimeout
let cnt = 0;
const siv = setInterval(() => {
    console.log(cnt++);
    if (cnt>5) clearInterval(siv);
}, 1000);

// counter
document.querySelector("#btn1").addEventListener("click", function() {
    let cnt = 0;
    setInterval(() => { document.querySelector("#counter").textContent = cnt++; }, 10);
});

// 인자 전달
document.querySelector("#btn2").addEventListener("click", function() {
    setInterval((name, age) => { document.querySelector("#args").textContent = `${name} ${age}`; }, 10, "홍길동", 30);
});

