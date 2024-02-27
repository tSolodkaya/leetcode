// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  const obj = nums.reduce((acc, elem) => {
    if (acc[elem]) {
      return { ...acc, [elem]: acc[elem] + 1 };
    }
    return { ...acc, [elem]: 1 };
  }, {});

  let max = 0;
  for (let key of Object.keys(obj)) {
    max = Math.max(max, obj[key]);
  }

  return Object.keys(obj).find((elem) => obj[elem] === max);
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));
