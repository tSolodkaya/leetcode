// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  const regex = /[^a-zA-Z0-9]/g;
  const clean = s.replace(regex, "").toLowerCase();

  let i = 0;
  let j = clean.length - 1;

  while (i <= j) {
    if (clean[i] === clean[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
