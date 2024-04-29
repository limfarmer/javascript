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

// 템플릿 리터럴 : ES6에서는 백틱(``)으로 문자열에 변수를 포함시킬수 있음
let name = "곰돌이 사육사";
let greeting = `안녕하세요. ${name}님 환영합니다.`;
console.log(greeting);

// 전개 연산자 : 배열이나 객체를 개별요소로 분리해줌
const arr3 = [1,2,3];
const arr4 = [4,5,6];
// ...은 배열을 펼쳐서 넣으라는 의미
const arr5 = [...arr3, ...arr4]; // arr3.concat(arr4)와 같은의미
console.log(arr5); // [1,2,3,4,5,6]

// 객체에서의 전개연산자
const obj1 = {x:1, y:2};
const obj2 = {z:3, w:4};
const obj3 = {...obj1, ...obj2};
const obj4 = {...obj3, w:100}; // 앞 변수 대상객체를 뒤의 값으로 변경
console.log(obj3);
console.log(obj4);

const member = {
  name : '곰돌이 사육사',
  age : 20,
  addr : '서울시 어딘가'
};
const member2 = {...member, addr : '성남시 분당구'};
//member.addr = '경기도'; // 불변성 원칙 위반
console.log(member2);

