// Block 1
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();
// before running the code console.log(a) will be undefind and console.log(foo())
// will give an error

// after running the code console.log(a) is undefine and console.log(foo()) return 2

// Block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// before running the code console.log(obj.prop.getFullName()); will return 'John Doe'
// and console.log(test()); will gives an error

// after running the code console.log(obj.prop.getFullName()); returned 'Aurelio De Rosa'
// and console.log(test()); will gives undefined

// Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
// before running the code console.log(typeof a); will return Integer
// and console.log(typeof b); will return Integer

// after running the code console.log(typeof a); returned undefined
// and console.log(typeof b); returned number

// Block 4
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();
// before running the code the first funcC(); will console log 1
// and the second funcC(); will console log 2

// after running the code the first funcC(); console logged 2
// and the second funcC(); consoled logged 2

// Block 5
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
// console.log(e);
// before running the code console.log(d); will give an error
// and the code console.log(e); will give undefined

// after running the code console.log(d); console logged 1 
// and the code console.log(e); gives error

// Block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// before running the code console.log("Value of f in local scope: ", f); will give
// Value of f in local scope:  undefined
// and the second code console.log("Value of f in global scope: ", f);
// will give Value of f in local scope: undefined

// after running the code console.log("Value of f in local scope: ", f); gives 
// Value of f in local scope:  undefined
// and the second code console.log("Value of f in global scope: ", f);
// will give Value of f in local scope: 1
