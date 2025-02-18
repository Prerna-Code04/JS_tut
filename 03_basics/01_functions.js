function addTwonumber(num1, num2){
    console.log(num1+num2);
}

function betteradd(num1,num2){
    let result= num1+num2;
    return result;
}


console.log("result: ", betteradd(4,5));
console.log(betteradd()); //NaN value!

function loggingNow(name= "cool"){
    if(name== undefined){ //can also write !name
        console.log("enter a nem brother"); //if this then buddy wont even enter this HAHA
        return;
        
    }
    return `${name} is up now`
}

console.log(loggingNow("prerna"));
console.log(loggingNow()); //wehn no value passed, its undefined!

//**********************PART 2*************************** 
//rest opertator
function calPrice(val1, val2, ...num1){ // printed the number as array
    return num1 //now when this will be called 400 will be val1, 600 will be val2 and rest will be num1
}
console.log(calPrice(400, 600)); //will print the first number only.
//if i want all these three variables to print then add ...

// //passing object in function
const user={
    product: "sam",
    prices: 9999
}
function handleObject(anyObj){
    return `my name is: ${anyObj.product} and the price is: ${anyObj.prices} `;
}
//here if i change the variable to cost, then it will print price is undefined, thats why ppl
// prefer typescript coz here we are not checking if cost even exists in this object, similarly not chekcing if we are pasing object
console.log(handleObject(user));

//can also pass the object directly without defining it outside like
console.log(handleObject({
    product: "pen",
    prices: 20
}));

const myArr= [100,200,300,400]
function returnSecondValue(Arrval){
    return Arrval[2]
}
console.log(returnSecondValue(myArr));
//similarly returnSecondValue([1,2,3,4,5])








