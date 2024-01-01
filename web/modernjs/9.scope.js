/* 스코프(Scope), 호이스팅(Hoisting) */

// 스코프란 식별자의 참조범위
// JS는 전역(global), 지역(local), 모듈(module) 스코프를 가진다.
// JS는 식별자가 어디에서 선언되었는지에 따라 스코프를 정하는 정적스코프(렉시컬스코프)를 사용
// 전역스코프는 모든 실행컨텍스트에서 참조할 수 있는 범위
// 실행컨텍스트(excution context) : 코드가 실행되고 있는 문맥. 전역인가? 함수내부인가? 블럭내부인가?
// 지역스코프는 해당 실행컨텍스트(function, block)에서 참조할 수 있는 범위
// 모듈스코프는 해당 모듈컨텍스트에서 참조할 수 있는 범위 (ES6) (<script type="module" src="..."></script>)
// ES5까지의 변수는 var : 전역, function 지역스코프
// ES6의 변수는 let, const : 전역, function 지역스코프, block 지역스코프, 모듈스코프
// 스코프체인 : 식별자 검색을 위해 사용되는 하위스코프에서 상위스코프까지의 연결
// JS는 모든 식별자 선언을 호이스팅한다. 다만 let, const, class 선언은 호이스팅이 발생하지 않은 것처럼 동작한다.

// global
var global_var = 'global_var';
let global_let = 'global_let';
const global_const = 'global_const';

console.log(global_var);
console.log(global_let);
console.log(global_const);

console.log();

function f1() {
    console.log(global_var);
    console.log(global_let);
    console.log(global_const);
}
f1();

console.log();

{
    console.log(global_var);
    console.log(global_let);
    console.log(global_const);    
}

console.log();

// local
function f2() {
    var func_var = 'func_var';
    let func_let = 'func_let';
    const func_const = 'func_const';
    console.log(func_var);
    console.log(func_let);
    console.log(func_const);
}
f2();
//console.log(func_var);
//console.log(func_let);
//console.log(func_const);

console.log();

// block
{
    var block_var = 'block_var'; // global
    let block_let = 'block_let';
    const block_const = 'block_const';
    console.log(block_var);
    console.log(block_let);
    console.log(block_const);
}
console.log(block_var);
//console.log(block_let);
//console.log(block_const);

console.log();

// scope chain
var sc_var = 'gsc_var';
let sc_let = 'gsc_let';
const sc_const = 'gsc_const';

function f3() {
    var sc_var = 'fsc_var';
    let sc_let = 'fsc_let';
    const sc_const = 'fsc_const';
    {
        var sc_var = 'bsc_var';
        let sc_let = 'bsc_let';
        const sc_const = 'bsc_const';
        console.log(sc_var);
        console.log(sc_let);
        console.log(sc_const);
    }
    console.log();
    console.log(sc_var);
    console.log(sc_let);
    console.log(sc_const);    
}
f3();
console.log();
console.log(sc_var);
console.log(sc_let);
console.log(sc_const);    

console.log();

// hoisting
h_var = 'h_var';
console.log(h_var);
var h_var;
var h_var = 'after_h_var'; // var는 재선언 가능
console.log(h_var);

console.log();

h_let = 'h_let'; // var h_let; 을 위라인에 한 것으로 동작
console.log(h_let);
// let h_let;   // var h_let;으로 호이스팅했기에 재선언 에러

// 함수도 호이스팅
f4();
function f4() {
    console.log('f4');
}
function f4() { // 함수도 재선언 가능
    console.log('f4');
}
f4();

console.log();

// 실습 (예측)
var ex_var = 'ex_var';
let ex_let = 'ex_let';

function f5() {
    console.log(ex_var);
    console.log(ex_let);
    ex_var = 'f5_ex_var';
    ex_let = 'f5_ex_let';
    // var ex_var; // undefined
    // let ex_let; // error
}
f5();






