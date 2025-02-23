// //map
// //if want to add nums
// const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// // const newNums= myNumbers.map( (num) => num+10)
// const newNums= myNumbers.forEach( (item) => {
//     // return item+10 ,undefined
//     console.log(item+10);
// })

// //chaining is when we use 2-3 methods saath me
// const newNums2 = myNumbers.map( (num) => num+10)
//                 .filter( (num) => num>15)
//                 .map( (num2) => num2+5)
// console.log(newNums2);

//reduce, used in shopping cart
//accumulator pe sabse pehel inital value dalti h but phir jo value banti h + akrke then vo dalti h
// const ank= [1,2,3]
// const initial= 0;
// const myTotal= ank.reduce(function (acc,currval) {
//     console.log(acc, currval);
    
//     return acc+currval
// }, 0) //this val goes in accumulator

// const myTotal= ank.reduce((acc,currval) => (acc+currval),0)
// console.log(myTotal);

const shoppingCart = [
    {
      itemname: "Laptop",
      price: 899.99
    },
    {
      itemname: "Wireless Mouse",
      price: 25.99
    },
    {
      itemname: "Keyboard",
      price: 49.99
    },
    {
      itemname: "Headphones",
      price: 199.99
    }
  ];

  
const total= shoppingCart.reduce((acc,currval) => (acc+ currval.price),0)
console.log(total);//cool cutie done khud!
