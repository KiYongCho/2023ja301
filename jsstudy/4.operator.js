// 연산자

// 산술연산이 불가능한 경우 NaN(Not A Number):숫자가 아닌 숫자
// (NaN의 타입은 number)
console.log(100/'hello');
console.log(+'hello');

// 피연산자를 형변환하여 연산이 가능하면 형변환한다.
// 단, undefined는 어떠한 경우에도 형변환 되지 않는다.
// 형변환에서 제일 중요한 것은 : 연산에 필요한 타입으로 변환이 가능한가?
console.log(+'100', typeof(+'100'));
console.log(+'백', typeof(+'백'));
console.log(+false, typeof(+false));
console.log(1+null, typeof(1+null));

// == : 타입변환을 해서라도 값이 같으면 true
// === : 타입도 값도 모두 동일해야 true
console.log(1=='1');
console.log([]==false);
console.log([]===false);
console.log(NaN==NaN);
console.log(NaN===NaN);
console.log(0==-0);
console.log(0===-0);
console.log(Number.isNaN(1+undefined));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));

// 지수연산자 : ES7
console.log(2**3);
//console.log(-2**3);
console.log((-2)**3); // -의 지수일때는 괄호 사용
console.log(Math.pow(2, 3));

// delete : 객체의 프라퍼티 제거
const obj = {
    name: "홍길동",
    age: 30,
    address: "지구 어딘가"
};
delete obj.address;

// 객체의 프라퍼티 추가
obj.hobby = ['낚시','등산'];

for (key in obj) {
    console.log(`property name:${key}, property value:${obj[key]}`);
}
