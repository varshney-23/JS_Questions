const args = process.argv.slice(2);
if (args.length !== 2) {
    console.log("Usage: node script.js <day> <month>");
    process.exit(1);
}
const day = parseInt(args[0]);
const month = parseInt(args[1]);
function isDateInRange(day, month) {
    if ((month === 3 && day >= 20) ||
        (month === 4) || 
        (month === 5) ||
        (month === 6 && day <= 20)) {
        return true;
    }
    return false;
}

console.log(isDateInRange(day, month));
