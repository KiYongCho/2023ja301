// REST
// 네트워크상의 자원을 자원(resource), 행위(verb), 표현(representation)으로 구분하여 요청하는 방식
// REST방식으로 요청하는 서비스를 RESTful서비스라 함
// 자원 : URI
// 행위 : HTTP Method
//          get : 자원요청, post:자원등록, put:자원수정, patch:자원일부수정, delete:자원삭제

// REST 예)
// GET /posts : 전체 포스트 요청
// GET /post/1 : 1번 포스트 요청
// POST /post : 포스트 등록
// PUT /post/1 : 1번 포스트 전체수정
// PATCH /post/1 : 1번 포스트 부분수정
// DELETE /post/1 : 1번 포스트 삭제
// GET /post/1/reply : 1번 포스트의 전체 댓글 요청
// GET /post/1/reply/3 : 1번 포스트의 3번 댓글 요청

$(function() {

    $("#GET").on("click", function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            method: "GET"
        }).done(function(result) {
            $("#sp").text(JSON.stringify(result));
        });
    });

    $("#POST").on("click", function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: '{"userId":10, "id":201, "title":"vue-post", "completed":false}'
        }).done(function(result) {
            console.log("등록완료!");
        });
    });

    $("#PUT").on("click", function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos/200",
            method: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: '{"userId":10, "id":201, "title":"vue-put", "completed":true}'
        }).done(function(result) {
            console.log("수정완료!");
            $("#sp").text(JSON.stringify(result));
        });
    });    

    $("#PATCH").on("click", function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos/200",
            method: "PATCH",
            contentType: "application/json",
            dataType: "json",
            data: '{"title":"vue-patch", "completed":false}'
        }).done(function(result) {
            console.log("수정완료!");
            $("#sp").text(JSON.stringify(result));
        });
    });    
    
    $("#DELETE").on("click", function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos/200",
            method: "DELETE"
        }).done(function(result) {
            console.log("삭제완료!");
        });
    });         

});