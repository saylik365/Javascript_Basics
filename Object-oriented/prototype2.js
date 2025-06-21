// let myName =  "Sayli" // will print 5
let myname = "Sayli   " //will print 8
// console.log(myname.length)

//but i want true length even if i give spaces
// console.log(myname.trim().length) //but i can not use this everytime, so i want a property named " trueLength"

// console.log(myname.trueLength);


let myHeroes = ["Thor", "Spiderman"];

let heroPower={
    Thor : "Hammer",
    Spiderman : "Sling",

    getSpiderPower : function(){
        console.log(`Spidy Power is: ${this.Spiderman}`);
        
    }
}

Object.prototype.Sayli = function(){
    console.log(`Sayli is present in all objects`);
}

// heroPower.Sayli();//this is how we can create a method. as all the things are objects, so we use object prototype
myHeroes.Sayli()

//what if you give a prototype to array, will it work with heroPower?
Array.prototype.Heysayli = function(){
    console.log(`HeySayli is present in all objects`);
}
myHeroes.Heysayli(); //yes it will work, as array is also an object
// heroPower.Heysayli()//will not work, as heroPower is not an array, it is an object

let anotherUsername = "Sayli   "
String.prototype.trueLength = function() {
    console.log(`${this}`)
    // console.log(`${this.myname}`)
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength(); 
"Sayli".trueLength();
"IceTea".trueLength();