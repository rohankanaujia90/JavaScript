// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); //true
// console.log("02" > 1); //true

console.log(null > 0); //false   //should avoid such conversion
console.log(null == 0); //false //should avoid such conversion
console.log(null >= 0); //true  //should avoid such conversion

console.log(undefined == 0); //false   //should avoid such conversion
console.log(undefined > 0); //false  //should avoid such conversion
console.log(undefined < 0); //fale  //should avoid such conversion

console.log("2" === 2); // also checks the datatype




