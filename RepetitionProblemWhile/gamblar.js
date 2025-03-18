function playGamblerGame() {
    let money = 100;    
    const goal = 200;   
    let bets = 0;     
    let wins = 0;       
  
    console.log("Starting with ₹100. Goal: ₹200. Losing everything means Game Over!");
  
    while (money > 0 && money < goal) {
      bets++;
  
      
      const betResult = Math.random() < 0.5;
  
      if (betResult) {
        money++;  
        wins++;
      } else {
        money--;  
      }
  
      console.log(`Bet ${bets}: ${betResult ? "Win" : "Lose"} | Money: ₹${money}`);
    }
  
    if (money === goal) {
      console.log(" Congratulations! You reached your goal of ₹200!");
    } else {
      console.log(" You went broke! Better luck next time.");
    }
  
    console.log(`Total Bets: ${bets}`);
    console.log(`Total Wins: ${wins}`);
  }
  
  playGamblerGame();
  