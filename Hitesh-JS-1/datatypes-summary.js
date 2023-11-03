//  Primitive

//  7 types : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scorevalue = 100.6
const isLoggedIn = false
const temp = null
let email;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 341565213654654546n

//  Refrence (Non primitive)

const arrow = ["sun", "date", "time"];

let myobj = {
    name: "jallal",
    age: 18,
}

let myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof temp);
// console.log(typeof scorevalue);
// console.log(typeof myFunction);
// console.log(typeof myobj);
// console.log(typeof id);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myChannelName = "doSomeCoding"

let anotherName = myChannelName
anotherName = "hiteshChoudhary"

console.log(myChannelName);
console.log(anotherName);


let userOne = {
    name: "hassan",
    email: "hassanAtTheRategmail.com"
}
let userTwo = userOne
 
userTwo.email = "jallalAtTheRategmail.com"

console.log(userOne.email);
console.log(userTwo.email);
