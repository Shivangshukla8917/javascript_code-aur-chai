//primitive data types

//7 types : string,number,boolean,null,undefined,symbol,bigInt

// const id = symbol('123')
// const realid = Symbol("123");// gives a unique value
//console.log(id === realid);

// const value = 123245678998754n// n represent bigint

//reference (non primitive)
//array,objects,functions
// const heroes = ["shaktiman","raju","shyam","baburao"];
// let obj = {
//     name: shivang,
//     age :21
// }
// const myfun = function() {
//     console.log("hello its me");
// }

//************************************STACK and HEAP memory */

//stack (uses primitive datatype)(use copy values)...........heap (uses non-primitive datatype)(use refernce values)
let myName = "shivang"

let friendName = myName
friendName = "sundaram"

console.log(myName);
console.log(friendName);

let userone = {
    email: "shiv@gmail",
    id : 53,
}
let usertwo = userone;
usertwo.email = "sundar123@gmail"

console.log(userone.email);
console.log(usertwo.email);