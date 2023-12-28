// 형변환

// 명시적형변환 : 개발자가 코드상에서 명시적으로 형변환 (강제형변환)
// 묵시적형변환 : 엔진이 상황(문맥, context)에 따라 자동적으로 형변환
//               (암묵적형변환)

// 명시적 형변환
let num = 3;
let numStr = String(num);
let str = "100";
let strNum = Number(str);
let str2 = "true";
let str2Bool = Boolean(str2);
console.log(numStr, typeof numStr);
console.log(strNum, typeof strNum);
console.log(str2Bool, typeof str2Bool);

// 묵시적 형변환
console.log(1+"hello");
console.log(true+"hello");
console.log(1+"100");
console.log(3*"100");
console.log(true*100);
console.log(false||1);

// 단축 평가
// 논리합(||) 또는 논리곱(&&) 연산시
// 평가(연산에 필요한 계산)를 최대한 줄임
// 1. || : 왼쪽이 true 오른쪽 패스
// 2. && : 왼쪽이 false 오른쪽 패스
let v1 = true || "홍";
v1 = "홍" || true;
let v2 = false && "홍";
v2 = "홍" && false;
console.log("멍멍" || "야옹"); // 멍멍이 true, 야옹은 평가X
console.log("멍멍" && "야옹"); // 멍멍이 true, 야옹을 평가

// 옵셔널체이닝 (optional chaining) : ES11 (ES2020)
// ?. : 왼쪽이 null 또는 undefined 이면 undefined,
//      그렇지 않으면 오른쪽 수행
// null pointer 방지를 위해
let n = null;
// let nvalue = n.value; // null error
let nvalue = n?.value; // n이 null일 경우 undefined 처리, null error 방지

// 널병합 (nullish coalescing) : ES11 (ES2020)
// ?? : 왼쪽이 null 또는 undefined이면 우측, 아니면 좌측
// null pointer 방지를 위해
let n2 = null;
let n2value = n2 ?? "hello";

