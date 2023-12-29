/* 객체 */

// 기본타입을 제외한 모든 타입은 참조타입(객체)
// 객체는 0개 이상의 프라퍼티로 구성
// 프라퍼티는 프라퍼티명(키)과 프라퍼티값(밸류)로 구성
// JS에서 객체는 연관배열 (Associative Array):키(인덱스)가 문자열인 배열

// 객체 생성법

// 1. 객체리터럴
const obj1 = {
    name: "홍길동",
    age: 20,
    address: "지구 어딘가"
};
console.log(obj1, typeof obj1);

// 2. Object 생성자
// 객체리터럴로 객체를 생성해도 내부적으로 Object 생성자로
// 변환되어 해석
const obj2 = new Object();
obj2.name = "홍길동";
obj2.age = 20;
obj2.address = "지구 어딘가";
console.log(obj2, typeof obj2);

// 3. Object.create
const obj3 = Object.create(Object);
obj3.name = "홍길동"; // Function의 이름이라 읽기전용
obj3.age = 20;
obj3.address = "지구 어딘가";
console.log(obj3, typeof obj3);

// 4. 생성자 함수
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
const person = new Person('홍길동', 20, '지구 어딘가');
console.log(person, typeof person);
console.log(person instanceof Person);
// Person은 Object를 상속받았다 (X), 부모와 자식 관계가 아님
// Person은 Object를 확장했다 (O), 동료 관계 (사용하는 관계)
console.log(person instanceof Object);

// *** 매우 중요 ***
// prototype 프라퍼티
// 생성자함수는 prototype이라는 프라퍼티를 가진다.
// 자바스크립트의 모든 객체는 적어도 하나의 다른 객체를 상속(확장)한다.
// prototype프라퍼티는 상속(확장)해 준 객체의 참조

// Person생성자함수가 가진 prototype이라는 프라퍼트를 통해서
// Person객체에 hobby라는 프라퍼티를 새로 생성(동적 확장)
Person.prototype.hobby = ["장기", "바둑"];
// Person객체에 printHobby라는 메소드(프라퍼티)를 새로 생성(동적 확장)
Person.prototype.printHobby = function() {
    console.log(this.hobby);
};

person.printHobby();
console.log(typeof Person.prototype);
console.log(Person.prototype instanceof Object);
console.log(person instanceof Person);
console.log(person instanceof Object);

const person2 = new Person('강감찬', 30, '우주 어딘가');
person2.hobby = ["게임", "등산"];
person2.printHobby();

for (prop in person) {
    console.log(prop, person[prop]);
}

for (prop in person2) {
    console.log(prop, person2[prop]);
}

// 객체 프라퍼티 반복
// 방법 1
for (prop in obj1) {
    console.log(prop, obj1[prop]);
}
// 방법 2
for (prop of Object.getOwnPropertyNames(obj1)) {
    console.log(prop, obj1[prop]);
}

// 객체 프라퍼티 추가
obj1.hobby = ["축구", "야구"];
obj1["gender"] = "남";

// 객체 메서드 추가
obj1.printName = function() {
    console.log(this.name);
};
obj1.printName();

// 객체 메서드 제거
delete obj1.printName;





















