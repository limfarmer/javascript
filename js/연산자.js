// 비교연산자
if(1 === '1'){
  console.log('비교 결과 같다');
}else console.log('다름');

// 묵시적형변환 : 숫자형과 문자열 연결 연산자로 처리하면 문자열로 변환
// 자바에선 에러남
let num = 10 + "10";
console.log(num);