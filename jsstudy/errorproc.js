/* 에러 처리 */

// JS는 try ~ catch ~ finally 구문을 사용해 에러를 처리
// 에러가 발생하면 catch에 인자로 에러객체가 전달됨
// [코드설명]
// try블럭내에서 선언하지 않은 z가 호출되어 에러 발생 > 에러객체가 catch블럭에 전달됨
// finally는 에러발생 여부와 관계없이 무조건 수행됨
function errortest() {
    try {
        const x = 3;
        const y = x + z;
    } catch (err) {
        console.log(err);
    } finally {
        console.log('에러처리 여부와 관계없이 실행!');
    }
}
errortest();

console.log();

// 사용자정의 에러
// message프라퍼티 : 에러메세지
// stack프라퍼티 : 에러 호출스택
// throw 구문을 사용해 에러를 발생 시킬 수 있다.
const myError = new Error("내가 만든 에러");
function errortest2() {
    try {
        throw myError;
    } catch (err) {
        console.log(err);
        console.log();
        console.log(err.message);    
        console.log();
        console.log(err.stack);    
    }
}
errortest2();

console.log();

// 에러 전파
// [코드설명] : func1에서 발생한 에러(x가 선언되지 않음)가 호출자인 func2, 
//                  func2 호출자인 func3으로 전달되어 func3에서 처리
function func1() {
    return x;
}
function func2() {
    func1();
}
function func3() {
    try {
        func2();
    } catch (err) {
        console.log('func3에 에러가 전달되어 처리함!');
    }
}
func3();