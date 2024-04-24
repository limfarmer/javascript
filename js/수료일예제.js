const now = new Date();
// getTimezoneOffset 현재 실행중인 환경의 시간대와 UTC와의 차이를 분단위로 반환
// now.getTimezoneOffset() * 60000 ms로 환산
const localTime = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
const Dday = new Date("2024/9/1/09:00:00");
console.log(localTime - Dday);


let rs = (parseInt(((Dday - localTime) / ( 24*60*60*1000)))+1);

let change = document.querySelector('.time');
let dDayOutPut = document.querySelector('.date');
dDayOutPut.append(rs);
function tt(){
    console.log('achange.children.className');
    dDayOutPut.replaceChildren(rs/30);
    dDayOutPut.classList.add("add");
}
function tt2(){
    dDayOutPut.replaceChildren(rs);
    console.log('삭제');
    dDayOutPut.classList.remove("add");
}
let t2 = document.querySelector('date add');
change.addEventListener('click',tt);
t2.addEventListener('click',tt2);
 