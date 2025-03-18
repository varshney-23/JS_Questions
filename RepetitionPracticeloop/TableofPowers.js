const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a value for n: ', (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 0) {
    console.log('Please enter a valid non-negative integer.');
  } else {
    console.log(`Powers of 2 up to 2^${n}:`);
    console.log('Exponent | Power of 2');
    console.log('----------------------');

    for (let i = 0; i <= n; i++) {
      console.log(`${i}        | ${Math.pow(2, i)}`);
    }
  }

  rl.close();
});
