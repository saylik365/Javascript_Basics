const marvel = ["thor", "spiderman", "ironman"]
const DC = ["batman", "superman", "flash"]

console.log(marvel)
console.log(DC)

//bu using push()

// marvel.push(DC)
// console.log(marvel); 

//this adds the 2nd array as a single element in the first array
// [ 'thor', 'spiderman', 'ironman', [ 'batman', 'superman', 'flash' ] ] 

//by using concat

// marvel.concat(DC);
// console.log(marvel);

//it still does the same , [ 'thor', 'spiderman', 'ironman', [ 'batman', 'superman', 'flash' ] ] 
//concat() returns a new array, so to make it run reliably create new array

const All = marvel.concat(DC);
console.log(All);

//even a easier method is, using spread operator (+++++ Mostly used +++++)
const newheros = [...marvel, ...DC]
console.log(newheros);

//rarely occurred situation

const anotherArr = [1,2,3,4,[5,6,7],8,[6,7,[4,5]],9];
//here, the array contains array, array in the array, so on...
//to handle this, use flat

console.log(anotherArr)
const anothernewArr = anotherArr.flat(Infinity) // it asks for depth, but if it's confusing go with infinity
//it will automatically handle the situation understanding the depth.
console.log(anothernewArr)

