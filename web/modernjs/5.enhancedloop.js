// 향상된 for문

const obj = {
    name: "홍길동",
    age: 20,
    address: "지구어딘가"
};

const arr = [1,2,3,4,5];

const map = new Map();
map.set("korea", "한국");
map.set("japan", "일본");
map.set("china", "쭝국");

const set = new Set();
set.add("사과");
set.add("딸기");
set.add("복숭아");

const str = "abcdef";

// for~in : 객체의 프라퍼티 반복
for (prop in obj) {
    console.log(`property name:${prop}, property value:${obj[prop]}`);
}

// for~of : Iterable의 구성요소 반복
// : 배열의 엘리먼트, 맵의 맵엔트리, 셋의 엘리먼트, 문자열의 문자 반복 
for (ele of arr) {
    console.log(`element: ${ele}`);
}
for (ele of map) {
    console.log(`element: ${ele}`);
}
for (ele of set) {
    console.log(`element: ${ele}`);
}
for (ele of str) {
    console.log(`element: ${ele}`);
}
