const accountId = 112254
let accountEmail = "hy@gmail.com"
var accountPassword = "456536"  // => scope-problem
accountCity = "Multan"
let accountStatus;  // => undefined

// accountId = 786 // not allowed
accountEmail = "hello@gmail.com"
accountPassword = "1122334565"
accountCity = "Islamabad"

// values changed

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountStatus]);

/*
prefer not to use var
because of an issue in scope
*/