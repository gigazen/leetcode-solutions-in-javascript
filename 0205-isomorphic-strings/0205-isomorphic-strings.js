/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToTMap = new Map();
  const tToSMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!sToTMap.has(charS)) {
      sToTMap.set(charS, charT);
    } else {
      if (sToTMap.get(charS) !== charT) {
        return false;
      }
    }

    if (!tToSMap.has(charT)) {
      tToSMap.set(charT, charS);
    } else {
      if (tToSMap.get(charT) !== charS) {
        return false;
      }
    }
  }

  return true;
}