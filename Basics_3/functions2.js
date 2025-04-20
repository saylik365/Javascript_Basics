//rest or spread operator

function calculatecartPrice(num1){
    return num1
}

console.log(calculatecartPrice(100, 200, 300, 400, 500)) //it will return only first value 100
// but we want to return all values
// so we will use rest operator

function calculatecartPrice1(...num1){ //rest operator
    return num1
}
console.log(calculatecartPrice1(100, 200, 300, 400, 500)) //it will return all values in array [100, 200, 300, 400, 500]


//interview question
function calculatecartPrice2(val1, val2,...num1){ //rest operator
    return num1
}
console.log(calculatecartPrice2(100, 200, 300, 400, 500))
//it will return all values in array [300, 400, 500] because first two values are assigned to val1 and val2 and rest of the values are assigned to num1
//so we can use rest operator in between the parameters as well


const user = {
    username: "John",
    prices : 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user) //it will return username is John and price is 199

//but the problem is, if it gets changed from price to prices in object then it will not work
//it will say price is undefined. typescript will not give error but javascript will give undefined

//you can pass object as well in function 
handleObject({
    username:"Sam",
    price: 199,
})

//array
const newArray = [100,200,300,400];

//now define a function which will take array as parameter and return the second value of the array
function getArrayValue(getarray){
    return getarray[1]
}

console.log(getArrayValue(newArray)) //it will return 200

//you can pass array as well in function
console.log(getArrayValue([100,600,300,400])) //it will return 600