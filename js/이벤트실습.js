let detailBtt = document.querySelector(".cheezeLyricsBtt");
let detail = document.querySelector(".cheezeLyrics");
function openLyricsBlock(){
  detailBtt.style.display = "none";
  detail.style.display = "inline-block";
}
function closeLyricsBlock(){
  detailBtt.style.display = "inline-block";
  detail.style.display = "none";
}
// 경섭씨가 수정한 버전 :  const로 변수 선언후 람다식으로 함수 대입
// let detailBtt = document.querySelector(".cheezeLyricsBtt");
// let detail = document.querySelector(".cheezeLyrics");
// const openLyricsBlock = () =>{
//   detailBtt.style.display = "none";
//   detail.style.display = "inline-block";
// }
// const closeLyricsBlock = ()=>{
//   detailBtt.style.display = "inline-block";
//   detail.style.display = "none";
// }