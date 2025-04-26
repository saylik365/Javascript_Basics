let index =0
while (index <=10) {
    console.log(`Value of index is ${index}`)
    index = index + 2
}

let myArray = ["flash", "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`)
    arr = arr + 1
}

// // Do while loop
//it will execute the block of code once and then check the condition
// let score = 1
// do {
//     console.log(`Score is: ${score}`)
//     score = score + 1
//     // score++
// } while (score <= 10);

// but what if, the score value is 11 and the condition is 10
let score1 = 11
do {
    console.log(`Score is: ${score1}`)
    score1 = score1 + 1
    // score++
} while (score1 <= 10);//return score is 11