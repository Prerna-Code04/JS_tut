//loops
// for (let bruh = 0; bruh < array.length; bruh++) {
//     const element = array[bruh];
// }

//like in java when gets out of bound, and error
//here it wont go in error, but will show the value as undefined
//whats three.js

//high order array loops
//for of loop, object, array, string are iterable
let myArr= [1,2,3,4,5,6]
for (const element of myArr) { //here object is something on which we want to iterate
    console.log(element);
}

let myStr= "hello world!"
for (const greet of myStr) {
    console.log(greet);
}

//maps: object, works in key:pair format and remembers the order in which we feed the data, 
//no duplicate value, only unique 8:33
const myMap= new Map();
myMap.set(1, "monday")
myMap.set(2, "tuesday")
myMap.set(3, "wednesday")
myMap.set(4, "thursday")
myMap.set(1, "monday") //wont throw error, jsut wont add


console.log(myMap);
// for (const element of myMap) {
//     console.log(element); //will print key value pair as array
// }

for (const [key,val] of myMap) {
    console.log(key, ':',val);   //prints as key value pair
}

const myObject= {
    'g1':'valorant',
    'g2':'minecraft'
}
for (const [key,val] of myObject){
    console.log(key, ':',val); //its not iterable in this way! 
}
for (const element of myObject) {
    console.log(element);
     //objects not iterable this way as well
}
