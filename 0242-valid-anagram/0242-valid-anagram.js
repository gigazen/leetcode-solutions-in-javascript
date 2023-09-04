/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (let char of t) {
    if (!map.has(char)) {
      return false;
    } else if (map.get(char) === 1) {
      map.delete(char);
    } else {
      map.set(char, map.get(char) - 1);
    }
  }

  if (map.size === 0) return true;
};