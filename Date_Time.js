//Js has a already defined API for date but there is a new API called Temporal
// Temporal API is a new API for working with dates and times in JavaScript.
// It provides a more powerful and flexible way to handle dates and times than the existing Date object.
// The Temporal API is designed to be more accurate, easier to use, and more consistent across different time zones and locales.
// The Temporal API is still in development and is not yet fully supported in all browsers.

//++++++++++ Dates ++++++++++
let mydate = new Date(); // current date and time
console.log(mydate); // 2023-10-04T06:22:14.000Z

console.log(mydate.toString()); // convert date to string
console.log(mydate.toDateString()); // convert date to string in local time zone
console.log(mydate.toISOString()); // convert date to string in UTC time zone
console.log(mydate.toJSON()); // convert date to JSON string
console.log(mydate.toLocaleString()); // convert date to string in local time zone
console.log(mydate.toLocaleDateString()); // convert date to string in local time zone
console.log(mydate.toLocaleTimeString()); // convert date to string in local time zone