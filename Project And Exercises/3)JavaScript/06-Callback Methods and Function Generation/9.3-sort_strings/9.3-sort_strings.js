// a. Array of words
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a.1. Sort the array of strings from descending to ascending order

console.log(foods.sort());

// a.2. Sort the array of strings from ascending to descending order
console.log(foods.sort().reverse());

// b. Lets sort an array of words that includes a word with an uppercase:
const foodsWithUpperCase = ["falafel", "Sabich","hummus","pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending order
console.log(foodsWithUpperCase.join(' ').toUpperCase().split(' ').sort());

// a.2. Sort the array of strings from ascending to descending order
console.log(foodsWithUpperCase.join(' ').toUpperCase().split(' ').sort().reverse());;

// c. Longest word
const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];

// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function
console.log(words.sort((a,b)=>b.length-a.length));
