function getSum(arr1, arr2) {
    // const sum = 0;  when need to use let to add change vaules const dosent make us 
    // do that.
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    // add console log to print
    console.log(sum)
}
// add a coma seperator (,)
getSum([1, 2, 3], [1, 2, 3]);
