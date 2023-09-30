/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // edge cases : check for total length of s and t, also check for number of unique characters in s and t
  if (s.length !== t.length) return false;

  let sToTMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (!sToTMap.has(charS)) {
      sToTMap.set(charS, charT);
    }

    if (sToTMap.get(charS) !== charT) return false;
  }

  return sToTMap.size === new Set(sToTMap.values()).size;
};