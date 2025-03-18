
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function primeFactors(n) {
  if (n <= 1) {
    console.log("No prime factors for numbers less than or equal to 1.");
    return;
  }

  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  console.log(`Prime factors: ${factors.join(', ')}`);
}

rl.question("Enter a number to compute its prime factors: ", (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive integer.");
  } else {
    primeFactors(num);
  }
  
  rl.close();
});
