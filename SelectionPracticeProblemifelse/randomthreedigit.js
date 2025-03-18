
function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100;
}
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomThreeDigit());
}
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
