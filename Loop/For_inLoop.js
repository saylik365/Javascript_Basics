//2. For -in loop
//on objects
const myObject1 = {
    js : "Javascript",
    cpp : 'C++',
    rb: "ruby",
    py: "python",
}

// for (const key in myObject1) {
//     console.log(key)
// } will print keys only

for (const key in myObject1) {
    console.log(`${key} shortcut is for ${myObject1[key]}`)
} //will print keys and values
console.log("\n")


//on arrays

// const myArr = ["js", "rb", "cpp", "py"]
// for (const key in myArr) {
//     console.log(key)
// }//will print indexes only  

const myArr = ["js", "rb", "cpp", "py"]
for (const key in myArr) {
    console.log(`the index is ${key} and the values are ${myArr[key]}`)
}//will print indexes only  

//on maps

const maps = new Map()
maps.set('IN',"India")
maps.set('USA',"United States of America")
maps.set('Fr',"France")
for (const key in maps) {
    console.log(key)
}//will not print anything, so maps does not work on for-in loop as iterations not possible