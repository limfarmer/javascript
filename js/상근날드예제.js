let insert = document.getElementsByClassName('insert');
let drink = document.getElementsByClassName('drink');
let btt = document.getElementById('btt');
let rs = document.getElementById("result");
let first;
let sec;
let array = [];
  btt.addEventListener('click',function(){
  for(let i = 0; i < 5; i++){
    array[i] = insert[i].value;
    console.log(array);
  }
  console.log(Number(array[0])+Number(array[1]));
});

