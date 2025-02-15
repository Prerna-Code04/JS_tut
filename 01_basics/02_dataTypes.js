"use strict"; //treat all the code of js as newer version

// alert("hello") not allowed we are using nodejs not browser verion

let x=18
let state=null //object? aaya h
let name= "people"

console.log(typeof state);

//conversion
let score= "33abc" //value will store NaN wont throw any error
let anotherScore= null //when null is converted, its value is 0
console.log(typeof anotherScore);

let valueInNum= Number(anotherScore)
console.log(typeof valueInNum)
console.log(valueInNum);
//similarly for undefined we will have NaN, and if boolean value like true then 1 and if false then 0

//boolean
let isLoggedIn= " "
let boolValue= Boolean(isLoggedIn)
console.log(boolValue);

//string
let someVal= 123
let stringValue= String(someVal)
// let idk= Undefined( someVal) nothing like this exist
// console.log(idk);

console.log(stringValue);
console.log(typeof stringValue);




