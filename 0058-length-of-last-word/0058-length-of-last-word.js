/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWordLength = 0;
  let rightOfFirstNonEmptyChar = true;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      lastWordLength++;
      rightOfFirstNonEmptyChar = false;
    } else {
      if (!rightOfFirstNonEmptyChar) {
        break;
      }
    }
  }

  return lastWordLength;
};
