console.log("02">1); //true, converts 02 to number

console.log(null>0); //null is not greater than 0, false
console.log(null==0); // not equal to 0
console.log(null>=0); //true, null is converted to 0 in this comparison
console.log(null<=0); //true

console.log(undefined < 0); //converts undefined to NaN, any comparison with it false   

console.log("02" == 2);
console.log("02" === 2); //checks dataype also

//symbols**************
const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id);
console.log(typeof id);
console.log(anotherId);
console.log(id == anotherId);

const bigNumber= 124346346859358n
console.log(bigNumber);
console.log(typeof bigNumber);

//arrays, objects and functions
const myArray= ["frist", "second", "third", "fourth"]
console.log(myArray);

let myObj ={
    name: "prerna",
    age: 21,    
}
console.log(myObj);
console.log(typeof myObj); //object
console.log(myObj.name); 
console.log(typeof myObj.age); //number

let myFunc= function(){
    console.log("hello world from the function"); 
    return 1;
}
console.log(myFunc()); //returns undefined if no return statement is present











