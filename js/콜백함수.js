// 콜백 함수란? 함수의 인자로 다른 함수를 전달하여
// ㄴ> 그 함수가 실행 될 때 호출되는 함수
// 콜백함수는 주로 비동기적인 작업을 처리할 때 많이 사용
// 서버로부터 데이터를 가져오는 작업이 완료 될 때 콜백 함수를 호출
function sing(){
  console.log(`sing`);
}
function dance(){
  console.log(`dance!`);
}
function cry(){
  console.log(`cry`);
}
// function checkMood(mood){
//   if(mood == "good") sing();
//   else if(mood == "soso") dance();
//   else cry();
// }
// checkMood("good");
// checkMood("soso");
// checkMood('cry');

// 위 함수의 콜백함수 버젼
// function checkMoodCallback(mood, goodCall, badCall, notBadCall){
//   if(mood == "good") goodCall();
//    else if(mood == "not bad") notBadCall();
//    else badCall();
// }

function checkMoodCallback(mood, goodCall, badCall, notBadCall){
  if(mood == "good") goodCall();
   else if(mood == "not bad") notBadCall();
   else badCall();
}
checkMoodCallback("not bad", sing, cry, dance);