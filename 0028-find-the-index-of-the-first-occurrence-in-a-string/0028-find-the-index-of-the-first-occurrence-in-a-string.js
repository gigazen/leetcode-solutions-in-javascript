/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) return -1;

  let [hLength, nLength, leftIdx, rightIdx, numOfMatches, nCharFreqMap] = [
    haystack.length,
    needle.length,
    0,
    0,
    needle.length,
    {},
  ];

  for (let char of needle) {
    nCharFreqMap[char] = 1 + (nCharFreqMap[char] || 0);
  }

  while (rightIdx < hLength) {
    let [hLChar, hRChar] = [haystack[leftIdx], haystack[rightIdx]];

    if (nCharFreqMap[hRChar] > 0) numOfMatches--;
    nCharFreqMap[hRChar]--;
    rightIdx++;

    if (numOfMatches === 0 && haystack.substring(leftIdx, rightIdx) === needle)
      return leftIdx;

    if (rightIdx - leftIdx === nLength) {
      if (nCharFreqMap[hLChar] >= 0) numOfMatches++;
      nCharFreqMap[hLChar]++;
      leftIdx++;
    }
  }

  return -1;
};