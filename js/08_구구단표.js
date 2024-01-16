//단 제목 만들기

function createTable(){
    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);
    const theadRow= Number(document.getElementById("thead-row").value);
    
    const tbody=document.getElementById("tbody");
   
    theadRow.innerHTML="";//이전 내용 삭제
   
    for(let dan= start; dan <= end; dan++){

        //요소 내부에 dan을 추가

        theadRow.innerHTML += `<th>${dan}</th>`;
    }
 //구구단 내용


 tbody.innerHTML ="";
//곱해지는 수(또는 n번째 줄)
for(let num=1; num <= 9; num++){/* 한줄에 들어가는 태그 */
  
    let str ="<tr>";
    for(let dan=start; dan <=end; dan++){
        str += `<td>${dan}x ${num}=${dan*num}</td>`;
    }

    str+= "</tr>"
  
 }
}


