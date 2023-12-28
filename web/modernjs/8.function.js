/* 함수 */
// 함수는 호출할 수 있는 객체이면서 값이다.
// (사실 문자열일 뿐이다. 문자열이 함수의 문법으로 작성되었으면 엔진이 함수로 해석하는 것이다.)
const func0 = function (a=3,b=5) {
    return a + b;
}
console.log(func0);
const str = '' + func0;
console.log(str);

// 함수 정의

// 1. 선언적 함수
function func1(a, b) {
    return a + b;
}
console.log(func1(3,5));

// 2. 함수리터럴
const func2 = function(a, b) {
    return a + b;
};
console.log(func2(3,5));
// 함수이름은 f3이지만 함수는 func3에 저장되어 있어서 func3으로 호출
const func3 = function f3(a, b) {
    return a + b;
};
// console.log(f3(3,5)); // error
console.log(func3(3,5));

// 3. 함수 생성자 : 사용 비추
const func4 = new Function("a", "b", "return a+b");
console.log(func4(3,5));

// 4. 화살표 함수 (arrow function) : ES6
const func5 = (a, b) => a+b;
console.log(func5(3,5));

// 함수문장 vs 함수표현식
function func6() {
    console.log("func6");
}
func6();
(function func7() {
    console.log("func7");
});
// func7(); // error
// IIFE (Immediately Invoked Function Expression) : 즉시 실행 함수
(function func7() {
    console.log("func7");
})();

// 함수의 인자
// arguments  : 현재 실행중인 함수에 전달된 인자가 포함된 배열형 객체
// arguments.length : 함수에 전달한 인자의 개수
// arguments.callee : 현재 실행중인 함수
function func8() {
    console.log(arguments);
    console.log(arguments.length);    
    console.log(arguments.callee);
}
func8(3, 5);
func8(3, 5, 7, 9);

// 함수의 매개변수와 인자의 개수
// 매개변수의 수와 인자의 수가 같지 않아도 호출 가능
function func9(a, b, c) {
    return a + b;
}
console.log(func9(3, 5, 7)); // c is undefined
console.log(func9(3, 5));
console.log(func9(3)); // 3 + undefined

// 가변인자 함수 : ES6
function func10(...a) {
    console.log(a);
    console.log(arguments);
    console.log(arguments.length);     
}
func10(3);
func10(3, 5);
func10(3, 5, 7);

// 매개변수 기본값 : ES6
function func11(a, b, c=1) {
    return a + b + c;
}
console.log(func11(3)); // 3+undefined+1 = NaN
console.log(func11(3, 5));
console.log(func11(3, 5, 7));

// 콜백함수
// 함수는 값이므로 다른 함수의 매개변수에 인자로 전달이 가능하다.
// 이때 전달되는 함수를 콜백함수(Callback function), 전달받는 함수를 고차함수(High-order function)이라 한다.
// ex 1
function hof(a, f) {
    return a + f(a);
}
const cb = function(a) {
    return a**2; 
};
console.log(hof(3, cb));
// ex 2
const fa = function(a, f) {
    return a + f();
};
const fb = function(a) {
    return fa(a, function() {
        return a**2;
    });
}
console.log(fb(3));

// 배열고차함수 sort, map, filter, reduce
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arrsort = arr.sort(function(a, b) {
    return b-a;
});
console.log(arrsort);

const arr2x = arr.map(function(ele) {
    return ele*2;
});
//let arr2x = arr.map(e=>e*2);
console.log(arr2x);

const arrlt6 = arr2x.filter(function(ele){
    return ele < 6;
});
console.log(arrlt6);

const arrsum = arrlt6.reduce(function(prev, curr) {
    return prev + curr;
}, 0);
console.log(arrsum);

// 함수 체이닝
const arr2 = [1, 2, 3, 4, 5];
console.log(
    arr2.sort(function(a,b) {
        return b-a;
    }).map(function(ele) {
        return ele**2;
    }).filter(function(ele) {
        return ele > 10;
    }).reduce(function(prev, curr) {
        return prev + curr;
    })
);

// 함수 체이닝(arrow function)
const arr3 = [1, 2, 3, 4, 5];
console.log(
    arr3.sort((a,b) => b-a)
        .map(ele => ele**2)
        .filter(ele => ele > 10)
        .reduce((prev, curr) => prev + curr)
);

// 함수 체이닝 실습 1)
// ['a', 'b', 'c', 'd', 'e']를 ['e', 'd', 'c', 'b', 'a']로 변경
const arr4 = ['a', 'b', 'c', 'd', 'e'];

// 함수 체이닝 실습 2)
// ['a', 'b', 'c', 'd', 'e']를 [33, 34, 35, 36, 37]로 변경
const arr5 = ['a', 'b', 'c', 'd', 'e'];

// 함수 체이닝 실습 3)
// ['a', 'b', 'c', 'd', 'e']를 ['a','bb','ccc','dddd','eeeee']로 변경
const arr6 = ['a', 'b', 'c', 'd', 'e'];

// 함수 체이닝 실습 4)
// ['a', 'b', 'c', 'd', 'e']를 ['마','라','다','나','가']으로 변경
const arr7 = ['a', 'b', 'c', 'd', 'e'];

// 함수 체이닝 실습 5)
// ['a', 'b', 'c', 'd', 'e']의 ASCII코드값의 총합 구하기
const arr8 = ['a', 'b', 'c', 'd', 'e'];