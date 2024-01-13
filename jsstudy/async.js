/*
    Promise, Generator, async/await의 개념과 기본코드를 정리한 문서입니다.
    교재 해당부분을 꼭 정독하신 후 이 문서를 읽어보면서 코딩해 보세요! (안하면 미워~)
    비동기처리 부분이라 콘솔출력결과가 여기저기 나오게 되니 코드하나씩 주석처리 해가면서 콘솔 출력 해보3!

    교재 정독을 해보고 타이핑도 해봤는데 이해가 안간다면 ㄷㄷㄷ... 날 잡아서 영상강의라도 한번 해주겠음 -.-

    멋있는 사람은 끝이 멋있는 사람이라고 했습니다~
    과정 잘 마무리 해서 취업하고 최종과제물 제출할거죠? ㅋㅋ
*/

/* Promise */

// - 향상된 비동기처리를 위해 ES6에서 도입한 ECMAScript 표준 빌트인 객체
// - 기존 콜백헬(비동기 처리결과를 위한 콜백함수의 증가)과 에러처리의 문제점을
//   개선하고 비동기처리에 일관성있는 패턴을 제공할 목적
// - resolve(성공시 콜백), reject(실패시 콜백)을 인자로 전달 받음
// - 프라미스는 상태(status)와 결과(value)로 이루어짐

// - 프라미스의 상태
//   : pending(프라미스 생성), fulfilled(resolve함수호출), rejected(reject함수호출), settled(성공이든 실패든 프라미스가 수행된 상태)

// - 프라미스의 후속 메서드
// - 후속메서드의 반환은 항상 프라미스 (프라미스체이닝)
//   then:성공하거나 실패하면 수행, catch:실패시 에러처리, finally:성공이든 실패든 수행
// - then의 두번째 인자로 실패처리를 하는 것보다 catch를 사용해 실패처리와 에러처리를 하는 것이 좋다.
// - catch는 에러가 발생하지 않으면 호출되지 않는다.

// - 프라미스의 정적메서드
// Promise.resolve : 프라미스 생성시 인자로 첫번째 전달받는 resolve
// Promise.reject : 프라미스 생성시 인자로 두번째 전달받는 resolve
// Promise.all : 프라미스 병렬 처리, 배열이나 이터러블로 전달받은 모든 프라미스가 fulfilled 상태이면 처리결과를 배열로 저장하고 프라미스 반환
// Promise.race : 프라미스 병렬 처리, 배열이나 이터러블로 전달받은 어떤 한 프라미스라도 fulfilled 상태이면 처리결과를 배열로 저장하고 프라미스 반환
// Promise.allSettled : 프라미스 병렬 처리, 배열이나 이터러블로 전달받은 모든 프라미스가 settled 상태(fulfilled or rejected)이면 처리결과를 배열로 저장하고 프라미스 반환

// 프라미스 생성
const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status==200 && xhr.readyState==4) {
                console.log('성공시 resolve 호출!');
                console.log(xhr.response);
                resolve(JSON.parse(xhr.response));
            } else {
                console.log('실패시 resolve 호출!');
                reject(new Error(xhr.status));
            }
        }    
    })
};
promiseGet('https://jsonplaceholder.typicode.com/users/1');

// 프라미스 상태와 후속메서드
new Promise((resolve, reject) => resolve('fulfiled')).then(v=>console.log(v), e=>console.log(e));
new Promise((resolve, reject) => reject(new Error('rejected'))).then(v=>console.log(v), e=>console.log(e));
new Promise((resolve, reject) => reject(new Error('rejected'))).catch(e=>console.log(e));
new Promise((resolve, reject) => resolve('fulfiled')).finally(e=>console.log('무조건 수행!'));
new Promise((resolve, reject) => reject(new Error('rejected'))).finally(e=>console.log('무조건 수행!'));

// 프라미스 사용 예)
const promiseGet2 = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status==200 && xhr.readyState==4) {
                console.log('성공시 resolve 호출!');
                console.log(xhr.response);
                resolve(JSON.parse(xhr.response));
            } else {
                console.log('실패시 reject 호출!');
                reject(new Error(xhr.status));
            }
        }    
    })
};

// 프라미스 후속 메서드
promiseGet2('https://jsonplaceholder.typicode.com/posts/1')
    .then(()=>console.log('성공'), undefined)
    .catch(()=>console.log('실패시 에러처리'))
    .finally(()=>console.log('성공하든 실패하든 난 수행'));

promiseGet2('https://jsonplaceholder.typicode.com/posts/1000000')
    .then(undefined, ()=>console.log('실패'))
    .finally(()=>console.log('성공하든 실패하든 난 수행'));

// 프라미스 정적 메서드
console.log(Promise.resolve(1));
console.log(Promise.reject(1).catch(console.log('에러발생!')));

const promise1 = new Promise(resolve => setTimeout(()=>resolve(1), 3000));
const promise2 = new Promise(resolve => setTimeout(()=>resolve(2), 2000));
const promise3 = new Promise(resolve => setTimeout(()=>resolve(3), 1000));

// 모든 프라미스가 fulfilled이면 프라미스 반환
Promise.all([promise1, promise2, promise3])
    .then(console.log)
    .catch(console.error);

// 어떤 하나의 프라미스라도 fulfilled이면 프라미스 반환
Promise.race([promise1, promise2, promise3])
    .then(console.log)
    .catch(console.error);    

// 모든 프라미스가 settled(fulfilled of rejected)이면 프라미스 반환
Promise.allSettled([promise1, promise2, promise3])
    .then(console.log)
    .catch(console.error);


// fetch 메서드
// 비동기 HTTP요청 전송기능을 제공하는 Web API
// 기존 XMLHttpRequest 콜백헬에 대한 대안으로 등장
// Response를 래핑한 프라미스를 반환
fetch('https://jsonplaceholder.typicode.com/posts/1')
//fetch('https://jsonplaceholder.typicode.com/posts/1000000')
    .then(response => {
        console.log(response);
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(json => console.log(json));

// axios : fetch가 catch하지 못하는 HTTP에러를 reject하고 인터셉터와 요청설정등의
// 추가기능을 제공하는 외부 라이브러리로 vue.js, react.js 등에서 사용 (axios-http.com)
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response.data));








