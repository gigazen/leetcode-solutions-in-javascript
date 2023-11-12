/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const result = [];
  const pMap = new Map();

  // Create a frequency map for string p
  for (let char of p) {
    pMap.set(char, pMap.get(char) + 1 || 1);
  }

  let left = 0;
  let right = 0;
  let count = p.length;

  while (right < s.length) {
    const char = s[right];

    if (pMap.has(char)) {
      pMap.set(char, pMap.get(char) - 1);

      if (pMap.get(char) >= 0) {
        count--;
      }
    }

    while (count === 0) {
      if (right - left + 1 === p.length) {
        result.push(left);
      }

      const leftChar = s[left];

      if (pMap.has(leftChar)) {
        pMap.set(leftChar, pMap.get(leftChar) + 1);

        if (pMap.get(leftChar) > 0) {
          count++;
        }
      }

      left++;
    }

    right++;
  }

  return result;
}