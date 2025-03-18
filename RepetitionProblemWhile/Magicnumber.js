
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMagicNumber() {
  console.log("Think of a number between 1 and 100. I will try to guess it!");

  let low = 1;
  let high = 100;

  function askQuestion() {
    if (low > high) {
      console.log("Something went wrong! Please restart the program.");
      rl.close();
      return;
    }

    const mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes, higher, lower): `, (answer) => {
      if (answer.toLowerCase() === 'yes') {
        console.log(`Yay! I guessed your number. It's ${mid}! 🎉`);
        rl.close();
      } else if (answer.toLowerCase() === 'higher') {
        low = mid + 1;
        askQuestion();
      } else if (answer.toLowerCase() === 'lower') {
        high = mid - 1;
        askQuestion();
      } else {
        console.log("Invalid input. Please type 'yes', 'higher', or 'lower'.");
        askQuestion();
      }
    });
  }

  askQuestion();
}

findMagicNumber();
