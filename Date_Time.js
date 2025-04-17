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

console.log(typeof mydate); // object
//date is an object in js because it is a built in object and not a primitive data type
console.log(mydate instanceof Object); // true

console.log(mydate instanceof Date); // true


let anotherDate = new Date(2023, 0, 23);
console.log(anotherDate);
console.log(anotherDate.toDateString()); 
//in Javascript, months are 0 indexed, so 0 is January and 11 is December

let anotherDate1 = new Date("2023-01-23");
//if the date is in the format YYYY-MM-DD, the month will be 1 indexed, if in array format, it will be 0 indexed

let myTimeStamp = Date.now(); // current timestamp in milliseconds
console.log(myTimeStamp); 
//it shows the timestamp in milliseconds since 1970-01-01T00:00:00Z

//if you want to get the timestamp of declared date, you can use getTime() method
console.log(anotherDate.getTime()); 
console.log(anotherDate1.getTime()); 

//if you want to get the timestamp in seconds, you can divide the timestamp by 1000
console.log(Date.now() / 1000); // current timestamp in seconds
//but the problem is that it will be in float, so you can use Math.floor() to get the integer value

console.log(Math.floor(Date.now() / 1000)); // current timestamp in seconds

//+++++++++++++++ date methods ++++++++++++++
let newdate = new Date();
console.log(newdate.getFullYear()); // get the year of the date
console.log("The Month starting index from 0 is: "+ newdate.getMonth()); // get the month of the date but the index starts from 0, so sometimes its confusing
//so, to get the month in 1 indexed format, you can use getMonth() + 1
console.log("The month starting index from 1 is: "+ (newdate.getMonth()+1));
console.log(newdate.getDate()); // get the day of the date
console.log(newdate.getDay()); // get the day of the week of the date

console.log(`${newdate.getUTCDate()}/${newdate.getMonth()+1}/${newdate.getFullYear()} and the time is ${newdate.getHours()}:${newdate.getMinutes()}:${newdate.getSeconds()}`); // get the date and time of the date


//++++++Important +++++
console.log(newdate.toLocaleString({
    // weekday: 'long',
    calendar: 'gregory',
    // timeZone: 'UTC',
}))
