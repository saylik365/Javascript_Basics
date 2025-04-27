//reduce() 
/* 
- reduce() is a method used on arrays to reduce all the elements into a single value.
- It processes each element of the array one by one, accumulating a result as it goes through the elements.

How does reduce() work?

- Start with the first element (or initialValue if provided).
- If initialValue is provided, it becomes the first value of accumulator.
- If not, the first element in the array becomes the initial value of accumulator, and the iteration starts from the second element.

Iterate through the array:
- For each element in the array, the callback function is called.
- The callback function takes the current accumulator and currentValue and returns a new accumulated value that will become the accumulator for the next iteration.

Update the accumulator:
- After each iteration, the accumulator is updated with the new value returned from the callback.
- Finish when all elements have been processed:

- Once the array has been fully processed, the final value of the accumulator is returned as the result of the reduce() method.

4. Return Value
- The final result after processing all elements of the array is returned.
- This result is whatever value the accumulator holds after all iterations.
*/

const myNums = [1,2,3]

//by using function.

const myTotal = myNums.reduce(function (accumulator, currentValue){
    console.log(`accumulator: ${accumulator} and current value: ${currentValue}`)
    return accumulator + currentValue 
}, 0)//initialvalue
console.log(`so the total value is: ${myTotal}`)

//by using arrow function
// const myTotal2 = myNums.reduce( (acc, curval) => (acc+ curval),0)
// console.log(`total value using reduce() in arrow function is: ${myTotal2}`)


const shoppingCart = [
    {
            itemName : 'js course',
            price: 2999
    },
    {
            itemName : 'py course',
            price: 999
    },
    {
            itemName : 'java course',
            price: 3999
    },
    {
            itemName : 'AI course',
            price: 12999
    },
]

//add the prices
// const TotalPrice = shoppingCart.reduce((acc, currval) => {
//     return acc + currval.price
// }, 0)

const TotalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`the total price is: ${TotalPrice}`)


