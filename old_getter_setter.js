// Getter and Setter uses get and set keywords cause class is available in ES6 and above
//but before ES6, we can use functions to achieve the same functionality

function User(email, password){
    // this.email= email;
    // this.password= password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email = value
        }
    }) //getter and setter 

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password
        },
        set:function(value){
            this._password = value
        }
    })

    this.email= email;
    this.password= password;
}

const Sayli =new User("s@sayli.com", "sayli123")
console.log(Sayli.email); 
console.log(Sayli.password); 