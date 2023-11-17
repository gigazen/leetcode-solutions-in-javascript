/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];

  let sLength = s.length;
  let pLength = p.length;
  let [leftIdx, rightIdx, numOfMatches] = [0, 0, pLength];
  const startIdxArr = [];
  const pCharFreqMap = {};

  for (let char of p) {
    pCharFreqMap[char] = 1 + (pCharFreqMap[char] || 0);
  }

  while (rightIdx < sLength) {
    const sRChar = s[rightIdx];
    const sLChar = s[leftIdx];

    if (pCharFreqMap[sRChar] > 0) numOfMatches--;

    pCharFreqMap[sRChar]--;
    rightIdx++;

    if (numOfMatches === 0) startIdxArr.push(leftIdx);

    if (rightIdx - leftIdx == pLength) {
      if (pCharFreqMap[sLChar] >= 0) numOfMatches++;

      pCharFreqMap[sLChar]++;
      leftIdx++;
    }
  }
  return startIdxArr;
};