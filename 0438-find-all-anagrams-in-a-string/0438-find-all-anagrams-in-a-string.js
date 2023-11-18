/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];

  let [ sLength, pLength, leftIdx, rightIdx, numOfMatches, startIdxArr, pCharFreqMap, ] = [s.length, p.length, 0, 0, p.length, [], {}];

  for (let char of p) {
    pCharFreqMap[char] = 1 + (pCharFreqMap[char] || 0);
  }

  while (rightIdx < sLength) {
    const [sRChar, sLChar] = [s[rightIdx], s[leftIdx]];

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