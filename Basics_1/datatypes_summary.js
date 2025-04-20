//two types: primitive datatypes and non primitive
//1. Primitive Datatypes
// String
// Boolean
//Null
//undefined
//number
//symbol
//BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const AnotherId = Symbol('123')
console.log(id === AnotherId); //false

const bigNum = 23467667556n



//2. Non-Primitve or reference datatypes
//Array : Defined in square brackets
const Arr= ["Sayli", "Sakshi", "Anushka"]

//Objects: defined in curly braces

let myObj
{
    name : "Sayli";
    age : 20
}
 
//Functions
const myFunction = function(){ //function declaration in variable
    console.log("Hello World");
    
}

console.log(typeof myFunction); //how to identify datatypes
console.log(typeof outsideTemp); //how to identify datatypes

//notes: typeof operator results
//undefined -> undefined
//null -> object
//boolean -> boolean
//number ->number
//string -> string
//function  -> function / object / functionobject
//every non-primitive datatype results functions

