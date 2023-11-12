/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  let pCharFreqMap = {};
  let sCharFreqMap = {};
  let result = [];

  for (let i = 0; i < p.length; i++) {
    pCharFreqMap[p[i]] = 1 + (pCharFreqMap[p[i]] || 0);
    sCharFreqMap[s[i]] = 1 + (sCharFreqMap[s[i]] || 0);
  }

  result = areObjectsEqual(sCharFreqMap, pCharFreqMap) ? [0] : [];

  let leftIdx = 0;
  for (let rightIdx = p.length; rightIdx < s.length; rightIdx++) {
    sCharFreqMap[s[rightIdx]] = 1 + (sCharFreqMap[s[rightIdx]] || 0); 
    sCharFreqMap[s[leftIdx]]--; 
    if (sCharFreqMap[s[leftIdx]] === 0) {
      delete sCharFreqMap[s[leftIdx]]; 
    }
    leftIdx++; 

    if (areObjectsEqual(sCharFreqMap, pCharFreqMap)) {
      result.push(leftIdx);
    }
  }

  function areObjectsEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }

  return result;
};