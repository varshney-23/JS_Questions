const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorialIterative(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

rl.question("Enter a number to calculate its factorial: ", (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative integer.");
  } else {
    console.log(`Factorial of ${num} using iteration: ${factorialIterative(num)}`);
    console.log(`Factorial of ${num} using recursion: ${factorialRecursive(num)}`);
  }

  rl.close();
});
