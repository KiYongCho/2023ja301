/* this */

// - 현재 메모리상에서 참조(사용)되고 있는 객체 자신을 가리키는 키워드
// - 기본적으로 함수내의 this는 함수를 호출하여 실행하게한 객체를 가리킨다.
// - 다만, 화살표함수는 화살표함수를 둘러싼 실행컨텍스트에 따라 this가 결정된다.
// - JS에서 this를 이해하려면 먼저 실행컨텍스트를 이해하고 JS의 작동방식을 이해해야함
// - context (상황, 문맥)
//     모르는 사람이 욕을 하면 싫어하지만, 욕쟁이할머니가 욕을 하면 좋아한다.
//     같은 욕이라도 상황(context)에 따라 다르게 해석된다.
//     즉, 같은 this라도 상황에 따라 다르게 해석된다.
// - 실행컨텍스트 (Execution Context) : 현재 실행되고 있는 환경/상황, 현재 사용되고 있는 메모리
// - JS에서는 사용중인 실행컨텍스트에 따라 this가 다르게 해석된다.
// - JS에서는 bind, call, apply 함수를 통해서 필요할때 언제든 this를 변경할 수 있다.


// 함수선언식내의 this는 함수를 호출한 객체 (실행컨텍스트:global)
function f() {
  console.log(this); // 함수를 호출한 global
}
f();

console.log();

// 블럭내에서의 this는 {} (실행컨텍스트:{})
// 브라우져에서는 window (실행컨텍스트:window)
{
  console.log(this); // {}
  // console.log(this===global); // false
}

console.log();

// 함수선언식,함수표현식과 화살표함수내의 this는 다르다.
// 함수선언식,함수표현식 내의 this는 함수를 호출한 객체
// 화살표함수내의 this는 자신을 감싼 객체
const obj = {
  name: '홍길동',
  printName: function () {
    console.log(this.name);
  },
  printNumbers: (a, b) => console.log(this.name, a, b),
  printThis: () => console.log(this),
};
obj.printName(); // 홍길동
obj.printNumbers(3, 4); // undefined 3 4
obj.printThis(); // {}, 브라우져에서는 window

console.log();

// 생성자함수 내에서의 this는 생성자함수를 호출할 객체자신
// 이때 함수표현식과 화살표함수내의 this는 같다.
function Person(name, age) {
  this.name = name;
  this.age = age;
  (this.printPerson = function () {
    console.log(this.name, this.age);
  }),
  (this.printPerson2 = () => console.log(this.name, this.age));
}
const person = new Person('홍길동', 30);
person.printPerson(); // 홍길동 30
person.printPerson2(); // 홍길동 30

console.log();

// call, apply 메소드를 통해 실행컨텍스트에 상관없이 this를 고정
// call은 인자를 하나씩 나열하여 전달, apply는 인자를 배열로 전달한다는 차이가 있다.
const obj1 = {
  name: '홍길동',
  printName: function () {
    console.log(this.name);
  },
  printNumbers: function (a, b) {
    console.log(this.name, a, b);
  },
  printThis: function () {
    console.log(this);
  },
};
const obj2 = {
  name: '강감찬',
};
obj1.printName(); // 홍길동
obj1.printNumbers.call(obj2, 3, 4); // 강감찬, 3, 4
obj1.printNumbers.apply(obj2, [3, 4]); // 강감찬, 3, 4

console.log();

// 화살표함수에는 call, apply로 this를 전달할 수 없다.
let obj3 = {
  name: '홍길동',
  printName: () => console.log(this.name),
  printNumbers: (a, b) => console.log(this.name, a, b),
  printThis: () => console.log(this),
};
const obj4 = {
  name: '강감찬',
};
obj3.printName(); // undefined
obj3.printNumbers.call(obj4, 3, 4); // undefined, 3, 4
obj3.printNumbers.apply(obj4, [3, 4]); // undefined, 3, 4

console.log();

// bind : this를 함수내의 객체로 하는 새로운 함수 생성
function f() {
  return this.name;
}
obj5 = {
  name: '홍길동',
};
const newf = f.bind(obj5);
console.log(newf());

console.log();


// DOM Event Handler내에서의 this는 이벤트대상객체 (eventTarget)
