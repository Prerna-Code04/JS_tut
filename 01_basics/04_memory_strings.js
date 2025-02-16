//stack and heap memory
let instaName= "prerna004"
let anotherName= "shushh04"
anotherName= "notFound"

console.log(instaName); //this is not changed because to anotherName a copy of the value is passed and not original
console.log(anotherName);

//strings
let name= "prerna"
let repoCount= 434

console.log(name + repoCount + "cool this is concaetnation"); //not a very modern way
console.log(`my name is: ${name} and my repocount is: ${repoCount}`);

//another way todefine a string
const newWay= new String('somethingnew') //using object
console.log(newWay);
// console.log(newWay[1]);
// console.log(newWay.__proto__);

console.log(newWay.charAt(1));
console.log(newWay.indexOf('n'));

const smallString= newWay.substring(0,4) //takes only +ve values
console.log(smallString); 

const slicedString= newWay.slice(-8,-1) //here -1 is like this takes the string reversed.
console.log(slicedString);
const spaceString= new String("           cool         ")
console.log(spaceString);
console.log(spaceString.trim());

const url= "https://prerna%20.com"
console.log(url.replace('%20','-'));
console.log(url.includes('.'));
console.log(url.split('/',2)); //shows only the first two

let old= "okay"
let notOld= "notokay"
notOld= old
old= "bruh"
console.log(old);
console.log(notOld); //can do this, but canot modify them like notold[0]='p'












