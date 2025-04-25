function one(){
    const username = "Sayli"
    
    function two(){
        const website = "sayli.com"
        console.log(username) // Sayli because two() is inside one(), so one() is global for two()
    }
    // console.log(website) // Error: website is not defined because website is local to two() and not accessible here
    two() // Call the inner function to access the outer variable
}
one();

if(true){
    const username = "Sayli"
    if(username === "Sayli"){
        const website = "sayli.com"
        console.log(username + website)
    }
    // console.log(website) // Error: website is not defined because website is local to the if block and not accessible here
}
// console.log(username) // Error: username is not defined because username is local to the if block and not accessible here



//+++++++++++++++++++ Interesting +++++++++++++++++++++++


console.log(addOne(5)) //will not give error, even though addOne is defined after this line, because of hoisting
//because we have decalred the function using function declaration, so it is hoisted to the top of the scope
function addOne(num){
    return num + 1
}
addOne(5) //it returns 6, but will not print it to the console


console.log(addTwo(5)) //will give error, because addTwo is defined after this line, and it is not hoisted
//because we have hold the function in a variable, so it is not hoisted
const addTwo = function (num){
    return num + 2
}
addTwo(5) //it returns 7