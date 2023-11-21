/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;

  let nIdx = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[nIdx]) {
      nIdx++;
      if (nIdx === needle.length) return i - (nIdx - 1);
    } else {
      i = i - nIdx;
      nIdx = 0;
    }
  }
  return -1;
};
