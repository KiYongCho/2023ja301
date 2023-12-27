// 데이터타입
// primitive type (6) : number, string, boolean, undefined, null, symbol
// reference type : object, function, array 등 기본타입이 아닌 모든 것

// 1. number : 64bit 부동소수점수(실수)
let num1 = 100; console.log(num1);
let num2 = 0.1; console.log(num2);
let num3 = 0b0001; console.log(num3);
let num4 = 0o22; console.log(num4);
let num5 = 0x3e; console.log(num5);
console.log(100/0);
console.log(100/-0);
console.log(100/"십");

// 2. string : 2byte 유니코드 (UTF-16)
let str1 = 'hello'; console.log(str1);
let str2 = "hello"; console.log(str2);
let str3 = `hello`; console.log(str3);
let str4 = `${str3} everyone!`; console.log(str4);
let str5 = `
    {
        "name": "홍길동",
        "age": 20
    }
`;
console.log(str5);
console.log(`${1+2+3}`);

// 3. boolean : true or false
// false로 판별되는 것들 : false, undefined, null, 0, -0, NaN, 0n, -0n, '', "", ``
if (!0) console.log("0 is falsy");

// 4. undefined, 5. null
// undefined : 선언하고 초기화되지 않았다. (선언만 하면 자동으로 undefined로 초기화 된다)
// null : 선언하고 null로 초기화 되었다.
// undefined 값의 타입은 undefined, null 값의 타입은 object(자바스크립트의 버그)
let v3;
console.log(v3);
let v4 = undefined;
console.log(`v4=>${v4}, type=>${typeof v4}`);
let v5 = null;
console.log(`v5=>${v5}, type=>${typeof v5}`);

// 6. symbol
// ES6에서 추가된 변경불가능한(immutable) 기본타입
// 기본타입은 값이 같으면 같다고 판별되지만 심볼은 값이 같아도 다르다고 판별됨
// 주로 객체 프라퍼티의 키를 만들때 사용됨
// symbol.description : 심볼이 가진 값
let sym1 = Symbol(1);
let sym2 = Symbol(1);
console.log(sym1==sym2);
console.log(sym1.description==sym2.description);
console.log(typeof sym1, typeof sym2);

// 동적타이핑 (dynamic typing)
// 자바스크립트는 변수에 값이 할당될 때 타입이 결정된다.
// 변수에 다른 타입의 값이 할당되면 해당 타입으로 타입이 변경된다.
let v6 = 100; console.log(typeof v6);
v6 = "hello"; console.log(typeof v6);
v6 = {}; console.log(typeof v6);