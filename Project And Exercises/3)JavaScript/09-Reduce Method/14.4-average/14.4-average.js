function calcAverage(arr) {
    // var sum; 
    // we need to give start value
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // return sum;
    // avg we need to divide be length
    return sum/arr.length;
}
console.log(calcAverage([88, 90, 92]));