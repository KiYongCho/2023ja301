window.onload = function () {

  // 실습 1) 버튼 중에서 클릭된 버튼의 아이디를 result에 출력
  const btns = document.getElementsByClassName('btn');
  const result1 = document.getElementById('result1');
  for (btn of btns) {
    btn.addEventListener('click', function () {
      result1.innerHTML = this.value + ' 버튼이 클릭됨!';
    });
  }

  // 실습 2) 텍스트입력상자에 숫자 두개를 넣고 합계를 누르면 result2에
  //        합계 출력
  const btnplus = document.getElementById('btnplus');
  const result2 = document.getElementById('result2');
  const txt2s = document.getElementsByClassName('txt2');
  btnplus.addEventListener("click", function() {
    result2.innerHTML
      = parseFloat(txt2s[0].value) + parseFloat(txt2s[1].value);
  });

  // 실습 3) 텍스트입력상자에 숫자 두개를 넣고 +,-,*,/ 버튼 누르면
  //         result3에 결과 출력
  const result3 = document.getElementById('result3'); 
  const txt3s = document.getElementsByClassName('txt3');
  const btn3s = document.getElementsByClassName('btn3');
  for (btn3 of btn3s) {
    btn3.addEventListener("click", function() {
      let txt3Val1 = parseFloat(txt3s[0].value);
      let txt3Val2 = parseFloat(txt3s[1].value);
      switch(this.value) {
        case '+': result3.innerHTML = txt3Val1 + txt3Val2; break;
        case '-': result3.innerHTML = txt3Val1 - txt3Val2; break;
        case '*': result3.innerHTML = txt3Val1 * txt3Val2; break;
        case '/': result3.innerHTML = txt3Val1 / txt3Val2;
      }
    });
  }

  // 실습 4) li를 클릭하면 화면 배경색을 변경하고 result4에 색상명 출력
  const clcolor = document.getElementsByClassName('clcolor');
  for (eachEle of clcolor) {
    eachEle.addEventListener('click', function() {
      document.body.style.backgroundColor = this.getAttribute('value');
    });
  }
  
  // 실습 5) 체크한 과일명들을 result5에 출력
  const result5 = document.getElementById('result5');
  const clcb = document.getElementsByClassName('clcb');
  const resultArr = [];
  for (eachEle of clcb) {
    eachEle.addEventListener("change", function() {
      const thisVal = this.value;
      const thisValIdx = resultArr.indexOf(thisVal);
      thisValIdx<0 ? resultArr.push(thisVal) : resultArr.splice(thisValIdx, 1);
      result5.innerHTML = resultArr;
    });
  }

  // 실습 6) 선택한 숫자의 구구단을 result6에 출력
  const result6 = document.getElementById('result6');
  const sel = document.getElementById('sel');
  sel.addEventListener('change', function() {
    const selVal = this.value;
    if (this.value != '--select--') {
      for (resultStr='', i=2; i<10; i++) {
        resultStr += `${selVal} * ${i} = ${selVal*i} `;
      }      
      result6.innerHTML = resultStr;
    } else {
      result6.innerHTML = '';
    }
  });

  // 실습 7) 버튼을 클릭하면 학생데이터를 테이블에 출력
  // 홍길동 100 100 100, 강감찬 90 90 90, 이순신 80, 80, 80
  const btnscore = document.getElementById('btnscore');
  const tds = document.querySelectorAll('tbody td');
  btnscore.addEventListener('click', function() {
    const students = ['홍길동',100,100,100,'강감찬',90,90,90,'홍길동',80,80,80];
    tds.forEach(function(ele, idx) {
      ele.innerHTML = students[idx];
    });
  });

};
