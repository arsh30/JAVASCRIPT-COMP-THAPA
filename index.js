// Why JS?
// sol) IT imporoves the User experience from converting static web page into dynamic

// How website Frontend Works (client side) ?

// sol) We use 3 things ie HTML,CSS,JS
// Html -> Hyper text markup language. It describe the structure of the web Page
// Css -> Cascading styling Sheet. means it provides styling to our html element & It describe how html element displayed on screen
// Js -> It provides logic to the website and it convert static web Page into dynamic webpage.
//       It is programming Language

// To run the file: node fileName.js, to open terminal type: ctrl + backtick

// Console -> we can do anything in console like addition multiplication subtraction divide
// and logical operations like >, <

// console.log("Hello World"); -> to display

/**** Section 1 or 3) Values and Variables in JS ******/

// var myName = "Arshdeep"; // var -> It is variable or dataType, myName -> it is Varibale 'Name' ,
//                         // "Arshdeep" -> It is Value
// var myAge = 26;
// console.log(myName);
// console.log(myAge);

// RULES TO DECLARE NAME OF VARIABLE
// 1.  The first character must be a letter, underscore or an dollar ($). You can not use Number as first character
// 2. Rest of the variable can use any Number but not add space. eg: var my Age = 25; //Error
// 3. It is Case Sensitive means small and capital letter both are different
// 4. special character are also not allowed

// Challenge time: 1
// var _myName = "Arsh"; // correct
// var _1__myName = "Bahadur"; // correct
// var 1myName = "Thapa";  // wrong
// var $myName = "Arshdeep"; // correct
// var _my name = "Arsh";  // wrong space does not allow

/***** Section 2)  Data Types in JS ****/

// 5 Data types are in JS
// 1. undefined
// 2. boolean
// 3. Number
// 4. String
// 5. BigInt

// Data Type -> jab hum value assign krte hai vo konse type ki hai ie DataType
// we can check by using "typeof" operator

// typeof Method 1

// var name = "Arsh";  //String
// console.log(typeof name);

// var Age = 22;  //Number
// console.log(Age, typeof Age);

// var amIArsh = true;  // Boolean - true or false
// console.log(amIArsh, typeof amIArsh);

// challenge 2: Data Type Practice
// console.log(10 + "20");  // number + string = string concat; output - 1020
// console.log(9 - "5"); // number - string => number ; op - 4
// console.log("Java " + "script"); // String + string => string concat => op Javascript
// console.log("Vinod " - "Thapa"); // string - string => op: Nan
// console.log(true + true); // boolean + boolean => 1 is true , 0 is false => op 2
// console.log(true + false); // op - 1
// console.log(false + true); // op - 1
// console.log(false - true); // op - -1

// 1. Interview ques) Diff between null and undefined
// sol) A) null -> means we assign null value to the variable.And it is Object means reference type variable
// eg:              var useLess = null;
//                  console.log(useLess, typeof useLess); // data type is object
//      B) undefined -> means we only initialise the variable and not assigning any value
//       ie undefined

// 2. Interview Ques) what is Nan?
// sol) It is property of global Object, when we subtract two String it gives NaN,
// NaN -> Not a Number

// isNan() Method 2
// -> It gives false if the number is present, it is mostly used in phone validation
// and it gives true for all Other type of values except numbers

// var phone = 9876543210;
// var name = "Arsh";
// console.log(isNaN(phone)); // false
// console.log(isNaN(name));// op true

// phone validation eg: if (isNaN(name)) {
//     alert("please enter valid number")
// } else {
//     alert("non");
// }

// challenge 3.
// console.log(NaN === NaN); false // Main Reason : Not a Number is a property of global object na koi value hai na koi data type
// console.log(Number.NaN === NaN); //op false coz kis cheez ka not a number
// console.log(isNaN(NaN)); // op true
// console.log(isNaN(Number.NaN)); // true Number ke andr NaN property exist krti hai, means koi number vali value nahi thi
// console.log(Number.isNaN(NaN)); // true because yeh number nahi h

/****** Section 3 Expressions and Operator *****/

// console.log(5 + 20); // 5 & 20 -> operands, + -> operator
// 5 + 20 => whole is Expersion, combination of oeprator and  operands

/*
    Types of Operator
    1. Assignment operator (=)
    2. Arithmatic Operator
    3. Comparision Operator
    4. Logical Operator
    5. String Operator
    6. Conditonaly (Ternary) Operator
*/

// 1. Assignment Operator (=)
// It assign a value to its left operand

// var x = 5;
// var y = 5;

// 2. Arithmatic Ooperator (+,-,/,*)
// It takes numerical value and return a single numerical value

// console.log(3 + 3);
// console.log(10 - 5);
// console.log(20 / 5); // basic divide
// console.log(5 * 6);
// console.log("Remainder Operator: " + 27 % 4); // modulus operator it gives the remainder

// Increment Operator and Decrement Operator
// operator : x++ or ++x  or x-- or --x
// Increment oeprator:
// (x++) postfix increment -> means pehle pura expression evaluate hoga then value jo vo increment hogi
//                            original value jo hai vo incrment hoti hai
// (++x) prefix incrment -> means pehle jo value hai vo increment hojegi then expression evaluate hoga

// var num = 15;
// var newNum = num++; // means - first expression evaluate hua means 15 new num me assign hua then
//                     // Then Original value ie num vo increment hua baad me
// console.log(num); // op - 16
// console.log(newNum); // op - 15

// eg: 2
// var num = 15;
// var newNum = num++ + 5;
// console.log(num); //op - 16
// console.log(newNum); // op - 20

// Prefix Increment -> (++x)
// means pehle jo value vo increment hogi assign hone se pehle

// var num = 15;
// var newNum = ++num; // aate hi increment hogi value then assign hogi into nEwNum AND oRIGINAL VALUE WILL ASLO change
// console.log(num); // op - 16
// console.log(newNum); // op - 16

// eg:2
// var num = 15;
// var newNum = ++num + 5;
// console.log(num); // op - 16
// console.log(newNum); // op - 21

// Decrement Operator:
// same like postfix inc it has decrement

// // eg1:
// var num = 15;
// var newNum = num-- + 5;
// console.log(num); // op =  14
// console.log(newNum); // op = 20

// eg 2
// var num = 15;
// var newNum = --num + 5;
// console.log(num); // op =  14
// console.log(newNum); // op = 19

// 3. Comparision Operator:
// A Comparision Operator compare its operands and
// returns a logical value based on comparision is true or false;

// var a = 10;
// var b = 20;

// Equal( == )
// console.log(a == b);

// Not Equal (!=)
// console.log( a != b);

// Greater Than ( > )
// console.log(a > b);

// Greater Than Equals ( >= )
// console.log(a >= b);

// Less Than ( < )
// console.log(a < b);

// Less  Than Equals ( <= )
// console.log(a <= b);

// 4. Logical Operators ( ||, &&, !)
// Logical Operator - they are mostly used with boolean (logical) value
// when they are return boolean value

// var a = 30;
// var b = -20;

// Logical And(&&)
// Means jitni conditons must have to satisfy true for all condition then it return true

// console.log(a > b && b > 0);

// Logical OR (||)
// means koi bhi agr conditon true hogi to it return true; means agr 1st wali false hai to next state dekhega
// age vo true hai to it return true;

// console.log(a > b || b > 0);

// Logical Not (!)
// It will convert true if stat is false and vice versa

// console.log(!(a > b || b < 0));

// 5. String concatenation Operator( + )
// It concatenates 2 string together and return a single string as a output

// console.log("hello world");
// console.log("Hello-" + "World");

// Challenge 4.
/*
 1. What will be the output of 3**3?
 2. What will be the output, when we add a number and a string
 3. wap to swap two number
 4. wap to swap two num without using 3rd variable
 */

//  sol 1) ** means Raise to the power
//  console.log(3 ** 3); //op - 27

// sol2)    Number + String = String concat
// console.log(21 + "Arsh");

// sol3)
// function swapNumber(a, b) {
//   var temp = a;
//   a = b;
//   b = temp;
//   console.log(a, b);
// }

// swapNumber(2, 3);

