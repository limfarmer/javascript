// 정규표현식이란 문자열에 포함된
// 특정 문자 조합을 찾기 위해 사용되는 패턴
let str = "Hello World !! world!!";
const regEx = /World/;
//console.log(regEx.test(str)); // true 문자열 포함 여부 확인
//console.log(str.search(regEx)); // 6 포함된 문자열의 인덱스 반환

// exec() 메소드 : 인수로 전달된 문자열에서 특정 패턴을 검색하여,
// 패턴과 일치하는 문자열 반환

let targetStr = " 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstResult = /가장+/.exec(targetStr);    // 패턴과 일치하는 문자열이 여러 개인 경우
let secondResult = /가장큰+/.exec(targetStr); // 패턴과 일치하는 문자열이 하나도 없는 경우
console.log(firstResult);  //  가장 맨 처음으로 일치하는 문자열이 반환됨.
//console.log(secondResult); // 

// test() 메소드 : true false

let inputNum = "010-3307-2463";
const regex = /\d{3}-\d{4}-\d{4}/;
let rst = regex.test(inputNum);
console.log(rst);

// 이메일 검사하기
let inputEmail = "jks2024@gmail.com";
const regexp_email = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
console.log(regexp_email.test(inputEmail));