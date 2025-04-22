// Global scope

let a = 10
//let a = 10;
// const b = 20
// var c = 30 

// var, let, const are all perform same function but they have different scope

//block scope
if(true){
    let a = 100
    console.log("INNER: ",a) // 100
   
}
if (true){
    const b = 200
}

// if(true){
//     var c = 300
// }


// console.log(a)// console.log(b) // ReferenceError: b is not defined
// console.log(b)// ReferenceError: b is not defined
// console.log(c) // 300
console.log(a) // 100

//the scope declared in console is different from the scope declared in the nodejs file

