/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  if (strs.length === 0) return commonPrefix;

  // loop through the characters of first element
  for (let i = 0; i < strs[0].length; i++) {
    let currCharOfFirstEl = strs[0][i];

    // loop through the elements of array and compare each element's character with the first element's character at the same position
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== currCharOfFirstEl) return commonPrefix;
    }
    commonPrefix += currCharOfFirstEl;
  }
  return commonPrefix;
};