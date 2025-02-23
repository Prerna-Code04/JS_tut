// //how to iterate over objects?
// const myWay= {
//     js: 'javascript',
//     cpp: 'c++',
//     rb:'ruby',
//     swift: 'swift by apple'
// }

// //for objects we use for in loop
// for (const key in myWay) { //there is nothing like value in myWay
//     console.log(key, ": ", myWay[key]); //gives the keys
//        //to access value we do object[keyf]
// }

// //when we do forin loop on array then we get keys that is index value, one of the reason why objects was itnroduced because in array
// //we haev fixed keys, but in object we can define our own
// const myArr= ["a", "b","c","d"]
// for (const key in myArr) {
//     console.log(key, ": ", myArr[key]); 
// }
// //this for in loop when applied on maps, wont give any error jsut wont print anything coz htey are not iterable.

// //for each loop, map are protoypes of array, high order function
// const lang= ['java','python','js','html']
// lang.forEach( function (item) {
//     console.log(item);
    
// } ) //callback function, iska koi naam nahi hota and ye () andar ek parameter jo ki har value ko leke aata h apne andar

// lang.forEach((value) => { //using arrow function
//     console.log(value);
// })

// const printMe= (name) =>{
//     console.log("value printed: ",name);
// }
// //passing a function
// lang.forEach(printMe) //cool ccoool

// myArr.forEach((item, index, arr) => {
//     console.log(item,index,arr); //gives the item then index value then whole array
    
// })

//foreach loop on array of objects
const objArray= [{
    "color": "blue",
    "size": "big"
    },
    {
    "color": "pink",
    "size": "small"
    },
    {
    "color": "brown",
    "size": "medium"
    }
]
//used in db, coz wehn data comes from db, it comes in array of objects
objArray.forEach((item,index) => {
    console.log(index, item.color, item.size); //everyobject is now an item
    //if written just item, prints the whole object
})