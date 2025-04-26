// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
    
for (let i = 0; i <= 10; i++) {
    const element = i; // it will print 0 to 4
    if(element == 5){
        console.log("5 is best number");
    }//if block will get execute 

    console.log(element); //then it will print 5 to 10
}

/* for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value: ${i}`); //it will print outer loop value
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
    }
    
}*/

//it will print one outer loop value first then go to inner loop, execute inner loop 10 times, then again go to outer loop
//print outer loop's 2nd value.....and so on
    
/* Outer loop value: 0
Inner loop value: 0 and outer loop value: 0
Inner loop value: 1 and outer loop value: 0
Inner loop value: 2 and outer loop value: 0
Inner loop value: 3 and outer loop value: 0
Inner loop value: 4 and outer loop value: 0
Inner loop value: 5 and outer loop value: 0
Inner loop value: 6 and outer loop value: 0
Inner loop value: 7 and outer loop value: 0
Inner loop value: 8 and outer loop value: 0
Inner loop value: 9 and outer loop value: 0
Outer loop value: 1
Inner loop value: 0 and outer loop value: 1
Inner loop value: 1 and outer loop value: 1
Inner loop value: 2 and outer loop value: 1
Inner loop value: 3 and outer loop value: 1
Inner loop value: 4 and outer loop value: 1
Inner loop value: 5 and outer loop value: 1
Inner loop value: 6 and outer loop value: 1
Inner loop value: 7 and outer loop value: 1
Inner loop value: 8 and outer loop value: 1
Inner loop value: 9 and outer loop value: 1*/


//multiplication table
for (let i = 1; i<=10; i++) {
    console.log(`Outer loop value: ${i}`); //it will print outer loop value
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//array
let myarray= ["flash", "superman","batsman"]
console.log(myarray.length); //it will print length of array
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}

// +++++++++++++++++++ break statement ++++++++++++++++++

// for(let i= 1; i<=20; i++){
//     console.log(`Value of i is: ${i}`)//it will run till 20.
// }
// //if i want to stop the loop at 5, i will use break statement

console.log("Use of Break statement")
for(let i= 1; i<=20; i++){
    if(i == 5){
        console.log(`detected 5, so breaking the loop`)
        break;
    }
    console.log(`Value of i is: ${i}`)
}

console.log("\n")
console.log("use of continue statement")


//++++++++++++++ continue statement +++++++++++++++++

//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop. 

for(let i= 1; i<=20; i++){
    if(i == 5){
        console.log(`detected 5, so breaking the loop`)
        continue;
    }
    console.log(`Value of i is: ${i}`)
}