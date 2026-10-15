
// var : can be re-declared and updated
// var a = 10;
// // a = 20; // update
// var a = 30; // redeclare
// console.log(a);
// {
//     var a =10;  // global scope
//     console.log(a);
// }
// console.log(a);


// let  : variable cannot be re-declared but can be updated
// let b = 20;
// // b = 30;
// let b = 50;
// console.log(b);
// {
//     let a =10;
//     console.log(a);
// }
// console.log(a);

// const : variable neither can be re-declared not uodated
// const c = 10;
// // c = 30;
// const c = 50;

// console.log(c);

// Operators : are symbols used to perform operation on operands
// 1. Arithmetic Operators : + - / * %(modulo)

// let a = 10;
// let b = 5;
// console.log(a/b);  // 2 ( quotient )
// console.log(a%b); // 0 ( remainder )

// unary operator : there is only one operand
// let a = 10;
// console.log(a++);  // post increment  
// console.log(++a); // pre increment

// // assignment operator : to assign a value
// z = 10;
// z+=10;  // z = z+10;
// console.log(z);

// // comparison operator : < > <= >= != == ====
// let c = 10;   // int
// let d ="10";  // string
// console.log(c == d);
// console.log(c === d);  // strict type comparison : we get false because datatype is not same

// logical operator
// AND : gives true if all conditions are true (&)

// let x = 10;
// let y= 20;
// let e = 30;
// console.log(x>y && y<e);

// OR: gives true even if one of the conndition is true

// let x = 10;
// let y= 20;
// let e = 30;
// console.log(x>y || y<e);

// difference null and undefined
// let z = null;  // is an empty value
// console.log(z);

// let a;  // variable is declared but the value is not assigned yet
// console.log(a);


// // conditional statement
// let age = 20;
// if ( age >=18){
//     console.log("You are eligible to cast vote");
// } else {
//     console.log("You are not eligible to cast vote");
// }


// // alert("Hello World");

// // taking input from user
// let num = prompt("Enter a number");
// console.log(num);

// For loop
// for(let i=1; i<=10; i++){
//     console.log("hello world")
// }

// to print only even number between 1 to 20.
// for(let i=1 ; i<=20; i+=2){
//     console.log(i);
// }

// for(let i=1; i<=20; i++){
// if(i%2 ==0){
//     console.log(i);
// }
// }

// while loop

// let i = 1;
// while(i<=5){
//     console.log("Hello World");
//     i++;
// }

// console.log('Out of loop')

// let luckyNumber = 7;
// let guess =0;

// while(guess != luckyNumber){
//     guess = Number(prompt("Guess the lucky number between 1-20"));

//     if(guess == luckyNumber){
//         alert("Congratulations you are winner");
//     } else {
//        alert("try Again")
//     }
// }

// array
// let fruits = ["Apple", "Banana", "Mango", "Watermelon", "Guava"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for...of : values
// for(let fruit of fruits){
//     console.log(fruit);
// }

// for(let fruit in fruits){
//     console.log(fruit);
// }
// for.. in : keys

// let student = {
//     name : "Aisha",
//     id : 2,
//     course : "JavaScript"
// }

// for(let key in student){
//     console.log(key + " : " + student[key]);
// }


// let num = [1, 2, 3, 4];

// console.log(fruits.concat(num));

// console.log(fruits);
// // fruits.push("Strawberry");
// // console.log(fruits);
// // console.log(fruits.pop());
// // console.log(fruits);
// // console.log(fruits.toString());
// fruits.unshift("Strawberry");
// console.log(fruits);



// let fruits = ["Apple", "Banana", "Mango", "Watermelon", "Guava"];
// console.log(fruits);
// console.log(fruits.slice(1,3));  // the value of last index will not be included
// console.log(fruits);

// delete 
// fruits.splice(1,2);
// console.log(fruits);

// add
// fruits.splice(3, 0, "Orange");
// console.log(fruits);

// replace
// fruits.splice(3, 1, "Orange");
// console.log(fruits);


// function
// function sum(a , b){
//     return a+b;
// }

// const arrowSum = (a, b) => {
//     console.log(a+b);
// }

// arrowSum(3, 4);


// create a function using "function" keyword that takes a String as an argument & returns the number of
// vowels in the String

// Aisha

// create an arrow function to perform the same task

// window.console.log("hello world");

// window.alert("Hello")

// accessing element
// let header = document.getElementById("heading");
// console.log(header);

// let para1 = document.getElementsByClassName("para");
// console.log(para1);

// let btn = document.getElementsByTagName("button");


// query Selector
// let firstEl = document.querySelector("p");
// console.log(firstEl);

// let allEl = document.querySelectorAll("p");
// console.log(allEl);


// let div = document.querySelector("div");
// console.log(div);
// properties


// add element
// node.append(el) : adds at the end of node(inside)
//node.prepend(el) : adds at the start of node (inside)
//node.before(el) : adds before the node(outside)
// node.after(el) : adds after the node (outside)

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me"
// console.log(newBtn);

