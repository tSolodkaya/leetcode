// Given a string s, find the length of the longest
// substring
// without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function findSubstringWithoutRepeating(str) {
  const set = new Set();
  let i = 0;
  let max = 0;

  for (let j = 0; j < str.length; j += 1) {
    while (set.has(str[j])) {
      set.delete(str[i]);
      i += 1;
    }

    set.add(str[j]);
    max = Math.max(max, set.size);
  }

  console.log(set);
  return max;
}

console.log(findSubstringWithoutRepeating("abcabcbb"));
console.log(findSubstringWithoutRepeating("bbbbb"));
console.log(findSubstringWithoutRepeating("pwwkew"));
