$(function () {

  // 실습 1) 버튼 중에서 클릭된 버튼의 아이디를 result에 출력
  $('.btn').on('click', function () {
    $('#result1').text($(this).val());
  });
  
  // 실습 2) 텍스트입력상자에 숫자 두개를 넣고 합계를 누르면 result2에
  //        합계 출력
  $('#btnplus').on('click', function () {
    $('#result2').text(
      parseFloat($(".txt2").eq(0).val()) + 
      parseFloat($(".txt2").eq(1).val())
    );
  });

  // 실습 3) 텍스트입력상자에 숫자 두개를 넣고 +,-,*,/ 버튼 누르면
  //         result3에 결과 출력
  $('.btn3').on("click", function() {
    let txt3Val1 = parseFloat($(".txt3").eq(0).val());
    let txt3Val2 = parseFloat($(".txt3").eq(1).val());
    switch($(this).val()) {
      case '+':
        $("#result3").html(txt3Val1 + txt3Val2);
        break;
      case '-':
        $("#result3").html(txt3Val1 - txt3Val2);
        break;
      case '*':
        $("#result3").html(txt3Val1 * txt3Val2);
        break;
      case '/':
        $("#result3").html(txt3Val1 / txt3Val2);
        break;
    }
  });

  // 실습 4) li를 클릭하면 화면 배경색을 변경하고 result4에 색상명 출력

  // 실습 5) 체크한 과일명들을 result5에 출력

  // 실습 6) 선택한 숫자의 구구단을 result6에 출력

  // 실습 7) 버튼을 클릭하면 학생데이터를 테이블에 출력
  // 홍길동 100 100 100, 강감찬 90 90 90, 이순신 80, 80, 80  

});
