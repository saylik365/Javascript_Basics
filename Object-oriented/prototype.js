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
    this.username = username;
    this.score = score;
}

createuser.prototype.increment = function(){
    this.score++;
}

createuser.prototype.printMe = function(){
    console.log(`Score is ${this.score} `);
}

// const hello = createuser("Sakshi", 25)
// const hello1 = createuser("Saniya", 250)

// hello.printMe() //it will give error like - cannot read properties of undefined.
//the properties are injected through prototype, but you have to tell you got new properties,
//so use "new" keyword

const hello = new createuser("Sakshi", 25)
const hello1 = new createuser("Saniya", 250)

hello.printMe()

/* 
Here is what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A protoype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This establishes the prototype chain. This means that it has access to properties and methods defined on the 
constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a
non-primitive value(object, array, function,etc.), the newly created object is returned.
*/