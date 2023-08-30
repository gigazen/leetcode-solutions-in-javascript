/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWordLength = 0;
  let rightOfLastNonEmptyChar = true;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      lastWordLength++;
      rightOfLastNonEmptyChar = false;
    } else {
      if (!rightOfLastNonEmptyChar) {
        break;
      }
    }
  }

  return lastWordLength;
};
