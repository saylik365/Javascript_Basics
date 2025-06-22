class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //to make sure user gets a unique ID
    static createId(){ //static is used to create a method that belongs to the class itself, also stop the access to the method from the object instantiated from the class
        //one cannot access after using static , even child class also can't access
        return `123`
    }
}

const hello = new user("Sayli");
// console.log(hello.createId()); //123

//after using static
// console.log(hello.createId()); //hello.createId is not a function

//sometimes you don't want to give this method's access to the object instantiated from the class, so use static keyword
class teacher extends user{
    constructor(username, email){
        super(username); //call the parent class constructor
        this.email = email;
    }
}

const hello1 = new teacher("Sakshi","s@gmail.com")
hello1.logMe(); //Username: Sakshi
console.log(hello1.createId()); //hello1.createId is not a function, static does not allow access.

