/* 실습 1/9 */
// https://jsonplaceholder.typicode.com/users
// 1. users 데이터를 가져와 리스팅한다
//    (id,name,username,email,phone,website)
// 2. 상단에 검색옵션(아이디<id>, 이름<name>, 별칭<username>)으로
//    검색을 구현한다. (문자열 검색시는 정규표현식 사용)
// 3. 정렬옵션 (아이디ASC/DESC, 이름ASC/DESC)


  $(function() {

    $.get("https://jsonplaceholder.typicode.com/users")
        .done()
        .fail()

  });