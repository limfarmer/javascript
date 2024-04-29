// ES6 : 2015년 발표 
// 가변변수(let)와 불변변수(const)

// 불변성의 원칙 : 재할당하지않는 특성, ES6의 문법은 아니지만 리액트의 핵심 철학
const arr1 = [1,2,3];
//arr1.push(4); // 재할당한것 (사용하면안됨);
//console.log(arr1);
const arr2 = arr1.concat(4); // 이런식으로 새로 만들어야됨

// 화살표 함수 추가 : 간결한 코드 작성시 유리
const add1 = function(x,y){
  return x + y;
}
// 위 함수 표현식의 화살표 함수버전
const add2 = (x,y) => x + y;

