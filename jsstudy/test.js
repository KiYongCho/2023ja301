// 함수 체이닝 실습 6)
// 각 학생의 과목별점수와 과목별점수 평균과의 차를 구하여
// 아래와 같이 출력하시오.
// 홍길동 국어 +20, 영어 +20, 수학 +20
// 강감찬 국어 +10, 영어 +10, 수학 +10
// 이순신 국어 +0, 영어 +0, 수학 +0
// 장보고 국어 -10, 영어 -10, 수학 -10
// 최영 국어 -10, 영어 -20, 수학 -20
const students = [
    {"s001" : {sname: "홍길동", skor: 100, seng: 90, smath: 80}},
    {"s002" : {sname: "강감찬", skor: 90, seng: 80, smath: 70}},
    {"s003" : {sname: "이순신", skor: 80, seng: 70, smath: 60}},
    {"s004" : {sname: "장보고", skor: 70, seng: 60, smath: 50}},
    {"s005" : {sname: "최영", skor: 60, seng: 50, smath: 40}}
];
students.forEach(function(student) {
    console.log(student);
});