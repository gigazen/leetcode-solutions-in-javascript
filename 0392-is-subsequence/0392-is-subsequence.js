/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === t) return true;
  if (s.length === 0) return true;
  if (s.length > t.length) return false;

  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    let indexOfCharInT = t.indexOf(s[i], startIndex);
    if (indexOfCharInT === -1) return false;
    startIndex = indexOfCharInT + 1;
  }
  return true;
};