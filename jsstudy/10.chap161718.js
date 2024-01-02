/* 프라퍼티 어트리뷰트 */
// 객체의 프라퍼티가 생성될때 프라퍼티에 대한 어트리뷰트(속성, 메타정보)
// 를 엔진이 내부적으로 생성
// [[Value]] : 프라퍼티의 값
// [[Writerble]] : 프라퍼티의 값을 쓸(write) 수 있는지 여부
// [[Enuerable]] : 프라퍼티를 열거(나열)할지 여부
// [[Configurable]] : 프라퍼티를 삭제할 수 있는지 여부
// writable, enureable, configurable 엔진이 생성하면 디폴트 true
// 프라퍼티 디스크립터 객체 : 프라퍼티 어트리뷰트의 정보를 가진 객체



// // 프라퍼티 디스크립터 객체를 활용한 프라퍼티 어트리뷰트 확인
const person = {
    name: '홍길동'
};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

console.log();

person.age = 30;

console.log(Object.getOwnPropertyDescriptors(person));

console.log();

// // 프라퍼티는 데이터프라퍼티와 접근자프라퍼티로 구분된다.
// // 데이터프라퍼티 : 값을 저장하는 프라퍼티, value를 포함
// // 접근자프라퍼티 : 값을 읽거나 쓰기위한 메소드 제공, get/set 포함
const person2 = {
    firstName: '홍', // data property
    lastName: '길동', // data property
    get fullName() { // accessor property
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) { // accessor property
        [this.firstName, this.lastName] = name.split(' ');
    }
};
console.log(person2.firstName, person2.lastName);

console.log();

person2.fullName = '강 감찬'; // set 호출
console.log(person2);
console.log(person2.fullName); // get 호출
console.log(Object.getOwnPropertyDescriptor(person2, 'fullName'));

// // 프라퍼티 정의
const person3 = {};

