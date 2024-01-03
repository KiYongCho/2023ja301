/* prototype */

// JS의 모든 객체는 함수를 통해서 생성된다.
// - 함수를 통해 객체가 생성될 때 생성된 객체마다 prototype이라는 상속을
//   위한 프라퍼티가 생성된다.
// - JS는 상속(Inheritance)모델이 아닌 위임(Delegation)모델을 사용한다.
// - 각 객체의 프라퍼티는 각 객체에 저장되고 각 객체의 메소드는 각 객체의
//   프로토타입에 저장된다.
// - 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지며
//   그 값은 프로토타입의 참조이다.
// - 모든 프로토타입은 생성자함수의 참조인 constructor라는 프라퍼티를
// - 가진다.
// - 객체리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이다.
// - 생성자함수만 prototype을 생성하며 생성자함수를 통해 생성된 객체의
//   프로토타입은 생성자함수.prototype이다.
// - 생성자함수를 통해 생성된 객체는 생성자함수의 prototype에 __proto__
//   또는 Object.getPrototypeOf를 통해 접근할 수 있다.
// - 선언식함수, 함수리터럴은 생성될때 prototype 프라퍼티를 가진다.
// - 화살표함수, 메서드는 생성될때 prototype 프라퍼티를 가지지 않는다.

// __proto__
const hong = {
    name: '홍길동',
    age: 30
}
console.log(hong); // {name:'홍길동', age:30}
console.log(hong.__proto__ === Object.prototype); // true
console.log(hong.__proto__.constructor 
    === Object.prototype.constructor); // true
console.log(hong.__proto__.constructor === Object); // true
console.log(hong.__proto__.constructor === Object()); // false
console.log(hong.__proto__.constructor === new Object()); // false

hong.hobby = ['축구', '농구'];
console.log(hong);

Object.prototype.printHobby = function() {
    console.log(this.hobby); 
}
// hong.__proto__는 Obejct의 prototype이므로
// hong은 Object에 추가된 printHobby메서드를 사용(접근)할 수 있다.
// 그때 printHobby메서드내의 this는 해당 메서드를 호출한 객체의 참조
hong.printHobby(); // ['축구', '농구']

console.log();

hong.__proto__.printName = function() {
    console.log('홍길동');
}
Object.prototype.printName(); // 홍길동

console.log();

// 생성자함수를 통한 객체 생성
// 문제점 : 동일한 메서드가 객체마다 생성됨
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius**2;
    }
}
const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(circle1.getArea === circle2.getArea); // false
console.log(circle1.getArea());
console.log(circle2.getArea());

// 화살표함수, 메서드는 prototype을 가지지 않는다.
console.log((()=>{}).prototype); // undefined
const myobj = {
    name() {
        return this.name;
    }
}
console.log(myobj.prototype); // undefined

console.log();

// 프로토타입 기반의 상속
// 프라퍼티는 각자 소유, 메서드는 공유
function Circle2(radius) {
    this.radius = radius;
}
Circle2.prototype.getArea = function() {
    return Math.PI * this.radius**2;
};
const circle3 = new Circle2(1);
const circle4 = new Circle2(2);
console.log(circle3.getArea == circle4.getArea); // true
console.log(circle3.getArea());
console.log(circle4.getArea());

console.log();

// [[Prototype]] 숨김프라퍼티를 사용하는 이유 : 순환참조 방지
// 순환참조 : A->B->A->B->A...
// const a = {};
// const b = {};
// a.__proto__ = b;
// b.__proto__ = a;

// 객체리터럴로 생성된 객체의 프로토타입은 __proto__로 접근
const person = {};
console.log(person.__proto__ === Object.prototype); // true
console.log(person.__proto__.constructor); // Object

