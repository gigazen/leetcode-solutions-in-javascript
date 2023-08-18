/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  const sChars = s.split('')

  for (const chr of t) {
    if (sChars[0] === chr) {
      sChars.shift();
    }
  }

  return sChars.length === 0
}