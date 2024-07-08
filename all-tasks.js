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



// program to check leap year
const years = [2023, 2024, 2025, 2028, 2030];

function LeapYear(years) {
    let output = [];
    for (let i = 0; i < years.length; i++) {
        if ((years[i] % 4 == 0 && years[i] % 100 !== 0) || (years[i] % 400 == 0)) {
          output.push(years[i]);
        }
    }
    return output;
}

const allYears = LeapYear(years);
console.log('leap years',allYears);




