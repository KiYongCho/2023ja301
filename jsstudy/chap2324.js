/* 실행컨텍스트 (Execution Context) */
// - 실행컨텍스트란 코드실행을 위해 필요한 평가단계와 실행단계에
//   사용되는 데이터와 환경, 실행흐름을 합친 용어
// - 4가지 코드 : 전역, 함수, eval, 모듈
// - JS는 소스코드를 실행컨텍스트에 따라 평가단계와 실행단게로 구분해
//   사용한다.
//   1) 평가 : 실행컨텍스트생성, 선언문실행, 선언처리된 식별자를
//             실행컨텍스트가 관리하는 스코프에 등록
//   2) 실행 : 선언문을 제외한 코드를 순차적으로 실행 (런타임)
// - 컨텍스트스위칭(Context Switching)
//   호출 순서에 따라서 전역 > 함수 > 전역 > 함수 > 함수 ...
//   등과 같이 실행컨텍스트가 변경되는 것을 말한다.
// - 컨텍스트스택(Context Stack)
//   컨텍스트가 스위칭되면 사용할 새로운컨텍스트가 생겨서
//   컨텍스트스택에 쌓이게 되고 해당 컨텍스트의 작업을 종료하면
//   컨텍스트는 소멸하고 기존 컨텍스트로 컨텍스트 스위칭이 일어난다.
// - 렉시컬환경(Lexical Environment)
//   식별자, 식별자에 바인된 값, 상위스코프참조를 기록하고 
//   스코프나 식별자를 관리

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

// 위 코드는 순차적으로 아래의 과정을 거쳐 실행된다.
// 1. 전역객체들이 생성된다.
// 2. 전역실행컨텍스트
//  1) 평가 : x, foo 선언, 초기화 값
//  2) 실행 : x=1, foo호출 (컨텍스트스위칭:전역>foo함수)
//  3. 함수실행컨텍스트 (foo)
//    1) 평가 : y, bar 선언, 초기화 값
//    2) 실행 : y=2, bar호출 (컨텍스트스위칭:foo함수>bar함수)
//    4. 함수실행컨텍스트 (bar)
//      1) 평가 : z 선언
//      2) 실행 : console.log(x + y + z)
//    (bar 함수실행컨텍스트 종료)
//  (foo 함수실행컨텍스트 종료)
// (전역실행컨텍스트 종료)


/* 클로져 (Closure) */
// 외부함수보다 중첩함수가 더 오래 유지되는 경우
// 이미 소멸했어야 하는 외부함수의 변수를 중첩함수가
// 참조하게 되는경우 외부함수의 변수가 유지되게 된다.
// 그때의 중첩함수를 클로져라고 한다.

const b = 1;
function outer() {
    const b = 10;
    const inner = funciton() {
        console.log(b);
    }
    return inner;
}
const innerFunc = outer();
innerFunc(); // 10

// 클로져의 활용
// - 클로져는 상태를 안전하게 변경하고 유지하기 위해 사용된다.
//   상태를 내부에 은닉하고 특정 함수에게만 상태변경을 허용하기 위해
//   사용된다. 즉, 외부함수의 상태를 저장한 변수가 외부함수의 실행종료
//   이후에도 사용될 수 있도록 하기위해 클로져를 사용합니다.

// 1. 전역변수 사용한 카운터
//    증가는 되지만 num1의 값을 누구나 변경할 수 있다
//    (정보은닉 실패)
let num1 = 0;
const increse1 = function() {
    return ++num1;
}
console.log(increse1()); // 1
console.log(increse1()); // 2
console.log(increse1()); // 3

// 2. 지역변수 사용
//    num2의 값을 increse2만 변경할 수 있지만 증가가 되지 않는다.
//    (정보은닉에는 성공했지만 기능 수행 못함)
const increase2 = function() {
    let num2 = 0;
    return ++num2;
}
console.log(increase2()); // 1
console.log(increase2()); // 1
console.log(increase2()); // 1

// 3. 클로져 사용
//    num3의 값을 incresae3만 변경할 수 있고 기능도 잘 작동한다.
const increase3 = (function() {
    let num3 = 0;
    return function() {
        return ++num3;
    };
}());
console.log(increae3()); // 1
console.log(increae3()); // 2
console.log(increae3()); // 3

// 4. 클로져를 IIFE(즉시실행함수) 형식의 생성자함수로 표현
const Counter = (function() {
    let num = 0;
    function Counter() {
    }
    Counter.prototype.increase = function() {
        return ++num;
    };
    Counter.prototype.decrease = function() {
        return --num;
    }
    return Counter;
}());
const counter = new Counter();
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0

