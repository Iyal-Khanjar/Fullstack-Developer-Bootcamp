// 1. Using a loop, iterate through this array and console.log all of the people.
const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i <= people.length - 1; i++) {
    console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array.  
people.shift();
console.log(people);

// 3. Write the command to remove "James" from the array.
people.length = 2;
console.log(people);

// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

// 5. Write the command to add your name to the end of the array.
people.push("Iyal")
console.log(people);

// 6. Using a loop, iterate through this array and after console.loging "Mary",
// exit from the loop.
let i=0;
while (i !== -1) {
    console.log(people[i])
    if (people[i] === "Mary")
        i = -1;
    else i++;
}

// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt".
const copy = people.slice(2, 4);
console.log(copy);

// 8. Write the command that gives the indexOf where "Mary" is located.
let x = people.indexOf("Mary")
console.log(x);

// 9. Write the command that gives the indexOf where "Foo" is located (this
// should return -1).
let y = people.indexOf("foo")
console.log(y);

// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth" 
const people2 = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people2.length; i++) {
    if (people2[i] == "Devon") {
        people2.splice(i, 1);
    }
}
people2.splice(2, 0, "Elizabeth", "Artie");
console.log(people2);

// 11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".
let withBob = people.concat("BoB")
console.log(withBob)