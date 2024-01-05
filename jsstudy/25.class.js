/* 클래스 (Class) */
// - JS의 클래스는 prototype기반의 상속을 구현하기 쉽도록 정리한
//   문법적설탕(Syntactic Sugar)
// - 클래스는 함수이며 값으로 사용될 수 있는 일급객체다
// - JS는 생성자함수와 클래스를 통해 객체를 생성하는 두가지 방법을
//   제공한다.
// - 생성자함수는 new연산자로 호출되거나 new연산자 없이 호출될 수 있지만
//   클래스는 new연산자로만 호출될 수 있다.

// 클래스 선언 (일반적)
class Person {
}
console.log(typeof Person); // function

console.log();

// 클래스 선언 (표현식 사용, 익명/기명)
const Car = class {};
console.log(typeof Car); // function
const Tire = class Tire{};
console.log(typeof Tire); // function

console.log();

// 클래스에는 생성자, 프로토타입메서드, 정적메서드를 선언할 수 있다.
class Cat {
    // 생성자
    constructor(name) {
        this.name = name;
    }
    // 프로토타입메서드, prototype객체에 등록, 객체.sayHi로 호출
    // 클래스의 프라퍼티
    sayHi() {
        console.log(`Hi 나는 ${this.name}`);
    }
    // 정적메서드, 함수에 등록, Cat.sayHi로 호출
    // 클래스.prototype의 프라퍼티
    static sayHi() {
        console.log(`Hi 나는 ${this.name}`);
    }
}
const cat = new Cat('네로');
console.log(cat.name); // 네로
cat.sayHi(); // Hi 나는 네로
// 정적메서드는 클래스명으로만 호출가능하다.
Cat.sayHi(); // Hi 나는 Cat

console.log();

// 클래스에 프라퍼티 추가
class Dog {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    printName() {
        console.log(this.name);
    }
    makeSound() {
        console.log(this.sound);
    }
}
const dog1 = new Dog('치와와', '치치');
const dog2 = new Dog('진도개', '멍멍');
dog1.printName(); // 치와와
dog1.makeSound(); // 치치
dog2.printName(); // 진도개
dog2.makeSound(); // 멍멍

Dog.prototype.age = 10;
dog1.age=10, dog2.age=10
console.log(dog1.age); // 10
console.log(dog2.age); // 10

dog1.age = 15;
console.log(dog1.age); // 15
console.log(dog2.age); // 10

console.log(Dog.age); // undefined
console.log(Dog.prototype.age); // 10

// Dog라는 클래스(함수)의 프라퍼티와
// Dog라는 클래스에서 파생된 객체의 프라퍼티는 다르다.

console.log();

// 접근자프라퍼티 (get/set 문법을 활용)
class Phone {
    name = '폰'; // constructor 외부에 프라퍼티 만드는 건 버젼 확인요망
    get name() {
        return this.name;
    };
    set name(name) {
        this.name = name;
    }
}
const phone = new Phone('아이폰');
phone.name = '삼성폰'; // set name() 호출됨
console.log(phone.name); // get name() 호출됨

console.log();

/// private 프라퍼티 (정보은닉, 캡슐화)
class Mouse {
    #name;
    get name() {
        return this.#name;
    };
    set name(name) {
        this.#name = name;
    };
}
const mouse = new Mouse();
//mouse.#name = "생쥐";
//console.log(mouse.#name);
mouse.name = "생쥐"; // set name() 호출
console.log(mouse.name); // get name() 호출

// static 프라퍼티(필드) : 클래스명(함수명)으로만 접근 가능
class Desk {
    static name;    // static filed
    static #brand;  // static private filed
    static getName() { // static method
        return this.name;
    }
    static get brand() {
        return this.#brand;
    } 
    static set brand(brand) {
        this.#brand = brand;
    }
}
Desk.name = '책상';
Desk.brand = '한샘';
console.log(Desk.name); // 책상
console.log(Desk.brand); // 한샘
console.log(Desk.getName()); // 책상

// 상속
class Animal {
    name;
    eat() { console.log('먹는다'); }
}
class Bird extends Animal {
    sound() { console.log('짹짹'); }
}
class Mammal extends Animal {
    sound() { console.log('어흥'); }
}

const eagle = new Bird();
eagle.name = '독수리';
console.log(eagle.name); // 독수리
eagle.eat();
eagle.sound();

const tiger = new Mammal();
tiger.name = '호랑이';
console.log(tiger.name);
tiger.eat();
tiger.sound();

// super
class Parent {
    constructor(name) {
        this.name = name;
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name); // Parent의 생성자 호출
        this.age = age;
    }
}
const child = new Child('아들', 30);
console.log(child);




























