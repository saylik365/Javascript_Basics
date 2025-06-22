//classes are included in ES6 
 
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`; 
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const hello = new User("Sayli", "sayli123@gmail.com", "123")
console.log(hello.encryptPassword());
console.log(hello.changeUsername());

//behind the scenes, the class is converted to a function

// function User(username, email, password) {
//      this.username = username;
//         this.email = email;
//         this.password = password;
// }
// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`; 
// }
// User.prototype.changeUsername = function(){
//         return `${this.username.toUpperCase()}`;
// }

// const hello1 = new User("Sayli", "sayli123@gmail.com", "123")
// console.log(hello1.encryptPassword());
// console.log(hello1.changeUsername());