// Sol4)
// function swapNumberWithoutThirdVariable(a, b) {
//     //op - a = 3 , b = 10
//     a = a + b; // a = 13;
//     b = a - b; // b = 3;
//     a = a - b;
//     console.log(a,b);
// }

// swapNumberWithoutThirdVariable(10, 3);

// Interviw Ques 3. Difference between == and ===?
// sol) == it compare only the values
// === it compares both the value and the dataType also
// eg
// var num1 = 5;
// var num2 = "5";

// console.log(typeof num1);
// console.log(typeof num2);

// console.log(num1 == num2);  // -> true
// console.log(num1 === num2);  // -> false

/***** Section 4 Control Statemnts and Loops ******/

/*
Types of loops:
1) if-Else
2) Swicth statement
3) While loop
4) do - While loop
5) for loop
6) for in loop
7) for of loop
8) conditionally Ternary operator
 */

// 1. If.. Else
//  The if statement executes if the statement is true
// the if condition is false then runs the else part
// EG: Agr kal subha baarish aati hai toh umbrella lelena
// Agr nahi aati to umbrella nahi lena

// Syntax ->
// if (condition) {

// } else {

// }

// var tomm = "sunny";
// var tomm = "rain";

// if (tomm == "rain") {
//   console.log("Carry Your Umbrella");
// } else {
//   console.log("No need to Carry Your Umbrella");
// }

// Challenge 5
// WAP that works out whether if a given year is leap year or Not ?

// Leap Year concept: Normal Year -> 365 days && Leap Year contains 366 days(extra day is the 29 feb)
// How to Know that if it is leap year?

// Leap Year ->  It must have to satisfy 3 conditons:
// 1) Agr koi bhi saal 4 se exactly divide hoje Then it is leap year. (eg: 2016, 2020, 2024 etc)
// 2) Aisa year jo sirf exactly 100 se divide ho  - toh vo leap year nahi hota. (eg 2100,2200);
// 3) Agr  aisa year agr 400 se bhi divide hojata hai then it is a leap year. (eg: 2000,2400);

// var year = 2020;
// debugger;  // this paste in browser console, used for testing
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(" The year " + year + " is a leap year!");
//     } else {
//       console.log(" The year" + year + " is not a leap year!");
//     }
//   } else {
//     console.log(" The year" + year + " is a leap year!");
//   }
// } else {
//   console.log(" The year" + year + " is not a leap year!");
// }

// challenge 6
// what is truthy and falsy values in js?
// we have total 5 false values in js
// 0, " ", undefined, null, NaN, false is falsy

// if ((score = 0)) {
//   console.log("we loss the game");
// } else {
//   console.log("we won the game");
// }

// 2. Conditional (Ternary) Operator

// The Conditional (Ternary) Operator operator is the only javascript operator that
// takes three Operands

// variableName = (condition) ? value1 (if true run this ) : value 2 (if false then this wil run)
// var age = 18;
// if (age >= 18) {
//   console.log("Your are eligible to vote");
// } else {
//   console.log("you are not eligible to vote");
// }

// similar thing by ternary operator

// var age = 17;
// age >= 18 ? console.log("you can vote") : console.log("you can't vote");

// 3. Swicth Statement
// Swicth statement is similar to else f else if ladder
// Eg find the area of circle triangle and rectangle ?
// Eg:

// var area = "circle";
// var PI = 3.14,
//   l = 5,
//   b = 4,
//   r = 3;
// if (area == "circle") {
//   console.log("the area of circle is: " + PI * r ** 2);
// } else if (area == "triangle") {
//   console.log("the area of triangle is: " + (l * b) / 2);
// } else if (area == "rectangle") {
//   console.log("the area of rectangle is: " + l * b);
// } else {
//   console.log("enter valid data");
// }

// Note: if else ko short krne ke liye we have ternary operator
// and else if ladder ko short krne ke liye we have switch statement

// Switch Statment -> basically else i else if vo replace hote hai cases se and last wala else vo default hota hai
// switch () {
//     case "caseName1": value,
//     case "caseName2": value,
//     case "caseName3": value
//         default: value
// }

// var area = "circle";
// var PI = 3.14,
//   l = 5,
//   b = 4,
//   r = 3;

// switch (area) {
//   case "circle":
//     console.log("Area of circle is : " + PI * r ** 2);
//     break;
//   case "rectangle":
//     console.log("the area of rectangle is: " + l * b);
//     break;
//   case "rectangle":
//     console.log("the area of triangle is: " + (l * b) / 2);
//     break;
//   default:
//     console.log("Enter valid Data");
// }

// Break statement -> immediatelly Terminates the current loop
// Continue keyword -> It skip the iterations of the loop:
// eg 1 to 10 count krna hai and
// 5 and 6 wali iteration skip krni hai toh we use continue statemnt

// 4. While Loop ->
//  It is used jab humko starting point na pta ho to we use this
// and for loop -> use jab hmko starting point and ending point pta ho kya hai

// Syntax
// declare variable
// while(condition){ agr true hoga to while loop ie block scope me enter hoga jese hi
// false hoga to bhar aajega while se

//     statments;

//     increment;
//     decrement;
// }

// Eg print 1 to 10 numbers
// var num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// 5. Do while loop
//  It runs atleast one tym basically firstly it gives output and then check the condition
//

// var num = 1;
// do {
//   console.log(num);
//   num++;
// } while (num <= 10);

// 6. For loop
// syntax
// for (initializer; condition; incr / decr){
//     statements to be executed;
// }

// eg
// for (var num = 1; num <= 10; num++){
//     console.log(num);
// }

// challenge 7
// WAP to print table for given number (8,9,12,15) using for loop?

// var num = 8;
// for (var i = 1; i <= 10; i++){
//     console.log( num + " X " + i + " = " + num * i);
// }

/***** Section 5 FUNCTIONS IN JS  *******/

/*
What we will se

1. function definition
2. function calling 
3. function parameter 
4. function Arguments
5. function expressions
6  return keyword 
7. Return Keyword 
 
*/

// Function is a peice of code that can reuse as many time as we want

// 1 & 2) Function definition

// Before we use a function we define it

// Function declaration (function definition) consist of the function keyword
// and followed by:

// The name of the function
// A list of parameters to the function enclosed in paranthesis and seperated by commas
// and the javascript statments, they are enclosed in curly brackets

// function sum(a, b) {
//   return a + b;
// }
// sum();  // calling a function
// console.log(sum(1, 2)); // agr koi argument na pass kre to NaN output aayega

// 3 & 4) Function Arguments and Function parameter
// function funName(enter parameters) {

// }
// funName(Enter arguments (that is real values) that are passed to the parameter)  //-> calling the function

// Note: jabhi function create kre to usko call krna is necessary tabhi execute hoga
// Note: har baar function kuch na kuch return krta hi hai and agr kuch return nahi krra to
// function ke andr hi console statement lgaege

// Interview  ques 4)
// Why functions ?
// sol) A function is a group of code that can reuse

// 5. Function Expressions
// Create a Function and put into varible

// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }

// var funExp = sum(5, 10);
// funExp;
// console.log(funExp); // means variale me put krke ab  () paranthesis lgane ki need nahi pdhegi direct call kr skte hai

// 6. Return KeyWord
// Note: normally har function return krta hai kuch n kuch
// jese hi return likhege to immediately function terminte hojega
// and jidr call krege usko kisi variable me catch krege value ko because usne return kri h

// function sum(a, b) {
//   var total = a + b;
//   return total;
// }

// var funExp = sum(5, 10);
// console.log(funExp);

// 7. Anonymous Function
// A annonymous function means function which has no name
// eg

// var funExp = function (a, b) {
//   return (total = a + b);
// };

// var sum = funExp(15, 15);
// var sum1 = funExp(15, 20);

// console.log(sum);

/********* ECMA SCRIPT  *********/

/*

1. 1996 javascript create
2. 1997 Ecma international which result to Ecma script 
3. 2015 ES6 launched 
4. 2016 ES7 lanched har saal features aunched hote hai
5. ES6 - (2015) FAMOUS

ES6/ 2015 FEATURES -> 
1. Let and const
2. Template Strings
3. Deafult Arguments
4. Rest Operator
5. Destructuring
6. Object Properties
7. Arrow Funtion
8 Spread Operator

*/

