/*
배열
 - 값과 인덱스로 창조돼 정렬은 집합이다.
 - index는 배열의 위치를 의미한다.
 - 자바스크립트에서는 배열의 값은 서로 타입이 다를 수도 있고
  비어있을 수도 있다.
*/

/*
배열 생성
 - 리터럴 표기법, 생성자 표기법
 */
//  리터럴 표기법
let fruit = ['사과', '망고', '딸기'];
//  생성자 표기법
// let fruit = new Array('사과', '망고', '딸기');
console.log(fruit);

/*
배열 접근
 - 대괄호 []를 통해 배열안의 값에 접근할 수 있다.
 - index는 0부터 시작한다.
 */
console.log(fruit[0]);
fruit[1] = '포도';
console.log(fruit[1]);

/*
배열에서 자주 쓰이는 속성 및 메서드
 - length : 배열의 길이
 - push : 배열의 끝에 항목 추가하기
 - pop : 배열 끝에 항목 제거하기
 - unshift : 배열 앞에 항목 추가하기
 - shift : 배열 앞에 항목 제거하기
 - forEach : 배열의 항목을 순환하며 처리하기
 - splice : 인덱스 위치에 있는 항목 제거하기
 */
//  length
console.log(fruit.legth);

//  push
// fruit.push('오렌지');
// fruit.push('레몬');
// console.log(fruit);

//  pop 
// fruit.pop();
// console.log(fruit);

//  unshift
// fruit.unshift('포도');
// console.log(fruit);

//  shift
fruit.shift();
console.log(fruit);

// forEach (값, index, 배열)
fruit.forEach(function (item, index, array) {
    console.log(item, index, array);
})

//  indexOf
let index = fruit.indexOf('사과');
console.log(index);

//  splice (앞에값 부터, 몇 개를 제거할 건지)
fruit.slice(0,1);
console.log(fruit);

/*
구조 분해 할당
 - 배열이나 객체의 속성값을 개별 변수에 담을 수 있게 하는 표현식이다.
 */
// let [apple, banana, strawberry] = fruit;
let [apple, ...other] = fruit
console.log(apple);
console.log(other);

/*
전개 구문 (spread syntax)

*/