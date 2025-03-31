function sayName(){ 
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
}
sayName()


// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(4,4)//8
// addTwoNumbers(4, "4")//44
// addTwoNumbers(4,null)//4

// function addTwoNumber (number1,number2) {
//     // let result = number1 + number2
//     // return result;
//     console.log(number1 + number2)//9
// }
// const result = addTwoNumber(4,5)
// console.log("result:" , result);//9

// function loginUserName (username) {
//     if(!username) {//(username === undefined)
//         console.log(("please enter a username"));
//         return;
        
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserName("shivang"));
// console.log(loginUserName());


/************************FUNCTION2 */
// function calculatePrice (...num1) {
//     //(val1, val2,...num1)  =>500,300
//     return num1
// }
// console.log(calculatePrice(200,400,500,300));

/////////

// const user = {
//     username: "shivang",
//     price : 199,
// }
// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
// }
//handleObject(user)
// handleObject ({
//     username:"sam",
//     price:500
// })

////////////////////

const newArray = [200,300,400,500]
function returnSecondValue (getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,300,400,500]));

////////////////








