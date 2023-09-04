var isAnagram = function (s, t) {
  // if any of the strings is not defined or falsy then not anagram, if their lengths are not same then also not anagram
  if (!s || !t) return false;
  if (s.length !== t.length) return false;

  const map = new Map();

  // iterate through the first string and create character-count, key-value entries in map
  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  // iterate through the second string and delete character-count, key-value entries from map, if matched
  for (let char of t) {
    if (!map.has(char)) return false;
    if (map.get(char) === 1) {
      map.delete(char);
    } else {
      map.set(char, map.get(char) - 1);
    }
  }

  return map.size === 0;
};