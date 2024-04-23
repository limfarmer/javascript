// 함수 선언문 : function 키워드로 선언하며 함수이름을 가짐,
// ㄴ> 호이스팅에 영향을 받음
// console.log(sum1);

// function sum(p1,p2){
//   return sum = p1 + p2;
// }
// let sum1 = sum(21,24);


// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅에 영향을 받지 않음
// 익명의 함수로 만드는 방식 : const 변수명 = function {};
// 네이밍 함수로 만드는 방식 : const 변수명 = function 함수명(){};
// ** 일급 객체를 만들때 변수로 함수를 부를때 사용!!
// 익명의 함수를 쓰는 이유는 함수 선언문과 구별하기 위해서이고 표현식에서 
// 이름을 쓰던 안쓰던 변수명으로 호출해야되기 때문에 안쓰는게 더 좋음

const gugu = function(x){
  for(let i = 1; i < 10; i++){
    console.log(`${x} x ${i} = ${x * i}`);
  }
};
gugu(3);

// 화살표 함수
const gugu2 = x => {
  for(let i = 1; i < 10; i++){
    console.log(`${x} x ${i} = ${x * i}`);
  }
};
gugu2(5);

