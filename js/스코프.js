// 스코프 : 변수나 함수가 영향을 미치는 범위
// 전역 스코프 : 함수 외부에 선언되어 파일 전체에 영향을 줌
// 가급적 피하기

// let a = 10;
// function sum(x){
//   console.log(`함수 내부 : ${a + x}`);
// }
// sum(10);
// console.log(`함수 외부 : ${a}`);

// 지역 스코프 : 
// function sum(){
//   console.log(`함수 내부 ${a}`);
//   var a = 10;
// }
// sum();
//console.log(`함수 외부 ${a}`);

// 블록 스코프 : 자바스크립트는 원래 함수 스코프를 따르는 언어 였지만,
// ES6에서 블록 스코프를 지원하는 let, const가 추가됨
let a = 10;
{
  let b =20;
  console.log(`블록 내부 ${a}`);
  console.log(`블록 내부 ${b}`);
}
console.log(`블록 내부 ${a}`);
console.log(`블록 내부 ${b}`);