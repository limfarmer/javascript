// 표준 내장객체란? 자바스크립트에서 개발의 편의를 위해 미리 제공하는 API
// 문자열을 다루는 String 객체
const pw = "12345678";
if(pw.length < 8){
  // console.log(`비밀번호는 최소 8자리 이상이어야해`);
}
// 특정 문자열 포함 여부 확인 includes : 포함되어있으면 true 반환
const email = "test!naver.com";
//if(!email.includes('@')) console.log(`올바른 이베일 형식이 아닙니다.`);

// indexof() : 대상 문자열과 일치하는 첫 번째 문자의 인덱스를 반환
//if(email.indexOf('@') == -1) console.log(`올바른 이베일 형식이 아닙니다.`);

// slice() : 시작 위치와 종료 위치를 주면 해당 문자열을 잘라서 반환
let str = 'Apple, Banana, Kiwi';
let resp = str.slice(7,13); // Banana
console.log(resp);

// substring() : slice함수와 동일하나 매개변수에 음수를 혀용하지 않는다.

console.log(str.substring(7,13));

// replace() : 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수
let str1 = "지구오락실, 이은지, 안유진, 미미, 이영지";
let resp2 = str1.replace("이은지","나영석");
console.log(resp2);

// replaceAll() : 대상 문자열 내의 모든 문자열을 지정한 문자열로 바꾸는 함수
let resp3 = str1.replaceAll('이','김');
console.log(resp3);

// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
let text1 = '헬로';
let text2 = '월드';
let text3 =  text1.concat(" ", text2);
console.log(text3);
let text4 = '헬로';
text4 += " " + "월드";
console.log(text4);

// Number 객체 : 숫자와 관련된 작업을 할 때 사용되는 메소드
console.log(Number.parseFloat("12"));
console.log(Number.parseFloat("12.34"));
console.log(Number.parseFloat("12.34곰돌이"));
console.log(Number.parseFloat("곰돌이사육사12.34"));
console.log(Number.parseInt("12"));
console.log(Number.parseInt("12.34"));
console.log(Number.parseInst("12.34곰돌이"));
console.log(Number.parseInt("곰돌이사육사12.34"));

