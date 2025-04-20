const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  " (with two trailing spaces)
// The padEnd() method pads the current string with a given string (to the right) as long as the resulting string reaches the given length.