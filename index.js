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
