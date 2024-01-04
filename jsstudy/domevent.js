window.onload = function () {
  /*
  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', function (event) {
    const result = document.getElementById('result');
    result.innerHTML = this.value + ' 버튼이 클릭됨!';
  });
  */

  // 실습 1) 버튼 중에서 클릭된 버튼의 아이디를 result에 출력
  const btns = document.getElementsByClassName('btn');
  const result = document.getElementById('result');
  for (btn of btns) {
    btn.addEventListener('click', function () {
      result.innerHTML = this.value + ' 버튼이 클릭됨!';
    });
  }

  // 실습 2) 텍스트입력상자에 숫자 두개를 넣고 합계를 누르면 result2에
  //        합계 출력

  // 실습 3) 텍스트입력상자에 숫자 두개를 넣고 +,-,*,/ 버튼 누르면
  //         result2에 결과 출력
};
