//do the value of Math.PI change? it is fixed right?
// console.log(Math.PI);

// Object.create it is a factory function usually used to create a new object with a specified prototype object and properties.

//getOwnPropertyDescriptor is a static method returns an object describing the configuration of a specific property on a given object 
// (that is, one directly present on an object and not in the object's prototype chain). 
// The object returned is mutable but mutating it has no effect on the original property's configuration.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

//The output is; 
// {
//   value: 3.141592653589793,
//   writable: false,  -: Controls whether the property’s value can be changed.
//   enumerable: false, -: Determines whether the property appears during enumeration—for example, via for…in, Object.keys(), spread operators, or Object.assign.
//   configurable: false -: 

/* 
Governs whether the property can be deleted (using delete obj.prop) or whether its
descriptor attributes (like writable, enumerable, or configurable, and whether it’s a data or accessor property) can be redefined via Object.defineProperty.

If configurable: false, you cannot delete the property or change its descriptor
*/
// }

const product = {
    name: "Ginger-tea",
    price: 250, 
    isAvailable: true,

    //after Object.entries() if you create a method, it will mess up the code
    orderproduct : function(){
        console.log("Code fat gaya")
    }
}
  // /* OUTPUT WLL BE: 
        // orderproduct: function(){
        // console.log("Code fat gaya")
        // }
        // SO TO REMOVE THIS USE IF ELSE, BELOW
        // */


console.log(product)
// console.log(Object.getOwnPropertyDescriptor(product)); //undefined, as product is an object not a property
console.log(Object.getOwnPropertyDescriptor(product, "name"));

//to define properties:
Object.defineProperty(product, 'name', {
    // writable : false, //makes the property non-writable
    enumerable: false, //makes the property non-enumerable
    // enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(product, "name"));

// for (const [key, value] of product) {
//     console.log(`${key}: ${value}`);   //product is not iterable cause it is an object, so this will throw an error
// }
 //to iterate over the properties of an object, you can use for...in loop or Object.entries()

for (const [key, value] of Object.entries(product)) {
    if (typeof value !== 'function') {
    console.log(`${key}: ${value}`);  
    }
}


