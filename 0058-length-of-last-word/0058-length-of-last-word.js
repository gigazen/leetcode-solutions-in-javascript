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
    }
    if (s[i] === " " && rightOfLastNonEmptyChar === false) {
      break;
    }
  }

  return lastWordLength;
};