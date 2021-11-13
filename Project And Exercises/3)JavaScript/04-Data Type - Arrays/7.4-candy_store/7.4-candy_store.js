const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}
function getCandy(candyStore, id) {
    return candyStore.candies.find(element => element.id == id);

}
function getPrice(candyStore, id) {
    return getCandy(candyStore, id).price;
}
function getName(candyStore, id) {
    return getCandy(candyStore, id).name;
}
function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}
function buy(candyStore, id){
    let toBuy=getCandy(candyStore,id);
    console.log(toBuy,"tobuy");
    if(toBuy.amount>0)
    {
        candyStore.cashRegister+=toBuy.price;
        toBuy.amount-=1
    }
    }

console.log(getCandy(candyStore, "5hd7y"));
console.log('price is = ', getPrice(candyStore, "5hd7y"));
console.log('name is = ', getName(candyStore, "5hd7y"));
addCandy(candyStore, "11f5a", "mastek", 10)
console.log(candyStore);
buy(candyStore,"11f5a");
console.log(candyStore)