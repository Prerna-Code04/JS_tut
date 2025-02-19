//!== anti pattern strict checking

if(2=="2") console.log("cool"),
console.log("Definitely"); //can do this as well
;

//in switch we add break after default too
const month=3
switch (month) {
    case 3:
        console.log("three number");
        break;
    case 1:
        console.log("one");//SHIFT ALT DOWN KEY TO COPY THIS!
        break;
    case "3":
        console.log("string three"); //hmph ni gaya yaha HAHA
        break;

    default:
        console.log("ni mila");
        break;
}

//if we dont add break then niche ki saari ki saari statements print

// ***************truth and falsey**********************
const userEMail= "something@ai"
if(userEMail){ //userEmail.length===0, Object.keys(emptyobj).length ===0, checking emptya rray and obejct
    console.log("got email");
}else{
    console.log("no email");   
}

// some values are truthy adnf falsey like :
// truthey: string, [], "0", 'false'," ", {} empty obj, function (){} empty function
// falsy: {}, false, 0,-0, BigInt 0n, "", null, undefined, NaN