/*
조건문
 - 조건에 따라 다른 문장을 실행하는 명령문
 - if, switch
 */

/*
if문
 - if : 조건이 true일 경우 명령문 실행
 - else : false일 경우 명령문 실행
 - else if : 다중조건을 의미하고, 여러개의
 */

a = 20;
if (a = 10) {
    console.log('첫 번째 블록'); 
}   else if (a = 20) {
    console.log('두 번재 블록');
}   else if (a = 30) {
    console.log('세 번째 블록');
}   else {
    console.log('네 번째 블록');
}

//  if문 연습
//  논리 연산자 사용

//  다중 조건문
let passwordCheck = true;
let userRole = 'lenok';
if (passwordCheck) {
    if (userRole === 'admin') {
        console.log('관리자로 로그인 합니다.')
    }   else if (userRole === 'user') {
        console.log('사용자로 로그인 합니다.')
    }   else (
        console.log('페이지 접근에 제한되었습니다.')
    )
} else {
    console.log('비밀번호를 잘못 입력했거나 존재하지 않는 아이디입니다.')
}

/*
switch문 
 - switch문의 값이 case조건과 일치할 경우 해당 case절의 명령문 수행
 - case절의 명령문을 수행한 후 break를 만나면 switch문을 종료
 - 일치하는 case절이 없으면 default(:)절의 명령문 수행
 */
let subject = 'java';
switch (subject) {
    case 'java':
        console.log('자바스크립트 수업입니다.')
        break;
    case 'case':
        console.log('CSS 수업입니다.')
        break;
    case 'html':
        console.log('HTML 수업입니다.')
        break;
    default:
        console.log('모든 case절과 일치하지 않습니다.')
}

//  switch문 연습
let score = prompt('점수를 입력해 주세요.')
let value = Math.floor(score / 10);
switch (value) {
    case 10:
    case 9:
        console.log('A 학점 입니다.');
        break;
    case 8:
    case 7:
        console.log('B 학점 입니다.');
        break;
    case 6:
    case 5:
        console.log('C 학점 입니다.');
        break;
    default:
        console.log('F 학점 입니다.')
}