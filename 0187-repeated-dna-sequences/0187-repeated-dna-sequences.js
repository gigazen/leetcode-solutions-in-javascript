/**
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
  // if s.length < 10 there can't be a 10 character sequence in it
  if (s.length < 10) return [];
  const charCode = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const hashMap = new Map();
  let rollingHash = 0;

  // calculate the rolling hash for the first 9 characters
  for (let i = 0; i < 9; i++) {
    rollingHash = rollingHash * 6 + charCode[s[i]];
  }

  const result = [];

  for (let i = 9; i < s.length; i++) {
    // rolling hash for the 10 character window
    // s[i - 9 : i]
    rollingHash = rollingHash * 6 + charCode[s[i]];

    if (!hashMap.has(rollingHash)) {
      // if seeing hash the first time
      // add it to result the next time you see it
      hashMap.set(rollingHash, true);
    } else if (hashMap.get(rollingHash)) {
      // if seen hash once before add it to result
      result.push(s.slice(i - 9, i + 1));
      // and do not add it next time you see it
      hashMap.set(rollingHash, false);
    }

    // rolling hash for the 9 character window
    // s[i - 8 : i]
    rollingHash -= charCode[s[i - 9]] * Math.pow(6, 9);
  }

  return result;
}