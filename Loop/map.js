//map is better than for Each, as it automatically returns the value
//map is used to return a new array

const myNums = [1,2,3,4,5,6,7,8,9,10]

//map also uses callback function
//add 10 to every element of the array
// const newNums = myNums.map((num) => num+10 )

const newNums = myNums.map((num) => {
    return num+10 
})
// console.log(newNums);
//but if yu open scope, you have to use return keyword.

//++++++++++ chaining ++++++++++
const newnum = [1,2,3,4,5,6,7,8,9,10]
const newnums2 = newnum 
                    .map((num ) =>num *10) //multiplies 10 to all the elements in array 
                    .filter((num ) => num>= 40)//filters the elements which are greater than 40
                    .map((num ) =>num +1) // adds 1 to all the elements in array. 
                    //remember, the first method's output will be used as the input of the second method
                    //and the second method's output will be used as the input of the third method
                    //so the final output will be, [41,51,61,71,81,91,101]

console.log(newnums2);
console.log(newnum)//remember, map does not change the original array, it creates a new array.