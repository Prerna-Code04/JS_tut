let myDate= new Date()
console.log(myDate); //not readable
console.log(myDate.toString());

// let myCreatedDate= new Date(2025, 9, 25) 
// let myCreatedDate= new Date(2025, 9, 25, 1, 30) //date and time
// let myCreatedDate= new Date("2025-10-25") //specific format yy-mm-dd
let myCreatedDate= new Date("07-18-2025")  //MM-DD-YY
console.log(myCreatedDate.toString());

let myTimeStamp= Date.now() //returns milliseconds since beginning
console.log(myCreatedDate.getTime()) //returns till our date

//to seconds
console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate= new Date();
console.log(newDate.getMonth() +1);

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone:
})


