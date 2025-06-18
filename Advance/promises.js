//promise from mdn, stackoverflow

//promises - 3 state -- 1. Pending , 2. fulfill, 3. rejected
//promise is a object itself representing eventual completion or failure of asynchronous operation.
//promise 2 parts - creation , consume

// const promiseOne = new Promise()//it takes callback function in it.
//two parts of promise : (function(resolve, reject))


//promise creation----
const promiseOne = new Promise(function(resolve, reject){
    //do an asynchronous task like, db calls , cryptography related, network calls
    setTimeout(() => {
        console.log('Async Task is complete');
        resolve()
    }, 1000);
})

//promise consume
// .then() is used - it has direct connection with resolve
//.then() it gives a callback which receives an argument automatically, that returns the value from the time of creation
promiseOne.then(()=>{
    console.log('promise consumned');
})

//but it will return only - async task is complete, resolve not connected so use resolve() in creation/setTimeout()

//++++++++++++++++++  OR +++++++++++++++
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2 complete');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Async 2 resolved');
})

//+++++++++++ Value Passing ++++++++++++
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"shravni", email:"shravni12@gmail.com"});//taken object{}
    }, 1000);
})

promiseThree.then(function(user) {
    console.log(user);
    
})

//++++++++ Reject and .then() chaining +++++++++
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error  = true; //Error ! something went wrong
        // let error = false; //returns all
        if(!error){
            resolve({username:"sakshi", password: "123"});
        }else{
            reject('ERROR! SOMETHING WENT WRONG')
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{//in this .then() take the value from above .then()
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{console.log("The promise is either resolved or rejected")})

//+++++++++++++++++++ OR +++++++++++++++++++++
// ++++++ Instead of Promise.then() - we can use async/await ++++++

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:"js" , password: "123"})
//         }else{
//             reject('ERROR! SOMETHING WENT WRONG AGAIN!!')
//         }
//     }, 1000);
// })

// async function consumepromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumepromiseFive()

// it will give error for catch block.......and all
//async - await can not directly handle errors so we have to use try-catch & all

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"js" , password: "123"})
        }else{
            reject('ERROR! SOMETHING WENT WRONG AGAIN!!')
        }
    }, 1000);
})

async function consumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumepromiseFive()


// +++++++++++++ Fetch using async - await ++++++++++++++
// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         // const data = response.json(); //it takes time so we have to make it also await
//         const data = await response.json(); 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()
 
// ++++++++++++ By using .then() ++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error));

// this code's output is getting in first place and then the other codes are executing / giving outputs. 
//Why? 
/* 
In JS engine -> call stack -> global execution context is there and also functions.  
from web API's fetch creates a new queue called - microtask queue / priority queue / fetch queue
anything fetch works with goes to that queue - having higher priority so, whenever execution happens -
callback/function(anything) from fetch queue goes to top of the call stack.
That's why - it executes first and then remaining functions. 
*/

