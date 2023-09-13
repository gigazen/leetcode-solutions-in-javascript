/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!mapS.has(s[i]) && !mapT.has(t[i])) {
      mapS.set(s[i], t[i]);
      mapT.set(t[i], s[i]);
    } else if (mapS.get(s[i]) !== t[i] || mapT.get(t[i] !== s[i])) return false;
  }

  return true;
};