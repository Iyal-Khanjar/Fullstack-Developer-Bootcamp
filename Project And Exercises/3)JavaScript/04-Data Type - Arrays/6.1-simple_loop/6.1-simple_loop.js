// Create array with numbers :
// const arr = [1,7,3,0,-5,7,3,9];
// 1. Print with for loop all the number.
const arr = [1, 7, 3, 0, -5, 7, 3, 9];
for (let i = 0; i <= arr.length-1; i++) {
    console.log("arr number: "+arr[i]);
}

//2. Create function “arrayLength” that return the array length (don’t use arr.length)
function arrayLength() {
    let length=0;
    for (let i = 0; i < arr.length; i++) {
        length++;
    }
    console.log("Length is: "+length);
}
arrayLength()

//3. Create function “arraySum” , the function return the sum of all elements in array.
function arraySum() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum is: "+sum);
}
arraySum()

// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array. 
function arrayMulti() {
    let Multi = 0;
    for (let i = 0; i < arr.length; i++) {
        Multi *= arr[i];
    }
    console.log("multi is: "+Multi*-1);
}
arrayMulti()