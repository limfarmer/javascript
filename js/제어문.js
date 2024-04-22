// 조건문 : if, switch, 3항 연산자가 있음 (자바와 동일)
// 반복문 : while, do~while, for, for in, for of 등이 있음(자바와 유사)
let brands = ["애플","구글","페이스북","아마존","삼성전자"];
// for(let i =0; i < brands.length; i++){
//   console.log(brands[i]);
// }
// for-of : 자바의 향상된 for문과 유사
for(let e of brands){
  console.log(e[0]);
}

// for-in : 객체의 프로퍼티를 열거 할 때 사용 
// let person = {
//   fname : "lim",
//   lname : "kevin",
//   group : "kh",
//   age : 30,
// };
// for(let k in person){
//   console.log(person[k]);
// }
