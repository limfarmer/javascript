document.write("html에서 자바스크립트 동작");
console.log('브라우저 디버깅 창에서 결과 확인');
const a = document.querySelector('.p');
a.addEventListener('click',function(){
  alert('알람');
});