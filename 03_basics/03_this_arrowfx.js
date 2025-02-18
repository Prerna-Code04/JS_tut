// //came in 2015
// //this keyword tells currect context
// const user={
//     name: "sam",
//     coursePrice: 999,
//     welcomeMsg: function(){
//         console.log("hey welcome to the course", this.name);
//         console.log(this);
//     } //here name cant be accessed without user or this
//     //{ name: 'sam', coursePrice: 999, welcomeMsg: [Function: welcomeMsg] }
    
// }

// user.welcomeMsg()
// user.name= "prerna"
// user.welcomeMsg()
// user.this() //when in node, this is pointing to {}
//when in browser, then we get window, browser ek andar global object is window

//arrow function
// function coffee(){
//     let user= "hitesh" 
//     // console.log(this); //when we print this in a function then we get many values
//     // console.log(this.user);   //getting undefined, woks only in object not in functions
// }
// coffee(); 

// const chai= () => {
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()
/*diff between arrow function and others:

*/

// const addThree=(n1,n2,n3) => { //basic implementation of arrow function
//     return n1+n2+n3 //explicit return 
// }

const addThree=(n1,n2,n3) => (n1+n2+n3)
 //implicit return, when code of one line then can return like this also  
//if {} is used have to return but if not then no need to
console.log(addThree(1,2,3));

// why is this used? if we have to return an object, then it needs to be wrapped in parantheses () like this
// const trial= () =>{username: "damn"} //return undefined
const trial= () =>({username: "damn"}) //does the work OBJECT RETURNING FROM ARROW FUNCTION!
console.log("from trial", trial());  

//using arrow function while traversing array
const myArray= [1,2,3,4]
myArray.forEach(() => {})