// 생성자함수로 생성된 객체의 프로토타입은 prototype으로 접근
function Person() {
}
const person2 = new Person();
console.log(person2.__proto__ === Person.prototype); // true
console.log(person2.__proto__ === Object.prototype); // false
console.log(Person.__proto__ === Object.prototype); // false
console.log(Person.__proto__ === Function.prototype); // true
console.log(Function.__proto__); // {}
console.log(Function.__proto__.constructor); // Function
console.log(Object.prototype === Function.__proto__); // false
// person2.__proto__ => Person.prototype
// Person.__proto__ => Function.prototype

Function.__proto__ = Object.prototype;
console.log(person2.__proto__ === Function.__proto__); // false
console.log(Person.__proto__ === Function.__proto__); // false
console.log(Object.prototype === Function.__proto__); // true

// Object.getPrototypeOf
const o = {
    newo: 'newo'
};
const op = Object.getPrototypeOf(o);
op.name = 'op';
op.print = function() {
    console.log('op');
}
console.log(op);

console.log();

// 프로토타입 직접 상속
const p = new Object();
p.name = 'p';
p.__proto__ = o;
console.log(Object.getPrototypeOf(p));

console.log();

// 프로토타입 체인
const grandParent = {
    name: 'grandParent',
    age: 80,
    printGrandParent: () => {console.log('grandParent!');}
};
const parent = {
    name: 'parent',
    age: 50,
    __proto__: grandParent,
    printParent: () => {console.log('parent!');}
};
const child = {
    name: 'child',
    age: 20,
    __proto__: parent,
    printChild: () => {console.log('child!');}
};
console.log(grandParent.__proto__ === Object.prototype); // true
console.log(child.name); // child
console.log(child.__proto__.name); // parent
console.log(parent.name); // parent
console.log(parent.__proto__.name); // grandParent
console.log(grandParent.name); // grandParent
console.log(grandParent.__proto__.name); // op
console.log(({}).name); // op

console.log();

const obj1 = {
    name: "홍길동",
    age: 50
};

const obj1Prototype = Object.getPrototypeOf(obj1);
obj1Prototype.hobby = ['등산', '낚시'];

const obj2 = {
    name: "홍길동아들",
    age: 20,
    __proto__ : obj1
};
console.log(obj2.hobby);

console.log();

const obj3 = {
    name: "홍길동손자",
    age: 1,
    __proto__: obj2
}
const obj3Prototype = Object.getPrototypeOf(obj3);
obj3Prototype.hobby = ['바둑', '장기'];

console.log();

console.log();
console.log(obj1.hobby);
for (prop in obj1) {
    console.log(prop, obj1[prop]);
}
console.log();
console.log(obj2.hobby);
for (prop in obj2) {
    console.log(prop, obj2[prop]);
}
console.log(obj3.hobby);
for (prop in obj3) {
    console.log(prop, obj3[prop]);
}

// 정적프라퍼티 / 정적메소드
// 생성자함수객체에 선언한 프라퍼티와 메소드
// 생성자함수객체를 통해서만 참조가 가능
// 생성자함수를 통해 생성된 객체에서는 참조가 불가능
// 생성된 객체들이 공유

function PC() {
    name: '퍼스널컴퓨터'
};
PC.price = 10000;   // 정적프라퍼티
PC.getPrice = function() {  // 정적메소드
    return this.price;
}
console.log(PC.price); // 10000
console.log(PC.getPrice()); // 10000

const pc1 = new PC();
const pc2 = new PC();
// console.log(pc1.price); // error
// console.log(pc1.getPrice()); // error
console.log(pc1.constructor.price);
console.log(pc1.constructor.getPrice());

// in연산자 : 프라퍼티 존재 확인 (ES6의 Reflect.has)
console.log('name' in pc1); // true
console.log('prototype' in Object); // true
console.log(Reflect.has(pc1, 'name')); // true
console.log(Reflect.has(pc1, 'price')); // false
console.log('prototype' in pc1); // false
console.log('prototype' in PC); // true

console.log();

// Object.keys, Object.values, Object.entries(ES8)
const gum = {
    brand: '롯데',
    name: '자일리톨',
    price: 100
};
console.log(Object.keys(gum));
console.log(Object.values(gum));
console.log(Object.entries(gum));

console.log();


















