const accountId= 1234  // Constant, cannot be reassigned
let accountEmail= "prerna@gmail.com"  // Block-scoped
var accountPass="cool12"  // Function-scoped (or global if declared outside)
accountCity= "Jaipur"  // Implicitly global (BAD PRACTICE)

// accountId=54 //this is not allowed
{
    accountEmail= "kandpal@gmail.com"  // Modifies the outer 'accountEmail' (let)
    accountPass= "ntocool21"  // Modifies the outer 'accountPass' (var)
    accountCity="banglore"  // Modifies the outer 'accountCity' (global)
    let name= "baby"  // Declared using 'let' inside block (scoped to this block)
    console.log("in the block")
    console.table([accountEmail, accountPass, accountCity, name])
}


// console.log(accountId)
name="kaaju"  // ERROR! 'name' is not defined outside the block.
console.log("outside the block");
console.table([accountId, accountEmail, accountPass, accountCity, name])

