/* 클래스 (Class) */
// JS의 클래스는 객체지향언어의 클래스와는 태생과 개념이 다르다.
// JS의 클래스는 prototype기반의 상속을 구현하기 쉽도록 문법을 정리한 문법적설탕(Syntactic Sugar)
// 클래스는 함수이며 값으로 사용될 수 있는 일급객체다.
// JS는 생성자함수와 클래스를 통해 객체를 생성하는 두가지 방법을 가지게 되었다.
// 생성자함수는 new연산자로 호출되거나 new연산자없이 호출될 수 있지만 클래스는 new연산자와 함께 호출되어야한다.

// 클래스 선언 (일반적)
class Person {
}
console.log(typeof Person); // function

console.log();

// 클래스 선언 (표현식 사용, 익명/기명)
const Car = class {
};
console.log(typeof Car); // function
const Tire = class Tire{};
console.log(typeof Tire); // function

console.log();

// 클래스에는 생성자, 프로토타입메서드, 정적메서드를 선언할 수 있다.
class Cat {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi 나는 ${this.name}`);
    }
    static sayHi() {
        console.log(`Hi 나는 ${this.name}`);
    }
}
const cat = new Cat('네로');
console.log(cat.name); // 네로
cat.sayHi(); // Hi 나는 네로
Cat.sayHi(); // Hi 나는 Cat (정적메서드는 클래스명으로만 호출가능)

console.log();

// 클래스에 프라퍼티 추가 (인스턴스들의 데이터)
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
dog1.printName();
dog1.makeSound();
dog2.printName();
dog2.makeSound();

Dog.prototype.age = 10;
console.log(dog1.age); // 10
console.log(dog2.age); // 10

dog1.age = 15;
console.log(dog1.age); // 15
console.log(dog2.age); // 10

console.log();

// 접근자프라퍼티 get/set
class Phone {
    name = '폰';
    get name() {
        return this.name;
    };
    set name(name) {
        this.name = name;
    };
}
const phone = new Phone('아이폰');
phone.name = '삼성폰';
console.log(phone.name); // 삼성폰

console.log();

// private 필드
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
mouse.name = '생쥐';
console.log(mouse.name); // 생쥐

console.log();

// static 필드
class Desk {
    static name;
    static #brand;
}
Desk.name = '책상';
Desk.brand = '한쌤';
console.log(Desk.name); // 책상
console.log(Desk.brand); // 한쌤

console.log();

// 상속
class Animal {
    name;
    eat() {
        console.log('먹는다');
    }
}
class Bird extends Animal {
    sound() {
        console.log('짹짹');
    }
}
class Mammal extends Animal {
    sound() {
        console.log('어흥');
    }
}
const eagle = new Bird();
eagle.name = '독수리';
console.log(`${eagle.name}`);
eagle.eat();
eagle.sound();
const tiger = new Mammal();
tiger.name = '호랑이';
console.log(`${tiger.name}`);
tiger.eat();
tiger.sound();

console.log();

// super
class Parent {
    constructor(name) {
        this.name = name;
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const child = new Child('아들', 30);
console.log(child);






