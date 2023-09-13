/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToTMap = {}; // Map from characters in s to characters in t
  const tToSMap = {}; // Map from characters in t to characters in s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sToTMap[charS]) {
      // If sToTMap already has a mapping, check if it matches the current character in t
      if (sToTMap[charS] !== charT) {
        return false; // Mismatch, not isomorphic
      }
    } else {
      sToTMap[charS] = charT; // Create a new mapping
    }

    if (tToSMap[charT]) {
      // If tToSMap already has a mapping, check if it matches the current character in s
      if (tToSMap[charT] !== charS) {
        return false; // Mismatch, not isomorphic
      }
    } else {
      tToSMap[charT] = charS; // Create a new mapping
    }
  }

  return true; // All characters have valid mappings, strings are isomorphic
}