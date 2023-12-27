$(function(){

    // 실습1 : 3을 탐색해서 콘솔에 출력
    let str = $("#table1 tr:first td:last").text();
    console.log(str);

    // 실습2 : 메뉴2를 탐색해서 콘솔에 출력
    str = $("#ul1 li:first").next().text();
    console.log(str);

    // 실습3 : 마지막div내 p의 문자열을 콘솔에 출력
    str = $("#wrapper div:last").text();
    console.log(str);
    
});