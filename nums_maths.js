const score = 400; 
console.log(score); //automatically converts to a Number object
console.log(typeof score); // returns 'number' because it is a primitive type

const balance = new Number(1000); //specifically casts to a Number object
console.log(balance); // [Number: 1000] 
console.log(typeof balance); // returns 'object' because it is an object type

// console.log(balance.toString()); // converts to string
console.log(typeof balance.toString());  //converts to string and returns 'string' type.

console.log(balance.toString().length); // returns 4 because the string '1000' has 4 characters

console.log(balance.toString().length +1); // returns 5 because the string '1000' has 4 characters and we add 1 to it

console.log(balance.toFixed(2)); // returns '1000.00' because we specify 2 decimal places
//toFixed() method returns a string representation of the number with a specified number of decimal places.
// It does not change the original number, it just formats it for display purposes.


const OtherNumber = 123.8977;
console.log(OtherNumber.toPrecision(3)); // returns '123' because we specify 3 significant digits

console.log(OtherNumber.toPrecision(2)); // returns '1.2e+2' because we specify 2 significant digits and it is in scientific notation

//if we give less significant value than the number of digits in the number, it will return the number in scientific notation.
//toPrecision() method returns a string representation of the number with a specified number of significant digits. 


const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN')); // returns '1,00,00,000' because we specify the locale as 'en-IN' i.e Indian English

//toLocaleString() method returns a string with a language-sensitive representation of the number.
// It formats the number according to the user's locale settings.



//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
//maths library is a built-in object that has properties and methods for mathematical constants and functions.
// It is not a constructor, so we do not need to create an instance of it.

console.log(Math); // returns the Math object with properties and methods for mathematical constants and functions.
//it is a object itself. 

console.log(Math.abs(-5));
//abs method returns the absolute value of a number.
// It returns the positive value of the number, regardless of its sign.

console.log(Math.round(4.6)); // returns 5 because it rounds the number to the nearest integer
console.log(Math.round(4.4)); // returns 4 because it rounds the number to the nearest integer

console.log(Math.ceil(4)); // returns 4, if i do 4.1 it will return 5.
console.log(Math.ceil(4.1)); // returns 5 because it rounds the number up to the nearest integer 

console.log(Math.floor(4.9)); // returns 4 because it rounds the number down to the nearest integer






