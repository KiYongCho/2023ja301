/* 실습 1/9 */
// https://jsonplaceholder.typicode.com/users
// 1. users 데이터를 가져와 리스팅한다
//    (id,name,username,email,phone,website)
// 2. 상단에 검색옵션(아이디<id>, 이름<name>, 별칭<username>)으로
//    검색을 구현한다. (문자열 검색시는 정규표현식 사용)
// 3. 정렬옵션 (아이디ASC/DESC, 이름ASC/DESC)

  // 서버에서 가져온 JSON객체들을 클라이언트에 저장할 목적의 배열
  // 서버 부하를 줄이기 위해 데이터를 한번에 가져와서 클라이언트에서
  // 처리하고 렌더링한다.  
  let userArr = [];
  let selType = ''; // 검색타입

  $(function() { 
    getData();
    // 정렬셀렉트가 변경되면 그때의 option의 value를
    // sortData 함수에 전달
    $("#sortType").on("change", function() {
        sortData($(this).val()); // id_ASC ...
    });
    // 검색타입(id, name, username)
    $("#selType").on("change", function() {
        selType = $(this).val();
    });
    // 검색버튼 누르면 검색타입이 있는지 검색어를 입력했는지 확인
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
        // 검색타입, 검색어를 searchData에 전송
        searchData(selType, selValue);
    });
  });

  // users 데이터를 비동기로 가져와서 클라이언트배열에 저장하고
  // 화면에 출력
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

  // 정렬할프라퍼티, 정렬타입에 따른 정렬
  const sortData = function(sortType) {
    if (sortType) {
        // id_DESC => sortProp = 'id';
        const sortProp = sortType.split("_")[0]; 
        // 오름차순
        if (sortType.split("_")[1]=='ASC') {
            userArr.sort((a, b) => {
                if(Number.isInteger(a[sortProp])) {
                    // id는 숫자이므로
                    return a[sortProp] - b[sortProp];
                } else {
                    // name은 문자이므로
                    return a[sortProp].localeCompare(b[sortProp]);
                }
            });
        // DESC일때 정렬
        } else {
            userArr.sort((a, b) => {
                if(Number.isInteger(a[sortProp])) {
                    return b[sortProp] - a[sortProp];
                } else {
                    return b[sortProp].localeCompare(a[sortProp]);
                }
            });
        }
        // 정렬결과 출력
        printData(userArr);
    }
  };

  // 검색함수
  const searchData = function(selType, selValue) {
      // selValue : 사용자가 검색어로 입력한 문자열
      printData(userArr.filter(user => {
        return new RegExp(selValue).test(String(user[selType]));
      }));
  };
