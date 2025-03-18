const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true; 
  
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
function findPrimesInRange(start, end) {
  const primes = [];
  for (let i = Math.max(2, start); i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

rl.question("Enter the starting number of the range: ", (startInput) => {
  rl.question("Enter the ending number of the range: ", (endInput) => {
    const start = parseInt(startInput);
    const end = parseInt(endInput);

    if (isNaN(start) || isNaN(end) || start > end || start < 0) {
      console.log("Please enter a valid range (positive integers with start ≤ end).");
    } else {
      const primes = findPrimesInRange(start, end);
      if (primes.length > 0) {
        console.log(`Prime numbers between ${start} and ${end}: ${primes.join(', ')}`);
      } else {
        console.log(`No prime numbers found between ${start} and ${end}.`);
      }
    }
    rl.close();
  });
});
