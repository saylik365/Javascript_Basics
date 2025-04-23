function one(){
    const username = "Sayli"
    
    function two(){
        const website = "sayli.com"
        console.log(username) // Sayli because two() is inside one(), so one() is global for two()
    }
    console.log(website) // Error: website is not defined because website is local to two() and not accessible here
    two() // Call the inner function to access the outer variable
}
one();

if(true){
    const username = "Sayli"
    if(username === "Sayli"){}
}