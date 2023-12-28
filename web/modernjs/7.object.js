/* 객체 */
// 기본타입을 제외한 모든 타입은 객체
// 객체는 프라퍼티로 구성 (프라퍼티는 프라퍼티네임과 프라퍼티벨류)
// 프라퍼티네임은 문자열 또는 symbol, 프라퍼티벨류는 어떤것이든 허용

// 객체 생성

// 1. 객체리터럴
const obj1 = {
    name: "홍길동",
    age: 20,
    address: "지구 어딘가"
}
console.log(obj1, typeof obj1);

// 2. Object 생성자
const obj2 = new Object();
obj2.name = "홍길동";
obj2.age = 20;
obj2.address = "지구 어딘가";
console.log(obj2, typeof obj2);

// 3. Object.create
const obj3 = Object.create(Object);
obj3.name = "홍길동";
obj3.age = 20;
obj3.address = "지구 어딘가";
console.log(obj3, typeof obj3);

// 4. 생성자 함수
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
const person = new Person("홍길동", 20, "지구 어딘가");
console.log(person, typeof person);
console.log(person instanceof Person);
console.log(person instanceof Object);

// *** 매우 중요 *** prototype 프라퍼티
// 생성자 함수가 가지는 prototype 프라퍼티를 이용한 프라퍼티 또는 메서드 확장
// 자바스크립트의 모든 객체는 적어도 하나의 다른 객체를 상속함
// 객체의 prototype 프라퍼티는 상속해 준 객체(상속대상객체)의 참조
Person.prototype.hobby = ["장기", "바둑"];
Person.prototype.printHobby = function() {
    console.log(this.hobby);
};
person.printHobby();
console.log(typeof Person.prototype);
console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(Person.prototype instanceof Object);

// 객체 프라퍼티 반복
// 방법 1
for (prop in obj1) {
    console.log(`property name:${prop}, property value:${obj1[prop]}`);
}
// 방법 2
for (prop of Object.getOwnPropertyNames(obj1)) {
    console.log(`property name:${prop}, property value:${obj1[prop]}`);
}

// 객체 프라퍼티 추가
obj1.hobby = ['축구', '농구'];
obj1['gender'] = '남';
console.log(obj1, typeof obj1);

// 객체 프라퍼티 제거
delete obj1.gender;
console.log(obj1, typeof obj1);

// 객체 메서드 추가
obj1.printName = function() {
    console.log(this.name);
};
console.log(obj1, typeof obj1);

// 객체 메서드 제거
delete obj1.printName;
console.log(obj1, typeof obj1);

// 식별자로 사용할 수 없는 키를 쓰려면 [] 표기법 사용
// obj1.total-salary = 10000; // error
// obj1[total-salary] = 10000; // error
obj1['total-salary'] = 10000;
console.log(obj1, typeof obj1);

// 프라퍼티 축약 표현 : ES6
let x = 1;
let y = 2;
// const obj4 = {x:x, y:y}; // ES5
const obj4 = {x, y}; // ES6
console.log(obj4, typeof obj4);

// 프라퍼티명 연산 : ES6
let i = 0;
const obj5 = {
    [`name${++i}`]: '홍길동'
};
console.log(obj5, typeof obj5);

// 메서드 축약 : ES6
const obj6 = {
    sayHi() {
        console.log("Hi~");
    }
};
obj6.sayHi();
















