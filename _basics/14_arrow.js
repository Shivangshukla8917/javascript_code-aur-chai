// const user = {
//     userName : "shivang",
//     price : 1000,
//     welcomeMessage: function() {
//         console.log(`${this.userName} , welcome to website`);
//         console.log(this);
//     }
//}

// const chai = function() {
//     let userName = "shiv"
//     console.log(this.userName);
    
// }

const chai = () => {
    let userName = "shivang"
    console.log(this.userName);//undefined
    
}
chai()




// user.welcomeMessage()//shivang , welcome to website
// user.userName ="sammy"
// user.welcomeMessage()..sammy welcome to website

// console.log(this);//{}
//^= only use in Object(this)



 


/************************ EXPLICIT FUNCTION */
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

/************************** IMPLICIT FUNCTION */
// const addTwo = (num1 , num2) => (num1 +num2)

const addTwo = (num1 , num2) => ({userName: "hitesh"})//using() to refer an object

console.log(addTwo(3,4));
