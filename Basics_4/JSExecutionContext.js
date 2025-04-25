// Javascript Execution Context - means how js code is executed
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context it is a property of the global execution context
// 4. Module Execution Context

//in node js env, this is put in the global execution context
// in browser env, this is put in the window object

//javascript is a single threaded language, meaning it can only do one thing at a time.
// but it can do multiple things at the same time using the event loop and callback queue

//js code runs in two phases
// 1.memory Creation Phase - where the code is parsed and memory is allocated for variables and functions
// 2.Execution Phase - where the code is executed line by line
// in the creation phase, the code is parsed and memory is allocated for variables and functions
// in the execution phase, the code is executed line by line

let val1 = 10
let val2 = 5

function addnum(num1 , num2){
    let total = num1 + num2
    return total
}

let result = addnum(val1 , val2)
let result2 = addnum(20 , 30)

//how does this code run in the background
// 1. Global Execution Context is created and stored in the global memory (this)
// 2. Memory is allocated for the variables and functions 
//it will take all the variables name and make it undefined
/* 
val1 = undefined
val2 = undefined
addnum = definition of the function
result = undefined
result2 = undefined
*/ 

// 3. Execution Phase starts and the code is executed line by line
/* 
val1 = 10
val2 = 5
addnum = makes new variable environmet and execution thread for the function
in short makes new executional context for the function

num1 = 10
num2 = 5
total = 10 + 5 = 15
result = 15

after the function is executed, the executional context is removed from the memory, it gets deleted
*/

//++++++++++++++ Call Stack ++++++++++++++

//call stack is a data structure that stores the execution context of the code
// it is a stack data structure, meaning it follows the LIFO principle (Last In First Out)

/*
1. Global Execution Context is created and stored in the call stack
2. Memory is allocated for the variables and functions
3. After the execution the funtions and variables are removed from the call stack
4. The call stack is empty when the code is executed
*/

//complexity is O(n) because it has to go through all the functions and variables in the call stack

//example:
/*
if a function is called inside another function, the inner function will be executed first and then the outer function will be executed
suppose there are three functions one() , two() , three()
one() is in the call stack, then two() is called inside one() and three() is called inside two()
// so the call stack will look like this:
one() -> two() -> three()

so, which one will get removed first?
// the last one that was added to the call stack, which is three() will be removed first and then two() and then one()
*/

//++++ Run this code in the browser console - sources and see call stack ++++
function one(){
    console.log("one")
}

function two(){
    console.log("Two")
}
function three(){
    console.log("Three")
}
one()
two()
three()

// also see this in the browser console - sources and see call stack
function one(){
    console.log("one")
    two()
}

function two(){
    console.log("Two")
    three()
}
function three(){
    console.log("Three")
}
one()
two()
three()