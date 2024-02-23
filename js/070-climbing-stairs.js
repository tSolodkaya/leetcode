var climbStairs = function (n) {
  const steps = [1, 2];

  if (n === 0) return 1;

  for (let i = 2; i <= n; i += 1) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps[n - 1];
};
