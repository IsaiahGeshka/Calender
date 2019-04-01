var moment = require('moment');
moment().format();

const chalk = require('chalk');

var months = require('months');

// var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
i = 0;
year = 2019

function isLeapYear(year) {
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

}

function getNumberofDaysInMonth(year, month){
    var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
for (i = 0; i < month.length; i++) {


    // month = 1;
    function mon(month) {
        if (month[i] == 1 || month[i] == 3 || month[i] == 5 || month[i] == 7 ||
            month[i] == 8 || month[i] == 10 || month[i] == 12)
            return 31;
        if (month[i] == 4 || month[i] == 6 || month[i] == 9 || month[i] == 11)
            return 30;
        if (month[i] == 2) return isLeapYear(year) ? 29 : 28;

        return 0; // If month is incorrect
    }
    console.log(mon(month))
}
}
console.log(getNumberofDaysInMonth(year, month[0]))

function printMonthTitle(year, month) {
    //        System.out.println("         " + getMonthName(month) + " " + year);
    // getMonthName(month[0]);
    console.log("\t " + getMonthName(month) + " " + year);
    console.log("-----------------------------");
    console.log(" Sun Mon Tue Wed Thu Fri Sat");
}
i = 0;
for (i; i < month.length; i++) {

console.log(printMonthTitle(year,month[i]))
}
function getMonthName(month){
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

return monthName[month - 1];
}
console.log(getMonthName(month))

function printMonthBody( year, month) {
    // Get start day of the week for the first date in the month
    var startDay = getStartDay(year, month);
    
    // Get number of days in the month
    var numberofDaysInMonth = getNumberofDaysInMonth(year, month);
    
    // Pad space befor the first day of the month
    i = 0;
    for (i = 0; i < startDay; i++)
        console.log("    ");
    
    for (i = 1; i <= numberofDaysInMonth; i++){
        console.log("%4d", i);
        
        if ((i + startDay) % 7 == 0)
            console.log();
    }
    console.log();
}
console.log(printMonthBody(year, month[i]))

function getStartDay(year, month){
    var START_DAY_FOR_JAN_1_1800 = 3;
    // Get total number of days from 1/1/1800 to month/1/year
    var totalNumberofDays = getTotalNumberofDays(year, month);
    
    // Return the start day for month/1/year
    return (totalNumberofDays + START_DAY_FOR_JAN_1_1800) % 7;
}
console.log(getStartDay(year, month[0]))

function getTotalNumberofDays( year, month) {
    var total = 0;
    
    // Get the total days form 1800 to 1/1/year
    for (var i = 1800; i < year; i++)
        if(isLeapYear(i))
            total +=  366;
        else
           total += 365;
    
    // Add days from Jan to the month prior to the calendar month
    for (var i = 1; i < month; i++)
        // total = total + getNumberofDaysInMonth(year, i);

    return total;
}
console.log(getTotalNumberofDays(year, month[i]))