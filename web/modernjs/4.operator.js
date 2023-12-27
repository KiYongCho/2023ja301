// 연산자

// 산술연산이 불가능한 경우 NaN(Not a Number:숫자가 아니라는 숫자)
console.log(100/'hello');
console.log(+'hello');

// 피연산자를 형변환하여 연산이 가능하면 형변환한다.
// 단, undefined는 어떠한 경우에도 형변환되지 않는다.
console.log(+'100', typeof(+'100'));
console.log(+'hello', typeof(+'hello'));
console.log(+false, typeof(+false));
console.log(-false, typeof(-false));
console.log(1+null, typeof(1+null));

// ==, === (!=, !===)
// == : 타입을 변경해서라도 값이 같으면 true
// === : 타입과 값이 모두 같은 경우만 true
console.log(1=='1');
console.log(1==='1');
console.log([]==false);
console.log([]===false);
console.log(NaN===NaN); // NaN은 자신과 일치하지 않는 유일한 값
console.log(0===-0);
console.log(Number.isNaN(1+undefined));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));

// typeof : 값의 타입을 문자열로 반환
console.log(typeof null); // 버그
let n = null;
console.log(n===null); // null은 ===으로 비교
console.log(typeof abc); // 선언하지 않은 경우 undefined

// 지수연산자 : ES7
console.log(2**3);
//console.log(-2**2); // 에러
console.log((-2)**2); // 음수의 경우 괄호
console.log(Math.pow(2, 3));

// delete
// 객체의 프라퍼티 제거
const obj = {name:"홍길동", age:30, address:"지구 어딘가"};
delete obj.address;
for (ele in obj) {
    console.log(`property:${ele}, value:${obj[ele]}`);
}