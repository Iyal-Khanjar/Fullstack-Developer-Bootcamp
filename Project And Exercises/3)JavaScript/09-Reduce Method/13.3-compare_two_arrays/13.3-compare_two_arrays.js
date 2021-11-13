const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
let same = [];
for (let i = 0; i <= food.length - 1; i++) {
    for (let j = 0; j <= food1.length - 1; j++) {
        if (food[i] == food1[j]) {
            same.push(food[i]);
        }   
    }
}
console.log(same);