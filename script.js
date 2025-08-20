
let num1 = 2;
let num2 = 3;
let num3 = 4;
console.log( num1 * num2 * num3);


let str1 = 'hello';
let str2 = 'world';
let temp = str1;
str1 = str2;
str2 = temp;
console.log(str1,str2);


let fullName = 'Alex Shuster'; 
fullName = fullName.replace(' ', '*'); 
console.log(fullName);


let base = 5;
let exponent = 2;
console.log(Math.pow(base, exponent)); 


let letter = 'A';
let longStr = 'SHUSTER'; 
let middleIndex = Math.floor(longStr.length / 2); 
let resultStr = letter + longStr.slice(0, middleIndex) + letter + longStr.slice(middleIndex) + letter;
console.log(`SHUSTER ->`,resultStr);


let n1 = 17;
let n2 = 5;
let n3 = 14;
let n4 = 18;
let n5 = 11;
let GROK = n1 * n2 * n3 * n4 * n5;
console.log(`17*5*14*18*11`, GROK);
let unitsSum = (n1 % 10) + (n2 % 10) + (n3 % 10) + (n4 % 10) + (n5 % 10);
console.log(unitsSum);


let strA = 'hello';
let strB = 'world';
let combined = strA + ' ' + strB;
console.log( combined.length);


let firstName = 'Alex';
let lastName = 'Shuster';
console.log('Alex=', firstName.length);
console.log('Shuster=', lastName.length);

let a1 = 5;
let b1 = 3;
console.log(a1,b1);

a1 = a1 * b1;  
b1 = a1 / b1;  
a1 = a1 / b1;  

console.log (a1,b1); 