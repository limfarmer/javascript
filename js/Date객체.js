// Date 객체이는 날짜 및 시간과 관련 있는 메서드가 정의 되어 있음
const date = new Date(); 
console.log(date); // GMT기준 시간

const date1 = new Date(2024,3,25, 12, 26, 26); // 월,일 은 배열 인덱스값 -1해야됨
console.log(date1);

const date2 = new Date("2024/4/24 11:27:00");
console.log(date2);

let myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth()); // 현재 월 출력
console.log(myDate.getDate()); // 현재 날짜 출력
console.log(myDate.getDay()); // 현재 요일 출력
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력

