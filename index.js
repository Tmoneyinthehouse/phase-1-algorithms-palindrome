function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  return reverseWord === word;
}

/* 
  call on functrion isPalindrome
  find if the argument is a palindrome or not
  return true/false depending on end value (if it's a palindrome or not)
*/

/*
  The argument is taken in and used to make a new variable that is turned into an array of each character in the word, reversed in order, and finally joins them back together into a new string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
