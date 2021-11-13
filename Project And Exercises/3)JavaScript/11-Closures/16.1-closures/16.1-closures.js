// Block 1
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// before running the code: console log will  return nothing

// after running the code: console log returned nothing

// Block 2
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);
// before running the code: functions will do nothing and the console.log(a) will print 1

// after running the code: functions will do nothing and the console.log(a) printed 1

// Block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
// before running the code: console.log(i) print 1,2

// after running the code: printed 3,3,3