// NOW ITS TIME FOR MODERN JAVASCRIPT

// Features of ES6

// 1. Let vs Const vs Var

// Var -> Function scope -> means apne se upr jakr first function
// dhundta hai udr tak scope valid hota hai

// we can re-initialise and re-decalre the value

// var myName = "thapa technical";
// console.log(myName);

// var myName = "vinod thapa";
// console.log(myName);

// Let -> Block scope
// yeh apne upr first { } yeh bracket find krta hai uske andr andr hi
// iska scope hai

// re-declare is not possible
// re-initialise is possible

// let myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// const -> constant variable
// Re-declare and re-initialise is not possible

// const myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// eg:
// function bioData() {
//   let firstName = "Vinod";
//   console.log(firstName);

//   if (true) {
//     let lastName = "Thapa";
//     console.log(lastName);
//   }
//   console.log(lastName);  // error due to block scope
// }

// // console.log(firstName);
// bioData();

// 2. Feature Template Literals (Template String - `` ie backTick escape ke niche)
// js prog to print table for given number (8)

// variable access krna hai agr to $ dollar lgaege
// Now adays we are using this

// var num = 7;
// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${num} = ${num} X ${i} = ${num * i}`);
// }

// 3. Feature:  Default Parameter

// Note: agr single argument bhjre hai or parametr multiple hai to first vale parameter variable
// me uski value assign hojati hai

// we can give default value suppose argument me ik variable bhja hai and upr 3 parameter hai
// to = krke value assign kr skte hai

// function mult(a, b = 5) {
//   return a * b;
// }
// console.log(mult(5));

// 4. Fat Arrow Functions

// diff 1:  Agr hum pehle call krdete hai function ko banne se pehle
// to we got an error but in old way funcion declaration usme error nahi aata tha

// diff 2:  ${} isse symbole me arithmatic operation bhi kr skte hai

// diff3: Agr 1 line ka code hai to return keyword and curly braces likhne ki need nahi hai

// diff 4: in Fat arrow function we can not use this keyword

// Normal way of writing function

// function sum() {
// let a = 5, b = 6;
// let sum = a + b;
// return `The sum is: ${sum}`
// }
// console.log(sum());

// Traditional way

// const sum (func name) = () => {
// }

// const sum = () => {
//   let a = 5,
//     b = 6;
//   let sum = a + b;
//   return `The sum is: ${sum}`;
// };

// const sum = () => `The sum is: ${(a = 2) + (b = 3)}`;
// console.log(sum());

/******* Section 6-> Arrays in JAVASCRIPT ***********/

// What is Arrays?
// Array is a collection of similar data types
// when we store multiple values in one value then we use arrays

// In javascript we have an Array Class, and
// Arrays are the protoType of this class

// Example:
// var friends = ["arsh", "simran", "dripti", true, 25, "male"];
// console.log(friends);

/*
What we will do in Array?
1. Traversal of Array
2. Searching and filter in Array
3. How to sort and compare an Array
4. How to insert add replace dete element in Array (CRUD)
5. Map() reduce() filter()
*/

// Two ways of create array
// 0.1)  new Array keyword
// var afriends = new Array;  // optional
// console.log(typeof afriends);

// 0.2) let friends = [];

// 1. Traversal of Array
// if we want to get the single data at a time - (pass the index number in
// square bracket to access that element) & also
// if we want to change the data - ()

// var friends = ["arsh", "simran", "dripti", "male"]; // object datatype
// console.log(friends[1]); // pass the index number in square bracket to access that element

// display last element of the array
// console.log(friends.length); // op 4
// console.log(friends[friends.length-1]);

//  "for loop" to traverse the array
// var friends = ["arsh", "simran", "dripti", "male"];
// for (let i = 0; i < friends.length; i++){
//     // i is the index number
//     console.log(friends[i]);
// }

// for in loop ->
// It gives the index number
// var friends = ["arsh", "simran", "dripti", "male"];
// for (let elements in friends) {
//   console.log(elements);
// }

// // for of loop ->
// // it gives the elements
// for (let elements of friends) {
//   console.log(elements);
// }

// Array.prototype.forEach() loop ->
// calls a function for each element in array [imp]
// starts se end tak travel krta hai yeh loop
// It only used for  getting the values and it is only move forwrd, we can not use break statement in this

// var friends = ["arsh", "simran", "dripti", "male"];
// friends.forEach(function (element, index, currArray) {
//     console.log(element + " index -> " + index);
// });

// forEach loop with Fat arrow function
// var friends = ["arsh", "simran", "dripti", "male"];
// friends.forEach((element, index,array) => {
//     console.log(element + " index: " + index);
// })

// 2. Searching and Filtering in Array

// 2.1 Array.prototype.indexOf() => It comes under searching
// It returns the first index of an element, jo sabse pehle found hoga vo
// return -1, if not found
// It search the element from the 0 th index number

// var friends = ["arsh", "simran", "dripti", "dripti", "male", "dripti"];
// console.log(friends.indexOf("dripti"));
// console.log(friends.indexOf("dripti", 4)); //  2nd parameter is kidr se start krna hai search krna

// 2.2 Array.prototype.lastIndexOf() -> Also come under searching
// It return the index of last element or return -1 if the element not found

// var friends = ["arsh", "simran", "dripti", "dripti", "male", "dripti"];
// console.log(friends.lastIndexOf("dripti"));
// console.log(friends.lastIndexOf("dripti", 4)); // 2nd parameter is kidr se satrt kra search krna , eg: male se start kra search krna to backward move hoga

// 2.3. Array.prototype.includes()
// Jo bhi Data Array me put krre hai vo included hai ya nahi
// It return true or false , agr data mila to true otherwise false
// It is used in validation, eg: kya jo bhi array dekhre hai usme included hai ya nahi
// if true to yeh kaam krdo , It only moves forward

// var friends = ["arsh", "simran", "dripti", "dripti", "male", "dripti"];
// console.log(friends.includes("thapa")); // it search starts from 0 index
// console.log(friends.includes("arsh",2)); // 2nd parameter kidr se start krna hai search krna

// FILTERATION PART

// 2.4) Array.prototype.find()
// arr.find(callback(element,[index,[array]]) [, thisArg])
// It return the found element in array if array satifies the condtion and
// return undeifned if not find any element
// It return undefined If not found
// Only problem is that it return only one element

// const prices = [200, 300, 350, 400, 500, 550];

// suppose  our condition is hume clothe buy krne hai unka [price < 400] kam hona chaiye
// const findElem = prices.find((currVal, index, array) => {
//   // Note: ik ik krke value aati jaegi idr
//   return currVal < 400;
// });

// console.log(findElem);

// 2.5) Array.prototype.findIndex()
// It return the index Number of the element which is found and Iit return only one element
// It return -1 if not found

// const prices = [200, 300, 350, 400, 500, 550];
// let elem = prices.findIndex((elems) => {
//   return elems > 400;
// });
// console.log(elem);

// 2.6) Array.prototype.filter()
// It return a new array containing all elem of the calling array for which
// they provided filtering function return true
// It return empty array if koi condition satisfy nahi hui thi

// conditiion -> aise price tag chaiye jinki price hai less than 400

// const prices = [200, 300, 350, 400, 500, 550];

// let filterRes = prices.filter((currVal, index, arr) => {
//   return currVal < 400;
// });
// console.log(filterRes);

//) 3) HOW TO SORT AND COMPARE AN ARRAY

//  3.1)  Array.prototype.sort()
// The sort() method sorts the element  of an array in place and
// return the sorted array. The default sort order is ascending, built upon the converting elem
// into strings then comparing thier seq of UTF-16 code unit value

// eg:
// const months = ["March", "Jan", "Feb", "Dec", "April", "Nov"]; // means ABCD ke base pr sort krega like april pehle aata hai to vo aayega
// console.log(months.sort());

// const arr1 = [1, 30, 3000000, 4, 21, 10000, 99];
// console.log(arr1.sort()); // It basically first convert the numbers into strings and acc to inc order 1 wale sare aayege then 2 wale num ayenge chahye kitne mrji 0 ho

