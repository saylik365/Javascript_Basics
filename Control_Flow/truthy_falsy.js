// const userEmail = 'sayli@gmail.com';
// if(userEmail){
//     console.log("Got user email"); 
// }else{
//     console.log("Don't have user email");
// }

//it will return Got user email
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//but what if, passed an empty string.

// const userEmail = "";
// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }
//it will return Don't have user email

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//what if passed an empty array.
const userEmail = []
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
} //it will return Got user email

//++++++++++++++++++ Values ++++++++++++++++++

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

//how to check array?
if(userEmail.length === 0){
    console.log("Array is empty");
    
}

//how to check object?

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
//Object.keys(emptyObj) it becomes an array. so use length to check if it is empty or not.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//if array is empty, it will return empty array.
//if array is not empty, it will return array of keys.

//some interesting conditions:
if(false ==0){
    console.log("true");   
}
else{
    console.log("false");
    
}

if(false == ''){
    console.log("true");   
}
else{
    console.log("false");
}

if(0 == ''){
    console.log("true");   
}
else{
    console.log("false");
    
}

