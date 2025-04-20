//comparison operators return boolean values
//basic conversion :
console.log(2 >1);
console.log(2 <1);
console.log(2 <=1);
console.log(2 >=1);
console.log(2 ==1);
console.log(2 !=1);

//The datatype must be same. typescript does not allow different datatypes , js allows
//but still the comparison between the values, datatypes must be same

// for ex:
//Diff datatypes comparison: 
console.log("2" >1 ); //true
console.log("02" >1 ); //true
//it will result true cause, js allows it but it is must to use same datatypes

 // ****Confusing comparisons **** should avoid

 //the NULL sometimes convert itself into the 0 or NaN while comparison.
console.log(null> 0); //false
console.log(null== 0); //false
console.log(null >=0); //true
//these comparisons does not give predictable output

console.log(undefined >0); 
console.log(undefined <0);
console.log(undefined ==0);
//undefined will give false for all three operations.

//=== it checks values with its datatypes strictly.
console.log("2" === 2);
//JS automatically changes the datatype if the it is different but,
//=== do not change the datatype, it strictly checks and returns false.

