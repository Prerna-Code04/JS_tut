//loops
// for (let bruh = 0; bruh < array.length; bruh++) {
//     const element = array[bruh];
// }

//like in java when gets out of bound, and error
//here it wont go in error, but will show the value as undefined
//whats three.js

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