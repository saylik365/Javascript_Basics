class User{
    constructor(username){
        this.username = username;
    }
    logMe(){ //logMe() is a method which gives value of an element like username
        console.log(`Username is ${this.username}`);
        
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        /* 
         the super keyword is used to access members (fields and methods) of a class's parent (or superclass) from within a subclass. 
         It's primarily used to differentiate between a subclass's and its superclass's members when they have the same name, or to call a superclass's constructor. 
        */
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const hello = new teacher("Sayli", "sayli@gmail,com", "123");
hello.logMe(); //logMe() is accessible to teacher class 
hello.addCourse(); //A new course was added by Sayli

//but for user class
const hello1 = new User("Sakshi");
hello1.logMe() 
// hello1.addCourse() //TypeError: hello1.addCourse is not a function
//addcourse() is not accessible to user class as it is not defined in user class

console.log(hello === hello1) //false
console.log(hello === teacher) //false, cause it is a instance
console.log(hello instanceof teacher) //true
console.log(hello instanceof User) //true

