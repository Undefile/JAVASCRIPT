const accountID = 1834;
let accountEmail = "xyz@gmail.com";
var accountPass = "IamHERE!";
accountCity = "Pokhara";
let accountState;

// accountID = 3712;    // not allowed because using const keyword make the variable constant and cant be changed
accountEmail = "abcd@gmail.com";
accountPass = "yokoS0!";

console.table([accountID,accountEmail,accountPass,accountCity, accountState]);

/*
  should avoid using var keyword because it creates issue in block scope and functional scope
*/