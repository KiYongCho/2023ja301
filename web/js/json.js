// JSON (JavaScript Object Notation)
// 언어와 플랫폼(O/S)에 독립적인 데이터 교환 포맷
// Javascript언어의 객체표기법을 차용해서 사용

// *** 매우 중요 ***
// 자바스크립트에서 모든 것은 값(value)이다!
// 리터럴(literal) : 코드에 쓰여진 값(value)
// 예) let num = 100; 100은 숫자리터럴
// 예2) let str = 'Hello'; 'Hello'는 문자리터럴
// 예3) let func = function() {}; function() {}는 함수리터럴

/* 리터럴 */
// 객체 (object)
let obj = {};
// 배열 (array)
let arr = [];
// 함수 (function)
let func = function() {};
// 정규표현식 (regular expression)
let reg = //;
// 숫자 (number)
let num = 100;
// 문자열 (string)
let str = 'hello';
// 불리언 (boolean)
let bool = true;
// null
let nul = null;

// null과 undefined
// 변수는 선언(타입지정),초기화(값을처음할당),할당(값을저장)
let v; // 선언만 된 상태 => undefined
let v2 = null; // 선언되고 null값으로 초기화 됨

// JSON 데이터
// 1. Object
const obj = {
    "name": "홍길동",
    "age": 20,
    "hobby": ["축구", "스키", "잠자기"]
};
let name = obj.name;
obj.name = "강감찬";

const arr = obj.hobby;
let firsthobby = obj.hobby[0];

// 2. array
const arr2 = [1, 2, 3, 4, 5];

// 3. function
let func = function() {
    console.log("hello");
};
func();

// 4. regular expression
let reg = /abc/;