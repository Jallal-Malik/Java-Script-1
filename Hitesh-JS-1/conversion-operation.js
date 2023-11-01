let number = 35 // => number
let string = "35" // => string
let notANumber = "35abc" // => string and notANumber
let score = null
let empty = undefined
let zero = true
let one = false
let two = "Hitesh"

console.log(typeof number);
console.log(typeof (number));

let value = Number(score)
console.log(typeof value);
console.log(value);

let Hy = Number(empty)
console.log(typeof Hy);
console.log(Hy);

let By = Number(zero)
console.log(typeof By);
console.log(By);

let Bye = Number(one)
console.log(typeof Bye);
console.log(Bye);

let Hye = Number(two)
console.log(typeof Hye);
console.log(Hye);

let valueNumber = Number(string)
console.log(valueNumber);

let valueInNumber = Number(notANumber)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = 1 // => true
let isLogIn = 0 // => false
let isSignIn = "Hitesh" // => true

let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn);

let BooleanIn = Boolean(isLogIn)
console.log(BooleanIn);

let BooleanIs = Boolean(isSignIn)
console.log(BooleanIs);

let someNumber = 33

let numberSome = String(someNumber)
console.log(numberSome);
console.log(typeof (numberSome));