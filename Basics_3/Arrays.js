//basics array

const myArr = [1,2,3,4,5,6]

const myArr2 = ["AAAAAA", "BBBBBB"]
console.log(myArr[0]);
//array can be accessed from index 0

//Also, Array is defined in sqaure brackets, but if you declare it like this: 
const myArr3 = new Array(1,2,3,4,5,6) //using array constructor, it automatically converts them in sqaure brackets
console.log(myArr3[2]);

//Array Methods

myArr.push(7) //adds the element at the end of the array
console.log("After using Push() method: "+myArr);

// console.log(myArr.pop()); //removes the last element of the array

myArr.pop() //removes the last element of the array
console.log("After using pop() method: "+myArr);

myArr.unshift(0) //adds the element at the beginning of the array
//the disadvantage of this method is that it takes O(n) time complexity, because it has to shift all the elements to the right
//another disadvantage is that it takes O(n) space complexity, because it has to create a new array
console.log("After using unshift() method: "+myArr);

myArr.shift() //removes the first element of the array
console.log("After using shift() method: "+myArr);

console.log(myArr.includes(3)); //checks if the element is present in the array
console.log(myArr.includes(9)); //checks if the element is present in the array

console.log(myArr.indexOf(9)); //returns the index of the element in the array
//9 is not in the array so it returns -1

console.log(myArr.indexOf(3)); //returns the index of the element in the array

const newArr = [6,5,7,8,9]
console.log(myArr.join("--")); //joins the elements of the array with the given separator
console.log(typeof newArr); //returns the type of the variable

/*✅ Why typeof newArr is "object" here:
In this snippet, newArr is declared as an array: const newArr = [6,5,7,8,9];
Arrays are a special type of object in JavaScript.
So typeof newArr returns "object".*/

const newArr2 = myArr.join();
console.log(newArr2); //returns the string of the array
console.log(myArr);
console.log(typeof newArr2); //returns the type of the variable

/*Why typeof newArr is "string" here:
Here, myArr.join() is called immediately and the result (a string like "1,2,3,4,5") is assigned to newArr.
So now newArr is not an array anymore — it's a string.
Hence, typeof newArr returns "string". */

console.log("A", myArr)
const myn1 = myArr.slice(1,3) //the range is 1 - 3 but it will return only 1th and 2nd element. 3rd element won't get returned
//output : 2,3 
console.log(myn1); //returns the sliced array
console.log("B", myArr) //will return whole array even after performing slice.

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C", myArr) // will return remaining elements only after splice.





