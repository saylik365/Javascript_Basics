const user = {
    username : "Sayli",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to the course`);
        //this keyword is used to access the current context of anything
        console.log(this) 

    }
}
// user.welcomemessage();
// // Arrow function does not have its own this keyword, it takes the this keyword from the parent scope
// user.username = "Siddhi";
// user.welcomemessage();

console.log(this); //in node environment, this refers to the global object, so it return an empty object
// in browser environment, this refers to the window object

function one(){
    console.log(this)
}
one();

// function two(){
//     let username = "Sayli"; 
//     console.log(this.username) //undefined
// }
 
// two(); 
// //undefined, because this keyword is not used in the function, so it will not refer to the global object.
// in the browser, it will return undefined, because the username is not defined in the global scope

const variable = function two(){
    let username = "Sayli"; 
    console.log(this.username) //undefined
}
//this is not used in direcytly in the function. in above example, we have used in the object, so it will refer to the object.

//+++++++++++ Arrow function ++++++++++++++
// Arrow function does not have its own this keyword, it takes the this keyword from the parent scope
// Arrow function is not used in the object, so it will not refer to the object.
// Arrow function is used to create a function in a shorter way.
// Arrow function is not hoisted, so it will not work if we call it before the function declaration.
//arrow function is mainly used for callback functions, so that we can use the this keyword from the parent scope.

const user1 = () =>{
    let username = "Sayli";
    console.log(this.username) //undefined, because this keyword is not used in the function, so it will not refer to the global object.
    console.log(this) //will return empty object
}
user1(); //undefined

//+++++++ Explicit return ++++++++++
// if we are using more than one line of code in the function, we have to use return keyword to return the value from the function.
// const addTwoNum = (num1, num2) => {
//     return num1 + num2; //return the sum of two numbers
// }
// console.log(addTwoNum(2, 3)); //5



//+++++ implicit return ++++++
// we donn't have to use return keyword in arrow function, if we are using only one line of code in the function.
//just remove curly braces and return keyword, it will work the same way as above example.

const addTwoNum = (num1, num2) => num1 + num2; //return the sum of two numbers
// const addTwoNum = (num1, num2) => (num1 + num2); //return the sum of two numbers
console.log(addTwoNum(2, 6)); //5

const objectReturn = () => ({Username : "Sayli"}) //return the username in the object
console.log(objectReturn()); 



