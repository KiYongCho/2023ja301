/* 함수 */
// 자바스크립트는 태생적으로 함수기반언어
// 함수는 객체... 호출할 수 있는 객체
// 함수는 값(리터럴)이다.
// => 변수에 저장도 가능하고 파라미터에 인자로 전달할 수도 있다.
// => 선언식함수는 값이 아니다. 이경우는 변수저장이나 인자전달 불가능

// 함수는 값이다!!!
const func0 = function(a=3, b=5) {
    return a + b;
};
console.log(func0);
const str = '' + func0;
console.log(str);

// 함수 정의

// 1. 선언적 함수
// 전역함수(global function)로 선언을 어디서 하든
// 전역적으로 참조할 수 있다.
// 가급적 최소로 만들어 사용하는게 메모리를 아낄 수 있다.
// function키워드로 선언, 반드시 이름이 있어야 함
function func1(a, b){
    return a + b;
}
console.log(func1(3, 5));

// 2. 함수리터럴 (값인 함수)
const func2 = function(a, b) {
    return a + b;
};
// 이름이 있는 함수리터럴
// func3이 함수의 이름, f3은 함수리터럴 내에서 사용하는 함수의 이름
// func3은 전역변수, f3은 함수의 지역변수
const func3 = function f3(a, b) {
    return a + b;
};

// 3. 함수 생성자 : 사용 갓비추
const func4 = new Function("a", "b", "return a + b");
console.log(func4(3, 5));

// 4. 화살표 함수 (arrow function) : ES6
const func5 = (a, b) => a + b;
// const func5 = function (a, b) {
//                  return a + b;   
//               };

// 함수문장 vs 함수표현식
function func6() {
    console.log("func6");
}
func6();
(function func7() {
    console.log("func7");
});
// func7(); // error
(function(a, b) {
    console.log(a+b);
})(3, 5);

if ((function() {return 1;})()) console.log("함수표현식");

// IIFE (Immediatly Invoke Function Expression) : 즉시 호출 함수표현식
let result = (function() {
    return 1;
})();

// 함수의 인자(arguments)
// arguments : 현재 실행중인 함수에 전달된 인자 배열
// arguments.length : 전달받은 인자 배열의 개수
// arguments.callee : 인자를 전달받아 현재 실행중인 함수
function func8() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(String(arguments.callee));
}
func8(3, 5);
func8(3, 5, 7, 9);

// 함수 매개변수와 인자
function func9(a=0, b=0, c=0) {
    return a + b;
}
console.log(func9(3, 5, 7, 9)); // 8
console.log(func9(3, 5, 7)); // 8
console.log(func9(3, 5)); // 8
console.log(func9(3));  // NaN, 기본값을 주면 3

// 가변매개변수 함수 (Rest Parameter Function) : ES6
// 인자가 몇개가 들어오던 하나의 배열로 받는다.
function func10(...args) {
    console.log(args);
    console.log(arguments);
    console.log(arguments.length);
}
func10(3);
func10(3, 5);
func10(3, 5, 7);

// 콜백함수 (Callback Function)
// J/S에서는 파라미터에 값으로 전달되는 함수리터럴을 콜백함수라고 한다.

// 예 1)
function hof(a, f) {
    return a + f(a);
}
const cb = function(a) {
    return a**2;
};
console.log(hof(3, cb)); // 12

// 예 2)
const fa = function(a, f) {
    return a + f();
};
const fb = function(a) {
    return fa(a, function() {
        return a**2;
    });
}
console.log(fb(3)); // 12

// 배열고차함수 sort, map, filter, reduce
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// sort(function(a, b){ return a-b;}) : 오름차순 정렬
// sort(function(a, b){ return b-a;}) : 내림차순 정렬
const arrsort = arr.sort(function(a, b) {
    return b - a;
});
console.log(arrsort); // [5, 4, 3, 2, 1]

// map(function(ele){...}) : 각 엘리먼트에 function의 작업을 수행
const arr2x = arr.map(function(ele) {
    return ele*2;
});
console.log(arr2x); // [10, 8, 6, 4, 2]

// filter : 조건에 맞는 엘리먼트들만 추출
const arrlt6 = arr2x.filter(function(ele){
    return ele < 6;
});
console.log(arrlt6); // [4, 2]

// reduce : 배열요소들의 값을 누적
// 첫번째인자:콜백함수, 두번째인자:누적시작인덱스
// acc: 누적값, curr: 현재값
const arrsum = arrlt6.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(arrsum);

// 함수체이닝 (function chaining) : 함수를 연결해서 사용
// 함수의 반환값이 다시 함수일때
const arr2 = [1, 2, 3, 4, 5];
console.log(
    arr2.sort(function(a,b){
        return b - a;
    }).map(function(ele) {
        return ele**2;
    }).filter(function(ele) {
        return ele > 10;
    }).reduce(function(acc, curr){
        return acc + curr;
    }, 0)
);

