/* this */

// - 현재 메모리상에서 참조(사용)되고 있는 객체 자신을 가리키는 키워드
// - 참조되고 있는 객체의 참조값을 가지고 있는 참조 변수
// - 기본적으로 함수내의 this는 함수를 호출해서 실행하도록 만든
//   객체를 말한다.
// - 다만, 화살표함수는 화살표함수를 둘러싼 실행컨텍스트에 따라서
//   this가 결정된다.
// - JS에서 this를 이해하려면 함수호출자, 실행컨텍스트, 예외사항을
//   알아야 한다.
// - 실행컨텍스트(Execution Context):현재 실행되고 있는 환경/상황,
//   즉, 현재 사용되고 있는 메모리 또는 실행흐름이라고 이해하자.
// - JS에서는 동일한 함수내의 this라고 해도 누가 호출했느냐에 따라
//   this가 달라진다.
// - 동적바인딩(Dynamic Binding) : this에 객체의 참조가 동적으로
//   바인딩(연결, 저장)되는 것을 this의 동적바인딩이라 한다.
// - JS에서는 call, apply, bind 함수를 통해서 함수내의 this를
//   렉시컬하게(정적으로) 결정할 수 있는 방법을 제공하고 있다.

// 함수선언식내의 this는 함수를 호출한 객체
// f함수는 글로벌프라퍼티
function f() {
  console.log(this);
}
f();
window.f();

console.log();

// 블럭내의 this는 전역객체
{
  console.log(this);
}

console.log();

// 화살표함수는 호출자가 this가 아닐 수 있다.
// obj는 전역프라퍼티 그래서 화살표함수내의 this는 전역객체
// 실행컨텍스트가 전역
const obj = {
  // { 부터는 전역컨텍스트
  name: '홍길동',
  printName: function () {
    // { 부터는 객체컨텍스트
    console.log(this.name);
  },
  // 화살표함수는 호출한 객체의 컨텍스트를 따라가지 않고
  // 외부에 있는 전역컨텍스트를 따라감
  printNumbers: (a, b) => console.log(this.name, a, b),
  printThis: () => console.log(this),
};
obj.printName(); // 홍길동
obj.printNumbers(3, 4); // undefined 3 4
obj.printThis(); // window

// 생성자함수를 통해 생성한 객체로 호출한 함수(화살표함수포함)내의
// this는 생성된 객체
// 실행컨텍스트가 생성된 객체
function Person(name, age) {
  // { 부터는 생성자함수의 실행컨텍스트
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

// call, apply, bind
// call : 호출하는 함수내에서 this로 사용할 객체와 인자리스트(,로 구분)
// apply : 호출하는 함수내에서 this로 사용할 객체와 인자리스트(배열)
// bind : 호출하는 함수내에서 this로 사용할 객체를 지정하고 함수 반환
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
obj1.printName();
obj1.printNumbers.call(obj2, 3, 4); // 인자리스트를 ,로 구분
obj1.printNumbers.apply(obj2, [3, 4]); // 인자리스트를 배열로

console.log();

// 화살표함수에는 call, apply, bind로 this를 지정할 수 '없'다.
// 화살표함수에는 this 바인딩이 안된다.
const obj3 = {
  name: '홍길동',
  printName: () => console.log(this.name),
  printNumbers: (a, b) => console.log(this.name, a, b),
  printThis: () => console.log(this),
};
const obj4 = { name: '강감찬' };
obj3.printName(); // undefined
obj3.printNumbers.call(obj4, 3, 4); // undefined 3 4
obj3.printNumbers.apply(obj4, [3, 4]); // undefined 3 4

// bind
function f() {
  return this.name;
}
const obj5 = {
  name: '홍길동',
};
const newf = f.bind(obj5);
console.log(newf());

console.log();

// DOM event에서의 this바인딩
// DOM의 이벤트핸들러내에서의 this는 이벤트타겟 객체