Object.defineProperty(person3, 'firstName', {
    value: '홍',
    writable: true,
    enumerale: true,
    configurable: true
});
Object.defineProperty(person3, 'lastName', {
    value: '길동'
});
Object.defineProperty(person3, 'fullName', {
    get () {
        return `${this.firstName} ${this.lastName}`;
    },
    set (name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
});
console.log(Object.getOwnPropertyDescriptors(person3));

console.log();

// // 프라퍼티 한번에 모두 설정
const person4 = {};
Object.defineProperties(person4, {
    firstName: {
        value: '홍',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: '길동'
    },
    fullName: {
        get () {
            return `${this.firstName} ${this.lastName}`;
        },
        set (name) {
            [this.firstName, this.lastName] = name.split(' ');
        }
    }
});
person4.fullName = '강 감찬';
console.log(person4.fullName);
console.log(Object.getOwnPropertyDescriptors(person4));

// /* 생성자 함수 (constructor function) */
// // new 연산자와 함께 호출해서 객체를 생성하는 함수
// // 선언식 함수, 함수리터럴에서 new 연산자와 함께 호출하면 생성자 함수
// // 메소드, 화살표함수는 new 연산자로 호출할 수 없는 일반 함수
// // 일반적으로 생성자 함수명은 대문자로 시작하는 관례가 있다.

const car1 = {
    name: 'volvo',
    color: 'red'
};
console.log(car1);

const car2 = {
    name: 'bmw',
    color: 'blue'
};
console.log(car2);

// // 선언식함수
function Car(name, color) {
    this.name = name;
    this.color = color;
}
// // new로 선언식함수를 호출하면 함수타입의 객체가 생성됨
const car3 = new Car('volvo', 'red');
console.log(car3);
const car4 = new Car('bmw', 'blue');
console.log(car4);

console.log();

// // 1. 생성자함수는 return문을 사용하지 않거나 기본값을 반환하면
// //    생성된 객체를 반환, 그때의 this는 생성된 객체를 가리킨다.
// // 생성자함수를 쓰려면 return문을 사용하지 말거나 기본값을 리턴하도록
function Tire() {
    this.printTireThis = function() {
        console.log(this);
    }
}
const tire = new Tire();
tire.printTireThis();

console.log();

// // 객체를 생성해서 반환하는 함수
// // 함수에서 Object타입의 obj객체를 반환했으므로 함수내의 this는
// // Obejct가 된다.
function Tire2() {
    this.printTireThis = function() {
        console.log(this);
    }
    const obj = new Object();
    return obj;
}
const tire2 = new Tire2();
// tire2.printTireThis(); // error


// /* 함수와 일급객체 */
// // 일급객체 : 값인 객체(값으로 사용할 수 있는 객체)
// // 런타임에 생성이 가능, 변수에 저장 가능, 함수인자로 전달 가능,
// // 함수의 반환값으로 가능한 함수객체

// // 함수는 일급객체다
// // 함수는 객체이고 객체는 값이므로 함수는 값이다.
function getName(name) {
    return `이름은 ${name} 입니다!`;
}
console.log(getName('홍길동'));
console.log(Object.getOwnPropertyDescriptors(getName));

console.log();

// // 함수의 기본 프라퍼티 : 함수가 생성되면 엔진이 생성해 주는 프라퍼티
// // arguments : 함수가 전달받은 인자들의 유사배열객체
// // ES5에서는 유사배열객체(length프라퍼티를 가진),
// // ES6에서는 유사배열객체이자 이터러블(iterable)
// // arguments.length : 전달받은 인자의 수
// // length : 함수에 정의된 파라미터의 수
function func1() {
    console.log(func1.arguments);
    console.log(func1.arguments.length);
    console.log(func1.length);
    console.log(func1.arguments['1']);
}
func1(1, 2, 3);

console.log();

// // caller : 비표준, 함수를 호출한 함수
// // callee : 호출당한 함수
function func2() {
    console.log(func2.name);
    console.log(func2.caller.name);
}
func2();
function func3() {
    func2();
}
func3();

console.log();

// // ***** __proto__ : [[Prototype]]에 접근하기 위한 프라퍼티
// // hasOwnProperty()
// // : 상속받은 프라퍼티가 아니라 본인이 정의한 프라퍼티면 true
 const cpu = {
    name: 'i9'
 };
//  // cpu객체의 상위객체는 Object
//  // 결국 어떤 객체의 __proto__ 프라퍼티는 상위객체의 prototype프라퍼티
//  // 상위객체의 prototype에는 하위에 전달할 프라퍼티들과 메소드들이 있다.
//  console.log(cpu.__proto__ === Object.prototype); // true
//  console.log(cpu.hasOwnProperty('name')); // true
//  // __proto__ 프라퍼티는 내가 정의한 프라퍼티가 아니고
//  // 엔진이 객체 생성시에 상속을 위해 자동으로 부여한 프라퍼티
 console.log(cpu.hasOwnProperty(cpu.__proto__)); // false
 
 console.log();

 for (prop in cpu) {
    console.log(`${prop} : ${cpu[prop]}`);
 }


// ***** prototype 프라퍼티
// 생성자함수로 호출할 수 있는 함수객체
// 즉, constructor(생성자함수)만이 소유하는 프라퍼티
// prototype은 자바스크립트에서 상속을 구현하기 위해 사용됨
// 객체에는 prototype에 접근할 수 있는 __proto__ 프라퍼티가 있다.
// 함수는 생성될때 prototype 프라퍼티를 가지고 태어난다.
// 그래서 JS에서는 함수에 존재하는 prototype프라퍼티를 통해
// 상속을 구현하는 prototype기반의 상속 지원 언어이다!
function Diary(name) {
    this.name = name;
}
const diary = new Diary('2024년 일기');
// 생성자함수
console.log(Diary.hasOwnProperty('prototype')); // true
// 객체
console.log(diary.hasOwnProperty('prototype')); // false
// 함수리터럴
console.log((function() {}).hasOwnProperty('prototype')); // true
// 객체리터럴
console.log({}.hasOwnProperty('prototype')); // false



// constructor : 객체를 생성한 생성자함수 프라퍼티
console.log(diary.constructor);

for (prop in diary.constructor) {
    console.log(`${prop} : ${diary.constructor[prop]}`);
}

const diary2 = new Diary('2025년 일기');
console.log(diary2.constructor);

console.log(diary.constructor === diary2.constructor);

console.log(diary.__proto__ === diary2.__proto__);









