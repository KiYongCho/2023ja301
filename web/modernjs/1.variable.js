/* 변수 */

// 변수는 선언, 초기화, 할당의 단계를 거쳐 사용된다.
// 자바스크립트에서는 선언만한 변수는 undefined로 초기화된다.

// 1. 선언
var v1;
let l1;
const c1 = null;
console.log(v1);
console.log(l1);
console.log(c1);  

// 2. 초기화
v1 = 1;
l1 = "Hello";
//c1 = "Hi";
console.log(v1);
console.log(l1);
console.log(c1);

// 3. 할당
v1 = 2;
l1 = "Hi";
//c1 = "Hello";
console.log(v1);
console.log(l1);
console.log(c1);

// 자바스크립트에서 변수의 타입은 값이 초기화 또는 할당될때 결정된다.
let v2 = 1;
console.log(`v2=>${v2}, type=>${typeof v2}`);
v2 = "Hello";
console.log(`v2=>${v2}, type=>${typeof v2}`);
v2 = true;
console.log(`v2=>${v2}, type=>${typeof v2}`);

// 호이스팅 : 변수나 함수를 선언하지 않고 사용하여도 선언문을 위로 끌어올림
// 자바스크립트는 line by line 실행된다.
// 자바스크립트는 평가 > 실행의 단계로 코드를 수행한다.
// 평가단계에서 선언문이 없으면 상단에 선언된 것으로 호이스팅한 후 전체 코드를 순차적으로 실행한다.
console.log(v6);
var v6;

hello();
function hello() {
    console.log('hello');
    
}

// 평가 > 실행의 단계
console.log(v7);
var v7;
v7 = 100;
console.log(v7);

console.log(v8);
v8 = 100;
var v8;
console.log(v8);

// 변수의 스코프 : 전역(global), 함수(function), 블럭(block)
// 전역
var gv = "gv";
let gl = "gl";
const gc = "gc";
// 함수
function fscope() {
    var fv = "fv";
    let fl = "fl";
    const fc = "fc";
}
// 블럭
{
    var bv = "bv"; // 전역 : var는 블럭스코프를 가지지 않음
    let bl = "bl";
    const bc = "bc";
}
console.log(gv); 
console.log(gl);
console.log(gc);
//console.log(fv);
//console.log(fl);
//console.log(fc);
console.log(bv);
//console.log(bl);
//console.log(bc);






