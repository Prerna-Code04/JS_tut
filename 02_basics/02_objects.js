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

//***************************************PART 2********************************************* 

const shaktiMan= new Object() //singleton object
shaktiMan.age= 23
shaktiMan["isFlying"]= true
shaktiMan["id"]= "abc"
// console.log(shaktiMan);
// console.log(typeof shaktiMan);


// const user= {
//     email: "cool@cool.com",
//     fullname:{
//         username:{
//             firstname: "prerna",
//             lastname: "kandpal"
//         }
//     }
// }

// console.log(user);
// console.log(user["fullname"]["username"]["lastname"])
// //console.log(user["fullname"]?.["username"]?.["lastname"]); when api calls are made, adds protection

const obj1={1: "a",2: "b"}
const obj2={30:"c",40:"d"}

// const obj3= {obj1, obj2} //creating objects in object
/*like this in arrays
[
  [1, 2, 3],
  [4, 5, 6]
] */

  const obj3= Object.assign({}, obj1, obj2) //preferred
  console.log(obj3); // for {} look in onenote
  /*generally to add more than 2 objects, if this is not here then
  all teh porpertes will be copied in obj1 which is not a good pracice
  hence when we add {} then propeorites of all objects/sources are int his target
  */

  //spread one
  const obj4= {...obj1, ...obj2}
  console.log(obj4);
  
  //wehn we recieve data from database
  let users=[
    { 
        id:1,
        name: "a"
    },
    { 
        id:2,
        name: "ba"
    },
    { 
        id:3,
        name: "cba"
    }
  ]

  console.log(users[1].name);
  console.log(shaktiMan);
  console.log(Object.keys(shaktiMan)); //type is array!
  console.log(Object.values(shaktiMan));
  console.log(Object.entries(shaktiMan)); //array ke andar key value ka array hota h
  // [ [ 'age', 23 ], [ 'isFlying', true ], [ 'id', 'abc' ] ]

console.log(shaktiMan.hasOwnProperty('isFlying')); //to check if a property exist or not
//to check more methods same console one, ans prporty

  
  
  







