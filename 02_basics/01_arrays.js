// let myArr= [0,1,2,3,true, "hey hitesh"] //can contain values with different dataypes
// let myArr2= new Array(1,2,3,4)

// myArr2.push("hello")
// myArr2.push(true)
// myArr2.pop()
// myArr2.unshift("inthestart")
// myArr2.shift()

// console.log(myArr2.includes("hey"));
// console.log(myArr2.indexOf("hey")); //if value doesnt exist then return -1

// let newArr= myArr2.join() //converts array to a string
// console.log(myArr2);
// console.log(newArr);
// console.log(typeof newArr);
// console.log(typeof myArr2);

// //slic and splice
// let arr1= [1,2,3,4,5,6,7,8]
// console.log("original array", arr1)
// console.log("original array"+ arr1) //converts arr1 to string

// let slicedArr= arr1.slice(1,3)
// console.log("sliced array", slicedArr);
// console.log("now array", arr1);

// let splicedArr= arr1.splice(1,3) //removes the element from original array as well
// console.log("spliced array", splicedArr);
// console.log("now array", arr1);

// ****************PART2*****************
let marvel= ["ironman", "cap", "thor", "blackwidow"]
let dc= ["superman", "aquaman", "shang-chi", "batman"]

//trying to merge arrays with push
// console.log("array pushed", marvel.push(dc)); this returns 5 as answer that is the length of the array
// marvel.push(dc)
// console.log("array pushed", marvel); //changed our array after operation
// console.log(marvel);

//concat operator
// console.log("array concat", marvel.concat(dc)); //works and doesnot change the array after this like if i print marvel, teh oriiginal one will be printed
// console.log(marvel);

//spread operator, used to merge two or more arrays, more used
let all_heros= [...marvel, ...dc]
// console.log(all_heros);

let weird_Arr= [1,2,3,[4,5,6],7,[6,7,[1,2]],8]
let not_weird_arr= weird_Arr.flat(2) //wehn given 0 provides the asame array, when 1 then array is solved.
// console.log(not_weird_arr);

//converting to array
console.log(Array.isArray("prerna"));
console.log(Array.from("prerna"));
console.log(Array.from({name: "prerna"})); //returns empty string coz doesnt know if it should make array of key or value

//of
let score1= 100
let score2=200
let score3= 300
console.log(Array.of(score1,score2,score3));