// However, if number are sorted as strings
// "25" is biiger than "100" because "2" is bigger than "1"
// Because of this sort() method It will reduce incorrect result when sorting number

// 4) HOW TO INSERT,ADD, REPLACE, AND DELETE ELEMENT FORM ARRAY (CRUD)
// 4.1) Array.prototype.push()
// The push() method add one or more elem to the end of the array and return the new length of the array

// const animals = ["pigs", "goat", "sheep"];
// const count = animals.push("chicken", "horse"); // Enter the items to be added
// // console.log(animals, count);
// console.log(animals);

// 4.2) Array.prototype.unshift()
// Unshift method add the elements in the beginning of the array
// It also return the new length of array

// const animals = ["pigs", "goat", "sheep"];
// const count = animals.unshift("horse", "peacock"); // add the items in the begining
// console.log(animals, count);

// 2nd Example
// const numbers = [1, 2, 3, 5];
// numbers.unshift(6, 7);
// console.log(numbers);

// 4.3) Array.prototype.pop()
// This method removes the last element and return the removed element
// this method change the length of the array

// const plants = ["brocolli", "cauliflower", "kale", "tomato", "cabbage"];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// 4.4) Array.prototype.shift()
// shift() removes the first element from the array and return that removed element
// This method also change the length of array

// const plants = ["brocolli", "cauliflower", "kale", "tomato", "cabbage"];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// challenge 8

// Array.prototype.splice()  -> ise CRUD OPERATION HO SKTE HAI

// 1. ADD Dec at the end of the array?
// 2. What is the return value of splcie method? It return the number of deleted elements and it return a new array , mostly used for delete
// 3. Update march to MARCH (update)?
// 4. Delete June from an Array?  [ye 4 krne hai sirf 1 hi method se]

// const months = ["Jan", "march", "April", "June", "July"];
// sol 1)
// const newMonths = months.splice(4, 0, "DEC"); // 1st parameter is starting index number ki kidr se start krna hai,
// 2nd parameter is deleteCount ki kya kya delete krna hai index number pass krege udr se start hokr kitne element delete krne hai so 0 kuch bhi del nhi krna,
// 3rd parameter is jitne bhi data pass krege vo sare ikdum end me add hoga, uss index ke baad hoga

// const newMonths = months.splice(months.length, 0, "DEC");
// console.log(months);

// const months = ["Jan", "march", "April", "June", "July"];
// const newMonths = months.splice(months.length, 0, "DEC");

// sol2)
// console.log(newMonths);

// sol3)
// const months = ["Jan", "march", "April", "June", "July"];
// const indexOfMonth = months.indexOf("march"); // it return -1 if not found
// if (indexOfMonth != -1) {
//   const updateMonth = months.splice(indexOfMonth, 1, "MARCH");
//   console.log(updateMonth);
//   console.log(months);
// } else {
//   console.log("No Data Found");
// }

// sol4)
// const months = ["Jan", "march", "April", "June", "July"];
// const indexOfMonth = months.indexOf("June"); // it return -1 if not found
// if (indexOfMonth != -1) {
//   const updateMonth = months.splice(indexOfMonth, 1); // 3rd para add nhi krege
//   console.log(updateMonth);
//   console.log(months);
// } else {
//   console.log("No Data Found");
// }

// < ----- 5 MAP REDUCE AND FILTER METHOD ---------------->

// 5.1) Array.prototype.map()
// let newarr = arr.map(callback(currval,index,arr){
// return element for newarr, after executing something
// }, thisArg);

// jab use krege map() to yeh original array ko kuch nhi krega , ik new array dega
// usme vo sare data honge jo humko chaiye and in true or false format,
// It is same as forEach, but yeh original array ko change krta hai , forEach method return undefined
// API Call isi me krte hai, map method provide ability to chaining

// condition -> aise number chaiye jo greate than 9 hai
// const arr = [1, 4, 9, 16, 25];
// let newArr = arr.map((currElem, index, arr) => {
//   return currElem > 9;
// });

// console.log(newArr);

// challenge 9 ====
// 1. Find sq root of each elem in an array? sq root 36 ka sq root 6 an so on
// let arr = [25, 36, 49, 64, 81];
// let squareElem = arr.map((elem, index, arr) => {
//     return Math.sqrt(elem);
// });
// console.log(squareElem);

// 2. Mulitply each elem by 2 and return only those elemen whcha re greate than 10;
// [2 cheese ik sth krni so we do with chaining ie on map method]

// Note => Agr map method me < , > , <= means comparision krte hai to vo true or false deta hai

// let arr1 = [2, 3, 4, 6, 8];
// let multArr = arr1
//   .map((elem, index, arr) => {
//     return elem * 2;
//   })
//   .filter((elem, index, arr) => {  // chaining means jo data return hua hai uske upr method apply hua
//     return elem > 10;
//   });
// console.log(multArr);

// REDUCE METHOD ---------->

// We can use chaining too

// use to flatten an array means convert the 3d array or 2d array into 1d array

// the reduce() method executes a reducer function (that you provide) on each
// element of the array, resulting in single output value

// The reducer function takes four argument:
// Accumulator (means jama krna kuch)
// Curr value
// Curr Index
// Curr Array [jispr kaam krre hai]

// Eg: sare elem ko mult kro 2 se and vo elem return kro jo 10 se bde hai and ab jitne bhi elem
// reh gye hume unka sum,product chaiye means single value chaiye

// let arr = [2, 3, 4, 6, 8]; //  find out the sum in an array
// let sum = arr.reduce((accumulator,elem,index,curArr) => {
//     debugger;
//     // Accumulator me cheeze store hoti rehti hai sare elem ik ik krke
//     return accumulator + elem;
// },5); // 2nd parameter agr hum accumulator me initial value put krke rakh lenge
// console.log(sum);

// EG 2:
// let arr = [2, 3, 4, 6, 8];
// let result = arr
//   .map((elem, index, arr) => {
//     return elem * 2;
//   })
//   .filter((elem, index, arr) => {
//     return elem > 10;
//   })
//   .reduce((accumulator, currElem, index, currArr) => {
//     return (accumulator += currElem);
//   });
// console.log(result);

// How to flatten an Array -> means convert 3d or 2d array to 1d array

// const arr = [
//   // 2d array
//   ["zone_1", "zone_2"],
//   ["zone_3", "zone_4"],
//   ["zone_5", "zone_6"],
//   [["zone_7", "zone_8"]],
// ];

// let flatArr = arr.reduce((accum, elem, index) => {
//   return accum.concat(elem);
// });
// console.log(flatArr);

/******* SECTION 7 STRINGS IN JAVASCRIPT *******/

/*
Whta we will learn ->

1.escape charac
2. Find a string in a string
3. searching for a string in a string
4. extracting string parts
5. replacing string content
6. extracting string chracter
7. other usefull method

*/

// String -> means anything that we write inside the qoutes whter it is single quotes or double quotes
// Strings can be created as primitives, from string literals,
// or as objects, using string() constructor jese array ke liye array constructor use kra tha

// let name = "Arsh";
// let channelName = "Arshdeep Singh";
// // let ytName = new String("Thapa Technical"); // string created with string consrtuctor, aise use Nhi krte kabhi bhi only for knowledge
// console.log(name);
// console.log(ytName);

// How to find the length OF Stirng

// String.prototype.length
// It return the length of the string

// let name = "Arshdeep Singh";
// console.log(name.length);

// 7.1) Escape Character
// means agr single qutoes ke andr sentence hai aur we want ki uske andr bhi ik qutoes aaje
// so uske aage back slash lgadenge
// or 2nd approach is agr bhar single inverted comma hai to andr double inverted lelo or vice versa

// let sentence = "we are the so-called \"viking\" from north "
// let sentence = "we are the so-called 'viking' from north ";
// console.log(sentence);

// 2)  FIND A STRING IN A STRING

// 7.2) String.prototype.indexOf(searchValue,kidr se search krna start krna hai)
// The indexOf() method return the index of (the position of) the first occurence of a specified
// text in a string
// It return -1 if not found, (it also count the space also)

