

// for (let i = 0; i < 5; i++) {
//     const ele = i;
//     if(ele ==3) {
//         console.log("3 is best number");
        
//     }
//     console.log(element);
    
//     //12 3 is best number 345
// }


// for (let i = 0; i <= 6; i++) {
//    console.log(`outer loop value : ${i}`);
//    for (let j = 0; j < 6; j++) {
//     // console.log(`inner loop value ${j} and inner loop${i}`);
//     console.log(i +'*' + j + '=' + i*j);
    
    
    
//    }
// }

/***************************while loop */
// let index=0
// while (index <=10) {
//    console.log(`value of index is ${index}`);
//    index = index+2
// }
/************************while statement */


// let myarray = ['flash','batman','superman']
// let arr = 0
// while (arr < myarray.length) {
//    console.log(`value is ${myarray[arr]}`);
//    arr = arr+1
   
// }


/******************do while statement */
// let score = 1

// do {
//    console.log(`score is ${score}`);
//    score++
   
   
// } while (score <= 10);

/********************** ORDER and FILTER*/

/*************array iteration */

// const arr = [1,2,3,4,5,6]
// for (const num of arr) {
//    console.log(num);
// }


// const greetings = 'shivangshukla'
// for (const greets of greetings) {
//    if (greets == 'n') {
//       console.log(`${greetings} done at shiva`);
//       break;
      
      
//    }
//    console.log(`each char is ${greets}`);
//}

/*******************MAP  pe iteration yaha ni kr skte*/
// const map = new Map;//only unique value will be printed
// map.set('IN' , "INDIA")
// map.set('USA' , "united states of america")
// map.set('fr' , "france")
// // console.log(map);
// for(const [key,value] of map) {
//    console.log(key, '=' , value);//in = india
   
// }

/***************OBJECT ITERATION */
// const myObject = {
//    js : "javascript",
//    cpp : "cpp",
//    rb : "ruby",
//    swift : "swift by apple"
// }
// for (const key in object) {
//   console.log(`${key} shorcut for ${myObject[key]}`);
  
// }

/*********************using FOR IN in array */
// const program = ["do", "while", "py", "java"]
// for (const key in program) {
//   console.log(prgram[key]);//do while py java
//   console.log(key);//0123
// }
/****************FOR EACH */
//const program = ["do", "while", "py", "java"]

// program.forEach(function (val) {
//    console.log(val);
   
// })
// program.forEach((item) => {
//    console.log(item);
   
   
// });

// /*************************** */
// coding.array.forEach((item, index, arr) => {
//    console.log(item, index , arr);
// });

const mycoding = [
   {
      mylanguage: "javascript",
      myextension : "js"

   },
   {
      mylanguage: "python",
      myextension : "py"

   },
   {
      mylanguage: "c++",
      myextension : "cpp"

   }
]

mycoding.forEach((item) => {
   console.log(item.mylanguage);
   
})


