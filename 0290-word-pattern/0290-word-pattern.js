/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let strArr = s.split(" ");

  if (pattern.length !== strArr.length) return false;
  if (new Set(pattern).size !== new Set(strArr).size) return false;

  let pToSMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let charP = pattern[i];
    let charS = strArr[i];

    if (!pToSMap.has(charP)) {
      pToSMap.set(charP, charS);
    }

    if (pToSMap.get(charP) !== charS) return false;
  }

  return true;
};