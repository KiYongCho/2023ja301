/* prototype */
// - JS의 모든 객체는 함수를 통해 생성된다.
// - 함수를 통해 객체가 생성될때 생성된 객체마다 prototype이라는 프라퍼티를 가진다.
// - JS는 prototype 프라퍼티를 통해 상속(확장)을 구현한다.
// - JS는 Java와 같은 상속(inheritance)모델이 아닌 위임(delegation)모델을 사용한다.
// - 객체의 프라퍼티는 객체에 객체의 메소드는 그 객체의 프로토타입에 저장된다.
// - 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지며 이 값은 프로토타입의 참조다.
// - 모든 함수객체는 prototype 프라퍼티를 가진다.
// - 모든 prototype은 생성자함수의 참조인 constructor 프라퍼티를 가진다.
// - 객체리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이다.
// - 생성자함수만 prototype을 생성하며 생성자함수를 통해 생성된 객체의 프로토타입은 생성자함수.prototype이다.
// - 생성자함수를 통해 생성된 객체는 생성자함수의 prototype에 __proto__ 또는 getPrototypeOf를 통해 접근할 수 있다.
// - 화살표함수와 메서드는 prototype을 생성하지 않는다.
// - Object를 상속받은 객체는 __proto__ 라는 숨김프라퍼티에 prototype으로 사용할 객체를 등록할 수 있다.
//   (등록하면 상속을 받는 것이고 등록하지 않으면 Object를 상속받는다. 즉 Object의 프로토타입을 사용한다는 것이다)
// - 프로토타입 체인(prototype chain) : 프로토타입객체가 상위 프로토타입객체의 프라퍼티와 메소드를 상속

// __proto__
const hong = {
    name: '홍길동',
    age: 30
};
console.log(hong);
console.log(hong.__proto__ === Object.prototype); // true
console.log(hong.__proto__.constructor === Object.prototype.constructor); // true
console.log(hong.__proto__.constructor === Object); // true
console.log(hong.__proto__.constructor === Object()); // false
console.log(hong.__proto__.constructor === new Object()); // false

hong.hobby = ['축구', '농구'];
console.log(hong);

Object.prototype.printHobby = function() {
    console.log(this.hobby);
}
hong.printHobby();

hong.__proto__.printName = function() {
    console.log('hello');
};
Object.prototype.printName();

console.log();

// 생성자함수를 통한 객체 생성
// 문제점 : 동일한 메소드가 객체마다 생성된다.
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius**2;
    }
}
const circle1 = new Circle(1); // circle1에는 radius, getArea가 있다
const circle2 = new Circle(2); // circle2에도 radius, getArea가 있다
console.log(circle1.getArea === circle2.getArea);
console.log(circle1.getArea());
console.log(circle2.getArea());

console.log();

// 화살표함수, 메서드는 prototype을 소유하지 않는다. (non-constructor 이기 때문)
console.log((()=>{}).prototype); // undefined
const myobj = {
    name() {
        return this.name;
    }
};
console.log(myobj.prototype); // undefined

console.log();

// 프로토타입 기반의 상속
// 프라퍼티는 각자 소유, 메소드는 공유
function Circle2(radius) {
    this.radius = radius;
}
Circle2.prototype.getArea = function() {
    return Math.PI * this.radius**2;
};
const circle3 = new Circle2(1); // circle1에는 radius가 있다
const circle4 = new Circle2(2); // circle2에는 radius가 있다
console.log(circle3.getArea === circle4.getArea); // getArea는 하나
console.log(circle3.getArea());
console.log(circle4.getArea());

console.log();

// [[Prototype]]이라는 숨김프라퍼티 사용 이유 : 순환참조 방지
// Cyclic __proto__ value 에러 발생
// const a = {};
// const b = {};
// a.__proto__ = b;
// b.__proto__ = a;


// 객체리터럴로 생성된 객체의 프로토타입(__proto__로 접근)은 Object.prototype
const person = {};
console.log(person.__proto__===Object.prototype); // true

// 생성자함수로 생성된 객체의 프로토타입은 생성자함수의 prototype에 바인딩된 객체
function Person() {
}
const person2 = new Person();
console.log(person2.__proto__===Person.prototype); // true
console.log(person2.__proto__===Object.prototype); // false

// 생성자함수 prototype을 사용할 수 있다.
// 객체는 prototype에 직접 접근할 수 없고 __proto__를 통해 접근할 수 있다.
// 생성자함수는 생성자함수.prototype에 constructor로 저장되어 있고
// 객체는 생성자함수.prototype에 생성자함수.__proto__로 저장되어 있다.
function Car() {
}
const car = new Car();
console.log(Car === Car.prototype.constructor); // true
console.log(car.__proto__ === Car.prototype); // true

console.log();

// getter 통해 프로토타입 접근
const op = Object.getPrototypeOf(o);
op.name = 'op';
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

console.log();

// 정적프라퍼티/메서드
// 생성자함수에 선언한 프라퍼티와 메서드로 생성자함수를 통해 참조 가능
// 생성자함수를 통해 만들어진 객체를 통해서는 참조 불가능
function PC() {
    name: '퍼스털컴퓨터';
}
PC.price = 10000;
PC.getPrice = function() {
    return this.price;
};
console.log(PC.price); // 10000
console.log(PC.getPrice()); // 10000

const mypc = new PC();
mypc.type = 'personal';
// console.log(mypc.price); // error
// console.log(mypc.getPrice()); // error
// console.log(mypc.constructor.price); // 10000
// console.log(mypc.constructor.getPrice()); // 10000

console.log();

// in 연산자 : 프라퍼티 존재 확인 (ES6의 Reflet.has메서드와 동일)
console.log('name' in mypc); // true
console.log(Reflect.has(mypc, 'name')); // true
console.log('price' in mypc); // false

// Object.prototype.hasOwnProperty : 프라퍼티가 객체 고유의 프라퍼티이면 true
console.log(mypc.hasOwnProperty('name')); // false
console.log(mypc.hasOwnProperty('type')); // true

console.log();

// Object.keys, Object.values, Object.entries (ES8)
const gum = {
    brand: '롯데',
    name: '자일리톨',
    pricd : 100
};
console.log(Object.keys(gum));
console.log(Object.values(gum));
console.log(Object.entries(gum));




























