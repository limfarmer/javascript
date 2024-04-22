let hour = prompt('시간 입력 : ','');
hour = Number(hour);
let min = prompt('분 입력 : ','');
min = Number(min);
let rsHour;
let calc = (hour*60+min);
calc -= 45;
if(hour == 0 && min < 45){
  rsHour = 23;
}else{
  rsHour = parseInt(calc / 60);
};
let rsMin = calc % 60;
document.write(rsHour,'시',rsMin,'분');

