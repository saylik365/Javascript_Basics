//object can be declared in two ways
//1. object literal
//2. object constructor
//object.create is used to create an object using another object as a prototype and object constructor 

//singleton object
//singleton object is an object which is created only once in the memory
//singleton object is created using object constructor
//singleton is not created using object literal

//object literal

//always ask in interviews: use symbol to create a singleton object
const sym = Symbol("Symbol1");
//non-singletone object
const user = {
    name: "Sidhhi ",
    [sym]: "Symbol2",
    age: 22,
    isActive: true,
    email: "siddhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
    "full name" : "Sidhhi Patil",
}
//how to access object properties
console.log(user.name); // Sidhhi <- but this is not recommended
console.log(user["email"]); // Sidhhi <- this is recommended

console.log(user["full name"]); // Sidhhi Patil <- this is recommended

//accessing symbol from object
console.log(typeof user.sym); 
//this is not the correct way to access symbol from object
//because it will return as a string but not get accessed as a symbol

//even if you use user[sym] it will return as undefined
//because it is not declared in the object, so to declare a symbol in the object use the following way
//use square brackets to declare a symbol in the object, like: [sym]: "Symbol2" and.... 
console.log(user); //it will show the symbol in the object as well
console.log(user[sym]); // Symbol2 <- this is the correct way to access symbol from object

//to change object values:
user.email = "siddhipatil@gmail.com";
console.log(user["email"]); 

//you can also lock the value so no one can change the value of the object
// Object.freeze(user); 
// this will lock the object and no one can change the value of the existing object property
//but you can still add new properties to the object
 
user.email = "siddhi123@gmail.com"; // this will not change the value of the object property
console.log(user); 

//accessing object using function
user.greeting = function() {
    console.log("Hello User"); 
}
console.log(user.greeting()); // Hello User 

user.greeting2= function() {
    console.log(`Hello User ${this.name}`); //this will access the name property of the object
}
console.log(user.greeting2()); // Hello User Sidhhi