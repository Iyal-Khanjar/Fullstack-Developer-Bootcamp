const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"]
        }
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"]
        }
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"]
        }
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"]
        }
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"]
        }
    }
]
// 1. Create a function that returns all the names from the array.
data.forEach(function (name) {
    console.log(name.name);
})

// 2. Create a function that returns all the objects that are born before 1990.
data.forEach(function (born) {
    let x = born.birthday.replace(/\-/g, ' ').split(' ')[2]
    console.log('x',x);
    if (x < 1990)
        console.log(born.birthday);
})

// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.
let foods=arr=>{
    meals=arr.reduce((obj,val)=>{
        let temp=val.favoriteFoods
        for (let foodArr in temp){
            temp[foodArr].forEach(foodName => {
                obj[foodName]=(obj[foodName]||0)+1
            });
        }
        return obj
    },{})
    return meals
}
console.log(foods(data));

