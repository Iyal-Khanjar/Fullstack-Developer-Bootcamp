const myCountry = {}

myCountry.country = "Israel";
myCountry.capital = 'Jerusalem';
myCountry.language = 'Hebrew';
myCountry.population = '7 Million';
myCountry.neighbours = 6;

// ‘Finland has 6 million people, their mother tongue is Finnish, they
// have 3 neighbouring countries and a capital called Helsinki’. 
myCountry.talk = function () {
    describe = this.country + " has " + this.population + " people, their mother tongue is " + this.language + ", they have " + this.neighbours + " neighbours countries and a capital called " + this.capital;
    console.log(myCountry);
    console.log(describe);
}