// const bioData = `I am Thapa Technical`;
// console.log(bioData.indexOf("Thapa"));

// 7.3) String.prototype.lastIndexOf()
// It also search from the forward but yeh last occurence hogi vo dega
// It return -1 if not found

// const bioData = `I am Thapa Technical`;
// console.log(bioData.lastIndexOf("T"));

// 3) Searching For a String in a String

// 7.4) String.prototype.search("jo search krna") -> It is same like indexOf gives first occur
// It return -1 if not found

// 4) Extracting String Parts ------->

// 7.5) Three method for extracting  a part of a String
// slice (start,end) // end is not included -> continue substring dega yeh
// substring (start,end) // end is not included -> continue substring dega yeh
// substr(start,length), // means kidr se start krke kitne length ki substring cut krni hai

// Slice Method
// Slice method - It extract a part of the string means coninues ik portion dega jo chaiye hoga
// This method takes 2 parameter: start position
// and end position (end is not included)
// The original String will not changed

// var str = "apple ,kiwi , Banana";
// // let sliceRes = str.slice(2, 10);
// let sliceRes = str.slice(7, -2);  // -2 means last se 2 ko chorh kr udr tak aayega
// console.log(sliceRes);

// challenge 12 ========
// Display only 280 charac of a string like the one used in twitter

// let tweets =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, consequuntur reprehenderit! Harum, officiis soluta minus repellendus ipsa consectetur sequi dolor error aliquam maiores, dolores quibusdam aliquid ratione modi enim! Omnis.";
// let ActualTweet = tweets.slice(0, 40);
// console.log(ActualTweet);
// console.log(ActualTweet.length); // 40 character milre hai

// Substring() Method
// It is similar to slice method()
// But it does not accept the negative index
// It return the substring, End is not included

// var str = "Apple, Banana, Kiwi";
// let res = str.substring(6);
// console.log(res);

// Substr() Method
// It is similar to slice()
// The difference is that the second parameter specifies the lngth of the extracted part

// var str = "Apple, Banana, Kiwi";
// let res = str.substr(4,7); , means 4 se start krke 7 length ki substring cut kri hai
// console.log(res);

// 5) REPLACING STRING CONTENT()

// 7.6) String.prototype.replace(searchFor,repalceWith)

// The replace() method replace a specified value with another value in a String

// let bioData = `I am vinod Bahadur Thapa vinod`;
// let replaceData = bioData.replace("vinod", "Arsh");
// console.log(replaceData);

// Points to remember
// 1: The replace() method does not change the string
// it is called on. It return a new String
// 2. yeh starting se jo value pehle milegi vo update krdega
// 3. By default(), the replace() method is case sensitive  agr match nhi hoga to same as it is return krdega string

// 6) EXTRACTING STRING CHARACTERS
// There are 3 method for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property Access [ ]

// The charAt() method
// It return the character at a specified index (position) in a String
// Eg:
// let str = "HELLO WORLD";
// console.log(str.charAt(0)); // It return the character at 0 index

// The  CharcodeAt() Method
// The charCodeAt() method return the unicode of the character at a specified index in a
// String:
// The method return a UTF-16 code
// (an integer between 0 and 65535 ) // means it return ASCII value of that character

// var str = "HELLO WORLD";
// console.log(str.charCodeAt(0));  // means it return ASCII value of that character at specified index

// Challenge 13
// Return the unicode of the last Charactr of the String
// eg: let str = "HELLO WORLD";
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(str.length - 1));

// Property Access
// ECMA script 5 allows property access [ ] on strings
// means jese [ ] array me index number paas krte to element deta tha same in strings

// var str = "HELLO WORLD";
// console.log(str[0]);

// Other Usefull Mehods
// 1. toUpperCase
// 2. toLowerCase
// 3.concat() method join two or more string or use "+" operator or template literal
// 4. trim() method -> means it remove space from left side as well as right side completely
// It is mostly used validations like in passwords

// 5. Converting a String to an Array
// A string can be converted to an Array with the split() method

// let myname = "Arshdeep";
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());

// let fName = "Arshdeep";
// let lName = "Singh";
// console.log(fName.concat(lName));

// var name = "        Hello World       ";
// console.log(name.trim()); // it remove the white space from both sides

// var text = "a,b,c | d,e"; // string
// console.log(text.split(",")); // split on comma means jidr jidr comma hoga vo ik element bn jaega and it return a new Array
// console.log(text.split(" ")); // split on space
// console.log(text.split("|")); // split on pipe, means pipe e pehle ik element and uske baad ik element

/*** Section 8 Date and Time in JS  ****/
/*
What we will see 
1. Date METHODS (get and set) 
2. Time METHODS (get and set) 
*/

// Date object in JS contain a number that represent milliseconds
// since 1 january 1970 UTC

// Creating Date object
// There are 4 ways to create a new date object:
// 1. new Date()
// 2. new Date(year, month, day, hours, minutes, secnds, milliseconds) kam bhi de skte hai
// It takes 7 argument
// 3. new Date(milliseconds)
// we cannot avoid month section
// 4. new Date(date String)

// THESE GIVES DATE AND TIME BOTH

// 1. new Date()
// Date Object are created with the new Date() constructor

// let currDate = new Date();  // idr se hi date and time dono milra hota hai, browser pr correct aayega
// console.log(currDate);

// Note in time -> GMT -> greenwich mean time eg world ka time sabka ek sth chlta rhe to gmt me distribute kiya hua h
// Jidr india ka jo time means vo 5 hr 30 min aage hai

// console.log(new Date().toString()); // same jo browser me tha vohi time dega ab
// console.log(new Date().toLocaleString()); // exact time dega

// Date.now()
// It return the milliseconds since jan 1 1970
// console.log(Date.now());

// 2. new Date(year,mongth,....) - it also return in millisecond
// 7 argument specify ->  year,month,day,hour,min,sec,mili sec
// Note -> JS count month from 0 to 11, and agr argument me kuch pass krege to month hona hi chaiye imp

// Jan is 0 and dec is 11

// var d = new Date(2022, 7, 30, 20,30,30,0);
// console.log(d.toLocaleString());

// 3. new Date(milliseconds)
// millisecodns paas krege and it convert the seconds into date and time

// var d = new Date(0);
// console.log(d.toLocaleString()); // agr single argument paas krege to 1 jan 1970 dega

// 4. new Date(date String)
// new Date(dateString) creates a new Date Object from a Date String

// var d = new Date("Oct 30, 2022 11:13:00"); // means string date and time paas kr skte hai
// console.log(d.toLocaleString());

//  only DATES METHOD

// const curDate = new Date();
// console.log(curDate.toLocaleString()); // It gives curr date as well as time
// console.log(curDate.getFullYear()); // It gives Full Year abhi tak ka ☻
// console.log(curDate.getMonth()); // It gives curr month
// console.log(curDate.getDay()); // It gives curr Day

// How to Set the individual date , - [Not usefull so much]
// const currDate = new Date();
// console.log(currDate.setFullYear(2022));
// // The set Full year() method can optionally set month and day
// console.log(currDate.setFullYear(2022,10,5));
// console.log(currDate.setMonth(11));
// console.log(currDate.setDate(5));

// Time Methods

// const currTime = new Date();

// //  how to get Individual time

// console.log(currTime.getTime());
// // The get Time method method return the number of milli seconds since jan 1 1970

// console.log(currTime.getHours());
// // The getHours method return  the hours of a date as a number (0 - 23)

// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

//  how to set Individual time

// const currTime = new Date();
// // console.log(currTime.setTime());
// console.log(currTime.setHours(5));
// console.log(currTime.setMinutes(5));
// console.log(currTime.setSeconds(5));
// console.log(currTime.setMilliseconds(5));

// Practice Time
// new Date().toLocalTimeString(); // Only gives time 11:18:48 AM

// new Date().toLocalDateString(); // Only gives date 11 / 16 / 2010

// new Date().toLocaleString(); // it give both time and date

/* Section 9 MATH OBJECT IN JS ------->  */

// console.log(Math.PI);

// Math.round()

