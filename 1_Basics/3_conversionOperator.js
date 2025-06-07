let score = "33";

let Score = "33abc"
// console.log(typeof score);
// console.log(typeof (score));
// console.log(typeof (Score));

let valueInNumber = Number(score);   //dataconversion, converted string type score into Number type
// console.log(typeof valueInNumber);

let valueInScore = Number(Score);
// console.log(typeof valueInScore);
// console.log(valueInScore);

//"33" => 33, string type to number type
//"33abc" => NaN(Not A Number), cant be properly converted into number but still NaN type is a number
// true => 1 ; false => 0 , boolean to number conversion


//string and numbers to boolean conversion
let  isLoggedIn = 10;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);    //true

// 1 => true, number to boolean
// "" => false, emptystring
// "kushal" => true.
// "1" => true
// "92748274" => true
// 100 => true.


// *************************************** OPERATIONS ***********************************************
let value = 5;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);    addition -> 4
// console.log(2-2);    subtraction -> 0
// console.log(2*2);    multiplication -> 4
// console.log(2**2);   power i.e. 2^2 = 4
// console.log(2/2);    division -> 1
// console.log(2%2);    remainder -> 0

let str1 = "hello"
let str2 = " world"
let str3 = str1+str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log("2" + 1); //21
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  //32

//but why 32? -> in simple it sees from left to right, if number comes 1st it adds to the number which is 2nd
// but if there is any string it just merge. So, while doing "2" + 1 it gives 21 cuz first one is string and
// it convert 1 to string and merged it but while doing 1 + 2 + "2" it adds 1 and 2 and afterwards convert
// 3 to string and merge it with 2 to make 32.

// console.log(3 + 4 % 5 /2)   //strictly prohibited to do ts

console.log(true);
console.log(+true);  //conversion of true to 1
console.log(+""); 
// boolean of "" is false and using increment operator changes its datatype to number which makes it 0
// both type conversion is not done because it is confusing

//Prefix and postfix increment

let x =3;
let y = x++;
console.log(x,y);
// x is incremented but as the increment is postfix the y isnt updated
y = x++;
console.log(x,y);


let a = 5;
let b = ++a;
console.log(a,b);
//as the increment is prefix a is updated and b is also updated at the same time