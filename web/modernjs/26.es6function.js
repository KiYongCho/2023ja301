/* ES6 함수 */
// - ES6 이전의 함수는 callable이면서 constructor
//   (생성자로 사용하지 않을 함수가 constructor객체를 갖고 있다는 것은 성능상 문제가 있다)
// - ES6는 함수를 일반함수, 메서드, 화살표함수 3가지로 구분한다.

// ES6는 메서드 축약표현을 사용한 함수만 메서드로 인정
// constructor와 prototype을 갖지 않는다.
const obj = {
    x: 1,
    foo() {
        return this.x;
    },
    bar : function() {
        return this.x;
    }
};
console.log(obj.foo());
console.log(obj.bar());
// new obj.foo(); // not constructor
const bar = new obj.bar();
console.log(bar); // bar {}
console.log(obj.foo.hasOwnProperty('prototype')); // false
console.log(obj.bar.hasOwnProperty('prototype')); // true

console.log();

// 화살표함수 (arrow function)
//   1. 기존 함수문법의 간결화
//   2. 함수내 this문제 해결 : 화살표함수내의 this는 화살표함수 상위스코프의 this
// - 화살표 함수는 함수표현식으로만 정의 가능
// - 매개변수가 1개인 경우 소괄호 생략 가능, 단 매개변수가 없는 경우는 생략 불가
// - 실행할 문장이 1개인 경우 함수블럭 생략 가능, 단 문장일경우는 생략 불가

// - 객체리터럴을 반환하는 경우는 함수블럭과 구분을 위해 소괄호로 감싸주어야 함
// console.log(() => {x:1, y:2}); // error
console.log(() => ({x:1, y:2})); // Function

console.log();

// 화살표 함수도 즉시실행함수로 사용 가능
(() => console.log('홍길동'))(); // 홍길동

console.log();

// class 내부는 암묵적으로 strict mode
// 메서드의 내부 this는 객체
class Person {
    constructor(prefix) {
        this.prefix = prefix;
    }
    printName(arr) {
        return arr.map(ele => this.prefix + arr[0]);
    }
}
const person = new Person('나는 ');
console.log(person.printName(['강감찬'])); // ['나는 강감찬']

console.log();

// 화살표 함수는 call, apply, bind 메서드를 이용해 this를 바인딩할 수 없다.
const add = (a, b) => {
    console.log(this.c); // undefined
    return a + b;
};
const obj2 = {c:1};
console.log(add.call(obj2, 1, 2)); // 3
console.log(add.apply(obj2, [1, 2])); // 3
console.log(add.bind(obj2, 1, 2)()); // 3

console.log();


// 화살표 함수는 arguments를 바인딩하지 않고 상위스코프의 arguments를 따른다.

// 아래 arguments는 즉시실행함수의 arguments
(function() {
    const foo = () => console.log(arguments);
    foo(3, 4);
})(1, 2); 

// 아래 arguments는 전역객체의 arguments
const obj3 = () => console.log(arguments);
obj3(1,2,3);

console.log();

// rest파라미터
function func1(...args) {
    console.log(args);
    console.log(args.length);
}
func1(1, 2); // [1, 2] 2
func1(1, 2, 3); // [1, 2, 3] 3

function func2(a, ...args) {
    console.log(args); // [2] 1
    console.log(args.length); // [2, 3] 2
}
func2(1, 2);
func2(1, 2, 3);

console.log();

// default parameter : 파라미터의 값을 설정하지 않거나 undefined이면 기본값을 적용
function func3(a, b=5) {
    return a * b;
}
console.log(func3(1)); // 5
console.log(func3(1, undefined)); // 5
console.log(func3(1, 2)); // 2
console.log(func3(1, null)); // 0
console.log(func3(1, '삼')); // NaN



