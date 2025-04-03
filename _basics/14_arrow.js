const user = {
    userName : "shivang",
    price : 1000,
    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()//shivang , welcome to website
// user.userName ="sammy"
// user.welcomeMessage()..sammy welcome to website

console.log(this);//{}