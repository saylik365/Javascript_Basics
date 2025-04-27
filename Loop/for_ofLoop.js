//+++ Array Specific Loops +++

//1. for of
//on array
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}
 //on string
 const greetings = "Hello World!"
 for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
 }
 
//on Maps
const maps = new Map()
maps.set('IN',"India")
maps.set('USA',"United States of America")
maps.set('Fr',"France")
maps.set('IN',"India")//will not get printed as key is already present, map is known for unique keys
console.log(maps)


// for (const key of maps) {
//     console.log(key)
// }

for (const [key,value] of maps) {
    console.log(key, ':-', value)
}
//for of works on maps, then will it work on objects?
//no, it will not work, as objects are not iterable

const myObject = {
    'game1':'NFS',
    game2 : 'PUBG'
}
for (const [key,value] of myObject) {
   console.log(key, ':-', value)
}

//objects work on for-in loop

