//singltone

const mykey = Symbol("key1")
const jsUser = {
    name: "shivang",
    [mykey] : "check key",//symbol
    "full name" : "shivangshukla",
    age: 21,
    email : "shivangshukla8912@gmail.com",
    isloggenIn : false,
    weeks : ["monday","tuesday"],
}
console.log(jsUser.name);
console.log(jsUser["full name"]);
console.log(jsUser[mykey]);//check key
jsUser.email = "hitesh@chat.com"
Object.freeze(jsUser)
jsUser.email = "happushyamu.com"//now email will not change
console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello JS user");
    
}
jsUser.greetingTwo = function() {
    console.log(`hello JS user,${this.name}`);// string interpolation
    
}
console.log(jsUser.greeting);
console.log((jsUser.greeting()));
console.log(jsUser.greetingTwo());





