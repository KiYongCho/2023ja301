// 형변환
// 명시적형변환 : 개발자가 명시적으로 강제형변환
// 묵시적형변환 : 엔진이 상황(문맥, context)에 맞게 자동형변환

// 명시적형변환
let num = 3;
let numStr = String(num); // 또는 num.toString()
console.log(numStr, typeof numStr);
let str = "100";
let strNum = Number(str); // 또는 parseInt(str);
console.log(strNum, typeof strNum);
let str2 = "true";
let str2Bool = Boolean(str2); // 또는 !!str2
console.log(str2Bool, typeof str2Bool);

// 묵시적형변환
console.log(1+"hello"); // 1을 string으로 변환 후 연산
console.log(true+"hello"); // true를 string으로 변환 후 연산
console.log(1+"100"); // 1을 string으로 변환 후 연산
console.log(3*"100"); // 100을 number로 변환 후 연산
console.log(true*100); // true를 number로 변환 후 연산
console.log(false||1); // 1을 boolean으로 변환 후 연산

// 단축평가
// 논리합(||) 또는 논리곱(&&) 연산시 평가(연산)을 최대한 줄임
let v1 = true||"홍"; console.log(v1);
v1 = "홍"||true; console.log(v1);
let v2 = false&&"홍"; console.log(v2);
v2 = "홍"&&false; console.log(v2);
console.log("멈멍"||"야옹");
console.log("멈멍"&&"야옹");

// 옵셔널체이닝 (optional chaining) : ES11(ES2020)
// ?. : 왼쪽항이 null이나 undefined이면 undefined을 반환, 그렇지 않으면 오른쪽 수행
// 왼쪽항이 null일 경우 null reference error 방지의 목적
let n = null;
// let nvalue = n.value; // null reference error
let nvalue = n?.value; console.log(nvalue);

// 널병합 (nullish coalescing) : ES11(ES2020)
// ?? : 왼쪽항이 null이나 undefined이면 우측항 그렇지 않으면 좌측항
let n2 = null;
let n2value = n2??"hello"; console.log(n2value);






















