const coding= ["java","ruby","python","c++"]
const value= coding.forEach((item) => {
    console.log(item);
   // return 1 still undefined
}) //without below line it prints these values
//with below line it prints the value and undefined
console.log(typeof value); //type of value is undefined
// foreach doesnt return values


const nums= [1,2,3,4,5,6,7,8,9,10]
const newNums= nums.filter( (num) => num>9) //returns values, implicit return
// {num>9} when i do this, it expects a return statement thats why itwasng workign withut return, is more of a explicit return
//{} if scope opended then return likhna padega
//takes a callback function ONLY
console.log(newNums); //returns value whicha re greater than 4, in an array

const newForNums= []
nums.forEach( (item) => {
    if(item>4){
        newForNums.push(item)
    }
})

console.log(newForNums);

const books = [
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publish: 1960
    },
    {
      title: "1984",
      genre: "Dystopian",
      publish: 1949
    },
    {
      title: "The Great Gatsby",
      genre: "Classic",
      publish: 1925
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: 1951
    }
  ];

const printBooks= books.filter( (bk) => bk.genre==='Fiction')
const printBooks2= books.filter( (bk) => bk.publish>1952)

console.log(printBooks);
console.log(printBooks2);

const printFor= books.forEach( (item) => {return item.genre==='Fiction'}) //no values returned
console.log(printFor);

