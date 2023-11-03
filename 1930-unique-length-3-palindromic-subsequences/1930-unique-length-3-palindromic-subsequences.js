/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const isPalindrome = (s) => {
    let halfN = Math.trunc(s.length / 2);
    let n = s.length;
    for (let i = 0; i < halfN; i++) {
      if (s[i] !== s[n - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  var isSubsequence = function (s, t) {
    // Edge cases
    if (s === t) return true;
    if (s.length === 0) return true;
    if (s.length > t.length) return false;

    let indexS = 0;
    for (let i = 0; i < t.length; i++) {
      if (s[indexS] === t[i]) {
        indexS++;
      }
    }

    return indexS === s.length;
  };

  let small = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;

  for (let ch1 of small) {
    for (let ch2 of small) {
      for (let ch3 of small) {
        const strOf3Chars = ch1 + ch2 + ch3;
        if (isPalindrome(strOf3Chars)) {
          if (isSubsequence(strOf3Chars, s)) {
            count++;
          }
        }
      }
    }
  }
  return count;
};