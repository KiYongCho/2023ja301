/* 스프레드(Spread) 문법 */
// 모여있는 값들을 분산한 목록을 생성하기 위해 ES6에서 도입
// 이터러블(Array, String, Map, Set, arguments, DOM컬렉션(NodeList, HTMLCollection))에 사용 가능
// 객체는 이터러블이 아니므로 사용 불가

console.log(...[1,2,3]); // 1 2 3
console.log(...'thanks'); // t h a n k s
console.log(...new Map([[1, '홍길동'], [2, '강감찬']])); // [ 1, '홍길동' ] [ 2, '강감찬' ]
console.log(Math.max(...[1,2,3])); // 3
(function(...args) { console.log(args);})(1, 2, 3); // [1, 2, 3]
console.log([...[1,2], ...[3,4]]); // [1,2,3,4]

console.log();

(function() {
    console.log([...arguments].reduce((pre, cur) => pre+cur, 0)); // 6
})(1,2,3);

console.log({x:1, y:2, ...{z:3}}); // { x: 1, y: 2, z: 3 }

console.log();

/* 디스트럭쳐링 할당 (Destructuring Assignment) */
// 이터러블 또는 객체를 분해하여 각 변수에 할당
const [one, two, three] = [1, 2, 3];
console.log(one, two, three);

console.log([a, b] = [1]); // [1]
console.log([a, b] = [1, 2]); // [1, 2]
console.log([a, b] = [1, [2, 3]]); // [1,[2, 3]]

console.log();

const user = {firstName:'순신', lastName:'이'};
console.log({firstName:ln, lastName:fn} = user);
console.log(ln, fn); // { firstName: '순신', lastName: '이' }

console.log();

const {firstName='길동', lastName} = {lastName:'홍'};
console.log(firstName, lastName); // 길동 홍

console.log();

const str = 'Hello';
const {length} = str;
console.log(length); // 5

console.log();

const todos = [
    {id:1, content:'HTML', completed:true},
    {id:2, content:'CSS', completed:false},
    {id:3, content:'JS', completed:false},
];
const [,{id}] = todos;
console.log(id); // 2

console.log();


/* Set */
// Set : 중복과 순서가 없는 자료구조

const set1 = new Set([1,2,2,4]);
console.log(set1); // Set(3) { 1, 2, 4 }

console.log();

const set2 = new Set('Hello');
console.log(set2); // Set(4) {'H','e','l','o'}
console.log(set2.size); // 4

console.log();

set2.add('H');
set2.add('i');
console.log(set2); // Set(5) {'H','e','l','o','i'}

console.log();

set2.add('a').add('b');
console.log(set2); // Set(7) {'H','e','l','o','i','a','b'}

console.log();

console.log(set2.has('H')); // true

console.log();

set2.delete('H');
console.log(set2); // Set(6) { 'e', 'l', 'o', 'i', 'a', 'b' }

console.log();

set2.clear();
console.log(set2); // Set(0) {}

console.log();

set1.forEach((v, v2, set) => console.log(v, v2, set));
/*
1 1 Set(3) { 1, 2, 4 }
2 2 Set(3) { 1, 2, 4 }
4 4 Set(3) { 1, 2, 4 }
*/

console.log();

console.log(Symbol.iterator in set1); // true

console.log();

const set3 = new Set([1,2,3,4,5]);

for (const val of set3) {
    console.log(val); // 1 2 3 4 5
}

console.log();

console.log([...set3]); // [1,2,3,4,5]

console.log();


/* Map */
// Map: 엔트리(키,값)으로 키의 중복은 없고, 값은 중복이 가능한 자료구조

const map1 = new  Map([['name', '홍'], ['age', 20]]);
console.log(map1); // Map(2) { 'name' => '홍', 'age' => 20 }

console.log();

console.log(map1.size); // 2

console.log();

map1.set('hobby', '농구');
console.log(map1); // Map(3) { 'name' => '홍', 'age' => 20, 'hobby' => '농구' }

console.log();

console.log(map1.get('hobby')); // 농구

console.log();

map1.delete('age');
console.log(map1); // Map(2) { 'name' => '홍', 'hobby' => '농구' }

console.log();

map1.clear();
console.log(map1); // Map(0) {}

console.log();

const map2 = new  Map([['name', '강'], ['age', 30], ['hobby', '축구']]);

map2.forEach((v, k, map) => console.log(v, k, map));
/*
강 name Map(3) { 'name' => '강', 'age' => 30, 'hobby' => '축구' }
30 age Map(3) { 'name' => '강', 'age' => 30, 'hobby' => '축구' }
축구 hobby Map(3) { 'name' => '강', 'age' => 30, 'hobby' => '축구' }
*/

console.log();

for (entry of map2) {
    console.log(entry); // [ 'name', '강' ] [ 'age', 30 ] [ 'hobby', '축구' ]
}

for (entry of map2.entries()) {
    console.log(entry); // [ 'name', '강' ] [ 'age', 30 ] [ 'hobby', '축구' ]
}

for (key of map2.keys()) {
    console.log(key); // name, age, hobby
}

console.log();

for (value of map2.values()) {
    console.log(value); // 강, 30, 축구
}

console.log();

console.log([...map2]); // [ [ 'name', '강' ], [ 'age', 30 ], [ 'hobby', '축구' ] ]











