let score = "33";

let Score = "33abc"
console.log(typeof score);
console.log(typeof (score));
console.log(typeof (Score));

let valueInNumber = Number(score);   //dataconversion, converted string type score into Number type
console.log(typeof valueInNumber);

let valueInScore = Number(Score);
console.log(typeof valueInScore);
console.log(valueInScore);

//"33" => 33, string type to number type
//"33abc" => NaN(Not A Number), cant be properly converted into number but still NaN type is a number
// true => 1 ; false => 0 , boolean to number conversion


//string and numbers to boolean conversion
let  isLoggedIn = 10;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);    //true

// 1 => true, number to boolean
// "" => false, emptystring
// "kushal" => true.
// "1" => true
// "92748274" => true
// 100 => true.