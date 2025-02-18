// // let a=10
// // const b=20
// var c=300
// //var had problem with block scoping thats why let was introduced

// //this curly braces is scope, when comes with function of conditionals
// //outside this its GLOBAL SCOPE
// if(true){
//     let a=10
//     const b=20
//     var c=30 //same problem if it was written c=30
// }
// // console.log(a); //when trying to print a, it shows error! becuase a is defined with let in block hence cant be accessed outside it
// // console.log(b); //ERROR! same reason as above
// console.log(c); //can be printed easily HENCE SCOPING ISSUE

// /*here when c was declared by programmer a lets suppose whose value is 300, but now below
// the other programmer said its 30, hence bad for programmer a, now this could have been done in
// the other file as well and same issue would be there
// */

//********************PART2****************************
// function one(){
//     const user= "cool"
//     function two(){
//         console.log("from function two: ", user);
//         const website= "notcoll.com"
//     }
//     // console.log("from function one: ", website); error! cant do!
//     two()
// }
// one()

// /*one part of closure is that inside function cna access the [roperties of outside function 
// but the outside function cant access the inside function property 
// MORE TO KNOW ABOUT THIS!*/

// //closure with if
// if(true){
//     const username= "cool"
//     if(username==="BLAH"){
//         var othername= "amicool?"
//         const website= "isanyonecool.com"
//         console.log(username+website);
//     }
//     console.log(othername); //can do HENCE SCOPING ISSUE
//     //if this second if condition is not met, then othername will be printed as undefined
//     // console.log(website);   cant do this! 
// }
// // console.log(username); same cant do this

//********************INTERESTING************************
 
console.log(addOne(5));

function addOne(num){
    return num+1
 }
console.log(addTwo(5));
 const addTwo= function(num){ //this is an expression! 
    return num+2
 }
 //hoisting:  cant use a function before declaration as we are doing in thrid by storing it in a variable

