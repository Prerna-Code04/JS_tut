const score= 600
console.log(score);

const newScore= new Number(40000)
console.log(newScore);
console.log(typeof newScore);

//methods
console.log(score.toString().length);
console.log(newScore.toFixed(2));

const someNum= 123.8966
console.log(someNum.toPrecision(3)); //return a string

const hundreds= 1000000
console.log(hundreds.toLocaleString()); //converts to number with , by default its us standard
console.log(hundreds.toLocaleString('en-IN'));
// there are other values to know as well, like MAX_vALUE, MIN_VALIUE and all
console.log(Number.MAX_VALUE);

//*********************MATH*********************************** */
console.log(Math);
console.log(Math.round(4.5));
console.log(Math.floor(4.9)); //only givesthe lower value
console.log(Math.ceil(4.1)); //gives the higher value

console.log(Math.random()); //gives valyue only between 0 and 1
console.log((Math.random() *10) + 1); //will give values above 1 only
console.log(Math.round((Math.random() *10 + 1))); //only  number values, no deicmal 
//or for above can do Math.floor()

//to have random values between a range
let min= 10
let max=20
console.log(Math.floor(Math.random() * (max-min+1))+min);








