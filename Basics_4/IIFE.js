//Immediately Invoked Function Expression


// IIFE is a function that runs as soon as it is defined
// It is a design pattern that helps to avoid polluting the global scope
//why it is used?
// 1. Avoid polluting the global scope
// 2. Create private variables and functions
// 3. Create a module pattern   
// 4. Execute code immediately
// 5. Avoid naming conflicts
// 6. Create a closure

//what is global scope pollution?
// Global scope pollution is when variables and functions are added to the global scope, which can lead to naming conflicts and unexpected behavior in your code.
// For example, if two different scripts define a variable with the same name in the global scope, it can cause one script to overwrite the other, leading to bugs and errors.


(function one(){  //it is a named IIFE cause it has a name
    console.log(`Hello from IIFE`)
})();

//the below code will give error because the above IIFE is not defined properly
//it will give error because once a IIFE is defined it should end with ();, otherwise it will give error to the next IIFE 


(()=> {
    console.log(`Hello from IIFE 2`)
})();

//argument and parameters passing in IIFE
//we can pass arguments to IIFE just like we do in normal functions
((name)=>{
    console.log(`Hello from IIFE 3 ${name}`)
})(`Sayli`);