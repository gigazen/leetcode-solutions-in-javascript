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
    if (!sToTMap.has(s[i])) {
      sToTMap.set(s[i], t[i]);
    } else {
      if (sToTMap.get(s[i]) !== t[i]) {
        return false;
      }
    }

    if (!tToSMap.has(t[i])) {
      tToSMap.set(t[i], s[i]);
    } else {
      if (tToSMap.get(t[i]) !== s[i]) {
        return false;
      }
    }
  }

  return true;
}