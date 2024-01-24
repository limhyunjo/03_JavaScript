const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");

// #createBtn 버튼 클릭 시
// #lottoBoard에 div.number 요소 45개 생성해서 추가

createBtn.addEventListener("click",()=>{//이벤트 핸들러

    // #lottoBoard 이전 내용 삭제
  lottoBoard.innerHTML = "";
  // 안에 빈칸을 넣어서 이전 내용을 남겨놓지 않음

    
  //div.number 만들어서 추가
   for(let i=1; i<46; i++){

    const number=document.createElement("div");
    number.classList.add("number");//클래스 추가

    number.textContent = i;

     // 만들어진 div.number에 클릭 시 동작 이벤트가 추가되어야 함
     number.addEventListener("click", e => {
     
        // console.log(e.target.textContent);
     //만들어진 요소가 클릭되었을 떄 안의 숫자를 얻어와서 console에 추가
       // 모든 숫자들에 클릭 이벤트 추가됨

      // active 클래스 없으면 -> 추가
      // active 클래스 있으면 -> 제거

      /* 요소.classList.contains(클래스명) : 
      요소에 (클래스명)이 존재하면 true, 아님 false */

      /* if(e.target.classList.contains("active")){
        e.target.classList.remove("active");
      } else{
        e.target.classList.add("active");
      } */ //코드가 너무 길어서 더 효율적인 것을 써보자

      //클릭 전에 화면에 선택된 요소가 5개 이하일 경우 색깔이 바뀌게 한다
      //또는 클릭한 요소에 active 클래스가 있을 경우
      
      const count =document.querySelectorAll(".active").length;
      console.log(count);
      
       

      if(count<=5 || e.target.classList.contains(".active")){
       /* 요소.classList.toggle(클래스명) :
        요소에 (클래스명)이 있으면 제거, 없으면 추가
      */
        //toggle: 하나의 동작에 두개의 버튼이 있다
        e.target.classList.toggle("active");
       }
        else {
            alert("6개 까지만 선택할 수 있습니다");
        }


      });

    lottoBoard.append(number);//화면에 추가됨
   
  }



});