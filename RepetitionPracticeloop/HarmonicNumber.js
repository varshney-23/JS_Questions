// Get command-line arguments
const args = process.argv.slice(2);

// Validate input
if (args.length === 0 || isNaN(args[0]) || args[0] <= 0) {
    console.log("Please provide a positive integer value for n.");
    process.exit(1);
}

const n = parseInt(args[0]);

// Generate harmonic series in the desired format
let series = "";
for (let i = 1; i <= n; i++) {
    series += `1/${i}`;
    if (i !== n) {
        series += " + ";
    }
}

// Print the harmonic series
console.log(`H(${n}) = ${series}`);
