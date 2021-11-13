// name day days[d.getDay()]
const DayName = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
a=days[DayName.getDay()]

// number day
const DayNumber = new Date();
b=DayNumber.getDate()

// month
const month = new Date();
const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
c=Months[month.getMonth()];

// year
const Year = new Date();
d=Year.getFullYear()

// function
function date(){
    console.log('Today is '+ a + ' the '+ b + ' of ' + c + ' ' + d)
}
date()
