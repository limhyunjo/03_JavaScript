const result = document.getElementById("balance");
let balance = 10000;
const password = '1234';


// 함수 작성
function deposit() {
  // 입금 버튼 클릭 시
  // input에 입력된 금액 만큼 잔액(balance)에 추가
  const input = document.getElementById("input");
  const value1 = Number(input.value);

  balance += value1;

  result.innerText = balance;
}

function withdrawal() {
  

  // 출금 버튼 클릭 시 prompt를 이용해 비밀번호를 입력 받기
  const password = prompt("비밀번호를 입력하세요");

  // 비밀번호가 일치할 경우
  if (password == null) {
    alert("취소");
  } else if (password == '1234') {
    alert("비밀번호가 일치");

   
    const input = document.getElementById("input");
    const value1 = Number(input.value);

    // 1 출금할 금액이 잔액(balance)보다 큰 경우
    if (value1 > balance) {
      alert("출금 금액이 잔액보다 클 수 없습니다");
    } else {
      // 2 출금할 금액이 잔액(balance)보다 작거나 같은 경우
      balance -= value1;
      alert(value1 + "원이 출금 되었습니다. 남은 잔액: " + balance + "원");
      result.innerText = balance; // Update the balance in the UI
    }
  } else {
    alert("비밀번호가 일치하지 않습니다");
  }
}


  
// 테스트를 위해 deposit과 withdrawal 함수 호출
deposit();
withdrawal();