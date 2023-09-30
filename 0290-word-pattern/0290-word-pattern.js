/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let strArr = s.split(" ");
  if (pattern.length !== strArr.length) return false;

  let pToSMap = new Map();
  let sToPMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let charP = pattern[i];
    let charS = strArr[i];

    if (!pToSMap.has(charP) && !sToPMap.has(charS)) {
      pToSMap.set(charP, charS);
      sToPMap.set(charS, charP);
    } else if (pToSMap.get(charP) !== charS || sToPMap.get(charS) !== charP) {
      return false;
    }
  }

  return true;
};