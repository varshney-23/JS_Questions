function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }
  
  function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
      console.log(`${num} is not a prime number.`);
      return;
    }
    
    console.log(`${num} is a prime number.`);
  
    const palindrome = getPalindrome(num);
    console.log(`The palindrome of ${num} is ${palindrome}.`);
  
    if (isPrime(palindrome)) {
      console.log(` The palindrome number ${palindrome} is also prime.`);
    } else {
      console.log(`The palindrome number ${palindrome} is not prime.`);
    }
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter a number: ", (input) => {
    const num = parseInt(input);
    if (isNaN(num) || num < 0) {
      console.log("Please enter a valid non-negative integer.");
    } else {
      checkPrimeAndPalindrome(num);
    }
    rl.close();
  });
  