//BASIC STRING DECLARATION/ CONCATENATION
//String Declaration
const name = "John Doe";
const age = 30;

console.log(name + age + "Value"); //Basic String Concatenation

//MODERN WAY OF STRING CONCATENATION/ DECLARATION
// USING BACKTICS, known as string interpolation

//Another way of string declaration
const Anothername = new String("John-Doe"); // output will be same as above

const name2 = "anamika";
const age2 = 30;
console.log(`My name is ${name2} and I am ${age2} years old.`); //String Interpolation
//String Interpolation allows us to use variables inside a string without using + operator
// In short it creates placeholders for the variables inside the string
// and replaces them with the actual values of the variables.

//String access using index
console.log(name[0]);
console.log(name.__proto__); // __proto__ is used to access the prototype of the object


console.log(name.length); //Length of the string
console.log(name.charAt(2)); //Accessing the character of the string
console.log(name.toUpperCase()); //Converts the string to uppercase
console.log(name.indexOf("o")); //Returns the index of the first occurrence of the specified value in a string

const newString = name. substring(0, 2); //Returns the part of the string between the start and end indexes, or to the end of the string.
console.log(newString); //Output: "Jo"

const newString2 = name2.slice(0, 3); //Returns the part of the string between the start and end indexes, or to the end of the string.
console.log(newString2); //Output: "Joh"

//differenceb between substring and slice
//substring() methods accepts negative indexes but it will convert them to positive indexes and start from 0
//slice() method accepts negative indexes and start from the end of the string
//substring() method does not accept negative indexes and start from the beginning of the string
//slice() method accepts negative indexes and start from the end of the string

const newstring3 = "      Sayli      "; //String with spaces
console.log(newstring3); //Output: "      Sayli      "
console.log(newstring3.trim()); //Removes whitespace from both sides of a string
//trim() works on whitespace characters and line terminators

const url = "https://www.google.com/"; //String with URL
console.log(url); //Output: "https://www.google.com/"

console.log(url.replace("https", "http")); //Replaces the first occurrence of a specified value in a string with another value in a string
//replace() method replaces only the first occurrence of the specified value in a string


console.log(url.includes("google")); //Checks if the specified value is found in a string and returns true or false
console.log(url.startsWith("hello")); //Checks if the string starts with the specified value and returns true or false


console.log(Anothername.split('-')); //Splits on basis of -
//split() method splits a string into an array of substrings

