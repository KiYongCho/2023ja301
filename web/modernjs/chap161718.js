/* chap 16) 프라퍼티 어트리뷰트 */

// : 객체의 프라퍼티가 생성될때 프라퍼티에 대한 어트리뷰트(속성, 메타정보)를 엔진이 내부적으로 생성
// [[Value]] : 프라퍼티의 값
// [[Writable]] : 프라퍼티 쓰기 가능여부, 내부생성시 디폴트 true
// [[Enumerable]] : 프라퍼티 열거 가능여부, 내부생성시 디폴트 true
// [[Configurable]] : 프라퍼티 삭제 가능여부, 내부생성시 디폴트 true

// 프라퍼티 디스크립터 객체 : 프라퍼티 어트리뷰트의 정보를 제공하는 객체
// 프라퍼티 디스크립터 객체를 활용한 프라퍼티 어트리뷰트 확인
const person = {
    name: '홍길동'
};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

console.log();

// 프라퍼티 동적 생성
person.age = 30;

// 객체의 모든 프라퍼티 어트리뷰트 확인
console.log(Object.getOwnPropertyDescriptors(person));

console.log();

// 프라퍼티는 데이터프라퍼티와 접근자프라퍼티로 나눔
// 데이터프라퍼티 : 값을 저장하는 프라퍼티, value와 writable을 포함
// 접근자프라퍼티 : 값을 읽거나 쓰는 프라퍼티, get/set을 포함
const person2 = {
    firstName: '홍',  // 데이터프라퍼티
    lastName: '길동',      // 데이터프라퍼티
    get fullName() {    // 접근자프라퍼티
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {    // 접근자프라퍼티
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person2.firstName, person2.lastName);

console.log();

person2.fullName = '강 감찬';
console.log(person2);
console.log(person2.fullName);
console.log(Object.getOwnPropertyDescriptor(person2, 'fullName'));

// 프라퍼티 정의
const person3 = {};

Object.defineProperty(person3, 'firstName', {
    value: '홍',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(person3, 'lastName', {
    value: '길동'
});
Object.defineProperty(person3, 'fullName', {
    get () {    
        return `${this.firstName} ${this.lastName}`;
    },
    set(name) {    
        [this.firstName, this.lastName] = name.split(' ');
    }
});
console.log(Object.getOwnPropertyDescriptor(person3, 'firstName'));
console.log(Object.getOwnPropertyDescriptor(person3, 'lastName'));
console.log(Object.getOwnPropertyDescriptor(person3, 'fullName'));

console.log();

// 프라퍼티 한번에 정의
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
        set(name) {    
            [this.firstName, this.lastName] = name.split(' ');
        }
    }
});
console.log(Object.getOwnPropertyDescriptor(person4, 'firstName'));
console.log(Object.getOwnPropertyDescriptor(person4, 'lastName'));
console.log(Object.getOwnPropertyDescriptor(person4, 'fullName'));

console.log();


/* chap 17) 생성자 함수 (constructor function) */

// new 연산자와 함께 호출하여 객체를 생성하는 함수
// 선언식 함수, 함수리터럴 모두 new 연산자와 함께 호출하면 생성자 함수임
// 화살표 함수는 new 연산자로 호출할 수 없어 생성자 함수 아님
// 일반적으로 생성자 함수명은 대문자로 시작하는 관례

// 객체리터럴로 객체를 생성하면 하나만 생성가능
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

// 생성자함수를 사용하여 객체를 생성하면 여러개 생성가능 (클래스의 역할)
function Car(name, color) {
    this.name = name;
    this.color = color;
}
const car3 = new Car('volvo', 'red');
console.log(car3);
const car4 = new Car('bmw', 'blue');
console.log(car4);

console.log();

// 생성자함수는 return문을 사용하지 않거나 기본값을 반환하면 생성된 객체를 반환, this는 생성된 객체
// 생성자함수에서 다른 객체를 반환하면 this는 반환된 다른 객체
// 생성자함수에서는 리턴문을 사용하지 않아야 한다!
function Tire() {
    this.printTireThis = function() {
        console.log(this);
    }
}
const tire = new Tire();
tire.printTireThis();

console.log();

function Tire2() {
    this.printTireThis = function() {
        console.log(this);
    };
    const obj = new Object();
    return obj;
}
const tire2 = new Tire2();
// tire2.printTireThis(); // error

console.log();

/* chap 18) 함수와 일급객체 */
// 일급객체 : 값인 객체 (런타임 객체)
// 1. 런타임에 생성이 가능한 객체 (무명의 리터럴 객체)
// 2. 변수에 저장 가능
// 3. 함수에 매개변수로 전달 가능
// 4. 함수 반환값으로 사용 가능
// 함수는 일급객체이다.
// 함수는 객체이고 객체는 값이므로 함수는 값이다.
// 객체와 함수의 차이 : 함수는 호출할 수 있는 객체이고 고유 프라퍼티들이 있다.

function getName(name) {
    return `이름은 ${name} 입니다!`;
}
console.log(getName('홍길동'));
console.log(Object.getOwnPropertyDescriptors(getName));

console.log();


// 함수의 프라퍼티

// arguments : 함수가 전달받은 인자들
// ES5에서는 유사배열객체(length프라퍼티를 가진 객체), ES6에서는 유사배열객체이자 이터러블
// arguments.length : 함수가 전달받은 인자의 개수
// length : 함수에 정의한 매개변수의 개수
function func1() {
    console.log(func1.arguments);
    console.log(func1.arguments.length); // 인자의 개수
    console.log(func1.length); // 매개변수의 개수
    console.log(func1.arguments[1]);
}
func1(1, 2, 3);

console.log();

// caller : 비표준, 함수를 호출한 함수
// name : 함수의 이름
function func2() {
    console.log(func2.name);
    console.log(func2.caller.name);
}
function func3() {
    func2();
}
func3();

console.log();

// __proto__ : [[Prototype]]에 접근하기 위한 프라퍼티
// hasOwnProperty() : 상속받은 프라퍼티가 아닌 본인이 정의한 프라퍼티면 true)
const cpu = {
    name: 'i9'
};
console.log(cpu.__proto__ === Object.prototype);
console.log(cpu.hasOwnProperty('name'));
console.log(cpu.hasOwnProperty(cpu.__proto__));

console.log();

// prototype 프라퍼티
// 생성자함수로 호출할 수 있는 함수객체, 즉 constructor만이 소유하는 프라퍼티
function Diary(name) {
    this.name = name;
}
const diary = new Diary('2024년 일기');
console.log(Diary.hasOwnProperty('prototype'));
console.log(diary.hasOwnProperty('prototype'));
console.log((function() {}).hasOwnProperty('prototype'));
console.log({}.hasOwnProperty('prototype'));












