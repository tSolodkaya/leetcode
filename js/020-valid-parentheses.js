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

const isValid = function (string) {
  let result = [];
  let isTrue = false;

  if (string.length < 2) {
    `This string is ${isTrue}`;
  }

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "(" && string[i + 1] === ")") {
      result.push(true);
    }

    if (string[i] === ")" && string[i - 1] === "(") {
      result.push(true);
    }

    if (string[i] === "{" && string[i + 1] === "}") {
      result.push(true);
    }

    if (string[i] === "}" && string[i - 1] === "{") {
      result.push(true);
    }
    if (string[i] === "[" && string[i + 1] === "]") {
      result.push(true);
    }

    if (string[i] === "]" && string[i - 1] === "[") {
      result.push(true);
    }
  }

  if (result.length === string.length) {
    isTrue = true;
  }

  return `This string is ${isTrue}`;
};

console.log(isValid("()"));
console.log(isValid(")()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("("));
console.log(isValid("()}[]{}"));
console.log(isValid("()}[]{}[[["));
console.log(isValid("()()()()[]{}"));
