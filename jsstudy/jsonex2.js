// 1/8 실습 (할일목록 정리하기)
// https://jsonplaceholder.typicode.com/todos
// 화면의 왼쪽에는 완료된 일의 목록을 표시(completed:'true')
// 화면의 오른쪽에는 해야할 일의 목록을 표시 (completed: 'false')
// 해야할 일의 각 줄에는 완료 버튼 표시
// 완료 버튼 클릭시 왼쪽 완료된 일로 이동

let totalArray = [];
let cArray = [];
let ncArray = [];

$(function() {
    getData();
});

// 1. TODO 데이터를 가져온다.
const getData = function() {
    $.get('https://jsonplaceholder.typicode.com/todos')
        .done(result => {
            totalArray = result;
            procData(result);
        })
        .fail(() => console.log('getData error!!!'));
};

// 2. 완료/비완료 분리
const procData = function(result) {
    cArray = result.filter(obj => obj.completed);
    ncArray = result.filter(obj => !obj.completed);
    printData(cArray, ncArray);
};

// 3. 화면에 출력
const printData = function(cArray, ncArray) {
    $("#completed ul").empty();
    $("#notcompleted ul").empty();
    cArray.forEach(obj => {
        $("#completed ul").append(`<li id='${obj.id}'>${obj.id} ${obj.title} 
            <input type='button' class='cbtn' value='미완료' /></li>`)
    });
    ncArray.forEach(obj => {
        $("#notcompleted ul").append(`<li id='${obj.id}'>${obj.id} ${obj.title} 
        <input type='button' class='ncbtn' value='완료' /></li>`)
    });
    attachEvent();
};

// 4. 버튼에 이벤트핸들러 바인딩
const attachEvent = function() {
    $(".cbtn").on("click", function() {
        moveData($(this).parent().attr("id"));
    });    
    $(".ncbtn").on("click", function() {
        moveData($(this).parent().attr("id"));
    });
    $(".sort").on("click", function() {
        sortData($(this).attr("value"));
    });
}

// 5. 버튼누르면 완료/미완료 이동
const moveData = function(clickedId) {
    const targetObj = totalArray.filter(obj => String(obj.id)===clickedId);
    targetObj[0].completed = !targetObj[0].completed;
    if(cArray.includes(targetObj[0])) {
        cArray.splice(cArray.indexOf(targetObj[0]), 1);
        ncArray.unshift(targetObj[0]);
    } else {
        ncArray.splice(ncArray.indexOf(targetObj[0]), 1);
        cArray.unshift(targetObj[0]);
    }
    printData(cArray, ncArray);
}

// 6. 정렬
const sortData = function(sortType) {
    switch (sortType) {
        case "cASC":    cArray.sort((a, b) => a.id - b.id); break;
        case "cDESC":   cArray.sort((a, b) => b.id - a.id); break;
        case "ncASC":  ncArray.sort((a, b) => a.id - b.id); break;
        case "ncDESC": ncArray.sort((a, b) => b.id - a.id);
    }
    printData(cArray, ncArray);
}
