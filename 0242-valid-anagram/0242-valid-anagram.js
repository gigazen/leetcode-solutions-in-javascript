/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // if any of the strings is not defined or falsy then not anagram, if their lengths are not same then also not anagram   
  if (!s || !t) return false;
  if (s.length !== t.length) return false;

  const charCountMap = new Map();
  
  // iterate through the first string and create character-count, key-value entries in map 
  for (let i = 0; i < s.length; i++) {
    const currChar = s.charAt(i);

    if (!charCountMap.has(currChar)) {
      charCountMap.set(currChar, 1);
    } else {
      let charCount = charCountMap.get(currChar);
      charCountMap.set(currChar, charCount + 1);
    }
  }

  // iterate through the second string and delete character-count, key-value entries from map, if matched  
  for (let i = 0; i < t.length; i++) {
    const currChar = t.charAt(i);

    if (!charCountMap.has(currChar)) {
      return false;
    }

    if (charCountMap.get(currChar) === 1) {
      charCountMap.delete(currChar);
    } else {
      let charCount = charCountMap.get(currChar);
      charCountMap.set(currChar, charCount - 1);
    }
  }

  return charCountMap.size === 0;
};