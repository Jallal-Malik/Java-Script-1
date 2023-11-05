const name = "jallal"
const numbers = 50

// console.log(name + numbers + " hy");

console.log(`My name is ${name} and my numbers is ${numbers}`);

const gameName = new String("Hitesh")

console.log(gameName [0] );
console.log(gameName.__proto__ );
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne =("    Hitesh    ")
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jallalmalik.com/strings%20discussion"
console.log(url.replace('%20', '-'))
console.log(url.includes("hy"))

const gameNameOne = new String("Hitesh.hc.com")
console.log(gameNameOne.split('.'));