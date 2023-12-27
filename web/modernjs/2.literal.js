// 리터럴(literal) : 코드에 쓰인 값
// 모든 리터럴에는 타입이 있다.
// 숫자(정수, 부동소수점, 2진수 0b, 8진수 0o, 16진수 0x), 문자열, 불리언
// , null, undefined, 객체, 배열, 함수, 정규표현식
let v1 = 100;
console.log(`v1=>${v1}, v1 type=>${typeof v1}`);
console.log(`v1=>${v1}, v1 type=>${v1 instanceof Number}`);  
let v2 = 3.0;
console.log(`v2=>${v2}, v1 type=>${typeof v2}`);
let v3 = 0b0001; 
console.log(`v3=>${v3}, v1 type=>${typeof v3}`);
let v4 = 0o01;
console.log(`v4=>${v4}, v1 type=>${typeof v4}`);
let v5 = 0x01;
console.log(`v5=>${v5}, v1 type=>${typeof v5}`);
let v6 = "hello";
console.log(`v6=>${v6}, v1 type=>${typeof v6}`);
console.log(`v6=>${v6}, v1 type=>${v6 instanceof String}`);
let v7 = true;
console.log(`v7=>${v7}, v1 type=>${typeof v7}`);
console.log(`v7=>${v7}, v1 type=>${v7 instanceof Boolean}`);
let v8 = null;
console.log(`v8=>${v8}, v1 type=>${typeof v8}`);
let v9 = undefined;
console.log(`v9=>${v9}, v1 type=>${typeof v9}`);
let v10 = {};
console.log(`v10=>${v10}, v1 type=>${typeof v10}`);
console.log(`v10=>${v10}, v1 type=>${v10 instanceof Object}`);
let v11 = [];
console.log(`v11=>${v11}, v1 type=>${typeof v11}`);
console.log(`v11=>${v11}, v1 type=>${v11 instanceof Array}`);
let v12 = function() {};
console.log(`v12=>${v12}, v1 type=>${typeof v12}`);
console.log(`v12=>${v12}, v1 type=>${v12 instanceof Function}`);
let v13 = /abc/;
console.log(`v13=>${v13}, v1 type=>${typeof v13}`);
console.log(`v13=>${v13}, v1 type=>${v13 instanceof RegExp}`);

// 표현식(expression) : 값으로 평가될 수 있는 모든 것
// 문장 (statement) : 프로그램을 구성하는 기본단위이자 최소실행단위
// 토큰 (token) : 문법적으로 더이상 나눌 수 없는 코드 요소
// 표현식 : vlet, 1, 3, 1 + 3
// 문장 : let vlet = 1 + 3
// 토큰 : let, vlet, =, 1, +, 3, ;
let vlet = 1 + 3;