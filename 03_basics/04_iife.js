//global scope pollution,  in readme
//iife:

(function dbConnection(){  //named iife
    console.log("db is connected");
})(); //this is the execution call  
//here there needs to be ; thats how it will know that this function is finish
((name) => {
    console.log(`db2? connected? ${name}`);
})("damn")