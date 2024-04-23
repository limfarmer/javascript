// 클로저란? 함수가 해당 함수의 스코프 외부에 있는
// ㄴ> 변수에 접근할 수 있는 메커니즘

function counter(){
  let cnt = 0;
  let increment = function(){
      cnt++;
      console.log(cnt);
    }
    let decrement = function(){
      cnt--;
      console.log(cnt);
    }
  return {
    increment,
    decrement
  }
};
let myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
counter().increment();
