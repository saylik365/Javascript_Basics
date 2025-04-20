// let score = 33;
let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //it gives number, but if i change 33 to 33abc?
// //still it gives number as a output, so give its proper datatype use:

console.log(valueInNumber) //it return a Nan, Not a number...

// "33" => 33
// "33abc"=> NaN
// null => 0
// undefined => NaN
// true / false => 1/0
// string "sayli" => NaN

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); //it returns true;

// let isLoggedIn = "";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // it returns false

// let isLoggedIn = "Sayli";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // it returns true

let somenumber = 33
let stringnumber = String (somenumber)
console.log(stringnumber)
console.log(typeof(stringnumber))
