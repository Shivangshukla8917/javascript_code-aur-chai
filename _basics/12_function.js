
if (true) {
    let num = 10
    const numa = 20
    var bums = 30

    console.log(num);//   =>10  =>bcoz in the same scope
    
}



console.log(num);//error  =>bcoz num is in block scope
console.log(numa);//error => bcoz numa is in block scope
console.log(bums);30//that is why it is not use


