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
  function findSecondLargestSmallestWithSort(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const secondSmallest = sortedArr[1];
    const secondLargest = sortedArr[sortedArr.length - 2];
    return { secondLargest, secondSmallest };
  }
  
  function primeFactors(n) {
    const factors = [];
  
    while (n % 2 === 0) {
      factors.push(2);
      n = n / 2;
    }
  
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }
  
    if (n > 2) {
      factors.push(n);
    }
  
    return factors;
  }
  
  const numbers = generateRandomNumbers();
  console.log("Generated Numbers:", numbers);
  
  const result1 = findSecondLargestSmallest(numbers);
  console.log("Second Largest (Without Sorting):", result1.secondLargest);
  console.log("Second Smallest (Without Sorting):", result1.secondSmallest);
  
  const result2 = findSecondLargestSmallestWithSort(numbers);
  console.log("Second Largest (With Sorting):", result2.secondLargest);
  console.log("Second Smallest (With Sorting):", result2.secondSmallest);
  
  const numberToFactorize = numbers[0]; 
  console.log(`Prime factors of ${numberToFactorize}:`, primeFactors(numberToFactorize));
  