// It return the value of x  rounded to its nearest integer
// eg 10.64 [ye point ke baad agr 5 ke upr hoga to next digit dega otherwise prv dega]
// let num = 10.655;
// console.log(Math.round(num));

// Math.pow()
// Math.pow(x,y) return the value x to the power of Y

// console.log(Math.pow(2, 3));
// console.log(2**3);

// Math.sqrt()
// Math.sqrt(x) returns the square root of x

// let num = 9;
// console.log(Math.sqrt(num));

// Math.abs()
// Math.abs(x) return the absolute (positive) value of x [negative ko positive krdega]
// console.log(Math.abs(-55)); // op -> 55
// console.log(Math.abs(-55.55)); // op -> 55

// Math.ceil()
// Math.ceil(x) means roof return the value of x rounded upto nearest integer

// console.log(Math.ceil(4.51)); // op - ceil give next higher integer value
// console.log(Math.round(4.51)); // op - yeh agr point 5 ke baad hoga to it gives next value agr pehle hoga .5 se to prev value dega
// console.log(Math.ceil(99.1)); // op 100
// console.log(Math.round(99.1)); //op 99

// Math.floor()
// Math.floor(x) means floor return the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7)); // floor means ik value kam dikhaega 4.7 to 4 dikhagea
// console.log(Math.floor(4.1));

// Math.min()
// Math.min() can be used to find the minimum value in list of argument

// console.log(Math.min(0,150,-2,-200));

// Math.max()
// Math.max() used to find the maximum value in list of argument
// console.log(Math.max(0, 150, -2, -200)); // op - 150

// Math.random()
// Math.random() return a random number between 0 (inclusive) and 1 (exclusive)

// console.log(Math.floor(Math.random() * 10)); // mulitply 10 kra to 0 se 10 ke bheech me dega

// /Math.trunc()
// /Math.trunc() method return the integer of a number
// Means decimal ke pehle jo number hai vo return krdega chahe vo negative ho ya positive

// console.log(Math.trunc(-3.3)); // op -3
// console.log(Math.trunc(-9.9)); // op -9

// Practice Time

// if the argumnet is positive number, Math.trunc() is equivalent to Math.flor()
// Otherwise Math.trunc gives only integer value if neative is there

// console.log(Math.trunc(4.8)); // op 4 because positive number h, this is why it give floor val
// console.log(Math.trunc(-4.9)); // agr negative hoga to it removes the decimal part

/** SECTION 10 DOM IS JS */

/* What we will do 
1. Window vs document
2. DOM vs BOM
3. DOM navigation
4. Searching and getting Element refrence

*/

// 1. Window vs document

// window -> 1. Window is globl object, and if do any operation related to browser window
//  can be a part of window object
// Eg complete screen including the title and url and tabs it comes in window object

// 2. All the member like object,methods if they are part of window object then we do not refer to window object
// Eg window.alert() yeh nhi likhte direct alert , window.setTimeOut yeh nhi likhte direct setTimeOut because they are part of window object
// location -> means yeh pta lga skte hai ki konsi website dekhre hai

// NOTE
// Window has method,properties and Object ex setTimeout() OR setInterval() are the methods where as document is the object of window and
// It also has a screen Object and document Object with properites describing the physicaal display

// Properties Of the Window Object -> innerHeight
// InnerWidth -> means jo screen ki abhi width kitni hai vo

// --------

// document -> 1. DOM (Document object model) is the child of the window object
// Eg: jidr jidr hmari webiste show hori hai that is document.
// document ke andr hi sare data dikh rhe hote hai hame

// 2. jab document ke related hum kuch krte hai to hame -> document. lgana hi pdhta hai
// Eg: document.getElementById(passiD)

// Note- > document ka kaam hai agr sirf hame HTML ke sth kuch krna ho to use krege

// 2.  DOM VS BOM

// DOM -> agr Html elem ke sth kaam krna ho to use this, make sure ki dot lgakr hi access kre

// BOM ->  navigator,
//         screen,
//         location,
//         frames,
//         history,
//         API request  -> inse agr kuch krna ho to they are the parts of BOM

// Javascript -> Object,Array,Function isnke sth work krna ho to use this

// The Document Object Model, which deals with the document , The HTML element themselves
// eg
// document.body.style.backgroundColor = "red"

// The BOM browser Object Model, Which deals with the broswer component like history
// ,location,navigator,and screen, alert, confirm, prompt are also a part of BOM
// eg
// alert(location.href);
// if (confirm("Want to visit you tube thapa tech")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect to this page
// }

// 3. DOM Navigation
// HTML - root element of document
// -> body tag
// -> head tag jo bhi inke andr change krenge vo through DOM krege

// 1.: document.documentElement
// return the element that is the root element  of the dom

// DomNavigation.html -> agr body ke andr jo tags hai unpr kuch change krna ho to we use DOM
// How to identify root element -> simply write - document.documentElement ie hamara html is root elem

// 2: Agr pta lgana ho ki head tag me kya kya likha hai-> toh simply we write "document.head; or document.body;" in console

//3: Agr pta lgana ho ki body ke andr kitne nodes hai ie elements hai
// -> document.body.childNodes -> (includes tab,enter and whiteSpaces) ye sab child Node ke andr aata hai and as a text represent hota hai
// -> document.html.childNodes -> text ko agr expand krege to usme enter hoga ki sirf voi press kra

//4:  agr sirf HTML ke cildren chaiye ho to means element
// -> document.body.children;
//5.   agr length dekhni ho to iske aage .length likhdenge

// Ques agr hume pta lgana ho ki kisi element ka koi child Node hai ya nahi
// ans document.body.hasChildNodes() -> it return true or false

// Practice Time
//How to find the child in DOM tree

//1)  firstElementChild
// Eg: document.body.firstElementChild
// Eg: document.body.firstElementChild.firstElementChild -> means uske andr ke andr ka first child ik tak hi jaa skte hai
// document.body.firstElementChild.firstElementChild.style.color="red";

// 2) parentNode
// 3) document.body.parentElement, agr head likhte likhte to bhi ame milta because body and head ka parent same h

// 4) document.body.nextElementSibling -> body ka next sibling dedega
// 5) document.body.prevElementSibling -> body ka prev sibling dedega -> yeh text include krdega

// 4 ----> HOW TO SEARCH THE ELEMENTS AND THE REFRENCES
// We will se the new file -> search.html

//   function changeContent() {
// 1. way of accessing by refrencing means kisi variable me store krliya
// let heading = document.getElementById("heading");
// heading.innerHTML = "This is me Arsh";
// 2 way to access this by chaiing
// document.getElementById("heading").innerHTML = "This is Arshdeep";
// If we deal with classes
// console.log(document.getElementsByClassName("para"));
// If deal with tag Name
// console.log(document.getElementsByTagName("p"));
// getElementByName -> it is used for named attributes
// We can do the above operations with same query Selector
// querySelector return the first matched element whereas
// queryselectorall() will return all the elements
// document.querySelector("#heading").innerHTML=  "I changed again";
// agr class access krege to . lgaege and id access ke liye #idname
// aand agr tag access krna hai to kuch bhi nhi lgaege direct taag name dega
// Interview Ques ?
// Diff betwen getElementId and query Selctor
// getElementById -> it only access the id
// query Selector -> It access the first match element
// note -> agr by chnce class ke andr ka kch chaiye to space denge krege
// space means uske andr ka nextElement
//   }

/**** Section 11 Events in JS -> 9: 40 */

/*
what we will learn in this lec
1) 4 ways of writing events in js
2) what is event object
3)mouse event in js
4) keyboard event
5_ inputEvent in js 
*/

// Event are things that happen to html element, eg: clicking a button ie onClick event

// HTML Events
// eg of html events
// 1) Jb tak HTML web page pura complete load nhi hota ie also  event ie load Event
// 2) Input field was changed
// 3) Html button was clicked, eg: kisi button pr click krre hai to alert aara hai console me aara hai ie also evemt

// JS allows you execute the code when events detected

// section 1: 4 ways of writing events in js
// 1 using inline events eg alert();
// 2 by calling a function ("most common way")
// 3 using inline events (HTML onClick="" property and element.onClick )
// 4 using Event Listners (addEventListner and IE attachment)

