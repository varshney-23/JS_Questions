function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function simulateDiceRolls() {
    const rollCounts = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
  
    while (true) {
      const result = rollDie();
      rollCounts.set(result, rollCounts.get(result) + 1);
  
      if (rollCounts.get(result) === 10) break;
    }
  
    return rollCounts;
  }
  function findMinMax(rollCounts) {
    let maxNum, minNum;
    let maxCount = -Infinity, minCount = Infinity;
  
    for (const [num, count] of rollCounts) {
      if (count > maxCount) {
        maxCount = count;
        maxNum = num;
      }
      if (count < minCount) {
        minCount = count;
        minNum = num;
      }
    }
  
    return { maxNum, maxCount, minNum, minCount };
  }
  
  const rollResults = simulateDiceRolls();
  console.log("Dice Roll Results:", Object.fromEntries(rollResults));
  const { maxNum, maxCount, minNum, minCount } = findMinMax(rollResults);
  console.log(`Number with Maximum Rolls: ${maxNum} (${maxCount} times)`);
  console.log(`Number with Minimum Rolls: ${minNum} (${minCount} times)`);
  