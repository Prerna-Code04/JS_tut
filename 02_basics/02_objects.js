// // two ways fro creating an object
// //1st:  Object.create, constructor way
// //literal way: 
// let mySym= Symbol("myKey") //wehn using a symbol in an object, it needs to be delcared outside!

// const jsUser= { //in object we have key value pairs! but in object we have these key value paris
//     name: "Hitesh", //here name is a string as per system it sets it to that only
//     "full name": "prerna kandpal",  //here this cant be accessed with the . method!
//     age: 18,
//     location: "jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Mon", "Sat"],
//     [mySym]: 54,
//     1: 3
// }

// console.log(jsUser.isLoggedIn); //not a good way
// console.log(jsUser["isLoggedIn"]); //a better way!
// // console.log(jsUser.full name); //cant do it this way have to do it like this
// console.log(jsUser["full name"]);

// //often asked to take symbol as a key and print it
// console.log(jsUser[mySym]); //here this is a string not a symbol
// console.log(typeof mySym); //returns symbol, if jsUser[mySym] will return string coz it checks hte vlaue of the symbol 
// console.log(typeof jsUser[mySym]); //returns number coz it has number now cool!
// console.log(typeof jsUser[1]); //returns string

// //takeaway, that when we check thru ksUser[erhgr] it checks the type of value stored in ti and not they key coz it will be string only except symbol which is not converted tos tring!

// //changing values
// jsUser["email"]= "prerna@123.com"
// console.log(jsUser);
// Object.freeze(jsUser) //now values cant be hcanged
// jsUser["email"]= "what.com"
// console.log(jsUser);

// //function in object
// jsUser.greeting= function(){
//     console.log("hello js user: ", this["full name"]); //will ahev properties of that object!
//     // return null; if return statement added tehn whatver written here is printed rather than undefined!
// }
// console.log(jsUser); //added to the object
// console.log(jsUser.greeting); //returns the reference to the function [Function (anonymous)]
// console.log(jsUser.greeting()); //returns messaeg and undefined as we said
