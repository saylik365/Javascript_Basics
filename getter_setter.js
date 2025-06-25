// Getter and Setter uses get and set keywords cause class is available in ES6 and above
// Getter is used to access the value of a property and Setter is used to set the value
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value; 
    }
    //using underscore to avoid conflict with the constructor parameter


    get password(){ //getter is uset to get the value from outside of class
        // return this._password.toUpperCase();
        return `${this._password}Sayli`
    }
    set password(value){
        this._password = value; //setter is used to set the value from inside of class
    }

    //error: maximum call stack size exceeded , cause the value is set many times. in constructor or below
    //so, use _password to avoid this issue . it is  private property
    
}
const sayli = new User("s@sayli.com", "abc");
console.log(sayli.email)
console.log(sayli.password)

//getter and setter are used to access and modify properties of an object
