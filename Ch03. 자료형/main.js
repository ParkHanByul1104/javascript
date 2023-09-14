/*
데이터 타입
 - 값의 종류를 의미하고, 기본 타입과 객체 타입으로 나뉜다.
*/

/*
기본 타입
 - 값을 하나만 가지며 원시값이라 함.
 - number(숫자), string(문자열), boolean, null, undefined, symbol

 객체 타입
  - 기본 타입을 제외한 값은 모두 객체 타입이다.
  - Object(객체), Array(배열), Functin(함수), 등 다영한 객체 존재

typeof
 - 피연산자의 데이터 타입을 문자열로 변환한다.
*/

console.log(typeof "안녕");

/*
숫자
 - number 타입이라 한다.
 - 자바나 다른 언어는 정수, 데이터 크기의 따라 키워드가 다양하지만
 자바스크립트는 그냥 숫자만 적으면 된다.

 - 숫자 타입에서 특별한 값
  - Infinity : 양수를 0으로 나눈 경우
  - -Infinity : 음수를 0으로 나눈 경우
  - NaN : 문자열을 나눈 경우
  */
 let number1 = 1;
 const number2 = "안녕" / 0;
 console.log(number2);


 /*
 문자열
  - string 타입이라 한다.
  - 문자열을 표현할 땐 작은따옴표('), 큰따옴표("), 백턱(`) 사용
  - 백턱(`)은 ES6버전에서 도입됨

백턱
 - 여러줄 표현이 가능하다.
 - 템플릿 문자열을 더 편리하게 사용이 가능하다.

템플릿 문자열
 - 값과 문자열을 +기호로 사용해 연결한다.
 - 백턱을 사용하면 더 편리하게 연결된다.
 */
let nameA = '홍길동';
let nameB = "고길동";
let nameC = `이길동`;
console.log(typeof nameA);

// 백턱은 여러줄 표현 가능
let temp1 = `안녕하세요.
반갑습니다.`;
console.log(temp1);

// 템플릿 문자열
let nameD = "박한별";
let age = 99;
console.log("내 이름은" + nameD + "입니다. 나이는" + age + "입니다.");
// 백턱 사용
console.log(`내 이름은 ${nameD}입니다. 나이는 ${age}입니다.`);

/*
이스케이프 표현
 - 일반적인 문자 외에 특수 문자는 이스케이프 표현을 사용한다.
 - \n 줄바꿈
 - \\ 백스페이스
 - \" 큰따옴표
 - \' 작은따옴표
 - \t 탭
 */
console .log('안녕하세요.\t반갑습니다.');

/*
불린 (boolean)
 - true와 false 두 가지 값만 가지는 논리형 데이터 타입이다.
 */
let isTrue = true;
let isFalse = false;
console.log(typeof isFalse);

/*
심볼
 - 유일한 값을 나타내기 위해 ES6버전에서 도인한 데이터 타입이다.
 - 고유한 식별자가 필요할 때 사용한다.
 */
let key1 = Symbol("abc");
let key2 = Symbol("abc");
console.log(key1 == key2); // 심볼값은 서로 다르다.

console.log(key1.description); // 심볼값 출력

/*
null, undefied
 - 둘 다 값이 비어있는 상태
 - null : 값이 없는 상태
 - undefied : 값을 할당하지 않은 상태
 */
let message1 = null; // 값이 빈 상태를 표현
let message2;
console.log(message1);