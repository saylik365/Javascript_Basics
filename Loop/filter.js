// const coding = ["C", "C++", "Java", "JavaScript", "Python", "PHP"];

// //what if forEach declared in variable
// const coding2 = coding.forEach((item) => {//it will return undefined, what if we use return
//     // console.log(item)
//     return item //still return undefined, what if we only return, still return undefined
// })
// console.log(coding2)//so forEach does not return anything

//for Each is used to perform on each value but it does not return anything.
//but what if we want to perform some operation on each value and return something
//use filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

//implicit return
// const newnums =myNums.filter( (num )=> num>4 )//it also takes callback function, but we have to give condition inside callback function
// console.log(newnums)

//explicit return
// const newnums =myNums.filter( (num )=> {
//     return num >4;
//     //have to use return keyword compulsory, because we have started {} scope.
// })
// console.log(newnums);

//by using forEach-
const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);
//can use forEach but have to give conditions and all