// check the events HTML file

// section 2: what is event object?
// Event Object is the parent object of the event object
// for ex
// MouseEvent,FocusEvent, KeyboardEvent etc they all are comes uner capital Event Object
// eg check eventObj.html file

// section 3: Mouse Event in JAVASCRIPT
// event that occur with the html when we click with the mouse belonge to
// mouse event
// check mouseDownUp.html
// check mouseEnterLeave.html

// section 4: KeyBoard events in JS
// Event that occur when user presses a Key on Keyboard
// check keypRESS.html

// section 5: Input Event in JS
// They are very very very Impr because mostly input form ke sth work krre hote hai,
//  input box,check box, radio button boht sari chheze hoti hai to pta kese lgega ki konse uspr click kra hai
// check file Onchange.html
// Note: onchange is very important react me bydefault likhna hi pdhta hai yeh

// differce between onClick event and addEventlistner?
// sol) onclick -> if we apply onclick on same function two times then it will override the first data
// addEventlistner they do not over ride  if we do the same thing

/***** Section 11 Timming Based Events in JS ****/

/* 
1. setTimeOut()
2. setInterval()
3. clearTimeOut()
4. clearInterval()

*/

// setTimeOut(function,milliseconds)
// It executes a function after waiting a specified number of milliseconds
// It will run only 1 time

// setInterval(function,miliseconds)
// same as setTimeOut, but repeats() the function continously

// check Folder Timming events

// setTimeOut()
// setTimeout is asyncronous means background me hota rhega uske niche ka code first execute hojega
// eg:
//   const showMyName = () => {
//     setTimeout(() => {
//       myName.innerHTML = `Your name is Arshdeep Singh`;
//     }, 4000);

//     console.log("Hello this is SetTimeOut");
//     // setTimeout is asyncronous means background me hota rhega uske niche ka code first execute hojega
//   };

// check clearTimeOut.html

// check setInterval.html

// CHECK the clearInterval.html

/******* Section 12  OOPS ******/

/**
 what we will see
 1) objec literals
 2) this keyword

 */

//  what is object literals?
// sol  Object literals is a simply key value pair Data structures

// storing variable and function together in one container, we can refer this is an object

// How to create an Object?

// 1st way -> { key: value}
// [Note: always access the key by using dot]
// Note 2: object me jo functions create krege we called them as "Methods"

// let bioData = {
//   myName: "Arshdeep",
//   myAge: 56,
//   getData: function () {
//    return "hello this is me arsh";
//   },
// };

// console.log(bioData.getData());
// console.log(bioData.myAge);

// 2nd way -> no need to write function as well after es6 in object literal

// let bioData = {
//   myName: "Arshdeep",
//   myAge: 56,
//   getData () {
//     console.log("hello this is me arsh");
//   },
// };

// bioData.getData();
// console.log(bioData.myAge);

//  what if we want object as a value inside an Object
// let bioData = {
//   myName: {
//     fName: "Arshdeep",
//     lName: "Singh",
//   },
//   myAge: 56,
//   getData() {
//     console.log("hello this is me arsh");
//   },
// };

// console.log(bioData.myName.lName);

//  2 -> What is This Object?
//  the definition of "this" object is that it contain the current Context

// The this object can have different value depending on where it is placed

// for example:
// console.log(this); // op -> It gives the window Object , means current context is window

// ex 2
// function name() {
//   console.log(this); // its current context is also window
// }

// ex 3
// var myNames = "Arsh";
// function myName() {
//     console.log(this.myNames);  // now op is arsh because function ke andr this refer to window object
//     // but myNames is in global object
// }
// myName();

// exp 4
// const obj = {
//   myAge: 55,
//   myName: function () {
//       console.log(this.myAge); // object ke andr this jo hai, Now uska current context yeh Object ho chuka
//     //   hai, so object ke andr jo jo hai vo sare this ke members hai
//   },
// };
// obj.myName();

// ex 5
//  this obj is not work with arrow function
// eg
// const obj = {
//   myAge: 22,
//   myName: () => {
//     console.log(this); // Now it will give the window object because fat arrow function this ke sth work nhi krta
//   },
// };
// obj.myName();

// eg6:
// give op ->  My name is Thapa tech and my Age is 22
// let bioData = {
//   myName: {
//     realName: "vinod thapa",
//     channel: "Thapa tech",
//   },
//   myAge: 22,
//   getData() {
//     console.log(
//       `My name is ${this.myName.channel} and my Age is ${this.myAge}`
//     );
//   },
// };

// bioData.getData();

/*****  ECMA SCRIPT 2016/ES7 *****/
/*
1) Destructuring 
2) Object Properties
3) spread Operator
*/

// Destructuring in ES6
// The destructuring means it possible to unpack the values from arrays,
// or prperties from objects, into distinct variables

// Array Destructuring

// const bioData = ['vinod', 'thapa', 26];
// let fName = bioData[0];
// let lName = bioData[1];
// let age = bioData[2];

// or

// const bioData = ["vinod", "thapa", 26];
// //Now do array destructuring
// let [fName, lName, age] = bioData;  // note -> 3rd pr jo likha hai vo 3rd variable hoga array me
// console.log(age);

// we can values too
// const bioData = ["vinod", "thapa", 26]; // mostly destructuring is in array
// let [fName, lName, age, degree = "Btech"] = bioData;
// console.log(degree);

// Object destructuring
// Means unpack the values from The Object
// const bioData = {
//   fName: "vinod",
//   lName: "Thapa",
//   age: 22,
// };
// let age = bioData.age;
// console.log(age);

// do object destructuring
// let { fName, lName, age, degree = "BTECH" } = bioData;
// console.log(lName, degree);

// 2) OBJECT PROPERTIES
// we can now use Dynamic Properites

// eg:

// let myName = "vinod thapa";
// const bioData = {
//   [myName] : "hello how are you", // key ki jgh dynamic Name bhjna hai to use square brackets
//   age: 26,
// };
// console.log(bioData);
// // let { name, age } = bioData;

// no need to write key and value, if both are same
// let myName = "vinod thapa";
// let myAge = 22;
// // const biodata = {
// //   myName: myName,
// //   myAge: myAge,
// // };
// // no need to write key and value, if both are same
// const biodata = {
//   myName,
//   myAge,
// };
// console.log(biodata);

// Spread Operator
// eg: suppose we have 2 arrays, array 1 have some data
// and we want to print the same data which is available in first array and we have to add two or more array
// then we can do this by spread operator

// const colors = ['red', 'green', 'blue', 'white'];
// const myColors = ['red', 'green', 'blue', 'white', 'yllow', 'black'];
// // 2nd time add two or more color we need to write it again on myColors array to

// const myfavColor = ['yellow', 'black', ...colors];
// console.log(myfavColor);

// ECMASCRIPT 2016/ES7
/* 
Features: 
1) Array.protoType.includes
2) Exponential Operator

*/

// 1. Array Include -> It gives true or false, if data found it return true and if not flase;
// const colors = ['red', 'green', 'blue', 'white'];
// const isPresent = colors.includes("green");
// console.log(isPresent);

// 2 Exponential oper ( 2**3 ) - 2 raised to the power 3
// console.log(2**4);

// ES8 Features/ ECMASCRIPT 2017
/**
 * 1) string padding
 * 2) Object.values()
 * 3) Object.entries()
 */

// padding
// const message = "26";
// console.log(message);
// console.log(message.padStart(10)); // means starting my se pehle kitni space chaiye
// console.log(message.padEnd(10)); // end se 10 spaces dedga

// Object.values
// const person = { name: "fred", age: 87 };
// // console.log(Object.values(person)); // it return the array containing all the values
// // console.log(Object.entries(person)); // it return the new Array containing all the key value pair
// console.log(Object.keys(person)); // It return the new array containing all the keys

// ES9 Feature/ Ecmascript 2018
// const person = { name: "food", age: 27 };
// const sPerson = { ...person }; // Rest Operator
// console.log(person);
// console.log(sPerson);

// ES10 Feature/ 2019
/* 
featur -> Array.prototype.{flat,flatMap}
2) Object.fromEntries -> basically Object.entries isse hum ik array me convert krre the 
    from Entries se jo array aayega usko wapas again pehle jesa convert krdega object me
*/

