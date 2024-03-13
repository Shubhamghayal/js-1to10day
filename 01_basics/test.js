// console.log("im testing");
// const accountId = 14453;
// let accountEmail = "lsdnhovsd@gmail.com";
// var accountPass = "35445";
// accountCity = "lonar";
// let accountState;

// accountId = 212 //not allowed
// accountEmail = "shubham@gmail.com";
// accountPass = "354444";
// accountCity = "lahor";
// console.table([accountEmail,accountPass,accountCity,accountState]);
/*
prefer not to use var
beccause of issue of block scope and functional scope
*/

// Datatypes and ECMA
"use strict"; //treat all js code as newer version

// alert() we are using node js
/*number
bigint
string
boolean
null
undefined
symbol
*/

//object
// console.log(typeof null)

//conversion
// "33">33
// "33abc">NaN
// true>1; false>0

// OPerations //
// let value=3
// let negValue=-value
// console.log(negValue)

// const otherNumber=1123.896617
// console.log(otherNumber.toPrecision(5));

//Dates
// let myDate=new Date();
// console.log(myDate.toJSON());

// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);
// const mySym=Symbol();
// const jsUser={
//     name:"shubham",
//     mySym:"keyy1",
//     age:24,
//     location:"lonar",
//     email:"shubham@gmaol.com",
//     isLoggedIn:false,
//     lastLoginDays:["monday","saturday"]}


// console.log(jsUser.name);

// console.log(jsUser["name"]);
// console.log(jsUser["mySym"]);

// jsUser.age=26;
// console.log(jsUser["age"]);
// Object.freeze(jsUser);
// jsUser.email="jhaufhua@gmail.com";
// console.log(jsUser["email"]);

// jsUser.greeting=function(){
//     console.log("Hello ,Js User ");
// }
// console.log(jsUser.greeting());


///Part 2
//object singletons

// const tinderUser=new Object()//singleton
// //const tinderUser = {} non singleton object

// tinderUser.id="123abc"
// tinderUser.name="sham"
// tinderUser.isLoggedIn= false

// console.log(tinderUser);
// const regularUser={
//     email:"sham@gmail.com",
//     fullname:{
//         username:{
//             firstname:"ayesha"
//         }
//     }
// }
// console.log(regularUser.fullname?.username?.firstname);

// const obj1={ 1:"a",2:"b"}
// const obj2={ 3:"c",4:"d"}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// const course = {
//     coursename:"js in hindi",
//     price :"999",
//     courseInstructor:"hitesh"
// }
// course.courseInstructor
// const{courseInstructor:CI}=course
// console.log(CI)

// {
//     "coursename":"js in hindi",
//     "price" :"999",
//     "price":"hfree"
// }

//functions
// function addtwonum(num1,num2){
//     let total=num1+num2;
//     return total
// }
// const result=addtwonum(8,9);
// // console.log("result",result);


// function loginUserMessage(username){
//     return `${username} just login in`
// }
// console.log(loginUserMessage("hitesh"));

// const chai=function(){
//     let username="sham"
//     console.log(username);
// }
// chai();//cant use this in functions

 
// const addTwoNum=(num1,num2)=>{
//     return num1+num2;
// }
// const addTwoNum=(num1,num2)=>num1+num2

// const addTwoNum=(num1,num2)=>({username:"sham"})
// console.log(addTwoNum())


// (function chai(){
//     console.log("db connennoDNGN");
// })();


// ((name)=>{
//     console.log(`db connected by ${name}`);
// })("sham")


