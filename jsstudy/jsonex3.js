/* 실습 1/9 */
// https://jsonplaceholder.typicode.com/users
// 1. users 데이터를 가져와 리스팅한다
//    (id,name,username,email,phone,website)
// 2. 상단에 검색옵션(아이디<id>, 이름<name>, 별칭<username>)으로
//    검색을 구현한다. (문자열 검색시는 정규표현식 사용)
// 3. 정렬옵션 (아이디ASC/DESC, 이름ASC/DESC)

  let userArr = [];

  $(function() { 
    getData();
    $("#sortType").on("change", function() {
            sortData($(this).val());
        }
    );
  });

  const getData = function() {
    $.get("https://jsonplaceholder.typicode.com/users")
        .done(function(users) {
            userArr = users;
            printData(users);
        })
        .fail(console.log('getData error!'))
  };

  const printData = function(users) {
    $("tbody").empty();
    users.forEach(user => {
        $("tbody").append(`
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
        </tr>
    `);
    });
  }

  const sortData = function(sortType) {
    if (sortType) {
        const sortProp = sortType.split("_")[0];
        if (sortType.split("_")[1]=='ASC') {
            console.log(userArr);
            userArr.sort((a, b) => a[sortProp] - b[sortProp]);
        } else {
            userArr.sort((a, b) => b[sortProp] - a[sortProp]);
        }
        printData(userArr);
    }
  };
