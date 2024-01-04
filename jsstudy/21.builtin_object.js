/* 빌트인 객체 */

// global or globalThis (in nodejs)
//console.log(globalThis); // global object (node의 전역객체)
//console.log(this);  // {}
//console.log(globalThis === this); // false
// console.log(module.exports === this); // node 전역스코프에서의 this

// window (in browser)
//console.log(window);
//console.log(this);
//console.log(window === this);

let uri = 'http://google.com?name=홍길동';
let encodedUri = encodeURI(uri);
console.log(encodedUri); // http://google.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99
let decodedUri = decodeURI(encodedUri);
console.log(decodedUri); // http://google.com?name=홍길동
let encodedUriComp = encodeURIComponent(uri);
console.log(encodedUriComp); // http%3A%2F%2Fgoogle.com%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99
let decodedUriComp = decodeURIComponent(encodedUriComp);
console.log(decodedUriComp); // http://google.com?name=홍길동
