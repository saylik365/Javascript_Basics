//there is a global execution context in call stack

function setUsername(username){
    //complex db calls
    this.username = username 
    console.log("Called"); //will print called but it's execution context removes all the elements declared in it, so we use call()
}

function createUser(username, email, password){
    // setUsername(username) //it should have the access of username, as it is being called inside 
    setUsername.call(this, username) //used when call() is called, this return the current context - we have to give reference
    
    this.email = email
    this.password = password
}

const hello = new createUser("Sayli", "sayli123@gmail.com", "123")
console.log(hello); //let's see if it prints username,
//it won't as username is not being called even if declared setUsername(username) in createuser(), so we use a method call().

