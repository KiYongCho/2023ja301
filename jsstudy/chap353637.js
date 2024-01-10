/* 스프레드(Spread) 문법 */
// 이터러블한 값들의 분산을 위해 생긴 ES6의 문법
// 이터러블 (Array, String, Map, Set, arguments,
//           DOM컬렉션(NodeList, HTMLCollection))
// 기본적으로 객체(이터러블이 아님)에는 사용 불가하지만
// 2021년부터 객체에 사용할 수 있도록 제안

console.log(...[1, 2, 3]); // 1 2 3 목록 (값 아님, 변수에 할당불가)
console.log(...'thanks'); // t h a n k s 목록
console.log(...new Map([[1,'홍길동'], [2,'강감찬']]));
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max([1, 2, 3])); // NaN
console.log(Math.max(...[1, 2, 3])); // 3

// ...args : Rest Parameter (파라미터 여러개를 배열형태로 받는 역할)
(function(...args) {
    console.log(args);
})(1, 2, 3); // [1, 2, 3]

console.log();

console.log([...[1, 2], ...[3, 4]]); // [1, 2, 3, 4]

console.log();

// 객체는 이터러블이 아니지만 스프레드문법 적용이 가능하다.
console.log({x: 1, y: 2, ...{z: 3}}); // { x: 1, y: 2, z: 3 }

// 스프레드문법은 값이 아니라서 변수에 할당하거나
// 함수에 파라미터로 전달하거나, 함수의 리턴값이 될 수 없다.
// const obj2 = ...[1, 2];

/* 구조분해할당 (Destructuring Assignment) */
// 이터러블 또는 객체를 분해해서 각각의 변수에 할당
// 배열에서 특정 요소들만 추출해서 변수화 하거나
// 객체에서 특정 프라퍼티들만 추출해서 변수화 하는데 사용된다.
// 코드를 간결하게 하고 가독성을 높여주므로 적극 사용하자.

const [one, two, three] = [1, 2, 3];
console.log(one, two, three);

console.log();

console.log([a, b] = [1]); // [1]
console.log([a, b] = [1, 2]); // [1, 2]
console.log([a, b] = [1, [2, 3]]); // [1, [2, 3]]

console.log();

const user = {
    firstName: '순신',
    lastName: '이'
};
console.log({firstName:ln, lastName:fn} = user);
console.log(ln, fn);
// console.log(window.ln);

console.log();

const {firstName='길동', lastName} = {lastName:'홍'};
console.log(firstName, lastName);

console.log();

// 문자열객체는 유사배열객체이므로 length프라퍼티를 가지고 있다.
const str = 'Hello';
const {length} = str;
console.log(length);

console.log();

// JSON데이터 파싱할때 배열내에 객체가 담긴 형태로 많이 사용하므로
// 아래 코드를 잘 익혀서 필요한 데이터를 구조분해할당해서 추출해
// 사용하자!
const todos = [
    {id:1, content:'HTML', completed: true},
    {id:2, content:'CSS', completed: false},
    {id:3, content:'JS', completed: false}
];
const [,{id}] = todos;
console.log(id); // 2
// 실습 1) 세번째 객체에서 content 구조분해할당
const [,,{content}] = todos;
console.log(content);
// 실습 2) 첫번째 객체의 id보다 id값이 큰 객체의 content를 구조분해할당
const [{id:id1}] = todos;
todos.forEach((ele)=>{
    if(ele.id > id1){
        //const {content} = ele;
        console.log(ele.content);
    }
})
// 실습 3)
// 두번째 객체의 completed와 같은 completed를 가진 객체의 id 구조분해할당
const [, {completed:twocom}] = todos;
todos.forEach((com)=>{
    if(com.completed === twocom) {
        //const {id} = com;
        console.log(com.id);
    }
})

console.log();


/* Set */
// Set : 중복과 순서가 없는 자료구조
// JS에서는 배열을 이용해서 Set을 구현

const set1 = new Set([1,2,2,4]);
console.log(set1);

console.log();

const set2 = new Set('Hello');
console.log(set2);
console.log(set2.size);

console.log();

set2.add('H');
set2.add('i');
console.log(set2);

console.log();

set2.add('a').add('b');
console.log(set2);

console.log();

console.log(set2.has('H'));

console.log();

set2.delete('H');
console.log(set2);

console.log();

set2.clear();
console.log();

set1.forEach((v, v2, set) => console.log(v, v2, set));

console.log();

// Set은 이터러블이다.

const set3 = new Set([1,2,3,4,5]);
for (ele of set3) {
    console.log(ele);
}

console.log();

console.log([...set3]);

console.log();


/* Map */
// Map : 엔트리(키, 값)로 구성, 키는 중복허용불가, 값은 중복허용

const map1 = new Map([['name','홍'], ['age',20]]);
console.log(map1);

console.log();

console.log(map1.size);

console.log();

map1.set('hobby', '농구');
console.log(map1);

console.log();

map1.delete('age');
console.log(map1);

console.log();

map1.clear();
console.log(map1);

console.log();

const map2 
    = new Map([['name', '강감찬'], ['age', 30], ['hobby', '축구']]);

map2.forEach((v,k,map) => console.log(v,k,map));

console.log();

for (entry of map2) { console.log(entry); };

for (entry of map2.entries()) { console.log(entry); };

for (key of map2.keys()) { console.log(key); };

for (value of map2.values()) { console.log(value) };

console.log();

console.log([...map2]);














