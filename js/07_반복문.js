function check1(){
     // for([1]초기식 ; [2]조건식 ; [4]증감식){
  //   [3]조건식이 true인 경우 반복 수행할 코드;
  // }
     let result="";//빈 문자열
  for(let num=1;num<=5;num++ ){//true인 경우 5가 될때까지 반복 실행
  /* 초기식 숫자(num)=1 증감식은 1씩 증가 num++ 조건식은 5보다 작거나 같다*/ 
    result +=num; //복합 대입 연산자/ 기존의 수에 더함
    // result = reuslt + num; -> result는 문자열이라 1인 문자열이 된다
         // result = "12345";
  }
  console.log("result : ", result);//string이라서 12345이라서 출력됨


}


function check2(){

    // 1부터 10까지 출력하기

    for(let num=1; num<=10   ;num++){//보통 초기식에 시작 숫자를 씀
    console.log("num : ", num);

   }




}

function check3(){

    //1부터 20까지 1씩 증가하며 출력
    
    for(let num=1; num<=20   ;num++){
        console.log("num : ", num);
    
    }


}
function check4(){

    //5부터 15까지 1씩 증가하며 출력
    
    for(let num=5; num<=15   ;num++){
        console.log("num : ", num);
    
    }


}
function check5(){

    //1부터 30까지 2씩 증가하며 출력
    //복합 연산자가 대입하면서 계산해서 더 빠름 
    for(let num=1; num<=30   ;/* num=num+2 */ num += 2){
        console.log("num : ", num);
    
    }


}
function check6(){

    // 1부터 10까지 모든 정수의 합 

    let sum = 0; // 합계를 저장하기 위한 변수
  // 0을 대입한 이유 : 0은 더해도 아무런 영향이 없기 때문에 

    for(let num=1; num<=10   ;num ++){//num이라는 변수가 1~10까지 변함
        sum+=num; // sum에 num 값(1~10) 누적
    }

    console.log("sum : ", sum); // 55


}
// 입력 받은 범위 내 모든 정수의 합 구하기
function sumFn(){

    // input에 작성된 값을 얻어와 저장
 const start= Number(document.getElementById("inputNumber1-1").value);
 // 받아온 아이디의 값만 바로 얻어옴
  const end= Number( document.getElementById("inputNumber1-2").value);

  // 결과를 출력하기 위한 요소(span#result1)인 요소 얻어와 저장
  const result1= document.getElementById("result1");
  
  // 합계를 저장할 변수
  let sum=0;//0을 해야 더하든 빼던 변화가 없음
  
  
  // start 부터 end 까지 1씩 증가하는 for문
  for(let num= start ; num<=end ;num++){
   
    sum +=num;//num값을 sum에 누적해라
  
  }
 result1.innerText=sum;//result안의 내용으로 sum을 넣겠다

}

// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기

function executeFn2(){

    const start= Number(document.getElementById("inputNumber2-1").value);
    const end= Number( document.getElementById("inputNumber2-2").value);
    //증가값
    const val= Number(document.getElementById("inputNumber2-3").value);

    //결과를 출력할 ul요소 
     const ul =document.getElementById("result2");

     ul.innerHTML="";//이전 ul에 작성된 내용을 빈칸을 대입해서 모두 삭제
     //이거 안하면 이전 식 뒤로 다음 식이 계속 이어짐

         /* start 부터 end 까지 val 씩 증가 */
     for(let num= start; num <= end; num +=val){
            
        // ul 요소 내부에 li 요소를 누적
    
             ul.innerHTML += `<li>${num}</li>`;
     }

}




//요소.innerText="문자열"
//->요소의 내용으로 문자열을 대입
//(HTML태그를 해석하지 않고 그대로 보여주는 특징이 있음)

//해석하게 하려면?
//->
// 요소.innerHTML = "<h2>문자열</h2>" html코드가 해석이 됨
//->요소의 내용으로 문자열을 대입하는 것은 같지만
//(HTML태그를 해석해서 화면에 출력)


/* 구구단 2단 출력하기 */
//console에 적어보기
function check7(){
    //num(곱해지는 수)이 1 부터 9까지 1씩 증가
    for(let num=1; num<=9; num++){
        console.log(`2x ${num}=${2*num}`);
    }
}

/* 입력 받은 단 출력하기 */
function executeFn3(){
    // 입력된 값(단)
    const input = Number(document.getElementById("input3").value);
  
    // 결과를 출력한 요소
    const ul = document.getElementById("result3");
  
    ul.innerHTML = ""; // 이전 내용 삭제
  
  
    /* 입력 받은 단이 2 ~ 9 사이가 아닐 경우 
      "2~9 사이만 입력해 주세요" 알림창 띄우기
    */
    // if( !(input >= 2 && input <= 9)  ){
  
    if( input < 2 || input > 9 ){
      alert("2~9 사이만 입력해 주세요");
      return; // 함수를 종료하고 호출한 곳으로 돌아감
              // (지금은 함수 종료 정도로만 인식)
    }
  
  
    for(let num=1 ; num <= 9 ; num++){
      ul.innerHTML += `<li>  ${input} x ${num} = ${input * num}  </li>`;
    }
  }

  /* 특정 배수마다 지정된 모양으로 출력하기 */

  function executeFn4(){
    //배수
    const input= Number(document.getElementById("input4").value);
    
    // 모양
    const output = document.getElementById("output4").value;

    // 출력할 div
     const result=document.getElementById("result4");
    
  // 출력할 문자열을 저장할 변수
  let str = "";

  for(let x = 1 ; x <= 50 ; x++){

  if( x % input == 0 ){ // x가 input의 배수인 경우
    // str에 x 대신 output 을 대입
    str += output + " ";

  } else {
    str += x + " ";
  }
  
  //10의 배수 마다 str에 br태그 추가
  if(x%10==0){
    str += "<br>";
  }

 }


  result.innerHTML = str;
}


 /* 다음 모양 출력하기
    12345
    12345
    12345
    12345
  
  
  */

