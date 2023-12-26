let jsonObjStr = `
    {
        "firstname": "길동",
        "lastname": "홍",
        "age": 20,
        "hobby": ["축구", "야구", "농구"]
    }
`;
// 역직렬화메소드 : 문자열 > 객체
const jsonObj = JSON.parse(jsonObjStr);
console.log(jsonObj.firstname);
jsonObj.firstname = "길순";
console.log(jsonObj.firstname);
console.log(jsonObj.hobby[1]);  

// 직렬화메소드 : 객체 > 문자열
let jsonObjStr2 = JSON.stringify(jsonObj);
console.log(jsonObjStr2);

const jsonArr = [
    {"name": "홍길동", "age": 30},
    {"name": "이순신", "age": 20},
    {"name": "강감찬", "age": 40}
];
let jsonArrStr = JSON.stringify(jsonArr);
console.log(jsonArrStr);

const jsonArr2 = JSON.parse(jsonArrStr);
console.log(jsonArr2[1].age);









