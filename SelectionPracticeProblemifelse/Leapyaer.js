
if (process.argv.length < 3) {
    console.log("Usage: node LeapYear.js <year>");
    process.exit(1);
}
const year = parseInt(process.argv[2]);

if (isNaN(year) || year < 1000 || year > 9999) {
    console.log("Please enter a valid 4-digit year.");
    process.exit(1);
}

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year.");
} else {
    console.log(year + " is NOT a Leap Year.");
}