function check8(){

      // 4바퀴 반복하는 for문
      for(let y = 1 ; y <= 4 ; y++){
    
        // "12345" 출력하는 구문
        let str = "";
        for(let x = 1 ; x <= 5 ; x++){
          str += x;
        }
        console.log(str); // "12345"
        
      }
    
    
    
 }


/* 다음 모양 출력하기

    1
    12
    123
    1234
    12345*/  

function check9(){

   for(let y=1; y <=5; y++){
        let str = "";
        for(let x=1; x<=y; x++){/* 5->y(12345로 바뀌는 값으로 바꿔줌) */
          str += x;
        }
        console.log(str);


      }    
}


function check11(){

  for(let row = 5 ; row >= 1 ; row--){

    let str = "";
    for(let col=1 ; col <= row ; col++){
      str += col;
    }
    console.log(str);
  }

}


//  if,for문 내에 코드가 한 줄만 있다면 {}생략 가능

function check12(){

  for(let row=1 ; row <= 3 ; row++){
    
    let str = "";
    for(let col=1 ; col<=row ; col++) /* 여러 코드를 묶는게 아니면 중괄호 생략해도 됨 */  
    str += col;
    console.log(str);
  }

  // 아랫쪽 삼각형
  for(let row = 4 ; row >= 1 ; row--){

    let str = "";
    for(let col=1 ; col<=row ; col++)   str += col;
    console.log(str);
  }
  console.log("-------------")
  //2중 for문 한 번만 사용하기

  for(let row = 1 ; row <=7 ; row++){

    let end = 0;
    if(row <= 4)  end = row; /* row가 4보다 작으면 end에 넣음*/
    else          end =7-row+1;



    let str = "";
    for(let col = 1; col<=end ; col++){
        str += col;
    }

    console.log(str);

  }
}

/* 카운트를 이용해 출력하기
    1 2 3 4
    5 6 7 8
    9 10 11 12
*/
function check13(){

  let count = 1; // 카운트(세기) 위한 변수 선언
  for( let row=1; row<=3; row++ ){

    let str = ""
    for(let col = 1 ; col <= 4 ; col++){
      str += count + " ";//반복이 아닌 출력하는 값을 제어
      count++;//count 값을 1 증가
    }
    console.log(str);
  }
  
}

// 1부터 100사이에 입력된 수의 배수가 몇 개 있나 count

 function check14(){
  //입력된 배수
  const input= Number(document.getElementById("input14").value);
  //결과 출력할 span
  const result=document.getElementById("result14");

  //세기 위한 변수 선언(아직 세어보지 않았으므로 0개 부터 시작)
  let count=0;
   for(let num=1; num<100; num++){//1~100반복
   //num이 input의 배수가 맞는 경우
    if(num%input==0){
      count++;//개수를 1 증가시킴

    }

   }
   result.innerText= `${input}의 배수 : ${count}개`;
 }

/* count 이용해서 출력
    1
    12
    123
    1234
    123
    12
    1 
*/
function check15(){
  let count = 0;

  

  for(let row=1; row<=7; row++){

    
    if(row <= 4)  count++;  // 4행 이하일 경우 count 1 증가
    else          count--;  // 4행 초과일 경우 count 1 감소


    let str="";
    for(let col=1 ; col<=count ; col++){
      str += col;
    }
    console.log(str);
  
  }
}

/* while 문 확인 */

function check16(){


  let val; // 변수를 선언만 하기(undefined)
  

  //취소를 누르기 전까지 반복
  //==취소를 누르면 반복하지 않겠다
  while(val !== null){
   
    //!==->값, 자료형이 모두 다른 경우 true
    //===->값, 자료형이 모두 같은 경우 true

    
    val = prompt("입력 후 확인"); //변수에 prompt값 대입
    
    //확인-> 입력한 값
    //취소-> null

    console.log(val);
  }
 
}

/* 메뉴 주문하기 */

function check17(){

  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu= 5000;

  //주문 개수 카운트
  let gCount=0;//김밥
  let rCount=0;//라면
  let dCount=0;//돈까스

  //prompt로 입력한 값을 저장할 변수 선언
  let input;// undefined


  while(input !== null){ // 취소 누르기 전까지 반복
    
    input = prompt("메뉴 번호를 입력하세요 ");
    switch (input){
      case '1' : gCount++; break;
      case '2' : rCount++; break;
      case '3' : dCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력해주세요"); break;
    }

  }
 alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);

 let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
  
 alert(`총 가격: ${sum}`);

}
/* while을 for문 처럼 사용하기 */
function check18(){

  // 1부터 10까지 출력
  let num = 1;
  while( num < 11 ){
    console.log(num);
    num++;
  }

  console.log("------------");
  
  /* 10부터 1까지 1씩 감소(while) */
  let x = 10;
  while( x > 0 ){
    console.log(x);
    x--;
  }


}