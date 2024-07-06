// cm to km
function cmToKm(km) {
    let cm = km * 0.00001;
    return cm;
}
const totalKm = cmToKm(200000);
console.log(totalKm);



// find out the factorial
function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

const Number = 4;
const result = factorialize(Number);
console.log(result);


// hours to minutes
function HoursToMinutes(hours) {
    return hours * 60;
}

const hours = 24;
const minute = HoursToMinutes(hours);
console.log("minute:", minute,);



// find the leapyears
// function leapYear(year) {
//     const calculation = year % 4;
//     let isLeapYear;
//     if (calculation === 0) {
//         isLeapYear = true;
//     } else {
//         isLeapYear = false;
//     }
//     return isLeapYear;
// }


// const raju = [2023, 2024, 2025, 2028, 2030];
// const isLeapYear = leapYear(raju);
// console.log(isLeapYear);



// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


// let allyears = [2023, 2024, 2025, 2028, 2030]
const year = checkLeapYear(2024);




