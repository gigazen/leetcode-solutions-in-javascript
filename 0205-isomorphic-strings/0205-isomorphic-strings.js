/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sToTMap = new Map();
  const tToSMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!sToTMap.has(charS) && !tToSMap.has(charT)) {
      sToTMap.set(charS, charT);
      tToSMap.set(charT, charS);
    } else if (sToTMap.get(charS) !== charT || tToSMap.get(charT !== charS))
      return false;
  }

  return true;
};