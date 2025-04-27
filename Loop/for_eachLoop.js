const coding = ['js', 'ruby', 'java', 'python', 'cpp'];
// coding.forEach( function name(){} ) //it requires callback function, it means function name is not required
//because this function is running in array so the value will bring all the values automatically like parameters

// coding.forEach( function(val) { //by using callback function
//     console.log(val);
// })

// coding.forEach( (val)=>{ // using arrow function
//     console.log(val)
// })


// function printMe(item){//by using function name
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr)
})