// let div= document.querySelector("div");
// div.after(newBtn);


//classList


// Event : the change in the state of an object
// types of events : Mouse events, keyboard events, form events

// handle events through functions
// let btn2 = document.querySelector("#btn2");

// btn2.onclick = () => {
//     console.log("HANDLER 1");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// btn2.onclick = () => {
//     console.log("HANDLER 2");  // handler 2 will be printed as it will override the previous eveent handling
// };

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("You are inside the box")
// }


// event listener

//syntax : node.addEventListener( event, callback)


// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     console.log("Button was clicked - HANDLER 1")
// })

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - HANDLER 2")
// })

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - HANDLER 3")
// })

// toggle button

// let btn = document.querySelector("button");
// let body = document.querySelector("body");

// let currMode = "light";

// btn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         // document.querySelector("body").style.backgroundColor = "black"
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//                 // document.querySelector("body").style.backgroundColor = "white"
//                 body.classList.add("light");
//                 body.classList.remove("dark");

//     }
//   console.log(currMode);
// })

// prototypes in JS : an entity having state and behaviour[properties and methods]
// set prototype : __proto__

// const student = {
//     fullName : "Aisha Siddique",
//     marks : 94.4,

//     prinMarks : function () {
//         console.log("marks : ", this.marks)
//     }
// }



// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const amit = {
//     salary : 50000,
// };

// const chhavi = {
//     salary : 55000,
// };

// amit.__proto__ = employee;
// chhavi.__proto__ = employee;

// callbacks, promises and async

// asynchronous and synchronous programming
// synchronous : line by line by execution , code runs in a particular sequence of instruction given
// let a = 10;
// let b= 20;
// console.log(a+b);
// console.log("one");
// console.log("two");
// console.log("three");

// asynchronous : Due to synchronous programming , sometimes imp instructions get blocked due to some previous instruction
// which can cause a delay in the UI. Asyncronous code execution allows to execute next instructions immediately and doesn't block the flow
// console.log("download a file");  // 3 sec
// console.log("listening a music");


// function hello(){
//     console.log("hello world")
// }

// console.log("one");
// console.log("two");
// setTimeout( () => {
//     console.log("downloading a file");
// }, 3000);

// console.log("three");
// console.log("four");

// callbacks : a callback function is a function passed as an argument to another function
// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sum){

// }


// callback hell : nested callback stacked below one another forming a pyramid structure[pyramid of doom]

// if(){
//     if(){

//     }else {

//     }
// }else {

// }

// for(){
//     for(){

//     }
// }

// function getData(dataId, getNextData){
//    // 2s
//    setTimeout( () => {
//      console.log("data : ", dataId);
//      if(getNextData){
//         getNextData();
//      }
//    }, 2000)
// }

// getData(1, ()=> {
//     console.log("getting data2...")
//     getData(2, ()=> {
//             console.log("getting data3...")
//         getData(3, () => {
//                 console.log("getting data 4...")
//             getData(4, () => {
//                     console.log("getting data 5...")
//                     getData(5, () => {
//                         console.log("getting data 6.")
//                     })
//             });
//         })
//     })
// });
// callback hell : style of programming becomes difficult to understand and manage
// the solution to callback hell is promises

// promises : is for "eventual" completion of task, promise is an object
// 3 states of promise : fullfilled, rejected, pending

// syntax : let promise = new promise ( (resolve, reject) => {...})

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve(123);
//     reject(" some error");
// });


// example of promise
// function getData(dataId, getNextData){
//    return new Promise ((resolve, reject) => {
//      setTimeout( () => {
//      console.log("data : ", dataId);
//      resolve("success");
//      if(getNextData){
//         getNextData();
//      }
//    }, 4000)

//    })
  
// }

// handle promise : .then() & .catch()
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("Succes");
//         reject("some error")

//     })
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled")
// });

// promise.catch(() => {
//     console.log("rejected")
// })

// promse chain

// function asyncFunc(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data")
//             resolve("success")
//         }, 2000)
//     });
// }

// console.log("fetching data 1....");
// asynFunc().then((res) => {
//     console.log(res);
// });

// console.log("fetching data 2 ...")
// asynFunc().then((res) => {
//     console.log(res);
// });


// promise chain

// function getData(dataId, getNextData){
//   return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data : ", dataId)
//             resolve("success")
//         }, 2000)
//     });
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })

// getData(1)
// .then((res) =>{
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//     return getData(4);
// })


// async-await
// async function always returns a promise
// await pauses the exexution of its surrounding async function until the promise is settled
function getData(dataId, getNextData){
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", dataId)
            resolve("success")
        }, 2000)
    });
}


async function getAlldata(){
    await getData(1);
    console.log("fetching data 2 ....")
    await getData(2);
     console.log("fetching data 3 ....")
    await getData(3);
     console.log("fetching data 4 ....")
    await getData(4);
}