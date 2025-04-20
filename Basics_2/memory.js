//two types: stack and heap
//stack: static memory allocation    //heap: dynamic memory allocation
//stack: LIFO (Last In First Out)    //heap: random access memory allocation
//stack: faster than heap            //heap: slower than stack
//stack: limited size (depends on OS and compiler)     //heap: larger size (depends on available memory)
//stack: used for function calls, local variables, etc.  //heap: used for dynamic memory allocation, data structures, etc.
//stack: automatically managed by compiler    //heap: manually managed by programmer
//stack: no fragmentation             //heap: fragmentation can occur
//stack: no garbage collection        //heap: garbage collection can occur
//stack: no pointers            //heap: pointers are used to access memory
//stack: no memory leaks         //heap: memory leaks can occur
//stack: no memory fragmentation       //heap: memory fragmentation can occur
//stack : used in primitive data types, local variables, function calls, etc.       
//heap : used in non-primitive, dynamic memory allocation, data structures, etc.

//stack returns the copy of original value
//heap returns the reference of original value

let myStack = "stack";
let anotherStack = myStack;
console.log(anotherStack); //stack

//if i change the value of anotherStack, it will not change the value of myStack
//because stack returns the copy of original value

anotherStack = "new stack";
console.log(myStack); // stack
console.log(anotherStack); // new stack
console.log(myStack === anotherStack); // false

//++++++++++++++heap+++++++++++++++
let myHeap = { 
    Email : "abc@gmail.com",
    UPI : "abc@upi"
};
let anotherHeap = myHeap;
console.log(anotherHeap); // { Email: 'abc@gmail.com', UPI: 'abc@upi' }

//if i change email of anotherHeap, it will also change the email of myHeap
//because heap returns the reference of original value

anotherHeap.Email = "newemail@gmail.com"

console.log(myHeap.Email); 
console.log(anotherHeap.Email); 
