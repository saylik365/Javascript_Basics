//functions are used to perform operations on the data
// and to manipulate the DOM
// and to handle events
// and to handle the API requests
// and to handle the responses

function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("y");
    console.log("l");
    console.log("i");
}
// sayMyName // it is the refrence of the function
sayMyName(); // it is the call of the function

function addition(num1, num2){
    console.log(num1 + num2);
// let result = num1 + num2;
    // console.log("hiooo"); // this line will be executed
    // return result;
    // console.log("This will not be executed"); // this line will not be executed because of the return statement
}
addition(10,20) //30
// addition(100, "20"); //10020
// addition(10, "a"); //10a
const result = addition(10, null); //10
console.log("Without using return: ",result); //undefined because the function is not returning anything
//even if used console.log, it will not return anything, have to use return statement to return the value from the function

function addition2(num1, num2){ //elements defined in the function are called parameters
    return num1 + num2; // return statement is used to return the value from the function
    //another option instead of return is to use console.log, but retrn is better
}
const result2 = addition2(10, 30); //and the values passed to the function are called arguments
console.log("The Addition using Return is: ",result2); //undefined


function loginUserDetails(username){
    // if(username === undefined){ //if the username is not provided, it will be undefined
    //     // console.log("Please enter a valid username"); //if the username is not provided, return this message
    //     // return;
       //}
    //     return "Please enter a valid username"; //if the username is not provided, return this message
    // 

    if(!username){ //! is used to check if the value is falsy or not
        console.log("Please enter a valid username"); //if the username is not provided, return this message
        return;
    }
    return `${username} just logged in`;
}
// loginUserDetails("Sahil"); //it will return nothing because we are not using the return value
// console.log(loginUserDetails("Sahil")); //it will return the value because we are using the return value
console.log(loginUserDetails()); //it will return undefined because we are not passing any value to the function

//use if else statement to check if the value exist or not.

function loginUserDetails2(username = "Sam"){
return `${username} just logged in`;
}
console.log(loginUserDetails2()); // don't need to pass any value to the function, it will take the default value of username as "Sam"
console.log(loginUserDetails2("Sahil")); 
//it wi;; override the default value of username and will take the value passed to the function as "Sahil"