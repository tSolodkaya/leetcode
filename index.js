// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

const isValid = function (s) {
  const open = {
    "(": "(",
    "{": "{",
    "[": "[",
  };

  const close = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (const br of s) {
    if (br in open) {
      stack.push(br);
    }
    if (br in close && stack.pop() !== close[br]) {
      return false;
    }
  }

  return !stack.length;
};

console.log(`true: `, isValid("()()()()[]{}"));
console.log(`false: `, isValid(")()"));
console.log(`false: `, isValid("(]"));
console.log(`false: `, isValid("("));
console.log(`false: `, isValid("()}[]{}"));
console.log(`false: `, isValid("()}[]{}[[["));
console.log(`true: `, isValid("({[]})"));
console.log(`true: `, isValid("{[]}"));
