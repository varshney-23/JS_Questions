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

rl.question("Enter a number to check if it's prime: ", (input) => {
  const num = parseInt(input);
  
  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else {
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
  rl.close();
});
