
// let age=20;
// let seatsLeft=5;

// if (age>=18 && seatsLeft>0){
//     console.log("you can register");

// }
// else{
// //     console.log("you cannot register");
// // }



// // let day="monday";
// // switch(day){
// //     case"Saturday":
// //     console.log("weekend");
// //     break;

// //     case"Sunday":
// //     console.log("weekend");

// //     default:
// //         console.log("weekday");
// // }


// // const events=["Talk","Workshop","Hackathon"];
// // for(const event of events){
// //     console.log(event);
// // }

// // const student={name:"John",age:20,course:"B.Tech"};
// // for(const key in student){
// //     console.log(key,student[key]);
// // }



// //task
// console.log("sam");
// console.log("csbs");
// console.log("111923cw01040");

// let eventName="tech fest";
// console.log(eventName);
// let ticketPrice1=100;
// console.log(ticketPrice1);

// let ticketPrice2=120;
// console.log(ticketPrice2);

// let ticketPrice3=150;
// console.log(ticketPrice3);

// let totalPrice=ticketPrice1+ticketPrice2+ticketPrice3;
// console.log(totalPrice);

// // if(totalPrice>500){
// //     console.log("you cant register");
// // }
// // else{
// //     console.log("you can register");
// // }


// if (totalPrice>0){
//     console.log("its positive");
// }
// else if(totalPrice<0 || totalPrice==0){
//     console.log("its negative or zero");
// }
// else{
//     console.log("not defined");
// }


// let seats=50;
// console.log(seats);



// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// } 


// function greet(){
//     console.log("hello");
// }

// greet();
// greet();


// function greet(name){
//     console.log("hello "+name);
// }
// // greet("sam");
// // greet("noor");

// //arrow  function,default fun,callback ,add and remove items,slice vs splice,search array values,for each,map,filter,reduce,mutating vs non mutating methods,sort reverse,

// //2nd task functions
// function total(price,quantity){
//     console.log("total price:"+ price*quantity);
// }
// total(50,3);

// function greet(name){
//     console.log("hello how are you "+name);
// }
// greet("sam");

// let events=["talk","workshop","hackathon","seminar","sports"];
// console.log(events);
// console.log(events.length);

// let number=[10,20,30,40,50];
// result=number.filter(num=>num>10);
// console.log(result);


// let numbers = [2, 4, 6, 8, 10];
// let result = numbers.map(no => no * 2);
// console.log(result);


// let numbers = [20, 30, 40];

// let total = numbers.reduce((sum, num) => sum + num, 0);

// console.log(total);


// const first=[1,2];
// const second=[3,4];
// const combined=[...first,...second];
// const copied=[...first];
// console.log(combined);
// console.log(copied);




//task3
//1
// let book = {
//     title: "JavaScript Basics",
//     author: "John",
//     price: 500
// };

// book.price = 600;

// console.log(book);

// //2
// let user = {
//     name: "Sam",
//     age: 21,
//     address: {
//         city: "Chennai",
//         state: "Tamil Nadu"
//     }
// };

// console.log(user.address.city);

// //3
// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Headphones", price: 2000 }
// ];

// for (let product of products) {
//     console.log(product.name);
// }

// //4
// let student = {
//     name: "Sam",
//     age: 21,
//     department: "CSE"
// };

// let { name, age } = student;

// console.log(name);
// console.log(age);

// //5
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let copy = [...arr1];
// let combined = [...arr1, ...arr2];

// console.log(copy);
// console.log(combined);

// //6
// function add(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(add(10, 20));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15, 20));

// //7
// let user = {
//     name: "Sam"
// };

// let city = user.address?.city ?? "City not available";

// console.log(city);


//task4:
//1

// let campusName="sa engineering clg";
//  function display(){
//     console.log(campusName);

//  }
//  display()

//  //2
//  if (true) {
//     let a = 10;
//     var b = 20;

//     console.log(a);
//     console.log(b);
// }

// console.log(b);
// console.log(a);

//3a
// console.log(a);
// var a = 10;

// console.log(a);

// //3b
// console.log(b);
// let b = 20;
// console.log(b);


//4

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let counter = makeCounter();

counter();
counter();
counter();
counter();
counter();