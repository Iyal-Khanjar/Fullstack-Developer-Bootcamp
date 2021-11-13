// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.
let numbers = [1, 3, 4, 2, 5, 0]
const doubleValues = arr => arr.map(val => val * 2)
console.log(doubleValues(numbers))

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const onlyEvenValues = arr => arr.filter(val => val % 2 === 0)
console.log(onlyEvenValues(numbers))

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.
let foods = ["falafel", "sabich", "hummus", "pizza"];
const showFirstAndLast = arr => arr.filter((str, index) => index == 0 || index == foods.length - 1)
console.log(showFirstAndLast(foods))

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.
// let vowels = 'sadkjfbaicvbadsfabbadksuhrevkjahsdbvalknz'
// let obj={}
// const vowelCount=a=>a
//     if(/[aieouy]/.test(val))
//         obj[val]=(obj[val]||0)
// })
// console.log(obj);

// 5. Write a function capitalize that takes a string as an argument and will
// return the whole string capitalized.
function capitalize(str) {
    return str.toUpperCase()
}
console.log(capitalize('hello word'));

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
function shiftLetters(str) {
    console.log(str.split("").map(str => String.fromCharCode(str.charCodeAt() - 1)).join(""));
}
shiftLetters('bcd')

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
var text = 'hey my name is iyal and im not the best';
var swapCase = function () {
console.log(text.split(' ').map((val,index)=> index%2==0?val.toUpperCase():val).join(' '));
}
swapCase(text)