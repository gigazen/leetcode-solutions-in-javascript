/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  let result = [];
  let pMap = {};
  let sMap = {};

  for (let char of p) {
    pMap[char] = (pMap[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let count = 0;

  while (right < s.length) {
    const char = s[right];

    if (pMap[char] !== undefined) {
      sMap[char] = (sMap[char] || 0) + 1;
      count++;

      while (sMap[char] > pMap[char]) {
        const leftChar = s[left];
        sMap[leftChar]--;
        count--;
        left++;
      }

      if (count === p.length) {
        result.push(left);
      }
    } else {
      sMap = {};
      count = 0;
      left = right + 1;
    }

    right++;
  }

  return result;
}