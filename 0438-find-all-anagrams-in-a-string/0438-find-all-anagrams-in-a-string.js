/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sArr = new Array(26).fill(0);
  const pArr = new Array(26).fill(0);
  const result = [];

  for (let i = 0; i < p.length; i++) {
    let index = p.charCodeAt(i) % 26;
    pArr[index]++;
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) % 26;
    sArr[index]++;

    if (i > p.length - 1) {
      let headIdx = s.charCodeAt(i - p.length) % 26;
      sArr[headIdx]--;
    }

    if (i >= p.length - 1) {
      if (arrayValuesEqual(sArr, pArr)) result.push(i - (p.length - 1));
    }
  }

  function arrayValuesEqual(arrl, arr2) {
    for (let i = 0; i < arrl.length; i++) if (arrl[i] !== arr2[i]) return false;
    return true;
  }

  return result;
};