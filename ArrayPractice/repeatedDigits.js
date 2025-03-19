function findRepeatedDigits() {
    const repeatedDigits = [];
  
    for (let i = 0; i <= 100; i++) {
      const strNum = i.toString();
      if (strNum.length === 2 && strNum[0] === strNum[1]) {
        repeatedDigits.push(i);
      }
    }
  
    return repeatedDigits;
  }

  const repeatedDigitsArray = findRepeatedDigits();
  console.log("Numbers with repeated digits:", repeatedDigitsArray);