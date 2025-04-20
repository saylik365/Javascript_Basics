const course = {
    coursename : "JavaScript",
    price : 1000,
    courseinstructor : "John Doe",

}
// Object destructuring allows us to extract properties from an object and assign them to variables in a more concise way. 
// It is a syntax that makes it easier to work with objects in JavaScript.

//can do destructuring in two ways:- 
// 1. Directly from the object
console.log(course.coursename); // JavaScript

// 2. Using object destructuring
// This is a shorthand way to extract properties from an object and assign them to variables
const { coursename, price, courseinstructor:instructor } = course; // Object destructuring
console.log(coursename); // JavaScript
console.log(instructor) //renamed variable courseinstructor to instructor

//in react we can use destructuring to extract props from the object and use them in the component
const navbar = ({company}) => {

}
navbar({company: "Google"}); // Google
// In the above example, we are passing an object with a property company to the navbar function.
// Inside the function, we are using destructuring to extract the company property from the object and use it directly.
// This makes the code cleaner and easier to read, especially when dealing with multiple properties.

//array can be destructured in the same way as objects.
//apis are used to fetch data from the server and return it in the form of an array or object.
//json is a format used to exchange data between the server and the client.
//json is a string format that can be converted to an object using JSON.parse() method.
// {
//     "name": "John Doe",
//     "age": 30,
//     "address": {
//         "street": "123 Main St",
//         "city": "New York",
//         "state": "NY"
//     },
//     "phone": ["123-456-7890", "987-654-3210"],
// } 
//it is like a object but in a string format.
//in json we use double quotes for keys and values.

//not only objects but arrauys also have apis to fetch data from the server and return it in the form of an array or object.

[
    {},
    {},
    {},
]


// use randomuser me api website  and jsonformattor to get the data in json format and use it in the code.
//jsonformatter is a tool that helps to format json data and make it more readable.