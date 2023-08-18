/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let currentIndex = -1;
  for (let i = 0; i < s.length; i++) {
    const target = t.indexOf(s[i], currentIndex + 1);
    if (target > currentIndex) {
      currentIndex = target;
    } else {
      return false;
    }
  }
  return true;
};