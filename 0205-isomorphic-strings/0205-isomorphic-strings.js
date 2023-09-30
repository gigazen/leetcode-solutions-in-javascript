/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  if (new Set(s).size !== new Set(t).size) return false;

  let sToTMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (!sToTMap.has(charS)) {
      sToTMap.set(charS, charT);
    }

    if (sToTMap.get(charS) !== charT) return false;
  }

  return true;
};