

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);
/***************OR */
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.filter((num) => num > 4)
// BASIC OF FILTER
/****************OR */



//Const newNums = myNums.filter((num) => {
   // return num >4})
    //console.log(newNums);
    //using { }we must have to use return function



// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
    
// })
// console.log(newNums);

/********************** */

/**************************FILTER */
// const books = [
//     {
//         title: 'bk1', genre : 'fiction' , publish : 1981 , edition :2004
//     },
//     {
//         title: 'bk2', genre : 'horror' , publish : 1992 , edition :2008
//     },
//     {
//         title: 'bk3', genre : 'drama' , publish : 1999 , edition :2003
//     },
//     {
//         title: 'bk4', genre : 'science' , publish : 2009 , edition :2013
//     },
// ];
// let userbooks = books.filter((bk) => bk.genre === 'drama')

// // userbooks = books.filter((bk) => { return bk.genre==='history' && bk.publish>=1999})
// console.log(userbooks);




/**********************  IMPORTANT******************************** */
 const mynums = [1,2,3,4,5,6,7,8,9]
// const value = mynums.map((num) => num +10)
// console.log(value);

/****************l */
const newNums = mynums.map((num) => num *10).map((num) => num+1).filter((num) => num>=40)
// console.log(newNums);
/*********************** */
const myTotal = mynums.reduce(function (acc , currval) {
//OR   const myTotal = mynums.reduce((acc , curr) => acc+curr , 0)    

//     console.log(`accc: ${acc} and currval : ${currval}`);
    
//     return acc +currval;
// }, 0)
// console.log(myTotal);
//})

//REDUCE FUNCTION IS used to sum of array using accumulator and current value
