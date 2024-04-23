function person(name,age){
  this.name = name;
  this.age = age;
  this.sayHello = function(){
    console.log(`Hello, my name is ${this.name} I'm ${age} years old`);
  };

}
let person1 = new person('안유진',21);
let person2 = new person('장원영',20);

person1.sayHello();
person2.sayHello();
