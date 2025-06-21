/* 
every function has a special property called prototype. This is mainly used 
when you create objects using constructor functions or classes, and it allows those objects to inherit properties and methods.

If JavaScript doesn’t find a property on the object itself, it looks up the prototype chain.
the prototype chain ends when it reaches a value of null.
Every object in JavaScript has an internal property [[Prototype]] 
(accessible via __proto__), which points to another object — its prototype. 
This continues up the chain until it reaches null, which marks the end of the chain.

Array -> object -> null
// Object.prototype is the top-level prototype object in JavaScript.
Function -> object -> null
// Function.prototype is the prototype object for all functions in JavaScript.
String -> object -> null
// String.prototype is the prototype object for all string objects in JavaScript.
*/  

function multipleBy5(num){
    return num * 5;
}
//  console.log(multipleBy5(5)); // 25

multipleBy5.power = 2;
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // {} // prototype object of function

function createuser(username, score){
    
}