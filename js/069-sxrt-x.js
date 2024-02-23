// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

const mySqrt = function (x) {
  let r = x;
  while (r * r > x) {
    r = ((r + x / r) / 2) | 0;
  }

  return r;
};
