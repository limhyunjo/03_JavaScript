
/* /// 버튼 클릭 시 결과 초기화/
//숫자 10개 동일한 이벤트 for문 이후
//클릭 시 숫자 얻어오기

const result=document.querySelector("#result");
const numbers= document.querySelectorAll(".number");//요소를 배열로 가져옴 하나씩 꺼내쓰려면?
//안에 숫자들을 클릭 시 기록


 
for(let item of numbers){// 한바퀴 돌 때마다 한 개씩 꺼내옴
  
  item.addEventListener("click",e=>{
   
    if(result.textContent.length==10){
        alert("10글자 까지만 입력 가능");
        
     } return;//열 글자 누르면 작동이 멈춤
      
     console.log(e.target.textContent);
     result.textContent += e.target.textContent; //가져온 내용이 누적되도록 함
  });
 
     
}
//가져온 결과에 누적된 숫자들을 넣기

//reset버튼 누르면 결과값이 초기화
/* 초기화 버튼 */
/* document.querySelector("#reset").addEventListener("click", () => {
    result.textContent = "";// 결과가 출력되는 span 태그를 빈칸
  }); */ 
  //위는 설명이랑 같이 쓴거 나중에 정리하면서 지워도 됨
  
//--------------------------------------------------------------------------------
  const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");

for(let item of numbers){
  item.addEventListener("click", e => {

    if(result.textContent.length == 10){
      alert("10글자 까지만 입력 가능");
      return;
    } 

    result.textContent += e.target.textContent;
  }); 
}

/* 초기화 버튼 */
document.querySelector("#resetBtn").addEventListener("click", () => {
  result.textContent = "";
});

