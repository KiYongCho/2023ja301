/* generator */
// 함수내의 코드블럭을 나누어 필요한 시점에 재개할 수 있게 하는 특수한 함수
// - 제네레이터 함수를 호출한 함수가 제네레이터 함수의 실행 제어권을 갖는다.
// - 제네레이터 함수는 함수 호출자와 함수의 상태를 서로 주고받을 수 있다.
// - 제네레이터 함수를 호출하면 제네레이터 객체를 반환한다.
// - function* 문법과 yield표현식을 사용한다.
// - 함수선언문, 함수표현식, 메서드, 클래스의 메서드 형태로 사용할 수 있다.
// - 화살표함수로 정의할 수 없으며 new연산자와 함께 생성자함수로 사용할 수도 없다.
// - 이터러블이면서 이터레이터이다.
// - 이터레이터리절트객체는 value, done 프라퍼티 소유
//    value : yield 값
//    done : 제네레이터 실행 완료 여부


// 제네레이터
// [코드설명] : 제네레이터인 myGen이 호출되면 next호출시 첫번째 yiled 수행
//                  다시 next호출시 두번째 yiled 수행, 다시 next호출시 세번째 yiled 수행 후 종료
function* myGen() {
    yield 1;
    console.log("첫번째 yield 종료!");
    yield 2;
    console.log("두번째 yield 종료!");
    yield 3;
    console.log("세번째 yield 종료!");
}

// 제네레이터 생성, 제네레이터는 이터러블이면서 next, return, throw를 갖는다.
//   next : 실행제어권을 호출자에게 양보(yield)
//   throw : 에러를 발생시켜 실행제어권 제네레이터가 획득
//   return : 실행제어권을 제네레이터에 양보(yield)
const mygen1 = myGen();
console.log(Symbol.iterator in mygen1);
console.log("next" in mygen1);
console.log("return" in mygen1);
console.log("throw" in mygen1);
console.log(mygen1.next());
console.log(mygen1.next());
console.log(mygen1.next());
console.log(mygen1.return('completed!'));

const mygen2 = myGen();
console.log(mygen2.next());
console.log(mygen2.next());
console.log(mygen2.next());
//console.log(mygen2.throw('error!'));

console.log();

// 제네레이터의 제네레이터객체 반환
function* myGenRe() {
    const x = yield 1;
    const y = yield (x+10);
    return x + y;
}
const mygenre = myGenRe();
console.log(mygenre.next()); // yield 1까지만 수행되어 x에 값이 담기는 건 다음 next 호출시점이 됨
console.log(mygenre.next(10));
console.log(mygenre.next(20));

console.log();

/* async / await */
// Promise 기반의 비동기 처리를 동기 처럼 작동하도록 함 (ES8에 도입)
// async함수(비동기함수)는 항상 Promise를 반환
// await키워드는 async함수 내에서만 사용가능
// awiat키워드는 프라미스가 settled(fulfilled or rejected)될때까지 대기 했다가 프라미스가 resolve한 결과를 반환
async function afunc() {
    console.log("afunc 호출됨!");
}
afunc();
afunc().then(()=>console.log("비동기함수 afunc 호출완료!"));

console.log();

// await키워드 뒤의 작업이 완료될때까지 대기했다가 결과 반환
const getGitUserName = async id => {
  const result = await fetch('http://api.github.com/users/ungmo2');  
  const {name} = await result.json();
  console.log(name);
};
getGitUserName();

console.log();

// 비동기함수 내에서의 동기 처리
async function foo() {
    const promise1 = await new Promise(resolve => setTimeout(()=>resolve(1), 3000));
    const promise2 = await new Promise(resolve => setTimeout(()=>resolve(2), 2000));
    const promise3 = await new Promise(resolve => setTimeout(()=>resolve(3), 1000));
    console.log([promise1, promise2, promise3]);
}
foo();

console.log();

// 비동기함수의 에러 처리
const bar = async () => {
    try {
        const url = 'dkjfhklsjdhfkljdshflk';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('에러여부와 관계없이 실행!');
    }
};
bar();