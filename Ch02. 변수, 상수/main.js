/*
변수
- 값을 담는 그릇
- 변수에 담긴 값은 언제든 바꿀수 있다.
- 변수를 선언할 때는 let 이라는 키워드, 식별자, 값으로 나뉜다.
- 같은 영역 안에 같은 식별자를 가진 변수는 추가 생성 불가능하다.
*/

let name = "홍길동";

name = "박한별"; //name 변수의 값을 박한별로 변경

console.log(name);


/*
상수
- 변수와 마찬가지로 값을 담지만 할당된 값을 바꿀 수 없다.
- 상수를 선언할 때는 const라는 키워드를 사용한다.
*/
const today = "화요일";
console.log(today);

/*
스코프
- 프로그래밍에서 영역을 말합니다.
- 전역 스코프와 블록 스코프로 나뉜다.

전역 스코프
- 자바스크립트 최상단에 영역이다.
- 전역 스코프에 선언된 변수를 전역 변수라 한다.

블록 스코프
- {}블록으로 묶인 영역이 블록 스코프
- 블록안에 선언된 변수는 블록 안에서만 접근아 가능하다.
- 블록이 달라지면 변수를 다시 선언할 수 있다.
- 부모 변수는 자식 영역에서 사용이 가능하다.
*/

let nameA = "박한별";
let age = 99;
console.log(nameB);

if (true) {
    let nameB = "이한별";


    console.log(nameB);
    console.log(age);
}

/* 식별자 규칙
- 글자, $(달러), _(밑줄)로 시작할 수 있고 숫자로 시작 가능
- 글자, $(달러), _(밑줄), 숫자만 사용할 수 있다.
- 예약어(키워드)는 사용할 수 없다. ex) let const, function 등
*/
let number = 1;
let $number = 1;
let _number = 1;
// let 2number 맨앞 숫자 못 옴
// let function = "abc"; 예약어 사용 불가

/*
네이밍 규칙
- 카멜 케이스
 - 중간 단어의 첫 글자가 대문자이며 낙타의 혹처럼 보인다 해서 카멜 케이스라 불린다.
 ex) ccamelCase

 - 스네이크 케이스
  - 언더바가 들어있는 표현 방식이 뱀처럼 생겼다해서 이렇게 불림
  ex) snake_Case

- 케밥 케이스
 - 케밥 꼬챙이 꽂힌 모습 연상
 ex) kebab_Case

- 파스칼 케이스
 - 카멜 케이스와 유사하나 단어의 시작이 대문자이다.
ex) PascalCase
*/

/*
var 키워드
 - ES6버전 이전에 변수를 선언할 때 사용했다.
 - let이랑 다른점
  - 출력을 변수 선언 전에 가능
  - 변수 선언을 여러번 할 수 있다.
  - 스코프에 영향을 받지 않는다.
  */
 console.log(temp);
 var temp = 1;
 var temp = 2;

 if(true) {
    var temp2 = 3;
 }
 console.log(temp2); //스코프에 영향을 받지 않음

 /*
 호이스팅
 - 코드가 실행될 때 변수나 함수가 최상단에 있는 것으로 간주한다.
 */
hello();
function hello() {
    console.log("hello");
}

