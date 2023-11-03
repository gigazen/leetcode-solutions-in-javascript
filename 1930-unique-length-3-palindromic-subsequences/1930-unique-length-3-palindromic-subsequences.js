/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let uniqCharsInS = new Set(s);
  let countPS = 0;

  for (let char of uniqCharsInS) {
    let firstOccOfChar = s.indexOf(char);
    let lastOccOfChar = s.lastIndexOf(char);
    let noOfUniqCharsInBtwn = new Set(
      s.slice(firstOccOfChar + 1, lastOccOfChar)
    ).size;
    countPS += noOfUniqCharsInBtwn;
  }

  return countPS;
};