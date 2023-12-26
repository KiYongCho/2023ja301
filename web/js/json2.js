// eval()함수:자바스크립트의 문장을 해석해서 실행하는 함수
let var1 = "1+2";
let result1 = eval("("+var1+")");

// json문자열을 json객체로 변환
let firstname = "길동";
let lastname = "홍";
let str1 = `
    {
        "firstname": "${firstname}",
        "lastname": "${lastname}",
        "age": 30
    }
`;
const jsonObj = eval("("+str1+")");
jsonObj.firtsname = "순신";

// json배열문자열을 json배열객체로 변환
let str2 = `
    [1, "홍길동", true, new Object(), {}, "function(){}"]
`;
const arrObj = eval("("+str2+")");
arrObj[0] = 100;

// json객체를 json문자열로 변환
const jsonObj = {
    firstname: "길동",
    lastname: "홍"
};
// JSON객체를 JSON문자열로
let str3 = JSON.stringify(jsonObj);
// JSON문자열을 JSON객체로
let jsonObj2 = JSON.parse(str3);