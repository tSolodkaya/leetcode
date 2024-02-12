// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function (words) {
  let prefix = words[0];

  for (let word of words) {
    for (let i = prefix.length - 1; i >= 0; i -= 1) {
      if (prefix[i] !== word[i]) {
        prefix = prefix.slice(0, i);
      }
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
