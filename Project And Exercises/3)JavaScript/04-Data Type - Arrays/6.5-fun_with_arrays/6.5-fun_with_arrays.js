// 1. Fill an array with 100 of a same object using array fill
// method.
let filledArray = new Array(100).fill('hello');
console.log(filledArray)

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
let arr2 = Array.from(Array(101).keys())
console.log(arr2)

// 3. Convert only values of an object into one array.
let obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0 }
console.log("As an object: ");
console.log(obj);
console.log("As an array: ");
console.log(Object.values(obj));

// 4. Convert an array into one object
let object = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0 }
let result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
console.log("As an object: ");
console.log(object);
console.log("As an array: ");
console.log(result);

// 5. Find out if an array is an array
console.log(Array.isArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //true
console.log(Array.isArray({ foo: 123 })); //false

// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified
const number1 = [1, 2, 3, 4, 5];
const number2 = [...number1];
number2.push(6, 7, 8);
console.log("number1: " + number1);
console.log("number2: " + number2);


// • Create a copy of an array that will effect the original 
// array if modified
let num = [1, 2, 3, 4, 5]
let num2 = num
num2.push(6, 7, 8)
console.log("num: " + num)
console.log("num2: " + num2)