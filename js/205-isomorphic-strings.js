// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function (s, t) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = t[i];
    obj2[t[i]] = s[i];
  }

  const values = Object.values(obj1);
  const keys = Object.keys(obj2);

  if (Number(s) && Number(t)) {
    values.sort((a, b) => a - b);
    keys.sort((a, b) => a - b);
  }

  for (let i = 0; i < values.length; i += 1) {
    if (values[i] !== keys[i]) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic("13", "42"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
console.log(isIsomorphic("paper", "tidle"));
console.log(isIsomorphic("13", "42"));
