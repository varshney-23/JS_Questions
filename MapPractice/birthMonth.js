function generateBirthMonths() {
    const birthMonths = new Map();
    for (let i = 1; i <= 12; i++) {
      birthMonths.set(i, []);
    }
    for (let i = 1; i <= 50; i++) {
      const month = Math.floor(Math.random() * 12) + 1;
      birthMonths.get(month).push(`Person${i}`);
    } 
    return birthMonths;
  }
  function printBirthMonths(birthMonths) {
    for (const [month, individuals] of birthMonths) {
      console.log(`Month ${month}: ${individuals.length > 0 ? individuals.join(', ') : 'No Birthdays'}`);
    }
  }
  const birthMonths = generateBirthMonths();
  printBirthMonths(birthMonths);