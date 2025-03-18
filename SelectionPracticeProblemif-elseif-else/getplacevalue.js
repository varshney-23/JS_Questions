function getPlaceValue(number) {
    switch (number) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        case 1000000: return "Million";
        default: return "Invalid input! Please enter 1, 10, 100, 1000, etc.";
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number (1, 10, 100, 1000, etc.): ", (num) => {
    num = parseInt(num); 
    console.log(getPlaceValue(num)); 
    readline.close();
});
