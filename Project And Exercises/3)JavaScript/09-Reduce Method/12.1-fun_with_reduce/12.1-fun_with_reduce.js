const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// 1. max
console.log('Max number way 1:');
// 1)
const max1 = number.reduce((a, b) => {
    if (a > b)
        return a
    else
        return b
})
console.log(max1);
// 2)
console.log('Max number way 2:');
const max2 = number.reduce((a, b) => {
    return Math.max(a, b)
})
console.log(max2);

// 2. sum of even numbers
console.log('Sum of even numbers:');
const evenNumbers = number.filter((x => x % 2 == 0))
const sumOfEven = number.filter((x => x % 2 == 0)).reduce((a, b) => a + b)
console.log('Even numbers: '+evenNumbers);
console.log('Sum of even numbers: '+sumOfEven);

// 3. average
console.log('Average:');
const sum = number.reduce((a, b) => a + b)
const avg = number.reduce((a, b) =>(a + b))/number.length
console.log('Sum of all numbers: '+sum);
console.log('The average is: '+avg);

