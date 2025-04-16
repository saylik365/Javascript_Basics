const str1 = "5";

console.log(str1.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"

// The padStart() method pads the current string with another string (the second argument) until the resulting string reaches the given length (the first argument).
// The padding is applied from the start of the current string. If the current string is already longer than the specified length, it will not be changed.