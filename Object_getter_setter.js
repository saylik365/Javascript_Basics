const User ={
    _email : 's@sayli.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email= value;
    }
}

const Sayli = Object.create(User); //factory function
console.log(Sayli.email); 

//according to ES2022, there is a private property proposal where we use # instead of _
