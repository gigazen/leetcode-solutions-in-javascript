/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;
  
  for (let i = 0; i < haystack.length; i++) {
    let isMatch = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) return i;
  }
  return -1;
};