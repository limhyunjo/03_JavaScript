function check1(){
    
    let result=""; /* result 변수 선언 num 값이 그대로 들어가서
     result는 비어있는  문자열로 씀 */
    for(let num=1; num<=5; num++){

        result +=num;
    }
   console.log("result :", result);
}


function check2(){
    for(let num=5; num<10; num++){
        console.log("num:",num);/* for문 내부에 써야지 출력됨 */
    }
    
}

//1부터 30까지 2씩 증가하며 출력
//복합 연산자가 대입하면서 계산해서 더 빠름  
function check3(){

        for( let num=6; num<=30; num +=3){ /* num의 누적값이 2 */
            
            console.log("num:",num);
        }
}

//1부터 10까지 모든 정수의 합 

function sumFn(){

    const start=Number(document.getElementById("start").value);
    const end=Number(document.getElementById("end").value);

    const result=document.getElementById("result");

    let sum="0"/* 결과 값을 저장할 변수를 선언해준다 0으로 해야지
     결과가 그대로 나온다  */
     for(let num=start; num<=end; num++){
        sum+=num;
     }
     result.innerText=sum;
}
