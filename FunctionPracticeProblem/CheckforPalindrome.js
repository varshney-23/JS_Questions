function isPalindrome(num) {
 
    const strNum = num.toString();
    
    return strNum === strNum.split('').reverse().join('');
  }
  
  function checkPalindromes(num1, num2) {
    const isNum1Palindrome = isPalindrome(num1);
    const isNum2Palindrome = isPalindrome(num2);
  
    console.log(`${num1} is ${isNum1Palindrome ? 'a' : 'not a'} palindrome.`);
    console.log(`${num2} is ${isNum2Palindrome ? 'a' : 'not a'} palindrome.`);
  
    if (isNum1Palindrome && isNum2Palindrome) {
      console.log(" Both numbers are palindromes!");
    } else if (!isNum1Palindrome && !isNum2Palindrome) {
      console.log(" Neither number is a palindrome.");
    } else {
      console.log(" One of the numbers is a palindrome.");
    }
  }

  checkPalindromes(121, 12321); 
  checkPalindromes(123, 456);  
  checkPalindromes(1221, 1234);