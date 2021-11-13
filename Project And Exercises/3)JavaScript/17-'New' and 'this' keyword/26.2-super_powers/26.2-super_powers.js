const storm = {
    superPower: 'flying',
    power: printSuperPower
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}
storm.power()