// 함수체이닝 (arrow function)
const arr3 = [1, 2, 3, 4, 5];
console.log(
    arr3.sort((a,b) => b - a)
        .map(ele => ele**2)
        .filter(ele => ele > 10)
        .reduce((acc, curr) => acc + curr, 0)
);

// 함수 체이닝 실습 1)
// ['a', 'b', 'c', 'd', 'e']를 ['e', 'd', 'c', 'b', 'a']로 변경
const arr4 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr4.sort((a, b) => b.charCodeAt() - a.charCodeAt()));

// 함수 체이닝 실습 2)
// ['a', 'b', 'c', 'd', 'e']를 [33, 34, 35, 36, 37]로 변경
const arr5 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr5.map(ele => ele.charCodeAt() - 64));

// 함수 체이닝 실습 3)
// ['a', 'b', 'c', 'd', 'e']를 ['a','bb','ccc','dddd','eeeee']로 변경
const arr6 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr6.map((ele, idx) => ele.repeat(idx + 1)));

// 함수 체이닝 실습 4)
// ['a', 'b', 'c', 'd', 'e']를 ['마','라','다','나','가']으로 변경
const arr7 = ['a', 'b', 'c', 'd', 'e'];
const unicodeArr = ['\uB9C8', '\uB77C', '\uB2E4', '\uB098', '\uAC00'];
console.log(arr7.map((ele, idx) => unicodeArr[idx]));

// 함수 체이닝 실습 5)
// ['a', 'b', 'c', 'd', 'e']의 ASCII코드값의 총합 구하기
const arr8 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr8.map(ele => ele.charCodeAt())
    .reduce((acc, curr) => acc + curr));


// [과제 : 제출X, 1/2일 첫시간에 발표]

const students = [
    {"s001" : {sname: "홍길동", skor: 100, seng: 90, smath: 80}},
    {"s002" : {sname: "강감찬", skor: 90, seng: 80, smath: 70}},
    {"s003" : {sname: "이순신", skor: 80, seng: 70, smath: 60}},
    {"s004" : {sname: "장보고", skor: 70, seng: 60, smath: 50}},
    {"s005" : {sname: "최영", skor: 60, seng: 50, smath: 40}}
];

// 함수 체이닝 과제 1)
// 각 학생의 과목별점수와 과목별점수평균과의 차를 구하여 아래와 같이 출력하시오.
// 홍길동 국어:+20, 영어:+20, 수학:+20
// 강감찬 국어:+10, 영어:+10, 수학:+10
// 이순신 국어:+0, 영어:+0, 수학:+0
// 장보고 국어:-10, 영어:-10, 수학:-10
// 최영 국어:-20, 영어:-20, 수학:-20

const sbjSumArr = [0, 0, 0];
students.map((ele, idx) => {
    sbjSumArr[0] += ele[`s00${idx+1}`].skor;
    sbjSumArr[1] += ele[`s00${idx+1}`].seng;
    sbjSumArr[2] += ele[`s00${idx+1}`].smath;    
});
const sbjAvgArr = sbjSumArr.map(function(ele) {
    return ele / students.length;
});
students.map((ele, idx) => {
    console.log(ele[`s00${idx+1}`].sname +
         ' 국어:' + (ele[`s00${idx+1}`].skor -  sbjAvgArr[0]) +
         ', 영어:' + (ele[`s00${idx+1}`].seng - sbjAvgArr[1]) + 
         ', 수학:' + (ele[`s00${idx+1}`].smath - sbjAvgArr[2])
    );
});

// 함수 체이닝 과제 2)
// 각 학생의 정보와 과목별총점을 아래와 같이 출력하시오.
// s001 홍길동 국어:100 영어:90 수학:80
// s002 강감찬 국어:90 영어:80 수학:70
// s003 이순신 국어:80 영어:70 수학:60
// s004 장보고 국어:70 영어:60 수학:50
// s005 최영 국어:60 영어:50 수학:40
// 총점 국어:400 영어:350 수학:300

students.map((ele, idx) => {
    console.log(
        `s00${idx+1} ` +
        ele[`s00${idx+1}`].sname +
         ' 국어:' + ele[`s00${idx+1}`].skor +
         ', 영어:' + ele[`s00${idx+1}`].seng + 
         ', 수학:' + ele[`s00${idx+1}`].smath + 
         ', 학생총점:' + (ele[`s00${idx+1}`].skor 
         + ele[`s00${idx+1}`].seng + ele[`s00${idx+1}`].smath)
    );
});
console.log(`과목총점 국어:${sbjSumArr[0]} 영어:${sbjSumArr[1]} 수학:${sbjSumArr[2]} `);
















