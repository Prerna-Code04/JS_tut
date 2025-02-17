
// //***************************************PART 2********************************************* 

// const shaktiMan= new Object() //singleton object
// shaktiMan.age= 23
// shaktiMan["isFlying"]= true
// shaktiMan["id"]= "abc"
// // console.log(shaktiMan);
// // console.log(typeof shaktiMan);


// // const user= {
// //     email: "cool@cool.com",
// //     fullname:{
// //         username:{
// //             firstname: "prerna",
// //             lastname: "kandpal"
// //         }
// //     }
// // }

// // console.log(user);
// // console.log(user["fullname"]["username"]["lastname"])
// // //console.log(user["fullname"]?.["username"]?.["lastname"]); when api calls are made, adds protection

// const obj1={1: "a",2: "b"}
// const obj2={30:"c",40:"d"}

// // const obj3= {obj1, obj2} //creating objects in object
// /*like this in arrays
// [
//   [1, 2, 3],
//   [4, 5, 6]
// ] */

//   const obj3= Object.assign({}, obj1, obj2) //preferred
//   console.log(obj3); // for {} look in onenote
//   /*generally to add more than 2 objects, if this is not here then
//   all teh porpertes will be copied in obj1 which is not a good pracice
//   hence when we add {} then propeorites of all objects/sources are int his target
//   */

//   //spread one
//   const obj4= {...obj1, ...obj2}
//   console.log(obj4);
  
//   //wehn we recieve data from database
//   let users=[
//     { 
//         id:1,
//         name: "a"
//     },
//     { 
//         id:2,
//         name: "ba"
//     },
//     { 
//         id:3,
//         name: "cba"
//     }
//   ]

//   console.log(users[1].name);
//   console.log(shaktiMan);
//   console.log(Object.keys(shaktiMan)); //type is array!
//   console.log(Object.values(shaktiMan));
//   console.log(Object.entries(shaktiMan)); //array ke andar key value ka array hota h
//   // [ [ 'age', 23 ], [ 'isFlying', true ], [ 'id', 'abc' ] ]

// console.log(shaktiMan.hasOwnProperty('isFlying')); //to check if a property exist or not
// //to check more methods same console one, ans prporty

// ************************PART 3**********************************
  const course= {
    courseName: "js in hindi",
    price: 999,
    courseTeacher: "hitesh sir"
  }
  //course.courseName is the way we fetch the value but if we wanna do it 10 times,w e wont bew ritign this whole 10 times -->
  const {courseTeacher: instructor}= course //destructing an object value 
  console.log(instructor);
  







