// 리터럴(literal) : 코드에 쓰여 있는 값
// 모든 리터럴에는 각자의 타입이 있다.
// 1. 숫자(정수, 부동소수점수<실수>, 2진수, 8진수, 16진수)
// 2. 문자열
// 3. 불리언
// 4. null
// 5. undefined
// 6. 객체
// 7. 배열
// 8. 함수
// 9. 정규표현식

let v1 = 100;
console.log(v1, typeof v1);
let v6 = "hello";
console.log(v6, typeof v6);
let v7 = true;
console.log(v7, typeof v7);
let v10 = {};
console.log(v10, typeof v10);
console.log(v10 instanceof Object);
let v11 = []; // object type
console.log(v11, typeof v11);
console.log(v11 instanceof Array);
let v12 = function(){}; // function type
console.log(v12, typeof v12);
console.log(v12 instanceof Function);
let v13 = /abc/; // object type
console.log(v13, typeof v13);
console.log(v13 instanceof RegExp);

// typeof 연산자 : 리터럴의 타입을 반환
// instanceof 연산자 : 왼쪽 참조가 오른쪽의 타입인지 true 또는 false 반환

// 표현식(expression) : 값으로 평가될 수 있는 모든 것
// 문장(statement) : 프로그램의 구성 단위 (최소실행단위)
// 토큰(token) : 문장의 구성단위, 문법적으로 더이상 쪼갤 수 없는 코드 요소
let vlet = 1+3;
// 표현식 : 1+3, vlet, 1, 3, vlet=1+3
// 문장 : let vlet, let vlet = 1+3
// 토큰 : let, vlet, =, 1, +, 3, ;
if (vlet2=1+3) {
    console.log("vlet2=1+3은 표현식!");
}

console.log(!'2');
console.log(!'0');
console.log(!'');












