/* 실습 1/9 */
// https://jsonplaceholder.typicode.com/users
// 1. users 데이터를 가져와 리스팅한다
//    (id,name,username,email,phone,website)
// 2. 상단에 검색옵션(아이디<id>, 이름<name>, 별칭<username>)으로
//    검색을 구현한다. (문자열 검색시는 정규표현식 사용)
// 3. 정렬옵션 (아이디ASC/DESC, 이름ASC/DESC)

  let userArr = [];
  let selType = '';

  $(function() { 
    getData();
    $("#sortType").on("change", function() {
        sortData($(this).val());
    });
    $("#selType").on("change", function() {
        selType = $(this).val();
    });
    $("#srchBtn").on("click", function() {
        const selValue = $("#selValue").val();
        if (!selType) {
            alert('검색타입을 선택해 주세요!');
            return;
        }
        if (!selValue) {
            alert('검색어를 입력해 주세요!');
            return;
        }
        searchData(selType, selValue);
    });
  });

  const getData = function() {
    $.get("https://jsonplaceholder.typicode.com/users")
        .done(function(users) {
            userArr = users;
            printData(users);
        })
        .fail(() => console.log("getData error!"))
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
            userArr.sort((a, b) => {
                if(Number.isInteger(a[sortProp])) {
                    return a[sortProp] - b[sortProp];
                } else {
                    return a[sortProp].localeCompare(b[sortProp]);
                }
            });
        } else {
            userArr.sort((a, b) => {
                if(Number.isInteger(a[sortProp])) {
                    return b[sortProp] - a[sortProp];
                } else {
                    return b[sortProp].localeCompare(a[sortProp]);
                }
            });
        }
        printData(userArr);
    }
  };

  const searchData = function(selType, selValue) {
      printData(userArr.filter(user => {
        return new RegExp(selValue).test(String(user[selType]));
      }));
  };
