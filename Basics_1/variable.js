const accountID = 122333
let accountName = "John Doe";
let accountBalance = 1000;
var accountType = "Savings";
accountCity = "New York";

// accountID = 122334; // Error: Uncaught TypeError: Assignment to constant variable.
accountName = "Jane Doe"; // Works
accountBalance = 2000; // Works

// console.log(accountID); // 122333
console.log(accountID, accountName, accountBalance, accountType, accountCity); // 122333 Jane Doe 2000 Savings New York

console.table({ accountID, accountName, accountBalance, accountType, accountCity });
