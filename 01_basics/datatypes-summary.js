/* Primitive => call by value (jab bhi hum inhe kamsi se kahi copy karte hai to inka
jo original data hai wo refrence inka memory ka nhi dia jata, inko copy karke dia jata hai alag
aur jo bhi changes karte hai wo inki copy main hote hai) */

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbol
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID); //false

// BigInt
const bigNumber = 4729834244273474n

/* Reference (Non Primitive) => ye saari wo hai jinka memory main reference inka directly 
allocate kia jaa sakta hai */

// Array, Objects, Functions (sabka datatype function hi hota hai)

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Objects
let myObj = {
    name: "Rohan",
    age: 20,
}

// Functions
const myFunction = function(){
    console.log("Hello World!!");
}

console.log(typeof bigNumber); // undefined
console.log(typeof outsideTemp); // object function
console.log(typeof heros); // object function
console.log(typeof myObj); // object function
console.log(typeof myFunction); //function



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Rohan Kanaujia" 

let anotherName = myName
anotherName = "Rishu"

console.log(myName);
console.log(anotherName);  // copy main change hoga

let userOne = {
    email: "user@gmail.com",
    upi: "user@okicici",
}

let userTwo = userOne

userTwo.email = "rohan@google.com"

console.log(userOne.email);
console.log(userTwo.email); // original value change hogi
