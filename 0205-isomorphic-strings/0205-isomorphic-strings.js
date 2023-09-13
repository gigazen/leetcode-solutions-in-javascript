/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToTMap = {};
  const tToSMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!sToTMap[s[i]]) {
      sToTMap[s[i]] = t[i];
    } else {
      if (sToTMap[s[i]] !== t[i]) {
        return false;
      }
    }

    if (!tToSMap[t[i]]) {
      tToSMap[t[i]] = s[i];
    } else {
      if (tToSMap[t[i]] !== s[i]) {
        return false;
      }
    }
  }

  return true;
}