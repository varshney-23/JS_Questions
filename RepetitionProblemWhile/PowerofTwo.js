
const args = process.argv.slice(2);

if (args.length === 0 || isNaN(args[0]) || args[0] < 0) {
    console.log("Please provide a non-negative integer value for n.");
    process.exit(1);
}

const n = parseInt(args[0]);
const maxLimit = 256;

console.log(`Table of powers of 2 up to 2^${n} or 256:`);

let power = 1;
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${power}`);
    power *= 2;
    if (power > maxLimit) {
        break;
    }
}
