//Nullish Coalescing Operator (??)
//Nullish Coalescing Operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//1. Null
//2. undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1); //5, because there is not null or undefined so it will return 1st value.

// val1 = null ?? 10;
// console.log(val1);//10, this operator checks the safety of the value or variable if the null value comes. 

// val1 = undefined ?? 15;
// console.log(val1); //15

// val1 = null ?? 10 ?? 15;
// console.log(val1); //10, returns first value because null is nullish value

val1 = undefined ?? 10 ?? 15;
console.log(val1);

//ternary operator / conditional operator (?)
const price = 100;
price <=80 ?console.log("Less than 80") : console.log("Greater than 80");