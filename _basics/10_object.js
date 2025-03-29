//const tinderUser = new object()
//                OR
const tinderUser = {}
tinderUser.id = "1234ui"
tinderUser.name = "shivang"
const regularUser = {
    email: "shiv@GMAIL.COM",
    fullname: {
        firstname: "shivanggggg",
        lastname: "shukla"
    }
}
console.log(regularUser.fullname);//{ firstname: 'shivanggggg', lastname: 'shukla' }
console.log(regularUser.fullname.firstname);//shivangggg

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"c", 4:"d"}

// const obj3 ={obj1,obj2}
// const obj4 = Object.assign({}, obj1 , obj2)
// console.log(obj3);//{1to 4} in simple way=>1:"a"
//            OR
const obj3 = {...obj1,...obj2}
console.log(obj3);
// const logoo = {
//     {
            
//     },
//     {

//     },
// }  //to aaccess above method


/*******************************MOST IMPORTANT */
console.log(Object.keys(tinderUser));//gives keys in the datatype of array
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));

/********************** deque structure */

const course = {
    coursename: "js in hindi",
    price: "9090",
    courseInstructor: "hitesh"
};
//course.courseInstructor
/***********************OR        */
const {courseInstructor:instructor} = course// courseinstructor value le rha hai course se
//^above courseinstructor also be like=> courseinstructor:instructor(means we call it with both the name)
console.log(courseInstructor);
console.log(instructor);
/******************JSON    */
// {
//     "name": "hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }
//API   => it put its works to someone else to handle(eg:menu documentation in restaurant where you order samosa (bt you dnt care how it will be form) )
[
{},
{},{

}
]//also reprsent api




