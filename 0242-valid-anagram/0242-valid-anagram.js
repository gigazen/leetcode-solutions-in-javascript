/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let [countS, countT] = [{}, {}];

  // s and t are strings so iterable that's why for...of
  for (let char of s) {
    if (!countS[char]) {
      countS[char] = 1; 
    } else {
      countS[char]++;
    }
  }

  for (let char of t) {
    if (!countT[char]) {
      countT[char] = 1;
    } else {
      countT[char]++;
    }
  }

  // countS and countT are objects so not directly iterable that's why for...in
  for (let key in countS) {
    if (countS[key] !== countT[key]) return false;
  }

  return true;
};
