/* setTimeout(함수, 지연시간(ms)) */
const btn1 = document.querySelector("#btn1");


btn1.addEventListener("click", ()=>{

    window.setTimeout(()=>{
        console.log("3초 후에 출력된 문자열")
    },3000); //3초 후에 수행 //ex) 몇분 지나면 로그아웃 될 때 사용


    window.setTimeout(()=>{
       console.log("2초")// 3초 수행되는 함수보다 먼저 수행됨
    },2000);


     window.console.log("바로 출력");
}); 


/* [window.]setInterval(함수, 지연시간(ms)) */

const btn2=document.querySelector("#btn2");

btn2.addEventListener("click",(e)=>{
    
    window.setInterval( () => {

      const span = document.querySelector("#box2> span");
      
      //이전 내용 + 1 한 숫자를 다시 내용으로 대입
      span.innerText = Number(span.innerText) +1;
    } , 1000 ); // 1초 마다 수행

   //클릭된 버튼을 비활성화
   
   e.target.disabled = true; //다시 활성화 시키려면 true자리에 false

});

/* clearInterval( Interval ) */

const target3 = document.querySelector("#target3");
const start3 = document.querySelector("#start3");
const stop3 = document.querySelector("#stop3");

let currInterval; //현재 인터벌 저장
// 시작 버튼 클릭 시 0.1초마다 target의 내용을 1씩 증가
start3.addEventListener("click", e=> {
    
    currInterval = setInterval(()=>{
        target3.innerText = Number(target3.innerText) + 1
    } , 100); // 100ms == 0.1s
    
    e.target.disabled = true;// 비활성화
});

//멈춤 버튼 클릭 시
stop3.addEventListener("click",()=>{

     // setInterval()을 제거
    window.clearInterval( currInterval);

    start3.disabled = false;
});


/* 새탭에서 열기 */
const openPopup1= document.querySelector("#openPopup1");

openPopup1.addEventListener("click", () => {
    window.open("23_스톱워치.html");// 새 윈도우로 스톱워치 화면을 열어라

     // <a href="23_스톱워치.html" target="_blank"></a>
     //html에서는 위처럼 a태그로 똑같은 동작을 만들었음
});

  /* 팝업창으로 열기  */
  const openPopup2= document.querySelector("#openPopup2");
 
  openPopup2.addEventListener("click", () => {
    window.open("23_스톱워치.html", "_blank", "popup");//
  });

  /* 팝업창 + 옵션 */
const openPopup3 = document.querySelector("#openPopup3");
 
openPopup3.addEventListener("click", () => {

  let options=[];
  options.push("width=400");
  options.push("height=600");

  /* 팝업창 띄우는 위치를 지정 */
  //단, 메인 모니터에서만 적용됨
  options.push("left=500");
  options.push("top=100");

  window.open("23_스톱워치.html", "_blank", options.toString());
  // 배열명.toString() : 요소,요소,요소""
   //->배열 내 요소를 ,를 구분자로 한 하나의 문자열로 변환
});

/* 팝업창(자식)이 부모창의 값을 읽고/쓰기 */
const openPopup4 = document.querySelector("#openPopup4");

openPopup4.addEventListener("click", () => {
    const options = [];
  
    options.push("width=300");
    options.push("height=300");
    options.push("left=500");
    options.push("top=100");
  
    window.open("22_팝업창.html", "_blank", options.toString());
  });
