console.log(this);
// give an empty obj

const myObj = {
    name: "Timmy",
    // greet: () => {
    greet: function () {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
//arrow function should change it to normal function

const myFuncDec = function () {
    console.log(this);
};
// not calling the function nothing happen

const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
// this will corrsopond to the window object

// document.querySelector(".element").addEventListener(() => {
document.querySelector(".element").addEventListener('click',function(){
    console.log('this');
})
