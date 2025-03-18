// Function to perform unit conversion
function unitConversion(choice, value) {
    switch (choice) {
        case 1:
            console.log(`${value} Feet = ${value * 12} Inches`);
            break;
        case 2:
            console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
            break;
        case 3:
            console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
            break;
        case 4:
            console.log(`${value} Meters = ${(value * 3.2808).toFixed(4)} Feet`);
            break;
        default:
            console.log("Invalid choice! Please select a valid option (1-4).");
    }
}

// Read input from user (for Node.js)
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Select conversion type:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

readline.question("Enter your choice (1-4): ", (choice) => {
    choice = parseInt(choice);
    readline.question("Enter the value to convert: ", (value) => {
        value = parseFloat(value);
        unitConversion(choice, value);
        readline.close();
    });
});
