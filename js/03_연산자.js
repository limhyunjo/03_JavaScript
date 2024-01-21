//변수 선언


//document(문서):HTML문서(파일) 내에서
//get:얻다
// Element : HTML 요소/* 내용 전부다 요소임 */
//ById: 아이디가 일치하는

//-> HTML 문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다
/* id는 html내에서 한번만 사용 가능 */
const number1 = document.getElementById("input1");

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");/* span */

/* 두 수를 더해서 화면에 출력하는 함수(기능) */
function plusFn()/* 함수 */{
   
    /* input요소.value : input 요소에 작성된 값 얻어오기  */
    const value1= number1.value;
    const value2= number2.value;
    console.log(value1, value2);

    console.log(" 두 수의 합:", value1+value2);
    /* 얘를 해줘야 더해서 나옴 */
    
    // -> input 요소에 작성된 값은 숫자로 되어있어도 무조건 문자열(string)
    //더했을 떄 이어쓰기 되는 문제가 발생
    
    //해결 방법
    //문자열(string)을 숫자(number)로 변경하는 코드를 수행
    /* input->number도 문자->value 값 */
    // -> 데이터 파싱(data parsing): 데이터의 종류를 바꿈
    /* 숫자만 작성된 문자열("123")을 진짜 숫자(123)으로 바꾸는 방법*/
    //->Number("123")  --> 123
    //위는 자바스크립트에 내장된 함수임

    console.log("두 수의 합 : ", Number(value1) + Number(value2));
    
    /* 두 수의 합을 아이디가 calcResult인 요소 (result 변수)의
    내부 글자(innerText, HTML 요소 내용)으로 대입하기 */

    result.innerText = Number(value1) + Number(value2)

}//plusFn끝

/* 빼기 함수 */
function minusFn(){
    
    // string으로 얻어온 값을 바로 number로 변환하여 변수에 대입
  const value1 = Number(number1.value); 
  const value2 = Number(number2.value); 
    /* 컨트롤 키 눌러서 클릭하면 선언된 곳으로 이동 */
   
    console.log("value1 : ", value1, typeof value1);
    console.log("value2 : ", value2, typeof value2);
    /* 숫자로 바뀌었는지 확인하는 콘솔 */
    
    result.innerText = value1 - value2;
}
/* 곱하기 함수 */
function multiFn(){

 const value1 = Number(number1.value); 
  const value2 = Number(number2.value); 

  result.innerText = value1 * value2;
}
/* 나누기 함수 */
function divFn(){
    const value1 = Number(number1.value); 
    const value2 = Number(number2.value); 

    result.innerText = value1 / value2;
}

/* 나머지 연산 함수( 무조건 정수에서 끝남) */
function modFn(){
    /* 나머지 연산(%)은 나누기 계산 시 
      몫이 정수인 부분까지만 계산하고 남은 나머지 값을 출력한다*/
  
      const value1 = Number(number1.value); 
      const value2 = Number(number2.value); 
  
      result.innerText = value1 % value2;
  
  }


  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num3 = document.getElementById("num3");
  const total = document.getElementById("total");
  

  function totalFn(){
    const value1 = Number(num1.value); // string -> number
    const value2 = Number(num2.value); // string -> number
    const value3 = Number(num3.value); // string -> number
    total.innerText= value1+ value2 + value3;
  }
  //---------------------------------------------

  /* 증가 /감소 연산자(++,--) */

  //증가, 감소할 수를 저장할 변수를 선언
  let count=0; //(주의)const로 선언하면 값을 증가/감소 시킬 수 없다

 //문서 내에서 id가 "result2"인 요소를 얻어와 result2에 대입
    const result2 = document.getElementById("result2")
    /* 위의 변수는 result2 적용 */
  
  /* 1 증가 함수  */
  function increase(){
    count++; //또는 ++count -> count값이 1증가
    
    //증가한 count값을 result2의 내용으로 대입
    result2.innerText=count;
  }
   /* 1 감소 함수 */
   function decrease(){
    count--; // 또는 --count -> count 값이 1 감소
    result2.innerText = count;
  }

  /* 전위, 후위 연산 확인하기 */
  function check1(){


    //함수 밖과 안은 구분되는 공간으로 생각하면 됨
    //밖에 작성한 변수 count,안에 작성한 count는 서로 다른 변수(동명이인)
    let count = 100;


    // 컴퓨터한테 연산은 +-*/ 뿐만 아니라
  // 코드를 하나하나 실행하는 것들이 연산이다!!

   // 전위 연산(++count, --count ) 확인
  // -> 다른 연산보다 먼저 수행
  // -> count 값이 먼저 증가, 감소된 후 console에 출력이 된다

    // 전위 연산(++count, --count ) 확인
    console.log("++count : ", ++count);//101
    console.log("++count : ", ++count);//102
    console.log("++count : ", ++count);//103
    console.log("-------------------");
    console.log("--count : ", --count);//102
    console.log("--count : ", --count);//101
    console.log("--count : ", --count);//100


  //후위 연산(count++, count--) 확인
  //->다른 연산이 다 끝나고 마지막에 수행
  count=50;
  console.log("-------------------");
  console.log("count++",count++);//50 출력 후에 51로 증가함
  console.log("후위 연산 후 count : ", count);//51

  console.log("count--",count--);
  console.log("후위 연산 후 count : ", count);//50

  console.log("-------------------");
  let a=10;
  let b=5;
  let c=++a*b--;
//최종적으로 a, b, c에 저장된 값은 얼마?
// a==11
// b==4(5->4)
// c==55
console.log(a, b, c);
  }
