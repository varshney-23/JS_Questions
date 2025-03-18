function flipCoin() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
  }
  function playCoinFlipGame() {
    let headsCount = 0;
    let tailsCount = 0;
  
    console.log("Starting the coin flip game. First to reach 11 wins!");
  
    while (headsCount < 11 && tailsCount < 11) {
      const result = flipCoin();
      console.log(`Flip: ${result}`);
  
      if (result === 'Heads') {
        headsCount++;
      } else {
        tailsCount++;
      }
  
      console.log(`Score -> Heads: ${headsCount}, Tails: ${tailsCount}`);
    }
  
    if (headsCount === 11) {
      console.log("Heads wins with 11 points!");
    } else {
      console.log("Tails wins with 11 points!");
    }
  }
  
  playCoinFlipGame();
  