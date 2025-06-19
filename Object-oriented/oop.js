// ++++++++++++ Object Literal ++++++++++++
const user = { //this is object literal - this is the base unit in JS
    username: "Sakshi",
    loginCount: 8,
    signedIn :true,

    getUserDetails:function(){
        // console.log("Got user details from database.");
        // console.log(`Username:${username}`);//it will return error as it doesn't know where to look for username
        //that's why we use this keyword, it is used to state the current context of the object.
        console.log( `Username:${this.username}`);

        console.log(this);//will return the current object(username, logincount, signedIn)
    }
}
console.log(user.username);
console.log(user.getUserDetails())
//if you declare this in global context, it will return empty paranthesis
console.log(this)


// +++++++++++++ Constructor Function +++++++++++++
// const date = new date() //new is a constructor function
// const promiseOne = new Promise() // new is actually a constructor function

//new keyword basically creates a new context thats why we call it constructor function