// Flat array -> reduce method can solve but agr array ke andr array or uske andr ik hor array
// usko solve nahi kar para tha toh this will solve

// const arr = [
//   ["zone_1", "zone_2"],
//   ["zone_3", "zone_4"],
//   ["zone_5", "zone_6"],
//   ["zone_7", ["zone_8", ["zone_9", "zone_10"]]],
// ];

// console.log(arr.flat()); // bydefault it flat upto 1 level
// console.log(arr.flat(2)); // Enter level in the parameter
// console.log(arr.flat(Infinity)); // jitne marji level ho sabko flat krdega

// Object.fromEntries
// eg
// const obj = {
//   name: "Arsh",
//   age: 26,
// };
// let arrObj = Object.entries(obj); // It convert the key value in array
// console.log(Object.fromEntries(arrObj)); // It again convert the array into Object

// Es2020
/*
Features -> 
1) BigInt dataType ->
*/

// BigInt
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(oldNum + 25); // means iske baad wrong number dene lag gya hai
// means last me dono number n add krdege to it will give correct result
// console.log(9007199254740991n + 25n);  // n means bigInt

// ES2014
// "use strict"; // basiclly isse hume data type mention krna hota hai
// x = 3.14;
// console.log(x);

/******** SECTION 13 -> ADVANCED JAVASCRIPT ********/

/*
1) event propagation (event bubbling and event captuirng) in addEventLisnter
2) HOF (HIGH order function)
3)callback function
4)function currying (we will se after async JS section)
5) callback hell
6) ajax call using xmlhttprequest
7)Bonus section JSON
8) Fetch Api - xmlhttprequest ka same work yehi but yeh better hai
9) pROMISES
10) Async await
11) Error Handling in JS
*/

// section 1 event Propagation
// Event propagation determine in which order the element recieve the event
// They are two type event bubbling and event capturing

// suppose eg:  we have html tags like
// window -> document -> html -> body -> div -> button[click target phase(event) ]
// suppose innerDiv and outerDiv dono pr event listner lgaya hai or hum innerDiv ka chahte hai Ki
// Ye fire ho but sth sth OuterDiv bhi hora hai, this is called  bubble Phase

// And agr iska vice versa ho means inner Div pr click kra taki innerDiv ka event fire ho but firstly
// ParentDiv ka event happen hora hai, This is because capturing phase

// If we travel from top to bottom ie capturing phase
// If we travel from  bottom  to top ie bubling phase

// section 2 -> HOF -> HIGH ORDER FUNCTION

// eg: we need a calculator

// const add = (a, b) => {
//   return a + b;
// };
// const subs = (a, b) => {
//   return a - b;
// };
// const mult = (a, b) => {
//   return a * b;
// };
// const div = (a, b) => {
//   return a / b;
// };

// const calculator = (num1, num2, operator) => {
//   // kis num ko kiske sth kya operation krna hai
//     return operator(num1, num2); // eg: add operator and pass the values
//     // return add(5, 2);
// };

// console.log(calculator(3, 2, subs));

//  HIGH ORDER FUNCTION -> a function which takes another function as an argument is called HOF
// vo function jo dusre function ko as an argument accept krte ho ie HOF.
// eg: calculator function yeh dusre function ko as a argument accept krra hai
// aisa function jiske andr function ko as a argument accept krre hai ie is HOF fn

// 3) CallBack Function
// JO dusre function ke andr as a argument passed hore hai kisi or function ke andr that are callback fn
// eg: add subs -> calculator ke andr aare hai

// Asyncronous Javascript Programing

/***** SECTION 13 -> HOW JS WORKS AND ASYNC PROG *****/

/*
What we will see in this sec

1) Hoisting in JS
2) Scope Chain
3) Lexical Scope in JS
4) Use Strict Mode
5) This Keyword
6) Closures in JS
7) What is async JS prog
8) What is event loop?

*/

// 1) Hoisting in JS

// we have creation phase and execution phase eg: jb node index.js likhte hai tb hota hai yeh

// hoisting in js -> means variables and function declartion are moved to the top of their scope
// before the code execute, Let and const gives error when we doing this Hoisting will work only with var

//  example
// console.log(myName); // op undefined
// var myName;
// myName = "Arsh";

// How it will be in output during creation phase
// execution phase se pehle we have creation phase, so as per our rule, jo bhi varibale and function declare krre hai
// unko sabse upr lejaega apne scope me

// 2: var myName; yeh sabse upr aajega so isme undefined aajega
// 1: console.log(myName); // op undefined
// 3: myName: "Arsh";

// 2 & 3 SCOPE CHAIN AND LEXICAL SCOPING IN JS?

// Scope chain -> It is used to resolve the value of varibale name in JS
//               basically js me jo variables Hai unki kya value hai yeh help krta hai

// scope chain -> it is lexically defined, means that we can see what is the scope chain by looking at the code
// const Pi= 3.14: // means  Pi ki value kya hogi we can easily this 3.14 this is lexcal scope

// Lexical Scoping [Imp] -> Now the inner function can get access to their  parent function variable
// but the vice versa is not true, [means parent function child function ke variable access nahi kr skta but child parent ka kar skta hai ]
// eg:
// let a = "hello "; // global scope
// const first = () => {
//   let b = "how are you ";
//   const second = () => {
//     let c = "Hi I AM Fine";
//     // console.log(a + b + c); // sare function upr hai means parent function me to we can access all the variable
//   };
//   second();
//   console.log(a + b + c); // i can not use C, because parent function vo apne child function ke variable get nahi kar skta
// };                       // this is called lexical scoping

// console.log(first());

// simple define -> inne fn bhar wale fn ke andr jo variable create krre hai vo access kr skta hai but parent fn child fn ke andr
// jo variable hai unko access nahi kar skta

// 4) WHAT ARE CLOSURE IN JS?
// SOL) It is a comination of function bundled together with refernces to its sorrounding state (the lexical environemnt)

// A closure gives you
// access to an outer function scope from an inner function
// In Js, closure are created every time a function is created

// It is same like lexical scoping
// ex
// const outerFn = (a) => {
//     let b = 10;
//     const innerFn = () => {
//         let sum = a + b;
//         console.log(`The sum of two no is ${sum}`);
//     }
//     innerFn();
// }

// outerFn(5);

// Difference between sync and async programming ?
// sol) sync -> eg we have to do 2 work 1st work take 10 min and 2nd work will take 2 min
// so first the first work will be finished first then it will come to second work
// this is sync programming

// asyc means we can do both the parallely means 1st work will continue in the background until the second work
// finish eg: set Time Out

// eg
// SYNC
// function fun2() {
//   console.log("Function 2 is called");
// }
// function fun1() {
//   console.log("function 1 is called");
//   fun2();
//   console.log("function 1 is called again");
// }

// fun1();

// ex async
// const fun2 = () => {
//   setTimeout(() => {
//     console.log("fun2 is called");
//   }, 3000);
// };

// const fun1 = () => {
//   console.log("fun1 is called");
//   fun2();
//   console.log("fun1 is called Again");
// };

// fun1();

// WHAT IS EVENT LOOP ?
//
// PPT EXPLAIN

// Function Currying
// It is a technique to evaluating function with mulitple argument, into a sequence
// of function with single argument

// Eg: sum(5)(2)(4)
// Three argument so we need to return two  more function

// In other words, when a function instead of taking all arguments at one time
//     , takes the first one and return a new function and that takes the second argument and
// return a new function and so forth, untill all arguments have been fulfiled

// function sum(num1) {
//   //   console.log(num1);
//   return function (num2) {
//     // console.log(num1,num2);
//     return function (num3) {
//       //   console.log(num1, num2, num3);
//       console.log(num1 + num2 + num3);
//     };
//   };
// }
// sum(5)(2)(4);

// CALLBACK HELL
// callback -> means a function that takes another function as a argument is called callback
// when there are nested callback function are there we cll it callback hell
// to avoid from callback hell we have promises

// AJAX USING XMLHTTP REQUEST
// check file

// JSON
