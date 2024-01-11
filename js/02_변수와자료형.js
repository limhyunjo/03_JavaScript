/* console.log(값) */

//브라우저 콘솔에 괄호() 내부의 값을 기록(출력)

console.log(1234)


console.log("문자열은 양쪽에 쌍따옴표를 작성해야 한다!")
/* 프로그래밍 언어에서 보통 " "의 의미는 문자열을 의미한다 */

console.log('JS는 홑따옴표도 문자열로 취급한다!')

//--------------------------------------------
/* 변수 선언 */
//메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
//작성법: 변수종류 변수명;

var number1;

/* 변수에 값 대입 */
//선언된 변수에 값을 대입하는 것
//작성법 : 변수명= 값;

number1= 10;
// 대입 연산자(=)
// A =B; ->B라는 값을 A변수에 대입

/* 콘솔에 number1 값 출력하기 */

console.log(number1);

/* 변수 선언 + 대입 */

var number2 = 20;
/* 오른쪽 값이 왼쪽에 대입됨 */

console.log(number2);

/* number1, number2의 합 출력하기 */
console.log(number1, number2); //30

/* 변수에 대입한 값 변경하기 */
number1=300;
//number1에 300 대입하고 기존 값 10을 덮어 씀 -이전 값은 사라짐

number2=400;

/* 변경된 두 변수의 값 출력 */

/* 1) 문자열+문자열/숫자/변수 == 이어쓰기*/
console.log("number1의 값 : "+ number1);
console.log("number2의 값 : "+ number2);

/* 2) 괄호 내부에 , 를 작성해 각각의 값을 독립적으로 출력하기 */
console.log("number1 : ",number1, " / number2 : ", number2 );


//----------------------------------------------------

/* var, let, const 의 차이점 */

//1.var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능)

//         -> 먼저 선언된 변수가 나중에 선언된 변수에 덮어 씌어짐

var meun = "삽겹살";
console.log("menu ;", menu);
/* clg 엔터로 자동완성 */
var menu = "초밥";
console.log("menu : ", menu);
/* 변수명이 중복되어 덮어쓰기되면
이전에 선언 해놓은 변수를 쓸 수 없게 되는 문제가 생김
(나중에 쓸려고 했는데 나도 모르게 지워져있음) */
//------------------------------------------------------


// 2. let(변수, var의 변수명 중복 문제 해결,
// 많이 씀 중복되면 코드 오류로 떠서 알 수 있음)/

let number3=25;
// 변수명 중복 오류 발생!
// let number3=500;/* number3 를 다시 선언할 수 없습니다. */
number3=500;//기존 변수 number3에 새로운 값만 대입

console.log("number3 : ", number3);
//--------------------------------------------------------

//3.const (상수, constant, 항[상] 같은 [수])
//한번 값이 대입되면 새로운 값을 대입할 수 없다

const PI = 3.141592;
//PI =1.23;// Uncaught TypeError: Assignment to constant variable.
//상수에 값 대입 못하는데 새로운 값이 대입되었다

console.log("PI : ", PI);

//------------------------------------------------------------
/* JS자료형 확인하기 */

/* typeof 연산자 : 변수나 값의 자료형을 출력하는 연산자 */

/* undefined : 정의되지 않은 변수/ 아직 값이 대입되지 않아 타입 정의 못함 */

let undef; // 변수 선언

console.log("undef : ", undef, typeof undef);/* 자료형태가 보이지 않음 */

/* string(문자열) : "" 또는 '' 내부에 작성된 값 */

const name = "홍길동"; //쌍따옴표
console.log ("name :",name, typeof name)

const phone ='01012312345'//홑따옴표
console.log("phone : ", phone, typeof phone);

const gender ='M';//한 글자만 작성해도 문자열(string)
//자바에서는 다르게 캐릭터로 취급 
console.log("gender : ", gender, typeof gender);

/* number(정수, 실수, 양수, 음수, 0 등 모든 숫자) */
const age =25; /* age를 25로 저장하겠다 */
const height = 178.9;

console.log("age:",age,typeof age) /* age 복사 해놓고 쓰면 편함 */
console.log("height : ", height,typeof height );

/* boolean (논리 값 true / false) */
const isTrue = true;
const isFalse= false;
/* [카멜 표기법(Camel Case)]
문장, 여러 단어를 변수명으로 작성할 때 이어지는 첫 번째 단어를 대문자로 작성
 ex) user name  => userName */

console.log("isTrue : ", isTrue, typeof isTrue);
console.log("isFalse : ", isFalse, typeof isFalse);

/* object (객체) */
//쉬운 버전 설명 (값을 여러 개 저장할 수 있는 형태)

//1) 배열(array) : 여러 값이 나열되어 있는 것의 묶음/* 콘솔에 뜸 */
const numbers =[10, 20, 30];/* 따로 써서 적용이 안되는 것을[]로 묶음 */
console.log("numbers : ", numbers, typeof numbers);
/* 10진수는 0부터 센다 */ 
console.log("numbers 배열 값 중 0번째 : ", numbers[0], typeof numbers[0])
console.log("numbers 배열 값 중 1번째 : ", numbers[1], typeof numbers[1])
console.log("numbers 배열 값 중 2번째 : ", numbers[2], typeof numbers[2])
//자료 타입이 numbers에서 하나만 선택해서 number표시됨
// /* 숫자(numbers[0])가 들어가면 number이고 
// 문자만(numbers) 들어가면 object객체가 됨 */

//2) JS객체(Object)
//값을 K:V (Map) 형식으로 여러 개 저장하는 형태
//-> { K:V , K:V , K:V } = 변수가 3개 들어있음 컴퓨터가 버티는 한 계속 넣을 수 있음

//K(key): 값을 구분하는 이름(변수명 비슷한 것)
//V(value):K에 대응되는 값 (변수에 대입되는 값과 비슷한 것)

const user = { id : "user01", pw : "pass01", userName : "김길동"  };

console.log("user : ", user, typeof user);

/* 객체에 존재하는 값 하나씩 얻어오기 */

//방법1:변수명 ['key']
console.log("user['id'] : ", user['id'], typeof user['id']);
console.log("user['pw'] : ", user['pw'], typeof user['pw']);
console.log("user['userName'] : ", user['userName'], typeof user['userName']);

//방법2 :변수명.key
console.log(user.id, user.pw, user.userName );

/* 함수(function) */

//[작성법]
//const 변수명= function(){}; /* 이렇게 쓰는게 요즘 트랜드 */
//function internalFn()이 뒤집힌 형태-> const internalFn= function(){};
// (변수명 == 함수명) 

const sumFn =function(a,b){ return a+b;} /* 호출한 함수를 돌려보냄 */

console.log(typeof sumFn);// function
console.log( sumFn(3,5) ); // 함수 호출(기능 수행)
