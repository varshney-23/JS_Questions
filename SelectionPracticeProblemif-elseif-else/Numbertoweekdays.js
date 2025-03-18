function getWeekDay(number) {
    switch (number) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input! Please enter a number between 1 and 7.";
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number (1-7) for a weekday: ", (num) => {
    num = parseInt(num); 
    console.log(getWeekDay(num)); 
    readline.close();
});
