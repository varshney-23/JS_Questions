function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 900) + 100); 
    }
    return numbers;
  }
  function findSecondLargestSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
      }
  
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
    return { secondLargest, secondSmallest };
  }
  const numbers = generateRandomNumbers();
  console.log("Generated Numbers:", numbers);
  const result = findSecondLargestSmallest(numbers);
  console.log("Second Largest Number:", result.secondLargest);
  console.log("Second Smallest Number:", result.secondSmallest);
  