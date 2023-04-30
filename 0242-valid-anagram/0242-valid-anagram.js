/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let [countS, countT] = [{}, {}];

  for (let i = 0; i < s.length; i++) {
    if (!countS[s[i]]) {
      countS[s[i]] = 1;
    } else {
      countS[s[i]] = countS[s[i]] + 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!countT[t[i]]) {
      countT[t[i]] = 1;
    } else {
      countT[t[i]] = countT[t[i]] + 1;
    }
  }

  for (let key in countS) {
    if (countS[key] !== countT[key]) return false;
  }

  return true;
};

