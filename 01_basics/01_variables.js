const accountId = 144553
let accountEmail = "rohan@gmail.com"
var accountPassword = "12345"
accountCity = "Ghaziabad" // not a good method to declare a variable
let accountState; // will be treated as undefined


//accountId = 2 // not allowed

accountEmail = "ha@ha.com"
accountPassword = "42211"
accountCity = "Kanpur"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
