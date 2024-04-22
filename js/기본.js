// js는 데이터 타입을 지정하지 않고 값이 대입 될 때 형이 
// 결정되는 동적 타입의 언어
// 변수와 상수를 결정하는 형은 var, const, let이 있음

// 변수는 값을 여러번 대입 할 수 있음 : let, var

// let x = 10;
// console.log('x의 값은 : ',x); // 20

// var y = 20;
// y = 30;
// console.log('y의 값은 : ', y);

// 데이터 타입 
// js는 동적 타입의 언어이지만 내부적으로 데이터 타입이 존재
// 원시 타입(할당 받은 공간에 값이 대입)
// 객체 타입(주소값을 가리킴)이 존재

// js에서 문자열을 표시하는 방법 : '',"",``
// ``(백틱)은 ES6에서 추가된 문법이고 `${변수 또는 코드}`를 포함 할 수 있음

let str = "안녕하다.\n" + ' 자바스크립트 배운다.\t\t' + `백틱도 문자열 가능`;
console.log(str);

// 탬플릿 문자열 : ES6에서 추가된 문자열을 정의하는 방법으로 백틱이라고 부름
let dan = 3;
let gugu = 8;
console.log(`${dan} 곱하기 ${gugu}은 ${dan * gugu}이다. `);

// 숫자형(Number) : js는 정수와 실수를 구분하지 않고 숫자형으로 취급
let num1 = 10;
let num2 = 0.1;
console.log(num1 + num2);

console.log(0.1+ 0.2);

 // toString() : 숫자형 데이터를 문자형 데이터로 변환해주는 함수
 let x = 123;
 console.log(typeof x.toString());

 // 논리형 : true or false 구분
 let age = 10;
 let isAdult = (age > 18) ? true : false;
 if(isAdult)
 console.log('성인!');
else console.log('애기');

// undefiend :
let empty;// js는 값이 될 떄 형이 결정나고 값이 대입되지 않으면 undifined
console.log(empty);

// 객체 : 자바스크립트는 기본 자료형을 제외하고 모든 자료형이 객체이다
// 배열
let score = [80,90,100,70];
console.log(score[2]);
let array2 = ["아이브", "안유진","장원영",20,true,[100,99,88]];
console.log(array2[1][1]);

// 객체 리터럴(자바의 Map과 조금 유사)
let 스코어 = {
  kor : 80,
  eng : 90,
  mat : 56,
  scn : 99,
};
console.log(스코어.mat);

// typeof : 데이터 형을 확인하기 위해 사용
// toSring() : 문자열로 변환하는 메소드
