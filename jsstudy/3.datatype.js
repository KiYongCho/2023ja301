// null, undefined
// let v = null; 선언은 했고, null값으로 초기화 되었다.
//    v의 타입도 값도 null
// let v; 선언은 했고, 초기화를 하지 않았다.
//        엔진이 undefined로 초기화 해준다.
//    v의 타입도 값도 undefined
let v3;
console.log(v3); // undefined
let v4 = undefined;
console.log(`${v4}, ${typeof v4}`); // undefined, undefined
let v5 = null;
console.log(`${v5}, ${typeof v5}`); // null, object

// symbol
// ES6에서 추가된 변경불가능한(immutable) "기본타입"
// 기본타입들은 값이 같으면 같다고 판별, 심볼은 값이 같아도 다르다고 판별
// 일반적으로 객체의 프라퍼티의 키값으로 사용하기 위해서 만든다.
// 아래 예제는 sym1, sym2가 모두 symbol타입이고
// 가진 값도 1로 동일하다.
// 하지만 두개의 심볼은 서로 유일하다.
let sym1 = Symbol(1); // 1값을 가진 유일한 심볼
let sym2 = Symbol(1); // 1값을 가진 유일한 심볼
console.log(sym1==sym2);
console.log(sym1===sym2);
console.log(typeof sym1, typeof sym2);
console.log(sym1.description===sym2.description); // 1===1

const persons = {
    sym1: {
        "name": "홍길동"
    },
    sym2: {
        "name": "강감찬"
    }
};

console.log(persons.sym1.name);
console.log(persons.sym2.name);




