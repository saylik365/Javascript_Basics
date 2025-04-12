//BASIC STRING DECLARATION/ CONCATENATION
//String Declaration
const name = "John Doe";
const age = 30;

console.log(name + age + "Value"); //Basic String Concatenation

//MODERN WAY OF STRING CONCATENATION/ DECLARATION
// USING BACKTICS, known as string interpolation

//Another way of string declaration
const Anothername = new String("John Doe"); // output will be same as above

const name2 = "John Doe";
const age2 = 30;
console.log(`My name is ${name2} and I am ${age2} years old.`); //String Interpolation
//String Interpolation allows us to use variables inside a string without using + operator
// In short it creates placeholders for the variables inside the string
// and replaces them with the actual values of the variables.

//String access using index
console.log(name[0]);
console.log(name.__proto__); // __proto__ is used to access the prototype of the object
