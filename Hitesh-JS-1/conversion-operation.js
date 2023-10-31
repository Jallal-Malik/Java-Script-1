let number = 35 // => number
let string = "35" // => string
let score = null
let notANumber = "35abc" // => string

console.log(typeof number);
console.log(typeof (number));

let value = Number(score)
console.log(typeof value);
console.log(value);

let valueNumber = Number(string)
console.log(valueNumber);

let valueInNumber = Number(notANumber)
console.log(typeof valueInNumber);
console.log(valueInNumber);