/* 타이머 */
// setTimeout : 일정시간(밀리세컨드) 후 콜백 한번만 실행
// setInterval : 일정시간(밀리세컨드) 후 콜백 주기적 실행
// clearTimeout, clearInterval 로 중지

const sto = setTimeout(()=>{
    console.log("3초가 지났네요!");
    clearTimeout(sto);
}, 3000);

let cnt = 0;
const siv = setInterval(()=>{
    console.log(cnt++);
    if(cnt>10) clearInterval(siv);
}, 1000);

// counter
document.querySelector("#btn1").addEventListener("click", function() {
    let cnt = 0;
    setInterval(()=>{
        document.querySelector("#counter").textContent = cnt++;
    }, 1);
});

// 콜백함수에 인자전달
document.querySelector("#btn2").addEventListener("click", function() {
    setInterval((name, age) => {
        document.querySelector("#args").textContent
            = `${name} ${age}`;
    }, 10, "홍길동", 30);
});