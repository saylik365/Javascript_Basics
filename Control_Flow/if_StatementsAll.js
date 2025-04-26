//if
 //if(true) or if(false), if true it will be executed, if false it will not get executed.

 /* const isuserLoggedIn = true

 if(isuserLoggedIn){
    console.log("Executed")
 }
 console.log("not Executed")*/

 //the above code will give this output: 
    //Executed
    //not Executed

//so there is another statement, else:
const temperature = 41
if(temperature ===41){
    console.log("Less than 50")
}
else{
    console.log("greater than 50")
}

// scope:

const score = 200
if(score > 100){
    const power = "fly"
    var power2 = "Sing"
    console.log(`user can : ${power}`) //user can : fly
}
// console.log(`user can : ${power}`)//ReferenceError: power is not defined because it's scope is only in the if block
//where the curly braces end, the scope ends., but if we use var instead of const...

console.log(`user can : ${power2}`) // user can : sing, so not recommended to use var. use let and const

//< less than , > greater than, <=, >=, ==, !=, ===, !==


//nested if
const balance = 2000
// if(balance < 500) console.log("Test"); //implicit scope, executes in one line.

if(balance < 500){
    console.log("less than 500")
}else if(balance < 750){
    console.log("less than 750")
}else if(balance < 900){
    console.log("less than 900")
}
else{
    console.log("greater than 500, 750, 900")
}

//use of logical ope
const userloggedIn = true 
const debitcard = true

if(userloggedIn && debitcard){
    console.log("Allow to buy course")
}
//&& operator should have both condition true. otherwise, it will not execute.

const userloggedInfromGoogle = false
const loggedinfromEmail = true

if(userloggedInfromGoogle || loggedinfromEmail){
    console.log("User Logged In");
}
// || OR operator can work if one of the operand is true and other is false. 
//if both of the operands happen to false, it won't execute, but if both are true, will execute.