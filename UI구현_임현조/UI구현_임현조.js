
/*
[기능]
1) 번호 클릭 시 번호 위에 클릭한 번호가 누적 되서 출력되도록 함


2) "초기화" 버튼 클릭 시 번호 위에 누적된 클릭한 번호를 지움


3) "추가" 버튼 클릭 시 오른쪽 "전화 번호 목록"에 요소 추가 후 
번호 위에 누적된 클릭한 번호를 지움


(추가되는 요소 구성)
- 번호 위에 누적된 클릭한 번호
- 즐겨찾기 버튼 ☆
- 삭제 버튼 X (×)


4) 삭제 버튼 클릭 시 해당 줄을 모두 삭제


5) 즐겨찾기 버튼 클릭 시
- ☆ -> ★ 로 변경
- ★의 글자 색을 orange로 변경
- 앞에 작성된 번호의 글자 색을 red로 변경
 */
//-------------------------------------------------------------------



const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const pushBtn      = document.querySelector("#pushBtn");
const recordContainer = document.querySelector("#recordContainer");
const display         = document.querySelector("#display");

for(let item of numbers){
  item.addEventListener("click", e => {
   
    result.textContent += e.target.textContent;
    
  }); 
}
/* 초기화 버튼 */
document.querySelector("#resetBtn").addEventListener("click", () => {
    result.textContent = "";
});
  
//--------------------


//---------------------------------------------------------------------------------

  //번호 추가할 때 새로운 추가
/* recordBtn 클릭 시 */
pushBtn.addEventListener("click", () => {
   
  
    const li = document.createElement("li");
    
    li.innerText = result.innerText;

    result.textContent = "";
    // #recordContainer의 첫 번째 자식으로 li 추가
    recordContainer.append(li);

    /* "추가" 버튼 클릭 시 오른쪽 "전화 번호 목록"에 요소 추가 후 
    번호 위에 누적된 클릭한 번호를 지움 */



    /*li 요소가 추가?*/
});


   
 