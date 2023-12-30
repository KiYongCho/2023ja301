/* prototype */
// - JS의 모든 객체는 함수를 통해 생성된다.
// - 함수를 통해 객체가 생성될때 생성된 객체마다 prototype이라는 프라퍼티를 가진다.
// - JS는 prototype 프라퍼티를 통해 상속(확장)을 구현한다.
// - JS는 Java와 같은 상속(inheritance)모델이 아닌 위임(delegation)모델을 사용한다.
// - 객체의 프라퍼티는 객체에 객체의 메소드는 그 객체의 프로토타입에 저장된다.
// - 프로토타입은 객체가 가지는 프라퍼티인 객체다.
// - 객체는 __proto__ 라는 숨김프라퍼티에 prototype으로 사용할 객체를 등록할 수 있다.
//   (등록하면 상속을 받는 것이고 등록하지 않으면 Object를 상속받는다. 즉 Object의 프로토타입을 사용한다는 것이다)
// - 프로토타입 체인(prototype chain) : 프로토타입객체가 상위 프로토타입객체의 프라퍼티와 메소드를 상속
// 참고) https://www.nextree.co.kr/p7323/
// 참고) https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42


// 프로토타입 직접 접근
const o = new Object();
o.name = 'o';
console.log(o.prototype); // undefined

// getter 통해 프로토타입 접근
const op = Object.getPrototypeOf(o);
op.name = 'newo';
op.print = function() {
    console.log('op');
};
console.log(op); // {name: 'newo'}
op.print(); // op

console.log();

// 프로토타입 상속
const p =  new Object();
p.name = 'p';
p.__proto__  = o;
const pp = Object.getPrototypeOf(p);
console.log(pp); // {name: 'o'}

console.log();


// 프로토타입 체인

// grandParent는 Object의 프로토타입을 사용
const grandParent = {
    name: "grandParent",
    age: 80,
    printGrandParent: () => { console.log('난 grandParent!'); }
};
console.log(grandParent.name, grandParent.age);

// parent는 grandParent의 프로토타입을 사용
const parent = {
    name: "parent",
    age: 50,
    __proto__: grandParent,
    printParent: () => { console.log('난 parent!'); }
};
console.log(parent.name, parent.age);

parent.printGrandParent();

// child는 parent의 프로토타입을 사용
const child = {
    name: "child",
    age: 20,
    __proto__: parent,
    printChild: () => { console.log('난 child!'); }
};
console.log(child.name, child.age);

child.printParent();

// 객체의 프로토타입 구하기
const obj1 = {
    name: "홍길동",
    age: 50
};
const obj1Prototype = Object.getPrototypeOf(obj1);
obj1Prototype.hobby = ['축구', '야구'];
console.log(obj1Prototype.hobby);

// obj2에는 hobby가 없으므로 obj2의 프로토타입인 obj1을 탐색하여 출력
const obj2 = {
    name: "홍길동아들",
    age: 20,
    __proto__: obj1
};
console.log(obj2.hobby);

console.log();

// obj2가 참조할 수 있는 프라퍼티 (obj2의 프라퍼티 + obj1에서 상속받은 프라퍼티)
for (prop in obj2) {
    console.log(prop, obj2[prop]);
}

console.log();

// obj2.__proto__가 참조할 수 있는 프라퍼티 (obj1의 프라퍼티)
for (prop in obj2.__proto__) {
    console.log(prop, obj2.__proto__[prop]);
}

console.log();

// obj1 프로토타입의 프라퍼티 확인
for (prop in obj1.prototype) {
    console.log(prop, obj1.prototype[prop]);
}

// obj2의 프로토타입의 프라퍼티 확인
for (prop in obj2.prototype) {
    console.log(prop, obj2.prototype[prop]);
}

// Object의 프로토타입의 프라퍼티 확인
for (prop in Object.prototype) {
    console.log(prop, Object.prototype[prop]);
}

console.log();

// hobby 프라퍼티는 obj1의 프로토타입인 Object에 등록되어 있다!
console.log(obj1.__proto__ === Object.getPrototypeOf(obj1));


