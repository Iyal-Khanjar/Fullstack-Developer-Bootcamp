function checkLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year + " It is indeed a leap year");
    } else {
        console.log(year + " This is not a leap year.");
    }
}
checkLeapYear(2012);
checkLeapYear(2100);
checkLeapYear(2400);