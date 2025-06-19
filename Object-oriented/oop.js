// ++++++++++++ Object Literal ++++++++++++
const user = { //this is object literal - this is the base unit in JS
    username: "Sakshi",
    loginCount: 8,
    signedIn :true,

    getUserDetails:function(){
        // console.log("Got user details from database.");
        // console.log(`Username:${username}`);//it will return error as it doesn't know where to look for username
        //that's why we use this keyword, it is used to state the current context of the object.
        // console.log( `Username:${this.username}`);

        // console.log(this);//will return the current object(username, logincount, signedIn)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails())
// //if you declare this in global context, it will return empty paranthesis
// console.log(this)


// +++++++++++++ Constructor Function +++++++++++++
// const date = new date() //new is a constructor function
// const promiseOne = new Promise() // new is actually a constructor function

//new keyword basically creates a new context thats why we call it constructor function

function User(username, loginCount, isLoggedIn){
    // username = username; //left one is variable and right one is parameter passed in function-declaration
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; //even if you don't return this- it will implicitly return the current object by default
}
// const userOne = User("Sakshi", 11, true);//will give values

// const userTwo = User("Saniya", 12, false);
// console.log(userOne)
// console.log(userTwo)
//if we run this now.. it will override/overwrite the values and will return ("Saniya", 12, false)

//that's why we use constructor function - (new) as it gives a new instance everytime.

const userOne = new User("Sakshi", 11, true);//will give values

const userTwo = new User("Saniya", 12, false);
console.log(userOne)
console.log(userOne.constructor) //it's a reference about itself - returns : [function: user]
//instanceOf is used to check whether the object is an instance of a particular class
console.log(userOne instanceof User)
console.log(userTwo) 

// +++++++++ New Keyword +++++++++++
/* 
1. when you use new keyword - it creates an empty object called instance
2. it calls constructor func
3. all args inject in it 
4. and then it returns the values.
*/