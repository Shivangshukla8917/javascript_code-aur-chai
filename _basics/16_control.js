// const temp =41
// if(temp === 40){
//     console.log("less than 50");
    
// }else {
//     console.log("temp is greater than 50");
    
// }
//<,>,<=,>=,==,!=,===,!==  


/********************ONE */
//if (balance > 500) console.log("test"),console.log("test2");


/***********multiple condition checking */
// const userloggedIn = true
// const debitcard = true
// const loggedFromGoogle = false
// const loggedFromEmail = true

// if(userloggedIn && debitcard && 2==3) {
//     console.log("allow to buy course");
    
// }
/**************SWITCH */
const month = "march"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;

    case "mar":
        console.log("march");
        break;

    case "apri":
        console.log("april");
        break;
    default:
            console.log("deafult case match");
        break;            

        
}





/******************************TRUTHY */

// const userEmail ="shiv"//"",[]
// if(userEmail) {
//     console.log("got user email");//gue,dhue,gue
// }else {
//     console.log("dont have user email");
    
// }

//FALSY VALUES => false, 0 , -0 , BigInt 0n, "" , null , undefined , NaN

//TRUTHY VALUES => "0", "false", "" , [], {}, function(){}

const userEmail = []
if (userEmail.length === 0) {
    console.log("array is empty");
    
}
const emptyobj = {}

if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

//Nullish Coalescing Operator(??): null undefined

// let val1;
//val1 = 5 ?? 10 //5
//val1 = null ?? 10 //10 as it check the last functionality
//val1 = undefined ?? 15 //15

//console.log(val1);

//TERNIARY OPERATOR
//condition ? true : false

const iceteaprice = 100
iceteaprice <=80 ? console.log("less than 80") :
console.log("more than 80");
;


