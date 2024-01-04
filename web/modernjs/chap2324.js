/* 실행컨텍스트 (Execution Context) */
// - 실행컨텍스트란 코드실행을 위해 필요한 평가단계와 실행단계에 사용되는 데이터들로 구성된 메모리 영역이다.
// - 실행컨텍스트란 소스코드를 실행하는데 필요한 환경을 제공하고 코드의 실행결과를 관리하는 영역이다.
// - 4가지 코드 : 전역, 함수, eval, 모듈
//   전역코드가 실행되면 전역변수는 전역객체의 프라퍼티에 전역함수는 전역객체의 메소드에 바인딩되어 실행 => 전역실행컨텍스트
//   함수코드가 실행되면 지역변수,매개변수,arguments객체를 생성하고 생성된 지역스코프를 전역스코프에 체이닝한 후 실행 => 함수실행컨텍스트
//   eval코드가 실행되면 strict mode에서 자신만의 독자적 스코프를 생성하고 실행 => eval실행컨텍스트
//   모듈코드는 모듈별로 독자적인 스코프 생성 후 실행 => 모듈실행컨텍스트
// - JS는 소스코드를 평가와 실행으로 나누어 처리
//   평가 : 실행컨텍스트생성, 선언문실행, 선언처리된 식별자를 실행컨텍스트가 관리하는 스코프에 등록
//   실행 : 선언문을 제외한 코드 순차적으로 실행 (런타임)
// - 컨텍스트스위칭(Context Switching)  : 전역 > 함수, 함수 > 전역 ... 컨텍스트가 변경되는 것을 말한다.
//   전역컨텍스트에서 평가가 끝나고 실행하다가 함수를 만나면 함수컨텍스트에서 평가와 실행이 일어나고
//   함수가 일을 마치면 다시 전역컨텍스트가 실행된다.
// - 실행컨텍스트스택(Context Stack) : 전역 > 함수 > 전역 > 함수와 같이 컨텍스트스위칭시 각 컨텍스트마다 실행 스택이 생성된다.
// - 렉시컬환경 (Lexical Environment) : 식별자, 식별자에 바인딩된 값, 상위스코프참조를 기록, 스코프와 식별자를 관리

const x = 1;
function foo() {
    const y = 2;
    function bar() {
        const z = 3;
        console.log(x + y + z); // 6
    }
    bar();
}
foo();

// 위 코드는 순차적으로 아래와 같이 실행된다.
// 1. 전역객체들이 생성된다.
// 2. 전역실행컨텍스트
//     1) 평가 : x, foo 선언
//     2) 실행 : x=1, foo 호출 (컨텍스트스위칭)
//     3. 함수실행컨텍스트 (foo)
//         1) 평가 : y, bar 선언
//         2) 실행 : y=2, bar 호출 (컨텍스트스위칭)
//         4. 함수실행컨텍스트 (bar)
//             1) 평가 : z 선언
//             2) 실행 : console.log(x + y + z)
//         [bar 함수컨텍스트종료:컨텍스트스위칭]
//     [foo 함수컨텍스트종료:컨텍스트스위칭]
// [전역컨텍스트종료]


/* 클로져 (Closure) */
// - MDN정의 : 클로져는 함수와 그 함수가 선언된 렉시컬환경과의 조합이다.
// - 렉시컬스코프 : JS는 함수를 어디서 호출했는지가 아니라 함수를 어디에 선언(정의)했는지에 따라 상위스코프를 결정한다.
//                      이를 렉시컬스코프(정적스코프)라 한다.
// - [[Environment]] 내부슬롯 : 함수가 선언된 환경, 즉 상위스코프의 참조

const a = 1;
function outerFunc() {
    const a = 10;
    function innerFunc() {
        console.log(a); 
    }
    innerFunc(); // 10
}
outerFunc();

// 클로져 : 외부함수보다 중첩함수가 더 오래 유지되는 경우 이미 소멸한
//             외부함수의 변수를 중첩함수가 참조할때 이러한 중첩함수를 클로져라 한다.
const b = 1;
function outer() {
    const b = 10;
    const inner = function() {
        console.log(b);
    };
    return inner;
}
const innerFunc = outer();
innerFunc(); // 10

// 클로져의 활용
// - 클로져는 상태를 안전하게 변경하고 유지하기 위해 사용된다.
//   상태를 은닉하고 특정 함수에게만 상태변경을 허용하기 위해 사용된다.
// - 즉, 외부함수의 상태를 저장한 변수가 외부함수 소멸시에도 사용될 수 있도록 한다.

// 1. 전역변수 사용 : 증가는 되지만 num1의 값을 누구나 변경할 수 있다.
let num1 = 0;
const increase1 = function() {
    return ++num1;
}
console.log(increase1()); // 1
console.log(increase1()); // 2
console.log(increase1()); // 3

// 2. 지역변수 사용 : num2의 값을 increase2만 변경할 수 있지만 증가가 되지 않는다. (매번 초기화 됨)
const increase2 = function() {
    let num2 = 0;
    return ++num2;
}
console.log(increase2()); // 1
console.log(increase2()); // 1
console.log(increase2()); // 1

// 3. 클로져 사용 : num3의 값을 increase3만 변경할 수 있고 증가도 된다. (정보은닉 구현)
const increase3 = (function() {
    let num3 = 0;
    return function() {
        return ++num3;
    };
}());
console.log(increase3()); // 1
console.log(increase3()); // 2
console.log(increase3()); // 3

// 4. 클로져를 IIFE 형식의 생성자함수로 표현
const Counter = (function(){
    let num = 0;
    function Counter() {
    }
    Counter.prototype.increase = function() {
        return ++num;
    };
    Counter.prototype.decrease = function() {
        return --num;
    };
    return Counter;
}());
const counter = new Counter();
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease());  // 0


