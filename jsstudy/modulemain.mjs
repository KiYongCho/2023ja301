/* 모듈(Module) */
// 모듈이란 재사용 가능한 코드의 집합이며 JS에서는 모듈을 파일단위로 정의한다.
// 모듈은 자신만의 스코프를 가진다. (그래야 모듈 서로간의 식별자 충돌을 방지할 수 있다.)
// HTML에서 사용시 <script type="module" src="..."></script>와 같이 type을 module로 지정해야 한다.
// 이때 모듈파일의 확장자는 mjs 이다.
// export : 모듈파일내에서 외부에 공개할 변수, 함수, 클래스 선언 앞에 사용하는 키워드
// import : 공개된 변수, 함수, 클래스를 가져와 사용하기 위한 키워드

// import 방식 1
import { fullname, getName } from './user.mjs';
console.log(fullname);
console.log(getName('강감찬'));


console.log();

// import 방식 2
import { fullname as fn, getName as gn} from './user.mjs';
console.log(fn);
console.log(gn('강감찬'));

console.log();

// import 방식 3
import('./user.mjs');
console.log(fullname);
console.log(getName('강감찬'));


