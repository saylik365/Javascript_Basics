//object singletone or object constructor
//using object keyword

const tinderuser = new Object(); //singleton object
console.log(tinderuser); // it will print empty object

tinderuser.id = "123abc"
tinderuser.name = "John Doe";
tinderuser.age = 25;
tinderuser.isLoggedIn = false;

const regularuser = {
    fullname:{
        userfullname:{
            firstname : "Siddhi",
            lastname : "Kumar",
        }
    }
}

// console.log(tinderuser); // it will print the object with properties
// console.log(regularuser.fullname); // it will print the object with properties
// console.log(regularuser.fullname.userfullname);
// console.log(regularuser.fullname.userfullname.firstname); // it will print Siddhi

//how to merge objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'} 
//two ways to merge objects, using Object.assign() and spread operator
//using Object.assign()
const obj3 = Object.assign(obj1, obj2);
const obj4 = Object.assign({}, obj1, obj2);

//using spread operator
const obj5 = {...obj1, ...obj2}; // it will create a new object and merge the two objects into it

// console.log(obj3); // it will print the merged object, { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj4); // it will print the merged object, { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj5); // it will print the merged object, { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const newObject = [
    {
        id: 1,
        name: "Pranali",
        email : "pranali@gmail.com",
    },
    {
        id: 2,
        name: "Anamika",
        email : "anamika@gmail.com",
    },
    {
        id: 3,
        name: "Siddhi",
        email : "siddhi1@gmail.com",
    },
]
console.log(newObject[1].email) //it will print the email as index of array as we have given object in array.

console.log(tinderuser)
console.log(Object.keys(tinderuser)); // it will print the keys of the object, [ 'id', 'name', 'age', 'isLoggedIn' ]
//the output value's datatype is array, so we can use array methods on it, also use loop on it
console.log(Object.values(tinderuser)); // it will print the values of the object, [ '123abc', 'John Doe', 25, false ]
console.log(Object.entries(tinderuser)); // it will print the entries of the object
//entries will return the array of arrays, so we can use array methods on it, also use loop on it

console.log(tinderuser.hasOwnProperty("id")); // it will check if the object has the property or not, it will return true or false
console.log(tinderuser.hasOwnProperty("isActive")); // it will check if the object has the property or not, it will return true or false
