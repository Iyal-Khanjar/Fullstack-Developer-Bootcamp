function findSmallest(a, b, c) {
    // if (a > b > c){
    if (a > c && b > c) {
        return c;
        // } else if (a > c > b) {
    } else if (b > a && c > a) {
        return a;
    } else {
        return b;
    }
}
// findSmalest(52, 66, 2);
console.log(findSmallest(52, 66, 2));