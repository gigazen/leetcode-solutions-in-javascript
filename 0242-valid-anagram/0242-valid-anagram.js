/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const map = {}
  if (s.length !== t.length) {
    return false
  }
  for (c of s) {
    if (map[c]) {
      map[c]++
    } else {
      map[c] = 1
    }
  }
  for (c of t) {
    if (!map[c]) {
      return false
    }
    map[c]--
  }
  for (c of s) {
    if (map[c] !== 0) {
      return false
    }
  }
  return true
}
