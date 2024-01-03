/* built-in object */

// global
console.log(global); // in node
console.log(this); // {}
console.log(global === this); // false
console.log(module.exports === this); // true
// console.log(window); // in browser

console.log();

// globalThis : 브라우져와 node환경을 가리지 않는 전역객체 (ES11(ES2020))
console.log(globalThis);
console.log(globalThis === this); // false
console.log(globalThis === global); // true
// console.log(globalThis.window); // in brower
// console.log(globalThis.self); // in brower
// console.log(globalThis.frames); // in brower

console.log();

// 빌트인 전역 프라퍼티
console.log(globalThis.Infinity); // Infinity
console.log(-globalThis.Infinity); // -Infinity
console.log(globalThis.undefined); // undefined

// 빌트인 전역 메서드
console.log(globalThis.eval('1+2')); // 3
console.log(globalThis.eval('let a=3; a=a+2;')); // 5
console.log(globalThis.eval('({x:1})')); // {x:1}
console.log(globalThis.eval('(function() {return 1;})();')); // 1
console.log(globalThis.isFinite(0)); // true
console.log(globalThis.isFinite(Infinity)); // false
console.log(globalThis.isFinite(NaN)); // false
console.log(globalThis.isNaN(3 / '일')); // true
console.log(globalThis.isNaN(0 / 3)); // false
console.log(globalThis.parseFloat('1.2')); // 1.2
console.log(globalThis.parseFloat('I am 50')); // NaN
console.log(globalThis.parseInt('12')); // 12
console.log(globalThis.parseInt('I am 50')); // NaN
console.log(globalThis.parseInt('11', 2)); // 3
console.log(globalThis.parseInt('77', 8)); // 63
console.log(globalThis.parseInt('FF', 16)); // 255
let uri = 'http://google.com?name=홍길동';
let encodedUri = globalThis.encodeURI(uri);
console.log(encodedUri); // http://google.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(globalThis.decodeURI(encodedUri)); // http://google.com?name=홍길동
let encodedUriComp = globalThis.encodeURIComponent(uri);
console.log(encodedUriComp); // http%3A%2F%2Fgoogle.com%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(globalThis.decodeURIComponent(encodedUriComp)); // http://google.com?name=홍길동
